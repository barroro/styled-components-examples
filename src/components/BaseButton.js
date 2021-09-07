import styled from "styled-components";
import { lighten } from "polished";

const BaseButton = styled.button`
  background: transparent;
  border-radius: 3px;
  padding: 0.45em 1em;
  transition: all 100ms ease-in;
  font-size: 0.85rem;
  cursor: pointer;
  border: none;
  line-height: 30px;
  background: transparent;
  user-select: none;
  color: ${(props) => props.theme.palette.black};
  &:hover {
    background: ${(props) => lighten(0.7, props.theme.palette.black)};
  }
  &:focus {
    background: ${(props) => lighten(0.6, props.theme.palette.black)};
  }
`;

export default BaseButton;
