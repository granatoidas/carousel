import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grnt-carousel',
  styleUrl: 'grnt-carousel.css',
  shadow: true,
})
export class GrntCarousel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
