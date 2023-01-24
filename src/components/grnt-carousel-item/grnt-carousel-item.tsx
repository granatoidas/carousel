import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grnt-carousel-item',
  styleUrl: 'grnt-carousel-item.css',
  shadow: true,
})
export class GrntCarouselItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
