import styled from 'styled-components';
import { COLORS } from '../../../resources/constants';

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: ${COLORS.TransparentBackground};
  top: 0;
  left: 0;
`;

export default Background;
