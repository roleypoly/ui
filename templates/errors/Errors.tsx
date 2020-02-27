import { DotOverlay } from 'atoms/dot-overlay';
import { Hero } from 'atoms/hero';
import { AppShell } from 'organisms/app-shell';
import * as React from 'react';
import { ErrorMessage, getMessageFromCode } from './errorStrings';
import { ErrorBanner } from 'organisms/error-banner';

export type ErrorProps = {
    code: string | number;
    messageOverride?: ErrorMessage;
};

export const Error = (props: ErrorProps) => {
    const messageFromCode = getMessageFromCode(props.code);

    return (
        <AppShell user={null}>
            <DotOverlay />
            <Hero topSpacing={100}>
                <ErrorBanner message={messageFromCode} />
            </Hero>
        </AppShell>
    );
};
