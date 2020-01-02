import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

export const InjectTypekitFont = () => {
  React.useEffect(() => {
    (window as any).Typekit.load();
  }, []);
  return (
    <Head>
      <link
        key="typekit-css-preload"
        rel="preload"
        href="https://use.typekit.net/bck0pci.js"
        as="script"
      />
      <script key="typekit-js" src="https://use.typekit.net/bck0pci.js" />
    </Head>
  );
};

export const UseFontStyled = styled.div`
  font-family: 'source-han-sans-japanese', 'Source Sans Pro', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;
  font-size-adjust: 0.75;
`;
