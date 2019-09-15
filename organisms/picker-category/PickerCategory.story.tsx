import * as React from 'react'
import { organismStories } from 'organisms/organisms.story'
import { PickerCategory, CategoryProps } from './PickerCategory'
import { action } from '@storybook/addon-actions'
import { text, optionsKnob } from '@storybook/addon-knobs'
import { roleCategory, roleWikiData } from 'hack/fixtures/storyData'

const stories = organismStories('Picker Category', module)

const data: (mode?: 'single') => CategoryProps = (mode?: 'single') => ({
  title: text('Title', 'Pronouns'),
  type: 'multi',
  roles: roleCategory,
  wikiMode: false,
  onChange: () => action('onChange'),
  selectedRoles: optionsKnob<string[]>(
    'Selected Roles',
    roleCategory.reduce((acc, x) => ({ ...acc, [x.name]: x.id }), {}),
    [roleCategory[0].id],
    { display: mode === 'single' ? 'select' : 'multi-select' }
  ),
})

stories.add('Multi', () => {
  const d = data()
  return <PickerCategory {...d} type="multi" />
})
stories.add('Single', () => {
  const d = data('single')
  return <PickerCategory {...d} type="single" />
})
stories.add('Wiki', () => {
  const d = data()
  return <PickerCategory {...d} wikiMode roleWikiData={roleWikiData} />
})
