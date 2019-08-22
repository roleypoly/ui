import { atomStories } from '../atoms.story'
import { Avatar } from './Avatar'
import * as React from 'react'

const stories = atomStories('Avatar', module)

stories.add('With Image', () => (
	<Avatar src="https://i.imgur.com/epMSRQH.png" size={48} />
))

stories.add('With Text', () => <Avatar size={48}>nya!!</Avatar>)

stories.add('Empty', () => <Avatar size={48}></Avatar>)

stories.add('With Broken Image', () => (
	<Avatar src="data:" size={48}>
		nya
	</Avatar>
))
