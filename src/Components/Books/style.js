import Styled from 'styled-components';
import { grey } from '../../Style/colors';

const StyledBooks = Styled.li `
  text-decoration: none;
  padding: 0;
  margin: 30px auto;
  border-bottom: 1px solid ${grey};

  & a {
    height: 280px;
    margin: auto 10px;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

export default StyledBooks;
