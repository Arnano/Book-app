import Styled from 'styled-components';
import { grey } from '../../Style/colors';

const StyledBooks = Styled.li `
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 30px auto;
  max-height: 280px;
  overflow-y: auto;
  border-bottom: 1px solid ${grey};

  & a {
    flex-grow: 2;
    width: 20%;
    height: 280px;
    margin: auto 10px;
  }

  & div {
    width: 80%;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

export default StyledBooks;
