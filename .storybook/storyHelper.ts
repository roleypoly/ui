import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withColors } from '../atoms/colors/withColors'

export const makeFactory = (title: string) => (
	moduleName: string,
	nodeModule: NodeModule
) => {
	const builtStory = storiesOf(`${title}|${moduleName}`, nodeModule)
	builtStory.addDecorator(withKnobs)
	builtStory.addDecorator(withA11y)
	builtStory.addDecorator(withColors)
	return builtStory
}
