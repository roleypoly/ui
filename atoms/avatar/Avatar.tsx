import styled from 'styled-components';
import React from 'react';
import { text400 } from 'atoms/typography';

export type AvatarProps = {
    src?: string;
    children?: string;
    size?: number;
};

type ContainerProps = Pick<AvatarProps, 'size'>;
const Container = styled.div<ContainerProps>`
  /* ${text400} */
  border-radius: 100%;
  width: ${(props: ContainerProps) => props.size || 48}px;
  height: ${(props: ContainerProps) => props.size || 48}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--grey100);
  position: relative;
  background-color: var(--grey500);
  font-weight: bold;
  text-align: center;
  line-height: 1;
  overflow: hidden;
  font-size: ${(props: ContainerProps) => props.size};
`;

type ImageProps = Pick<AvatarProps, 'src'>;
const Image = styled.div<ImageProps>`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    border-radius: 100%;
`;

/** Chuldren is recommended to not be larger than 2 uppercase letters. */
export const Avatar = (props: AvatarProps) => (
    <Container size={props.size}>
        {props.src && <Image style={{ backgroundImage: `url(${props.src})` }} />}
        <div>
            {props.children || (
                /* needs specifically &nbsp; to prevent layout issues. */
                <>&nbsp;</>
            )}
        </div>
    </Container>
);
