import Styled from 'styled-components';
import { grey } from '../../Style/colors';
import { shadow } from '../../Constants/style';

const StyledBooksTable = Styled.ul `
  max-width: 960px;
  margin: 10px auto 10px 10px;
  position: relative;
  border-radius: 8px;
  background-clip: padding-box;
  border: 1px solid ${grey};
  box-shadow: ${shadow};
  transition: box-shadow 0.3s ease;
  padding: 0;

  a > &:hover {
    cursor: pointer;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  }
`;

export default StyledBooksTable;