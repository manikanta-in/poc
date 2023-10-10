import React, { useRef, useEffect } from 'react';
import {
  LinkStyled,
  PaginationStyle,
  StyledTableCell,
  StyledTableRow
} from '../../commonStyles/commonstyle.style';
import { Grid, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { changeDateFormate } from '../../shared/utils';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 7px !important',
    marginTop: '30px',
    width: '154%',
    tableLayout: 'fixed'
  }
}));

const theme = createTheme({
  palette: {
    info: {
      main: '#003863'
    }
  }
});

const orgRelationshipCardContent = ({ data, totalPages, currentPage, onChangePage }) => {
  const handlePageChange = (event, newPage) => {
    scrollToTop.current.scrollTo(0, 0);
    onChangePage(newPage);
  };

  const scrollToTop = useRef(null);

  useEffect(() => {
    scrollToTop.current.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginTop: 20 }}>
        <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
          <div ref={scrollToTop} className='professional-relationships' style={{ height: '70vh' }}>
            <Table aria-label='customized table' stickyHeader>
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align='left'>HCO&nbsp;ID</StyledTableCell>
                  <StyledTableCell align='left'>Organization Name</StyledTableCell>
                  <StyledTableCell align='left' sx={{ width: 180 }}>
                    &nbsp;Status
                  </StyledTableCell>
                  <StyledTableCell align='left'>Effective&nbsp;From</StyledTableCell>
                  <StyledTableCell align='left'>Tax&nbsp;ID</StyledTableCell>
                  <StyledTableCell align='left'>#&nbsp;HCPs</StyledTableCell>
                  <StyledTableCell align='left'>#&nbsp;PCPs</StyledTableCell>
                  <StyledTableCell align='left'>#&nbsp;Specialists</StyledTableCell>
                  <StyledTableCell align='left'>#&nbsp;HCFs</StyledTableCell>
                  <StyledTableCell align='left'>Membership</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              {data?.length > 0 &&
                data.map((item, index) => (
                  <TableBody>
                    <StyledTableRow key={index}>
                      <StyledTableCell>
                        <LinkStyled onClick={() => console.log('')}>
                          {item?.HCOID ? item?.HCOID : '--'}
                        </LinkStyled>
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {item?.OrganizationName ? item?.OrganizationName : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        <div
                          style={{
                            background:
                              item.NetworkStatus === 'In-Network'
                                ? '#529535'
                                : item?.NetworkStatus?.toLowerCase() === 'out-of-network' ||
                                  item.NetworkStatus === 'Out-Network'
                                ? '#EA4040'
                                : item.NetworkStatus === 'Inactive' || item.Status === 'Pending'
                                ? '#F7911D'
                                : '',
                            color: item.NetworkStatus ? '#FFFFFF' : '#000000',
                            padding: '3px 5px 2px',
                            borderRadius: 25,
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: '0.875rem',
                            width: '100%'
                          }}
                        >
                          {item.NetworkStatus ? item.NetworkStatus : '--'}
                        </div>
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
                      <StyledTableCell align='left'>
                        {item?.TaxID ? item?.TaxID : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='left' style={{ color: '#008BBF' }}>
                        {item?.HCPs || item?.HCPs === 0 ? item?.HCPs : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {/* {item?.PCPs || item?.PCPs === 0 ? item?.PCPs : '--'} commenting out as per ALM-18494, for now we are just showing "--"*/}
                        --
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {/* {item?.Specialties || item?.Specialties === 0 ? item?.Specialties : '--'} commenting out as per ALM-18494, for now we are just showing "--"*/}
                        --
                      </StyledTableCell>
                      <StyledTableCell align='left' style={{ color: '#008BBF' }}>
                        {item?.HCFs || item?.HCFs === 0 ? item?.HCFs : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {item?.Membership || item?.Membership === 0 ? item?.Membership : '--'}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                ))}

              {/* {orgRelationships?.OrganizationList?.length > 0 &&
                createDummyTableRow(orgRelationships?.OrganizationList?.length)} */}
            </Table>
          </div>

          {data?.length > 0 && (
            <ThemeProvider theme={theme}>
              <PaginationStyle style={{ justifyContent: 'center', marginTop: '12px' }}>
                <div className='nav'>
                  <Stack spacing={2} style={{ marginLeft: '100px' }}>
                    <Pagination
                      sx={{ button: { color: '#ffffff' } }}
                      color='info'
                      hideNextButton
                      hidePrevButton
                      count={totalPages}
                      page={currentPage}
                      onChange={handlePageChange}
                    />
                  </Stack>
                </div>
              </PaginationStyle>
            </ThemeProvider>
          )}
        </TableStyleContaner>
      </div>
    </ThemeProvider>
  );
};

export default orgRelationshipCardContent;
