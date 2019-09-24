import NextApp from 'next/app';
import { GlobalStyleColors } from 'atoms/colors';
import * as React from 'react';
import { InjectTypekitFont, UseFontStyled } from 'atoms/fonts';

export default class App extends NextApp {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <main>
        <GlobalStyleColors />
        <InjectTypekitFont />
        <UseFontStyled>
          <Component {...pageProps} router={router} />
        </UseFontStyled>
      </main>
    );
  }
}
