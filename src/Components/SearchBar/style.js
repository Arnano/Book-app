import Styled from 'styled-components';
import { blue, darkGrey } from '../../Style/colors';

const StyledSearchBar = Styled.div `
  display: flex;
  flex-direction: row;
  border: 1px solid ${darkGrey};
  max-width: 500px;
  margin: 20px auto;
  border-radius: 4px;

  & input {
    flex-grow: 2;
    width: 70%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-left: 0;
    border-bottom: 0;
    border-top: 0;
    border-right: 1px solid ${darkGrey};
  }

  & button {
    background: ${blue};
    color: white;
    width: 30%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default StyledSearchBar;