import * as React from 'react'
import { shallow } from 'enzyme'
import Index from './index'

it('builds', () => {
	const view = shallow(<Index />)
	expect(view).toMatchSnapshot()
})
