import { DotOverlay } from 'atoms/dot-overlay';
import { Hero } from 'atoms/hero';
import { AppShell } from 'organisms/app-shell';
import * as React from 'react';
import { ErrorMessage, getMessageFromCode } from './errorStrings';
import {
    ErrorWrapper,
    ErrorDivider,
    ErrorSideCode,
    ErrorText,
    ErrorTextLower,
} from './Errors.styled';

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
                <ErrorWrapper>
                    <ErrorSideCode>
                        {messageFromCode.friendlyCode || props.code}
                    </ErrorSideCode>
                    <ErrorDivider />
                    <div>
                        <ErrorText>
                            {props.messageOverride?.english || messageFromCode.english}
                        </ErrorText>
                        <ErrorTextLower>
                            {props.messageOverride?.japanese || messageFromCode.japanese}
                        </ErrorTextLower>
                    </div>
                </ErrorWrapper>
            </Hero>
        </AppShell>
    );
};
