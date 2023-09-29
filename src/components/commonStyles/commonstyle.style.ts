import styled from 'styled-components';
import NativeSelect from '@mui/material/NativeSelect';
import { TableCell, tableCellClasses, TableRow } from '@mui/material';

export const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #a8abac;
  border-radius: 10px;
  opacity: 1;
  margin: 15px;
  display: flex;
  padding: 10px;
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
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vh;
`;
export const Row = styled.div`
  display: flex;
`;
export const Col = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const BreakRow = styled.div`
  display: block;
  margin: 10px 0;
`;

export const Detail = styled.div`
  margin-top: 25px;
  padding-bottom: 25px;

  .info {
    margin: 40px 20px 0 0;
    background: #f4f6f4;
    border: 1px solid #f4f6f4;
    border-radius: 10px;
    height: 100%;
    .line {
      top: 370px;
      left: 323px;
      width: 50px;
      height: 0px;
      border: 2px solid #008bbf;
      opacity: 1;
    }
  }
`;

export const Info = styled.div`
  margin: 40px 20px 0 0;
  background: #f4f6f4;
  border: 1px solid #f4f6f4;
  border-radius: 10px;
  height: 100%;
`;

export const TableWrapper = styled.div`
  margin: 0 25px 25px 25px;
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
export const TableHead = styled.div`
  display: flex;
  padding: 0 12px 20px 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
`;
export const HeaderText = styled.p`
  margin-top: 16px;
  //display: flex;
  flex-direction: row;
  flex: 1;
  font: normal normal normal 18px/22px Open Sans 300;
  letter-spacing: 0px;
  color: #474b55;
  opacity: 0.6;
  font-size: 1rem;
  font-weight: 300;
`;
export const TableRowText = styled.p`
  //display: flex;
  flex-direction: row;
  flex: 1;
  font: normal normal normal 18px/22px Open Sans 300;
  letter-spacing: 0px;
  color: #474b55;
  font-size: 0.875rem;
  margin-top: 16px;
`;
export const TableRows = styled.div`
  display: flex;
  padding: 0 12px 20px 20px;
  background: rgb(244 244 244);
  opacity: 1;
  border-radius: 10px;
  margin-bottom: 7px;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0px;
  color: #707070;
  opacity: 0.6;
  margin-bottom: 4px;
`;

export const Value = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0px;
  color: #333333;
`;

export const NetworkAccess = styled.div`
  background: ${props =>
    props.color === 'green'
      ? '#529535'
      : props.color === 'red'
      ? '#EA4040'
      : props.color === 'orange'
      ? '#F7911D'
      : ''};
  color: #ffffff;
  width: 140px;
  margin-left: 30px;
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

export const Section = styled.div`
  background: #fff;
  boxshadow: 0px 3px 6px #00000029;
  border: 1px solid #a8abac;
  border-radius: 10px;
  opacity: 1;
  margin: 10px;
  padding: 20px 15px 20px 15px;
`;

export const SectionDetail = styled.div`
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
      opacity: 1;
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
  }
`;
// export const Arrow = styled(Col)`
//     align-items:center;
//     cursor:${(props) => (!props.disable ? `no-drop` : `pointer`)};
//     justify-content:center;
//     background:#A8ABAC1A;
//     height:40px;
//     width:40px;
//     padding:10px;
//     margin-left:12px;
//     box-shadow: inset 0px 3px 6px #00000029, 0px 3px 6px #00000029;
//     border-radius:10px;
// `
export const Text = styled.p`
  text-align: left;
  letter-spacing: 0px;
  font-size: 16px;
  font-weight: 300;
  color: #707070;
  opacity: 1;
`;
export const DateAndTime = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
  font-size: 18px;
  font-weight: 500;
`;

export const CloseButton = styled.div`
  display: flex;
`;
// justify-content: flex-end; Can be added above if button needs to be all the way to the right

export const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  .limit {
    display: flex;
    align-items: center;
    margin-left: -12px;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0px;
    color: #333333;
  }
  .title {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0px;
    color: #333333;
    margin-top: 5px;
  }
  .selection {
    margin: 1% 10px 0px;
    width: 55px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #333333;
    border-radius: 7px;
    font-size: 1.125rem;
    font-weight: 700;
  }
  .nav {
    height: 30px;
    border-radius: 25px;
    color: #fff;
    align-items: center;
  }
  .nav ul {
    background: #008bbf;
    float: left;
    border-radius: 25px;
    height: 27px;
    list-style: none;
    align-items: center;
    padding-right: 12px;
    padding-left: 10px;
  }
  .nav ul li {
    font-size: 1rem;
    float: left;
    border-radius: 25px;
    height: 32px;
    font-weight: 700;
    cursor: pointer;
    transition: all 1s ease-out;
    position: relative;
    top: -3px;
    margin: 0 4px;
  }
  .nav ul li button {
    margin: 0;
  }
  .css-153b27u-MuiPaginationItem-root {
    font-family: Open Sans, Segoe UI;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 1.43;
    border-radius: 16px;
    text-align: center;
    box-sizing: border-box;
    min-width: 32px;
    padding: 0 6px;
    margin: -6px 3px;
    color: #fff;
    height: auto;
  }
  .css-103n28x {
    font-family: Open Sans, Segoe UI;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 1.43;
    border-radius: 16px;
    text-align: center;
    box-sizing: border-box;
    min-width: 32px;
    padding: 0 6px;
    margin: -6px 3px;
    color: #fff;
    height: auto;
  }
`;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FFFFF',
    color: '#474B55', // theme.palette.common.black,
    border: 'none',
    fontSize: '1.05rem',
    boxShadow: 'none',
    // opacity: 0.5,
    fontWeight: 400
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.125rem',
    border: 'none',
    opacity: 1,
    fontWeight: 500,
    color: '#333333'
  },
  fontFamily: 'Open Sans, Segoe UI',
  fontStyle: 'normal'
}));

export const OrgStyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FFFFF',
    color: '#474B55', // theme.palette.common.black,
    border: 'none',
    fontSize: '1.125rem',
    boxShadow: 'none',
    opacity: 0.5,
    fontWeight: 400
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.125rem',
    border: 'none',
    opacity: 1,
    fontWeight: 500,
    color: '#333333'
  },
  fontFamily: 'Open Sans, Segoe UI',
  fontStyle: 'normal'
}));

export const OrgStyledTableRow = styled(TableRow)(({ theme }) => ({
  background: '#FFFFF',
  borderRadius: '10px',
  height: '45px',
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

export const FacilityStyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FFFFF',
    color: '#474B55', // theme.palette.common.black,
    border: 'none',
    fontSize: '1rem',
    boxShadow: 'none',
    // opacity: 0.5,
    fontWeight: 400
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1rem',
    border: 'none',
    opacity: 1,
    fontWeight: 500,
    color: '#333333'
  },
  fontFamily: 'Open Sans, Segoe UI',
  fontStyle: 'normal'
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: '#a8abac26',
  borderRadius: '10px',
  height: '75px',
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

export const Down = styled.div`
  display: flex;
  color: #000000 0% 0% no-repeat padding-box;
  opacity: 0.75;
  width: 27px;
  height: 24px;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  top: 7px;
  right: 15px;
`;

export const OverFlowCharacters = styled.p`
  position: relative;
  bottom: 14px;
  left: 30px;
`;

export const NoRecords = styled.span`
  padding-left: 5%;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: Open Sans, Segoe UI;
  color: #f7911d;
  position: relative;
  top: 180px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-style: italic;
`;

export const LinkStyled = styled.div`
  cursor: pointer;
  color: #008bbf;
`;

export const SelectFields = styled(NativeSelect)({
  //   background: '#FFFFFF 0% 0% no-repeat padding-box',
  //   borderRadius: '7px',
  //   width: '300px',
  //   color: '#333333',

  //   fontFamily: ['OpenSans'].join(','),
  //   height: '55px',
  //   letterSpacing: 0,
  fontSize: 18,
  fontWeight: 500,
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      border: '2px solid #333333'
    },
    '&:hover fieldset': {
      border: '1px solid #333333'
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #333333'
    }
  },
  '& .MuiInputLabel-formControl': {
    '&.Mui-focused': {
      color: '#707070',
      fontSize: '16px',
      fontWeight: '300'
    }
  }
});
