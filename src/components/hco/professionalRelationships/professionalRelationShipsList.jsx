import React, { useEffect, useState, useRef } from 'react';
import {
  LinkStyled,
  PaginationStyle,
  StyledTableCell,
  StyledTableRow
} from '../../commonStyles/commonstyle.style';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { EmptyState, Status } from '@pega/cosmos-react-core';
import { FullName, FullAddress, constructAddress } from '../../shared/utils';
import { TableWrapper } from './styles.style';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    info: {
      main: '#003863'
    }
  }
});

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 7px !important',
    marginTop: '30px',
    width: '154%'
  }
}));

const ProfessionalRelationShipsList = props => {
  const { setErrorMsg } = props;
  const [controller, setController] = useState({
    page: 1,
    rowsPerPage: 10
  });

  const scrollToTop = useRef(null);

  useEffect(() => {
    scrollToTop.current.scrollTo(0, 0);
  });

  const dataPageName = 'D_HCOProfessionalRelationships';
  const context = 'app/context';

  const parameters = {
    ID: props.HcoID,
    Speciality: encodeURIComponent(props.specialties.join('","')),
    Index: controller.page,
    NumberRecords: controller.rowsPerPage
  };

  const options = {
    invalidateCache: true
  };

  const [ProfessionalRecords, setProfessionalRecords] = useState('');
  const [pageCount, setPageCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [resultsFetched, setResultsFetched] = useState('loading');

  const handlePaginationChange = (event, newPage) => {
    setController({
      ...controller,
      page: newPage
    });
  };

  const changeWidth = event => {
    setController({
      ...controller,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 1
    });
  };

  useEffect(() => {
    parameters.Index = controller.page;
    parameters.NumberRecords = controller.rowsPerPage;
    setIsLoading(true);
    props.setLoading(true);

    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          setProfessionalRecords(response.OrganizationalProfessionalRelationships);
          console.log('ProfessionalRelationships details', response);
          props.setOrgData(response.OrganizationalProfessionalRelationships);

          setPageCount(response.OrganizationalProfessionalRelationships?.TotalRecords);
          setResultsFetched('fetched');
          setIsLoading(false);
          if (response?.ErrorPage) {
            setErrorMsg(response.ErrorPage);
          }
          props.setLoading(false);
        }
      )
      .catch(error => {
        console.log('error' + error);
        setResultsFetched('no results');
        setPageCount(0);
        setIsLoading(false);
        props.setLoading(false);
      });
    scrollToTop.current.scrollTo(0, 0);
  }, [props.specialties, controller]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginTop: 20 }}>
        <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
          <div ref={scrollToTop} style={{ height: '460px', overflow: 'auto', marginTop: '-20px' }}>
            <Table aria-label='customized table' stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='center'>Professional&nbsp;ID</StyledTableCell>
                  <StyledTableCell align='center'>Name</StyledTableCell>
                  <StyledTableCell align='center'>Status</StyledTableCell>
                  {/* <StyledTableCell align='center'>HCO&nbsp;Name</StyledTableCell> */}
                  <StyledTableCell align='center'>Specialty</StyledTableCell>
                  <StyledTableCell align='center'>Tax&nbsp;ID</StyledTableCell>
                  <StyledTableCell align='center'>Phone&nbsp;#</StyledTableCell>
                  <StyledTableCell align='center'>Medicare&nbsp;#</StyledTableCell>
                  <StyledTableCell align='center'>Medicaid&nbsp;#</StyledTableCell>
                  <StyledTableCell align='center'>NPI</StyledTableCell>
                  {/* <StyledTableCell align='center'>Vendor&nbsp;ID</StyledTableCell> */}
                  <StyledTableCell align='center'>Address</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ProfessionalRecords &&
                  ProfessionalRecords?.Records?.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component='th' align='center'>
                        <LinkStyled onClick={() => console.log('onclick')}>
                          {row.ProfessionalID ? row.ProfessionalID : '--'}
                        </LinkStyled>
                      </StyledTableCell>
                      <StyledTableCell align='center'> {FullName(row)} </StyledTableCell>
                      <StyledTableCell align='center' style={{ width: '7%' }}>
                        <div
                          style={{
                            background:
                              row.Status === 'In-Network'
                                ? '#529535'
                                : row.Status === 'Out-of-Network' || row.Status === 'Out-Network'
                                ? '#EA4040'
                                : row.Status === 'Inactive' || row.Status === 'Pending'
                                ? '#F7911D'
                                : '',
                            color: row.Status ? '#FFFFFF' : '#000000',
                            padding: '3px 5px 2px',
                            borderRadius: 25,
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: '0.875rem',
                            width: '130%'
                          }}
                        >
                          {row.Status ? row.Status : '--'}
                        </div>
                      </StyledTableCell>
                      {/* <StyledTableCell align='center'></StyledTableCell> */}
                      <StyledTableCell align='center' style={{ width: '10%' }}>
                        <TableWrapper
                          Medicaid={row.SpecialtyList[0]?.split(',')?.length > 2}
                          style={{
                            height: row.SpecialtyList[0]?.split(',')?.length > 2 ? '50px' : '',
                            width: row.SpecialtyList[0]?.split(',')?.length > 2 ? '100%' : ''
                          }}
                        >
                          {row.SpecialtyList === undefined ||
                          row.SpecialtyList === '' ||
                          row.SpecialtyList === null ||
                          row.SpecialtyList?.length === 0
                            ? '--'
                            : `${row.SpecialtyList}`}
                        </TableWrapper>
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {row.TaxID ? row.TaxID : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='center' style={{ width: '13%' }}>
                        {row.Phone ? row.Phone : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {row.Medicare ? row.Medicare : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='center' style={{ width: '10%' }}>
                        <TableWrapper
                          Medicaid={row.MedicaidList?.length > 2}
                          style={{
                            height: row.MedicaidList?.length > 2 ? '50px' : '',
                            width: row.MedicaidList?.length > 2 ? '100%' : ''
                          }}
                        >
                          {row.MedicaidList === undefined ||
                          row.MedicaidList === '' ||
                          row.MedicaidList === null ||
                          row.MedicaidList?.length === 0
                            ? '--'
                            : row.MedicaidList.join(',\n')}
                        </TableWrapper>
                      </StyledTableCell>
                      <StyledTableCell align='center'>{row.NPI ? row.NPI : '--'}</StyledTableCell>
                      {/* <StyledTableCell align='center'></StyledTableCell> */}
                      <StyledTableCell align='center'>{constructAddress(row)}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                {resultsFetched === 'loading' && <></>}
              </TableBody>
            </Table>
          </div>
        </TableStyleContaner>
        {(!ProfessionalRecords ||
          (ProfessionalRecords && ProfessionalRecords?.Records?.length === 0)) &&
          resultsFetched === 'fetched' && <EmptyState style={{ marginTop: '-205px' }} />}

        {ProfessionalRecords && ProfessionalRecords?.Records?.length > 0 && (
          <PaginationStyle style={{ marginTop: '30px' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <div className='limit'>
                    <div className='title'>Showing</div>
                    <select
                      onChange={changeWidth}
                      value={controller.rowsPerPage}
                      className='selection'
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={40}>40</option>
                      <option value={50}>50</option>
                    </select>
                    <div className='title'>of&nbsp;{pageCount}</div>
                    <div className='title'>&nbsp;records</div>
                  </div>
                </Grid>

                <Grid item xs={8}>
                  <div className='nav'>
                    <Stack spacing={2} style={{ marginLeft: '100px' }}>
                      <Pagination
                        sx={{ button: { color: '#ffffff' } }}
                        color='info'
                        hideNextButton
                        hidePrevButton
                        count={Math.ceil(pageCount / controller.rowsPerPage)}
                        page={controller.page}
                        onChange={handlePaginationChange}
                      />
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </PaginationStyle>
        )}
      </div>
    </ThemeProvider>
  );
};

export default ProfessionalRelationShipsList;
