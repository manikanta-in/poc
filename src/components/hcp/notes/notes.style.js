import styled from 'styled-components';

export const NotesTableWrapper = styled.div`
  margin-left: 15px;
`;
export const TitleText = styled.span`
  position: relative;
  top: 11px;
  background: #fff;
  opacity: 10;
  z-index: 41;
  left: 14px;
  padding: 0 8px;
  width: 100px;
  display: flex;
  font-size: 1em;
  color: #707070;
  font-family: 'Open Sans';
  font-weight: 300;
`;

export const TextAreaInput = styled.textarea`
  width: 825px;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  color: #333333;
  border-radius: 7px;
  opacity: 1;
  font-size: 1.125em;
  font-weight: 500;
  font-family: 'Open Sans';
  padding: 20px 20px;
  resize: none;
`;

export const TextCharacters = styled.p`
  margin-top: 10px;
  text-align: left;
  font-size: 1.0625em;
  font-weight: 500;
  font: normal normal normal 14px/17px Museo Sans 500;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;

export const Tab = styled.div`
  padding: 0px 30px 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  button {
    background: none;
    border: none;
    border-bottom: 3px solid #d9ddde;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  button.active {
    border-bottom: 4px solid #008bbf;
  }

  button p {
    margin-bottom: 9px;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 900;
    letter-spacing: 0px;
    color: #333333;
    font-family: Open Sans;
    opacity: 0.6;
  }

  button.active p {
    opacity: 1;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
  left: 100px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
