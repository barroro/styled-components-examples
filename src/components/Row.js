import styled from "styled-components";
import FlexBase from "./FlexBase";

const MARGIN_UNIT = 4;

const Row = styled(FlexBase).attrs((props) => ({
  align: "center" | "start" | "end",
  justify: props.justify || "flex-start",
  gutter: props.gutter || 0,
}))`
  flex-direction: row;
  justify-content: ${(props) => {
    switch (props.justify) {
      case "start":
        return "flex-start";
      case "center":
        return "center";
      case "space-between":
        return "space-between";
      case "end":
        return "flex-end";
      default:
        break;
    }
  }};
  align-items: ${(props) => {
    switch (props.justify) {
      case "start":
        return "flex-start";
      case "center":
        return "center";
      case "end":
        return "flex-end";
      default:
        break;
    }
  }};
  margin-right: ${(props) => `-${props.gutter * MARGIN_UNIT}px`};
  margin-left: ${(props) => `-${props.gutter * MARGIN_UNIT}px`};
  & > * {
    padding-right: ${(props) => `${props.gutter * MARGIN_UNIT}px`};
    padding-left: ${(props) => `${props.gutter * MARGIN_UNIT}px`};
  }
`;

export default Row;
