import { Element, Component, Host, h, State, Prop } from '@stencil/core'
import { GrntCarouselItem } from '../grnt-carousel-item/grnt-carousel-item'

@Component({
  tag: 'grnt-carousel',
  styleUrl: 'grnt-carousel.css',
  shadow: true,
})
export class GrntCarousel {
  @Element() host: HTMLElement

  @Prop({ reflect: true, mutable: true }) currentItemIndex = 0

  @State() children: GrntCarouselItem[] = []

  componentDidLoad() {
    const slotted = this.host.shadowRoot.querySelector('slot') as HTMLSlotElement
    this.children = slotted
      .assignedElements()
      .filter(element => element.tagName.toUpperCase() === 'GRNT-CAROUSEL-ITEM')
      .map(element => element as any as GrntCarouselItem)
  }

  componentWillRender() {
    for (let i = 0; i < this.children.length; i++) this.children[i].setActive(this.currentItemIndex === i)
  }

  handleSelectItemClick(i: number) {
    this.currentItemIndex = i
  }

  render() {
    return (
      <Host>
        <div class="main-container">
          <slot />
          <div class="button-container">
            {this.children.map((_, i) => (
              <button onClick={() => this.handleSelectItemClick(i)} class={`select-item-button ${i === this.currentItemIndex && 'select-item-button-active'}`} />
            ))}
          </div>
        </div>
      </Host>
    )
  }
}
