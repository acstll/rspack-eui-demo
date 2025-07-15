import { createRoot } from 'react-dom/client';
import createCache from '@emotion/cache';
import { EuiProvider, euiStylisPrefixer } from '@elastic/eui';

import Demo from './demo';

const cache = createCache({
  key: 'localrspack',
  stylisPlugins: [euiStylisPrefixer],
  container: document.querySelector('meta[name="emotion-styles"]')!,
});
cache.compat = true;

const root = createRoot(document.getElementById('root')!);

root.render(
  <EuiProvider cache={cache}>
    <Demo />
  </EuiProvider>
);
