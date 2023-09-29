import styled from 'styled-components';

export const Section = styled.div`
  background: #fff;
  boxshadow: 0px 3px 6px #00000029;
  border: 1px solid #a8abac;
  border-radius: 10px;
  opacity: 1;
  margin: 10px;
  padding: 20px 15px 20px 0px;
`;

export const Detail = styled.div`
  margin-top: 25px;
  padding-bottom: 25px;

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
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vh;
`;

export const ProviderWrapper = styled.div`
  overflow-x: ${props => (props.legacyProviderIds ? 'hidden' : '')};
  //overflow-wrap: break-word;
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

export const ContactCard = styled.div`
  height: 203px;
  width: 412px;
  font-size: 1rem;
  font-weight: 500;
  background: rgb(168 171 172 / 15%) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  display: inline-block;
  margin-right: 50px;
  border-left: 4px solid ${props => (props.color == 'yellow' ? '#F6E22B' : '#529535')};
  padding: 25px;

  .value {
    margin-bottom: 18px;
  }
  .emailID {
    color: #008bbf !important;
  }
`;
