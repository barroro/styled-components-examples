import styled from "styled-components";
import { lighten } from "polished";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => lighten(0.6, props.theme.palette.black)};
  padding: 0.85rem;
  border-radius: 6px;
`;

export default Card;
