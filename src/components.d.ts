/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GrntCarousel {
    }
    interface GrntCarouselItem {
    }
}
declare global {
    interface HTMLGrntCarouselElement extends Components.GrntCarousel, HTMLStencilElement {
    }
    var HTMLGrntCarouselElement: {
        prototype: HTMLGrntCarouselElement;
        new (): HTMLGrntCarouselElement;
    };
    interface HTMLGrntCarouselItemElement extends Components.GrntCarouselItem, HTMLStencilElement {
    }
    var HTMLGrntCarouselItemElement: {
        prototype: HTMLGrntCarouselItemElement;
        new (): HTMLGrntCarouselItemElement;
    };
    interface HTMLElementTagNameMap {
        "grnt-carousel": HTMLGrntCarouselElement;
        "grnt-carousel-item": HTMLGrntCarouselItemElement;
    }
}
declare namespace LocalJSX {
    interface GrntCarousel {
    }
    interface GrntCarouselItem {
    }
    interface IntrinsicElements {
        "grnt-carousel": GrntCarousel;
        "grnt-carousel-item": GrntCarouselItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "grnt-carousel": LocalJSX.GrntCarousel & JSXBase.HTMLAttributes<HTMLGrntCarouselElement>;
            "grnt-carousel-item": LocalJSX.GrntCarouselItem & JSXBase.HTMLAttributes<HTMLGrntCarouselItemElement>;
        }
    }
}
