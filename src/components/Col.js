import styled, { css } from "styled-components";
import FlexBase from "./FlexBase";

const Col = styled(FlexBase).attrs((props) => ({
  span: props.span || 0,
}))`
  flex-direction: column;
  flex: ${(props) => `1 1 ${props.span > 0 ? 100 : 0}%`};
  ${(props) =>
    props.span > 1 &&
    css`
      max-width: ${(props) => `${(props.span * 100) / 24}%`};
    `}
`;

export default Col;
