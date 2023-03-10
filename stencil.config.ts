import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'carousel',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [{ src: 'main.css' }, { src: 'assets/*' }],
      serviceWorker: null, // disable service workers
    },
  ],
}
