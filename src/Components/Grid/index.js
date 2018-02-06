import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Col as FlexCol, Row as FlexRow } from 'react-styled-flexboxgrid';
import { switchProp, ifProp } from 'styled-tools';
import flexboxgrid from '../../Style/grid';
import { sm } from '../../Style/spacing';

const rowStyles = css`
  margin: ${switchProp('spacing', {
    sm: `0 -${sm / 2}px`
  })};
`;

const colStyles = css`
  padding: ${switchProp('spacing', {
    sm: `0 ${sm / 2}px`
  })};

  ${ifProp('flex', 'display: flex;')};
`;

const Row = styled(FlexRow).attrs({ theme: { flexboxgrid } })`
  ${rowStyles};
`;

const Col = styled(FlexCol).attrs({ theme: { flexboxgrid } })`
  ${colStyles};
`;

const RowList = styled(FlexRow.withComponent('ul')).attrs({ theme: { flexboxgrid } })`
  ${rowStyles};
`;

const ColListItem = styled(FlexCol.withComponent('li')).attrs({ theme: { flexboxgrid } })`
  ${colStyles};
  margin-bottom: ${sm}px;
`;

Row.propTypes = {
  spacing: PropTypes.oneOf(['sm'])
};

Col.propTypes = Row.propTypes;

export { Row, RowList, Col, ColListItem };
