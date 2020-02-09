import styled from 'styled-components';
import { palette } from 'atoms/colors';

export const Base = styled.div`
    background-color: ${palette.discord100};
    border: solid 2px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    padding: 5px;
    user-select: none;
`;

export const Timestamp = styled.span`
    padding: 0 5px;
    font-size: 0.7em;
    opacity: 0.3;
`;

export const TextParts = styled.span`
    padding: 0 5px;
`;

export const Username = styled(TextParts)`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;
