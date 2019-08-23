import { storiesOf, Story } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withColors } from '../atoms/colors/withColors'

interface Options {
  withInfo: boolean
  withA11y: boolean
  beforeDecorators: OptionFunc
  afterDecorators: OptionFunc
}

type OptionFunc = (options: Partial<Options>, story: Story) => void

export const makeFactory = (title: string, categoryOpts: Partial<Options> = {}) => (
  moduleName: string,
  nodeModule: NodeModule,
  storyOpts: Partial<Options> = {}
) => {
  const opts = {
    withA11y: false,
    ...categoryOpts,
    ...storyOpts,
  }

  const builtStory = storiesOf(`${title}|${moduleName}`, nodeModule)

  opts.beforeDecorators && opts.beforeDecorators(opts, builtStory)

  opts.withInfo === true && builtStory.addDecorator(withInfo)

  builtStory.addDecorator(withA11y)
  builtStory.addDecorator(withColors)
  builtStory.addDecorator(withKnobs)

  opts.afterDecorators && opts.afterDecorators(opts, builtStory)
  return builtStory
}
