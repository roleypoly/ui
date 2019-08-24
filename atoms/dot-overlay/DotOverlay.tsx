import styled from 'styled-components'

export const DotOverlay = styled.div`
  opacity: 0.6;
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
  background-image: radial-gradient(
    circle,
    #332d2d,
    #332d2d 1px,
    transparent 1px,
    transparent
  );
  background-size: 27px 27px;
`
