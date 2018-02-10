import Styled from 'styled-components';

const StyledBooks = Styled.li `
  text-decoration: none;
  padding: 0;
  margin: 30px auto;

  & a {
    height: 280px;
    margin: auto 10px;
  }
`;

export default StyledBooks;
