import { GlobalStyleColors } from 'atoms/colors';
import { InjectTypekitFont, UseFontStyled } from 'atoms/fonts';
import NextApp from 'next/app';
import Head from 'next/head';
import * as React from 'react';

const Wrapper = (props: { children: React.ReactNode }) => (
    <main>
        <GlobalStyleColors />
        <InjectTypekitFont />
        <UseFontStyled>{props.children}</UseFontStyled>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
        </Head>
    </main>
);

export default class App extends NextApp {
    render() {
        const { Component, pageProps, router } = this.props;

        return (
            <Wrapper>
                <Component {...pageProps} router={router} />
            </Wrapper>
        );
    }
}
