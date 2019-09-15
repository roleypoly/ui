import * as React from 'react'
import { atomStories } from 'atoms/atoms.story'
import { DotOverlay } from './DotOverlay'
import { themes } from '@storybook/theming'

const story = atomStories('Dot Overlay', module)

story.add('Dark', () => <DotOverlay />)
story.add('Light', () => <DotOverlay light />)
