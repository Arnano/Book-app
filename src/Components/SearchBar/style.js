import Styled from 'styled-components';
import { blue, darkBlue } from '../../Style/colors';

const StyledSearchBar = Styled.div `
  display: flex;
  flex-direction: row;
  border: 1px solid ${darkBlue};
  max-width: 960px;
  margin: 20px auto 20px 10px;
  border-radius: 4px;

  & img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }

  & input {
    flex-grow: 2;
    width: 70%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-left: 0;
    border-bottom: 0;
    border-top: 0;
    border-right: 1px solid ${darkBlue};
    margin-left: 10px;
  }

  & button {
    background: ${blue};
    color: white;
    width: 30%;
    border: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default StyledSearchBar;
