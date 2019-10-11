import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

export const InjectTypekitFont = () => {
  return (
    <Head>
      <link
        key="typekit-css-preload"
        rel="preload"
        href="https://use.typekit.net/bck0pci.css"
        as="style"
      />
      <link
        key="typekit-css"
        rel="stylesheet"
        href="https://use.typekit.net/bck0pci.css"
      />
    </Head>
  );
};

export const UseFontStyled = styled.div`
  font-family: 'source-han-sans-japanese', 'Source Sans Pro', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;
`;
