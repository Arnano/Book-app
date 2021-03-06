import Styled from 'styled-components';

const StyledImage = Styled.img `
  width: 100%;
  height: 300px;
`;

const StyledImageLink = Styled.a `
  text-decoration: none;
  underline: none;
  cursor: pointer;

  & img:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  &.wrap {
    float: right;
    height: 200px;

    & img {
      height: 200px;
    }
  }
`;

export default StyledImage;
export { StyledImageLink };
