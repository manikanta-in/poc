import React from 'react';
import { LinkStyled } from '../../commonStyles/commonstyle.style';
import { Grid, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { NetworkAccess } from './orgRelationship.style';
import { changeDateFormate } from '../../shared/utils';
import ErrorPage from '../../common/Error/ErrorPage.jsx';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#474B55', // theme.palette.common.black,
    border: 'none',
    fontSize: '1.15rem',
    boxShadow: 'none',
    paddingLeft: '2.2rem'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1rem',
    border: 'none',
    paddingLeft: '2.2rem'
  },
  [`&.link`]: {
    color: '#008BBF',
    cursor: 'pointer'
  },
  [`&.head`]: {
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0px',
    color: '#707070',
    opacity: 0.6,
    marginBottom: '4px'
  },
  fontFamily: 'Open Sans 500'
}));

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 5px !important',
    marginTop: '-15px'
  }
}));

const orgRelationshipCardContent = ({ orgRelationships, errorMsg }) => {
  //console.log(orgRelationships);
  return (
    <>
      {errorMsg?.pyAdviceText && (
        <Grid item xs={12}>
          <ErrorPage errorMsg={errorMsg} />
        </Grid>
      )}

      <div style={{ height: '600px', overflow: 'auto', marginTop: 15 }}>
        <Grid container>
          <div style={{ overflow: 'auto' }}>
            <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
              <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                <TableHead style={{ position: 'relative', top: '15px' }}>
                  <StyledTableRow>
                    <StyledTableCell align='left'>HCO&nbsp;ID</StyledTableCell>
                    <StyledTableCell align='left'>Organization&nbsp;Name</StyledTableCell>
                    <StyledTableCell align='left'></StyledTableCell>
                    <StyledTableCell align='left'>Effective&nbsp;From</StyledTableCell>
                    <StyledTableCell align='left'>Tax&nbsp;ID</StyledTableCell>
                    <StyledTableCell align='left'>#&nbsp;HCPs</StyledTableCell>
                    <StyledTableCell align='left'>#&nbsp;PCPs</StyledTableCell>
                    <StyledTableCell align='left'>#&nbsp;Specialists</StyledTableCell>
                    <StyledTableCell align='left'>#&nbsp;HCFs</StyledTableCell>
                    <StyledTableCell align='left'>Membership</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                {orgRelationships &&
                  orgRelationships.OrganizationList?.length > 0 &&
                  orgRelationships.OrganizationList.map((item, index) => (
                    <TableBody style={{ position: 'relative', top: '-10px' }}>
                      <StyledTableRow key={index}>
                        <StyledTableCell style={{ color: '#003863' }}>
                          <LinkStyled onClick={() => console.log('')}>
                            {item?.HCOID ? item?.HCOID : '--'}
                          </LinkStyled>
                        </StyledTableCell>
                        <StyledTableCell align='left' style={{ color: '#003863' }}>
                          {item?.OrganizationName ? item?.OrganizationName : '--'}
                        </StyledTableCell>
                        <StyledTableCell align='left' style={{ color: '#003863' }}>
                          {item?.NetworkStatus && (
                            <NetworkAccess
                              color={
                                item?.NetworkStatus === 'In-Network'
                                  ? 'green'
                                  : item?.NetworkStatus === 'Out-Network' ||
                                    item?.NetworkStatus === 'Out Of Network' ||
                                    item?.NetworkStatus.toLowerCase() === 'out-of-network'
                                  ? 'red'
                                  : 'orange'
                              }
                            >
                              <p className='status-text'>{item?.NetworkStatus}</p>
                            </NetworkAccess>
                          )}
                        </StyledTableCell>
                        <StyledTableCell align='left' style={{ color: '#474B55' }}>
                          {item?.NetworkEffectiveDate
                            ? changeDateFormate(item?.NetworkEffectiveDate)
                            : '--'}
                          {item?.NetworkExpirationDate ? (
                            <>
                              <span> - </span>
                            </>
                          ) : (
                            ''
                          )}
                          {item?.NetworkExpirationDate
                            ? changeDateFormate(item?.NetworkExpirationDate)
                            : ''}
                        </StyledTableCell>
                        <StyledTableCell align='left' style={{ color: '#474B55' }}>
                          {item?.TaxID ? item?.TaxID : '--'}
                        </StyledTableCell>
                        <StyledTableCell align='left' style={{ color: '#008BBF' }}>
                          {item?.HCPs || item?.HCPs === 0 ? item?.HCPs : '--'}
                        </StyledTableCell>
                        <StyledTableCell align='left' style={{ color: '#474B55' }}>
                          {/* {item?.PCPs || item?.PCPs === 0 ? item?.PCPs : '--'} commenting out as per ALM-18494, for now we are just showing "--"*/}
                          --
                        </StyledTableCell>
                        <StyledTableCell align='left' style={{ color: '#474B55' }}>
                          {/* {item?.Specialties || item?.Specialties === 0 ? item?.Specialties : '--'} commenting out as per ALM-18494, for now we are just showing "--"*/}
                          --
                        </StyledTableCell>
                        <StyledTableCell align='left' style={{ color: '#008BBF' }}>
                          {item?.HCFs || item?.HCFs === 0 ? item?.HCFs : '--'}
                        </StyledTableCell>
                        <StyledTableCell align='left' style={{ color: '#474B55' }}>
                          {item?.Membership || item?.Membership === 0 ? item?.Membership : '--'}
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  ))}
              </Table>
            </TableStyleContaner>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default orgRelationshipCardContent;
