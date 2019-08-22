import { makeFactory } from '../.storybook/storyHelper'
export const templateStories = makeFactory('Templates')
import * as React from 'react'

templateStories('Placeholder', module).add('Placeholder', () => <div>nya!</div>)
