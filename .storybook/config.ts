import { addParameters, configure } from '@storybook/react';
// import { themes } from '@storybook/theming'
import { roleypolyTheme } from './roleypoly-theme';
import { requireContext } from './requireContext';

// Option defaults.
addParameters({
    options: {
        theme: roleypolyTheme,
        panelPosition: 'right',
    },
});

if (process.env.NODE_ENV === 'test') {
    if (!require.context) {
        Object.defineProperty(require, 'context', {
            get: () => requireContext,
        });
    }
}

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
