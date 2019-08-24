import * as React from 'react'
import { atomStories } from '../atoms.story'
import { DotOverlay } from './DotOverlay'

const story = atomStories('Dot Overlay', module)

story.add('Dot Overlay', () => <DotOverlay />)
