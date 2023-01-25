import { Component, Host, h, Method, State } from '@stencil/core'

@Component({
  tag: 'grnt-carousel-item',
  styleUrl: 'grnt-carousel-item.css',
  shadow: true,
})
export class GrntCarouselItem {
  @State()
  private active = false

  @Method()
  async setActive(active: boolean) {
    this.active = active
  }

  render() {
    var hostClass = this.active ? 'active' : 'not-active'

    return (
      <Host class={hostClass}>
        <slot></slot>
      </Host>
    )
  }
}
