import styled from 'styled-components';
import { COLORS } from '../resources/constants';

const Button = styled.button`
  background: ${COLORS.Primary};
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  height: 38px;
  padding: 8px;
`;

export default Button;
