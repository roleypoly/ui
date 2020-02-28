import { GlobalStyleColors } from 'atoms/colors';
import { InjectTypekitFont, UseFontStyled } from 'atoms/fonts';
import NextApp from 'next/app';
import * as React from 'react';
import { UserContextProvider } from 'contexts/user';

const contextsToInject = [UserContextProvider];

const AppContexts = (props: { children: React.ReactNode }) => {
    return React.useMemo(
        () =>
            contextsToInject.reduce(
                (acc, CurrentComponent) => <CurrentComponent>{acc}</CurrentComponent>,
                <>{props.children}</>
            ),
        [contextsToInject]
    );
};

const Wrapper = (props: { children: React.ReactNode }) => (
    <main>
        <GlobalStyleColors />
        <InjectTypekitFont />
        <UseFontStyled>{props.children}</UseFontStyled>
    </main>
);

export default class App extends NextApp {
    render() {
        const { Component, pageProps, router } = this.props;
        return (
            <AppContexts>
                <Wrapper>
                    <Component {...pageProps} router={router} />
                </Wrapper>
            </AppContexts>
        );
    }
}
