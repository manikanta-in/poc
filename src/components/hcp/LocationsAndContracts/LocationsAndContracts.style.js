import styled from 'styled-components';
import { HeaderText, TableRowText } from '../../commonStyles/commonstyle.style';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const HeadingText = styled.p`
  text-align: left;
  font-size: 1.375rem;
  letter-spacing: 0px;
  font-weight: 700;
  color: #333333;
  width: 303px;
  opacity: 1;
`;

export const TableHeadText = styled(HeaderText)`
  text-align: center;
`;
export const TableRowsText = styled(TableRowText)`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: black;
`;
export const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #a8abac;
  border-radius: 10px;
  opacity: 1;
  margin: 10px;
  display: flex;
  padding: 20px 15px 20px 15px;
  .participation-wrapper {
    margin-top: -6px;
  }
  .horizontal-line {
    margin-top: 12px;
    height: 100%;
    border: 1.6px solid #a8abac;
    opacity: 0.5;
  }
  .horizontal-line-provider {
    margin: 10px 8px 0 8px;
    height: 308px;
    border: 1.7px solid #a8abac;
    opacity: 0.5;
  }
  .phone-wrapper {
    justify-content: space-between;
    margin-right: 19px;
  }
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
export const Row = styled.div`
  display: flex;
  width: 100%;
  .contact-name {
    margin-left: 95px;
  }
  .tax-Id {
    width: 169px;
  }
  .email {
    margin-left: 142px;
  }
`;
export const DateWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  @media screen and (min-width: 1200px) and (max-width: 1405px) {
    width: 220px;
    margin-left: 15px;
  }
  @media screen and (min-width: 1406px) and (max-width: 1580px) {
    width: 220px;
    margin-left: 33px;
  }
  @media screen and (min-width: 1581px) and (max-width: 1899px) {
    width: 236px;
    margin-left: 55px;
  }
`;
export const Col = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px;
  .expertise {
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 30px;
    height: 86px;
    overflow: auto;
    overflow-x: hidden;
  }
  .area-expertise {
    font-size: 1.125rem;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  .legacy-provider {
    margin-top: -19px;
  }
`;
export const ParticipationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 30px;
`;
export const Text = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: black;
  opacity: 1;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 5px;
`;

export const ErrorDiv = styled.span`
  padding-left: 5%;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: Open Sans, Segoe UI;
  color: #f7911d;
  justify-content: center;
  text-align: center;
  font-style: italic;
`;
export const ProviderIdWrapper = styled.div`
  height: 59px;
  overflow: auto;
  overflow-x: hidden;
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
export const Day = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Open Sans';
  font-style: normal;
  letter-spacing: 0px;
  color: #707070;
  margin-top: 14px;

  font-size: 0.875rem;
  width: 43px;
  opacity: 1;
`;
export const Time = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Open Sans';
  font-style: normal;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  margin-top: 13px;
  margin-left: 17px;
  @media screen and (min-width: 1200px) and (max-width: 1410px) {
    font-size: 13px;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 11px;
  // width: 100px;
  // justify-content: space-around;
`;
export const DateAndTime = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  font-size: 1.125rem;
  font-weight: 500;
  width: 150px;
`;
export const TextUnderLine = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #003863;
  opacity: 1;
  font-size: 1rem;
  margin-left: 20px;
  font-weight: 700;
  .line {
    // width: 50px;
    height: 1px;
    border: 2px solid #008bbf;
    opacity: 0.5;
  }

  @media screen and (min-width: 1581px) and (max-width: 1899px) {
    margin-left: 55px;
  }
  @media screen and (min-width: 1406px) and (max-width: 1580px) {
    margin-left: 32px;
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 35px;
`;
export const BackButton = styled.button`
  cursor: pointer;
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.20000000298023224px solid #707070;
  border-radius: 7px;
  margin: 0px 13px;
  opacity: 1;
  .back-text {
    font-weight: 400;
    padding: 6px 8px 6px 0px;
    font-family: MuseoSans;
  }
`;
export const Detail = styled.div`
  margin-top: 25px;
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
  .time-containier {
    flex: 2;
    margin-top: 49px;
    margin-left: 20px;
  }
  .margin-down {
    margin-top: 10px;
  }
  .detailed-view {
    position: relative;
    left: 24px;
    top: -24px;
    font-size: 0.875rem;
    color: #008bbf;
  }
  .network-acccess {
    flex: 1;
    padding: 0px;
  }
  .tooltip {
    margin-left: 164px;
    position: relative;
    display: inline-block;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 152px;
    height: 64px;
    background-color: #fff;
    border: 1px solid #f2ebeb;
    text-align: center;
    border-radius: 6px;
    padding: 10px 5px 5px 10px;
    position: absolute;
    z-index: 1;
    top: 150%;
    left: 50%;
    margin-left: -60px;
    font-size: 0.75rem;
  }
  .tooltiptext .duration {
    font-weight: 600;
  }
  .tooltiptext .call-hrs {
    margin-right: 61px;
    font-weight: 300;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
  .tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }
  // select {
  //   width: 270px;
  //   height: 53px;
  //   background: #ffffff 0% 0% no-repeat padding-box;
  //   border: 1px solid #333333;
  //   border-radius: 7px;
  //   font-size: 1.25rem;
  //   font-weight: 600;
  //   color: #333333;
  // }
  .title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0px;
    color: #003863;
    margin-bottom: 4px;
  }

  .info {
    margin: 20px 20px 0 0;
    background: #f4f6f4;
    border: 1px solid #f4f6f4;
    border-radius: 10px;
    height: 100%;
    .line {
      margin-left: 20px;
      width: 50px;
      height: 0px;
      border: 2px solid #008bbf;
      opacity: 0.5;
      margin-right: 38px;
      margin-top: 2px;

      @media screen and (min-width: 1581px) and (max-width: 1899px) {
        margin-left: 55px;
      }
      @media screen and (min-width: 1406px) and (max-width: 1580px) {
        margin-left: 32px;
      }
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
      font-size: 1.125rem;
      font-weight: 500;
      letter-spacing: 0px;
      color: #333333;
    }
  }
`;
export const PaymentInformation = styled.div`
  display: flex;
  font-size: 1rem;
  color: black;
  flex-direction: row;
  cursor: pointer;
  width: 225px;
  height: 50px;
  background: #a8abac1a 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 0.7; /* Make button look disabled */
  pointer-events: none; /* Disabled pointer events on this div */
  .payment {
    margin-top: 15px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1360px) {
    width: 215px;
    height: 75px;
  }

  @media screen and (min-width: 1360px) and (max-width: 1379px) {
    width: 225px;
  }

  @media screen and (min-width: 1600px) and (max-width: 1710px) {
    width: 230px;
  }

  @media screen and (min-width: 1710px) and (max-width: 1920px) {
    width: 230px;
  }

  @media screen and (min-width: 1380px) and (max-width: 1400px) {
    width: 230px;
  }

  @media screen and (min-width: 1400px) and (max-width: 1500px) {
    width: 230px;
  }

  @media screen and (min-width: 1500px) and (max-width: 1530px) {
    width: 230px;
  }

  @media screen and (min-width: 1530px) and (max-width: 1599px) {
    width: 230px;
  }

  @media screen and (min-width: 1890px) and (max-width: 5500px) {
    width: 230px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1260px) {
    width: 225px;
  }
`;
export const DateIconWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  .days {
    margin-left: 11px;
    text-align: left;
    letter-spacing: 0px;
    color: #707070;
    font-size: 1.125rem;
    font-weight: 300;
    opacity: 1;
    margin-top: -3px;
    @media screen and (min-width: 1200px) and (max-width: 1580px) {
      font-size: 14px;
      margin-left: 11px;
    }
  }
  .clock {
    color: #529535;
    font-size: 1.125rem;
    opacity: 0.6;
  }
`;
export const TIME = styled.p`
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  font-size: 1.125rem;
  font-weight: 700;
  margin-left: 26px;

  @media screen and (min-width: 1200px) and (max-width: 1580px) {
    font-size: 14px;
    width: 149px;
  }
  @media screen and (min-width: 1581px) and (max-width: 1899px) {
    font-size: 17px;
    width: 180px;
  }
`;
export const Email = styled.p`
  color: #008bbf;

  @media screen and (min-width: 1200px) and (max-width: 1899px) {
    overflow: auto;
    width: 135;
  }
`;
export const Heading = styled.p`
  color: #000000;
  opacity: 1;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 2px;
`;
export const TextContent = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
`;
export const ContactInfo = styled.div`
  display: flex;
  padding: 10px 22px 10px 22px;
  flex-direction: column;
  width: 420px;
  height: 203px;
  background: #dee0e0 0% 0% no-repeat padding-box;
  border-radius: 5px;
`;
export const TextUnderLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ContactCard = styled.div`
  height: 203px;
  width: 412px;
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
    font-size: 1.063rem;
    margin-left: 22px;
  }
`;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FFFFF',
    color: '#474B55', // theme.palette.common.black,
    border: 'none',
    fontSize: '1rem',
    boxShadow: 'none',
    opacity: 0.5,
    fontWeight: 300
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1rem',
    border: 'none',
    opacity: 1,
    fontWeight: 500,
    color: '#333333'
  },
  fontFamily: 'MuseoSans',
  fontStyle: 'normal'
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: '#a8abac26',
  borderRadius: '10px',
  height: '62px',
  'td:first-child': {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px'
  },
  'td:last-child': {
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px'
  },
  'th:first-child': {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px'
  }
}));

export const DemographicsCellHeader = styled.div`
  position: relative;
  left: 205px;
  opacity: 0.5;
  font-size: 1rem;
  font-family: 'MuseoSans';
  bottom: 30px;
  .underline {
    border-bottom: 3px solid #d9ddde;
    position: relative;
    top: 10px;
    width: 640%;
    right: 95px;
  }
  p {
    position: relative;
    left: 55%;
  }
`;

export const LicenseDetailsCellHeader = styled.div`
  position: relative;
  left: 205px;
  opacity: 0.5;
  font-size: 1rem;
  font-family: 'MuseoSans';
  bottom: 30px;
  .underline {
    border-bottom: 3px solid #d9ddde;
    position: relative;
    top: 10px;
    width: 1070%;
    right: 95px;
  }
  p {
    position: relative;
    left: 370%;
  }
`;

export const DefaultControlsCellHeader = styled.div`
  position: relative;
  left: 205px;
  opacity: 0.5;
  font-size: 1rem;
  font-family: 'MuseoSans';
  bottom: 30px;
  .underline {
    border-bottom: 3px solid #d9ddde;
    position: relative;
    top: 10px;
    width: 500%;
    right: 95px;
  }
  p {
    position: relative;
    left: 45%;
  }
`;

export const AreaOfExpertiseStyle = styled.div`
  height: 59px;
  overflow: auto;
  overflow-x: hidden;
  margin-top: 15px;
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

export const OverFlowCharacters = styled.div`
  position: relative;
  margin-top: 130px;
  p {
    opacity: 0.5;
    display: flex;
    justify-content: flex-start;
    margin-left: -31px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
  right: 150%;
`;
