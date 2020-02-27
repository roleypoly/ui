jest.unmock('utils/withContext');
jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        platformUrl: 'https://example.com',
    },
}));

import * as React from 'react';
import { AuthClientContext } from './AuthClient';
import { testHelpers } from 'utils/withContext';
import { shallow } from 'enzyme';

it('correctly is initialized with a usable RPC context', () => {
    const view = shallow(
        <testHelpers.ContextShim context={AuthClientContext}>
            {data => {
                return data().serviceHost === 'https://example.com' ? (
                    <>true</>
                ) : (
                    <>false</>
                );
            }}
        </testHelpers.ContextShim>
    );

    expect(view.text()).toBe('true');
});
