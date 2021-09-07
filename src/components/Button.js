import styled, { css } from "styled-components";
import BaseButton from "./BaseButton";
import { darken, lighten } from "polished";

const secondaryStyles = (props) => css`
  background: ${props.theme.palette.secondary};
  color: white;
  &:hover {
    background: ${lighten(0.1, props.theme.palette.secondary)};
  }
  &:focus {
    background: ${lighten(0.1, props.theme.palette.secondary)};
  }
`;

const primaryStyles = (props) => css`
  background: ${props.theme.palette.primary};
  color: white;
  &:hover {
    background: ${darken(0.1, props.theme.palette.primary)};
  }
  &:focus {
    background: ${darken(0.1, props.theme.palette.primary)};
  }
`;

export const Button = styled(BaseButton).attrs((props) => ({
  color: props.color || "default",
  rounded: props.rounded || false,
  outlined: props.rounded || false,
}))`
  border-radius: ${(props) => (props.rounded ? "24px" : "4px")};
  ${(props) => props.color === "primary" && primaryStyles(props)}
  ${(props) => props.color === "secondary" && secondaryStyles(props)}
`;
