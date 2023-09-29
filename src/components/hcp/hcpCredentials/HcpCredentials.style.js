import styled from 'styled-components';
import { TableHead, TableRows } from '../../commonStyles/commonstyle.style';

export const Tabs = styled.div`
  display: flex;
  height: 49px;
  width: 100%;
  align-items: center;
  background: #f4f6f4;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;

export const Text = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  font-size: 1.125rem;
  font-family: Segoe UI;
`;
export const DateAndTime = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  font-size: 1.25rem;
  font-family: Segoe UI;
  font-weight: 600;
`;
export const TextUnderLine = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #003863;
  opacity: 1;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const TextUnderLineHeader = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #003863;
  opacity: 1;
  font-size: 1.188rem;
  font-weight: 700;
`;

export const TextUnderLineSubHeaders = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #003863;
  opacity: 1;
  font-size: 1.188rem;
  font-style: italic;
  font-weight: 700;
`;
export const InfoText = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  font-size: 1.125rem;
  font-family: Segoe UI;
  font-weight: 600;
  .line {
    width: 50px;
    height: 1px;
    border: 2px solid #008bbf;
    opacity: 0.5;
  }
`;
export const InfoWrapper = styled.div`
  margin-top: 30px;
  margin-left: 12px;
`;
export const BackButton = styled.button`
  cursor: pointer;
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.20000000298023224px solid #707070;
  border-radius: 7px;
  opacity: 1;
  .back-text {
    font-weight: 400;
    padding: 6px 8px 6px 0px;
    font-family: MuseoSans, Segoe UI;
  }
`;
export const Detail = styled.div`
  margin-top: 0px;
  .header {
    margin-top: -29px;
    display: flex;
    justify-content: space-between;
    padding: 0px 1px;
    .label {
      font-size: 0.875rem;
      font-weight: 300;
      letter-spacing: 0px;
      color: #474b55;
      opacity: 0.6;
    }
    .value {
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0px;
      color: #474b55;
    }
  }
  select {
    width: 270px;
    height: 53px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #333333;
    border-radius: 7px;
    font-size: 1.25rem;
    font-weight: 600;
    color: #333333;
  }
  .title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0px;
    color: #003863;
  }
  .info {
    margin: 0;
    background: #f4f6f4;
    border: 1px solid #f4f6f4;
    border-radius: 10px;
    height: 100%;

    .line {
      width: 50px;
      height: 0px;
      border: 2px solid #008bbf;
      opacity: 0.5;
      margin-right: 38px;
      margin-top: 2px;
    }
    .label {
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 0px;
      color: #707070;
      opacity: 0.6;
      margin-bottom: 4px;
    }
    .value {
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0px;
      color: #333333;
    }

    .tab {
      padding: 19px 30px 20px 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .tab button {
      background: none;
      border: none;
      border-bottom: 3px solid #d9ddde;
      height: 40px;
      width: 100%;
      cursor: pointer;
    }

    .tab button.active {
      border-bottom: 4px solid #008bbf;
    }
    .tab button p {
      margin-bottom: 9px;
      text-align: center;
      font-size: 1.125rem;
      letter-spacing: 0px;
      color: #333333;
      font-weight: 700;
      opacity: 0.6;
    }

    .tab button.active p {
      opacity: 1;
    }
  }
`;

export const HealthAfflicationTableHead = styled(TableHead)``;

export const HealthAfflicationTableHeader = styled.p`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  flex: 1;
  letter-spacing: 0px;
  color: #474b55;
  opacity: 0.6;
  font-size: 0.875rem;
  font-weight: 300;
  align-items: center;
`;

export const ClaimLink = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #008bbf;
  border: none;
  cursor: pointer;
  padding-top: 8px;
`;

export const HealthAfflicationTableRows = styled(TableRows)`
  background: #dee0e0 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 0.9;
`;
