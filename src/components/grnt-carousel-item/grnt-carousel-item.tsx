import { Component, Host, h, Method, State } from '@stencil/core'

@Component({
  tag: 'grnt-carousel-item',
  styleUrl: 'grnt-carousel-item.css',
  shadow: true,
})
export class GrntCarouselItem {
  @State()
  private active = false

  @State()
  private moveIntoViewFromSide?: 'left' | 'right'

  @State()
  private moveOutOfViewToSide?: 'left' | 'right'

  @Method()
  async setActive(active: boolean) {
    this.active = active
    this.moveIntoViewFromSide = undefined
    this.moveOutOfViewToSide = undefined
  }

  @Method()
  async moveIntoView(originSide: 'left' | 'right') {
    this.moveIntoViewFromSide = originSide
  }

  @Method()
  async moveOutOfView(destinationSide: 'left' | 'right') {
    this.moveOutOfViewToSide = destinationSide
  }

  render() {
    return (
      <Host
        class={{
          'active': this.active,
          'not-active': !this.active,
          'move-into-view-from-right': this.moveIntoViewFromSide === 'right',
          'move-into-view-from-left': this.moveIntoViewFromSide === 'left',
          'move-out-of-view-right': this.moveOutOfViewToSide === 'right',
          'move-out-of-view-left': this.moveOutOfViewToSide === 'left'
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
