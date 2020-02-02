import styled from "styled-components";
import TextareaAutoSize from "react-textarea-autosize";
import { CardContainer } from "./brello_card_style";

export const OpenFormButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  width: 250px;
  margin-left: 8px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: ${props => (props.list ? 1 : 0.5)};
  color: ${props => (props.list ? "white" : "inherit")};
  background-color: ${props => (props.list ? "rgba(0,0,0,.15)" : "inherit")};
`;

export const TextAreaAutoSize = styled(TextareaAutoSize)`
  resize: none;
  width: 100%;
  outline: none;
  border: none;
  overflow: hidden;
`;

export const CardContainerInput = styled(CardContainer)`
  min-height: 85px;
  min-width: 272px;
  padding: 6px 8px 2px;
`;
