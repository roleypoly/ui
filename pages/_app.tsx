import { GlobalStyleColors } from 'atoms/colors';
import { InjectTypekitFont, UseFontStyled } from 'atoms/fonts';
import NextApp from 'next/app';
import * as React from 'react';

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
