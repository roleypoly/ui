import styled, { createGlobalStyle } from 'styled-components';

export const Content = styled.div<{ small?: boolean }>`
    margin: 0 auto;
    margin-top: 50px;
    width: ${props => (props.small ? '960px' : '1024px')};
    max-width: 98vw;
`;

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
`;
