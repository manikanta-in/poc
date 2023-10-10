import styled from 'styled-components';

export const Section = styled.div`
  background: #fff;
  boxshadow: 0px 3px 6px #00000029;
  border: 1px solid #a8abac;
  border-radius: 10px;
  opacity: 1;
  margin: 10px;
  padding: 20px 15px 20px 25px;
`;

export const Detail = styled.div`
  margin-top: 25px;

  .title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0px;
    color: #003863;
  }
  .info {
    margin: 20px 20px 0px 0px;
    background: #f4f6f4;
    border: 1px solid #f4f6f4;
    border-radius: 10px;
    height: 100%;
    width: 100%;

    .line {
      margin-left: 0px;
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
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0px;
      color: #333333;
    }
    .value.link {
      cursor: pointer;
      color: #008bbf;
    }
  }
`;
export const DateIconWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .days {
    margin-left: 11px;
    text-align: left;
    letter-spacing: 0px;
    color: #707070;
    font-size: 1rem;
    font-weight: 300;
    opacity: 1;
    margin-top: -3px;
  }
  .clock {
    color: #529535;
    font-size: 1.125rem;
    opacity: 0.5;
  }
`;
export const Col = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px;
  .expertise {
    margin-top: 2px;
    margin-left: 24px;
    margin-bottom: 65px;
  }
`;
export const NetworkAccess = styled.div`
  background: ${props => (props.color === 'green' ? '#529535' : '#EA4040')};
  color: #ffffff;
  width: 124px;
  margin-left: ${props => (props.isLeft ? '13px' : '0')};
  height: 27px;
  border-radius: 25px;
  padding: 10px;
  .status-text {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 300;
    margin-top: -6px;
    opacity: 1;
  }
`;

export const FacilityLinks = styled.div`
  font-size: 1.25 rem;
  color: #008bbf;
  border: none;
  cursor: pointer;

  font-family: MuseoSans;
  font-style: Regular;

  font-weight: 500;
`;
export const Row = styled.div`
  display: flex;
`;
export const TIME = styled.p`
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  font-size: 1rem;
  font-weight: 700;
  margin-left: 29px;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Container = styled.div`
  height: 100vh;
  width: 100vh;
`;
export const DateWrapper = styled.div`
  display: flex;
  margin-left: 5px;
`;
export const ColorDiv = styled.div`
  background: #456789;
`;
export const ContactCard = styled.div`
  height: 203px;
  width: 550px;
  background: rgb(168 171 172 / 15%) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  display: inline-block;
  margin-right: 50px;
  border-left: 4px solid ${props => (props.color == 'yellow' ? '#F6E22B' : '#529535')};
  padding: 25px;

  .value {
    margin-bottom: 18px;
    font: Sa;
  }
  .emailID {
    color: #008bbf !important;
  }
`;

export const ImageDiv = styled.div`
  margin-left: 68px;
  @media screen and (min-width: 1280px) and (max-width: 1379px) {
    margin-left: 64px;
  }

  @media screen and (min-width: 1380px) and (max-width: 1490px) {
    margin-left: 63px;
  }
  @media screen and (min-width: 1491px) and (max-width: 1890px) {
    margin-left: 68px;
  }
`;
export const ProviderWrapper = styled.div`
  font-size: 1rem;
  overflow-x: ${props => (props.legacyProviderIds ? 'hidden' : '')};
  /* Handle */
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #076bc9;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #076bc9;
  }
`;
