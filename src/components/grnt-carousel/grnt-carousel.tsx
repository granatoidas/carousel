import { Element, Component, Host, h, State, Prop, Event, EventEmitter } from '@stencil/core'
import { GrntCarouselItem } from '../grnt-carousel-item/grnt-carousel-item'

const transitionDurationMs = 700

@Component({
  tag: 'grnt-carousel',
  styleUrl: 'grnt-carousel.css',
  shadow: true,
})
export class GrntCarousel {
  @Element() host: HTMLElement

  @Prop() autoTransitionTimeMs?: number

  @State() currentItemIndex = 0

  @State() children: GrntCarouselItem[] = []

  @Event() grntCarouselItemChanged: EventEmitter<number>

  inTranstition = false

  autoTransitionTimeout: ReturnType<typeof setTimeout> = null

  componentWillLoad() {
    this.scheduleAutoTransition()
  }

  componentDidLoad() {
    // TODO: find a better way to do type assertion than converting to 'any' beforehand
    const slotted = this.host.shadowRoot.querySelector('slot') as HTMLSlotElement
    this.children = slotted
      .assignedElements()
      .filter(element => element.tagName.toUpperCase() === 'GRNT-CAROUSEL-ITEM')
      .map(element => element as any as GrntCarouselItem)

    this.children.forEach(child => (child as any as HTMLElement).style.setProperty('--transition-duration', `${transitionDurationMs}ms`))

    this.children[0].setActive(true)
  }

  scheduleAutoTransition() {
    if (this.autoTransitionTimeMs) {
      this.autoTransitionTimeout = setTimeout(() => {
        let nextIndex = this.currentItemIndex + 1
        if (nextIndex === this.children.length) nextIndex = 0
        this.handleSelectItem(nextIndex)
        this.scheduleAutoTransition()
      }, this.autoTransitionTimeMs)
    }
  }

  handleSelectItem(nextItemIndex: number) {
    if (this.inTranstition) return
    this.inTranstition = true
    clearTimeout(this.autoTransitionTimeout)

    const newItemIsBigger = nextItemIndex > this.currentItemIndex

    this.children[nextItemIndex].moveIntoView(newItemIsBigger ? 'right' : 'left')
    this.children[this.currentItemIndex].moveOutOfView(newItemIsBigger ? 'left' : 'right')

    const previousItemIndex = this.currentItemIndex
    this.currentItemIndex = nextItemIndex
    setTimeout(() => {
      this.children[nextItemIndex].setActive(true)
      this.children[previousItemIndex].setActive(false)
      this.inTranstition = false
      this.scheduleAutoTransition()
      this.grntCarouselItemChanged.emit(nextItemIndex)
    }, transitionDurationMs)
  }

  render() {
    return (
      <Host>
        <div class="main-container">
          <slot />
          <div class="button-container">
            {this.children.map((_, i) => (
              <button
                onClick={() => this.handleSelectItem(i)}
                class={`select-item-button ${i === this.currentItemIndex && 'select-item-button-active'}`}
                aria-label={`select carousel item number ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Host>
    )
  }
}
