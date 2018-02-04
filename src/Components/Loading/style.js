import Styled, { keyframes } from 'styled-components';
import { grey } from '../../Style/colors';
import { shadow, spinning } from '../../Constants/style';

const StyledLoading = Styled.div `
  display: flex;
  flex-direction: row;
  width: 960px;
  height: 100px;
  margin: 0 auto;
  border: 1px solid ${grey};
  box-shadow: ${shadow};
  transition: box-shadow 0.3s ease;
  border-radius: 8px;

  & img {
    animation: ${spinning} infinite 1s linear;
    height: 80px;
    width: 20%;
  }

  & span {
    width: 80%;
    border-left: 1px solid ${grey};
  }
`;

export default StyledLoading;
