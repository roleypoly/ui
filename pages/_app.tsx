import { GlobalStyleColors } from 'atoms/colors';
import { InjectTypekitFont, UseFontStyled } from 'atoms/fonts';
import NextApp from 'next/app';
import * as React from 'react';

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
      <Wrapper>
        <Component {...pageProps} router={router} />
      </Wrapper>
    );
  }
}
