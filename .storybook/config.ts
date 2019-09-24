import { addParameters, configure } from '@storybook/react';
// import { themes } from '@storybook/theming'
import { roleypolyTheme } from './roleypoly-theme';

// Option defaults.
addParameters({
  options: {
    theme: roleypolyTheme,
    panelPosition: 'right',
  },
});

// automatically import all files ending in *.stories.tsx
const reqs = [
  require.context('../atoms', true, /\.story\.tsx$/),
  require.context('../molecules', true, /\.story\.tsx$/),
  require.context('../organisms', true, /\.story\.tsx$/),
  require.context('../templates', true, /\.story\.tsx$/),
  require.context('../pages', true, /\.story\.tsx$/),
];

function loadStories() {
  for (let req of reqs) {
    req.keys().forEach(req);
  }
}

configure(loadStories, module);
