import { Element, Component, Host, h, State, Prop } from '@stencil/core'
import { GrntCarouselItem } from '../grnt-carousel-item/grnt-carousel-item'

@Component({
  tag: 'grnt-carousel',
  styleUrl: 'grnt-carousel.css',
  shadow: true,
})
export class GrntCarousel {
  @Element() host: HTMLElement

  @Prop({ reflect: true }) currentItemIndex = 0

  @State() children: GrntCarouselItem[] = []

  componentWillLoad() {
    const slotted = this.host.shadowRoot.querySelector('slot') as HTMLSlotElement
    this.children = slotted
      .assignedElements()
      .filter(element => element.tagName.toUpperCase() === 'GRNT-CAROUSEL-ITEM')
      .map(element => element as any as GrntCarouselItem)
  }

  componentWillRender() {
  }

  render() {
    return (
      <Host>
        <div class="main-container">
          <slot></slot>
          <div class="button-container">
            {this.children.map(_ => {
              
            })}
          </div>
        </div>
      </Host>
    )
  }
}
