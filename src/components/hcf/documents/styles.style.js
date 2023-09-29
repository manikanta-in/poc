import styled from "styled-components";
import { Col, TableWrapper } from "../../commonStyles/commonstyle.style";

export const DocumentsTableWrapper = styled(TableWrapper)`
  margin: 0px 0px 0px 0px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const InputWrapper = styled(Col)`
  padding: 0 0 5px 20px;
  justify-content: space-between;
`;

export const TextAreaInput = styled.div`
  height: 150px;
  background: #ffffff 0% 0% no-repeat padding-box;
  color: #333333;
  border-radius: 7px;
  opacity: 0.5;
  border: 2px solid #333333;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 20px 20px;
  pointer: none;
  resize: none;
`;

export const ClickHere = styled.p`
  margin-top: 11px;
  margin-left: 13px;
  text-align: center;
  font: normal normal normal 18px/22px Museo Sans 500;
  letter-spacing: 0px;
  color: #707070;
  opacity: 0.5;
`;

export const Drag = styled.p`
  margin-top: -22px;
  margin-left: 16px;
  text-align: center;
  font: normal normal normal 18px/22px Museo Sans 500;
  letter-spacing: 0px;
  color: #707070;
  opacity: 0.5;
`;
