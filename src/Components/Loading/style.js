import Styled from 'styled-components';
import { grey } from '../../Style/colors';
import { shadow, spinning } from '../../Helpers/style';

const StyledLoading = Styled.div `
  display: flex;
  flex-direction: row;
  width: 960px;
  height: 100px;
  margin: 10px auto 10px 10px;
  border: 1px solid ${grey};
  box-shadow: ${shadow};
  transition: box-shadow 0.3s ease;
  border-radius: 8px;
  position: relative;

  & img {
    animation: ${spinning} infinite 1s linear;
    height: 80px;
    width: 20%;
  }

  & h4 {
    width: 80%;
    border-left: 1px solid ${grey};
    margin: 0 auto;
  }
`;

export default StyledLoading;
