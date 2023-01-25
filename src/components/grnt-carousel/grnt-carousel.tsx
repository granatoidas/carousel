import { Element, Component, Host, h, State, Prop } from '@stencil/core'
import { GrntCarouselItem } from '../grnt-carousel-item/grnt-carousel-item'

@Component({
  tag: 'grnt-carousel',
  styleUrl: 'grnt-carousel.css',
  shadow: true,
})
export class GrntCarousel {
  @Element() host: HTMLElement

  @State() currentItemIndex = 0

  inTranstition = false

  @State() children: GrntCarouselItem[] = []

  componentDidLoad() {
    const slotted = this.host.shadowRoot.querySelector('slot') as HTMLSlotElement
    this.children = slotted
      .assignedElements()
      .filter(element => element.tagName.toUpperCase() === 'GRNT-CAROUSEL-ITEM')
      .map(element => element as any as GrntCarouselItem)
    this.children[0].setActive(true)
  }

  handleSelectItem(nextItemIndex: number) {
    if (this.inTranstition) return
    this.inTranstition = true

    const newItemIsBigger = nextItemIndex > this.currentItemIndex

    this.children[nextItemIndex].moveIntoView(newItemIsBigger ? 'right' : 'left')
    this.children[this.currentItemIndex].moveOutOfView(newItemIsBigger ? 'left' : 'right')

    const previousItemIndex = this.currentItemIndex
    this.currentItemIndex = nextItemIndex
    setTimeout(() => {
      this.children[nextItemIndex].setActive(true)
      this.children[previousItemIndex].setActive(false)
      this.inTranstition = false
    }, 700)
  }

  render() {
    return (
      <Host>
        <div class="main-container">
          <slot />
          <div class="button-container">
            {this.children.map((_, i) => (
              <button onClick={() => this.handleSelectItem(i)} class={`select-item-button ${i === this.currentItemIndex && 'select-item-button-active'}`} />
            ))}
          </div>
        </div>
      </Host>
    )
  }
}
