import { makeFactory } from '../.storybook/storyHelper'
export const moleculeStories = makeFactory('Molecules')
import * as React from 'react'

moleculeStories('Placeholder', module).add('Placeholder', () => <div>nya!</div>)
