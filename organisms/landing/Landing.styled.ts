import { onTablet } from 'atoms/breakpoints';
import { text400 } from 'atoms/typography';
import styled, { css } from 'styled-components';

export const HalfsiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const HalfsiesItem = styled.div`
    flex: 1 1 100%;
    margin-top: 2em;
    ${onTablet(css`
        flex: 1 2 50%;
    `)}
`;

export const HeroText = styled.div`
    ${onTablet(css`
        text-align: center;
    `)}
`;

export const DemoSubtitle = styled.p`
    ${text400}
    text-align: center;
    margin-top: 0.4em;
`;

export const HeroCentering = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 200px);
    align-items: center;
    justify-content: center;
    margin-bottom: 2em;
`;
