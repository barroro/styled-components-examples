import styled from "styled-components";
import { darken } from "polished";

const Input = styled.input.attrs((props) => ({
  rounded: props.rounded || false,
  color: props.color || "primary",
}))`
  font-size: 1em;
  border: 2px solid
    ${(props) =>
      props.color === "primary"
        ? props.theme.palette.primary
        : props.theme.palette.secondary};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.palette.primary
      : props.theme.palette.secondary};
  border-radius: ${(props) => (props.rounded ? "24px" : "4px")};
  padding: ${(props) => (props.rounded ? "0.8rem 1rem" : "0.8rem")};
  animation: all 100ms ease-out;
  &:hover {
    border: 2px solid
      ${(props) =>
        props.color === "primary"
          ? darken(0.1, props.theme.palette.primary)
          : darken(0.1, props.theme.palette.secondary)};
  }
  &:focus {
    border: 2px solid
      ${(props) =>
        props.color === "primary"
          ? darken(0.1, props.theme.palette.primary)
          : darken(0.1, props.theme.palette.secondary)};
    outline: none;
  }
`;

export default Input;
