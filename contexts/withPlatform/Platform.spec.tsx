process.env.PLATFORM_SVC_HOST = 'https://example.com';
jest.unmock('utils/withContext');

import * as React from 'react';
import { PlatformContext } from './Platform';
import { testHelpers } from 'utils/withContext';
import { shallow } from 'enzyme';

it('correctly is initialized with a usable RPC context', () => {
  const view = shallow(
    <testHelpers.ContextShim context={PlatformContext}>
      {data => {
        return data().serviceHost === 'https://example.com' ? <>true</> : <>false</>;
      }}
    </testHelpers.ContextShim>
  );

  expect(view.text()).toBe('true');
});
