import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.tsx
const reqs = [
  require.context('../atoms', true, /\.story\.tsx$/),
  require.context('../molecules', true, /\.story\.tsx$/),
  require.context('../organisms', true, /\.story\.tsx$/),
  require.context('../templates', true, /\.story\.tsx$/),
  require.context('../pages', true, /\.story\.tsx$/),
]

function loadStories() {
  for (let req of reqs) {
    req.keys().forEach(req)
  }
}

configure(loadStories, module)
