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
import { EmptyState } from '@pega/cosmos-react-core';
import { FullName, FullAddress, constructAddress } from '../../shared/utils';
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
    width: '110%',
    tableLayout: 'fixed'
  }
}));

const FacilityRelationShipsList = props => {
  const { setErrorMsg } = props;

  const [controller, setController] = useState({
    page: 1,
    rowsPerPage: 10
  });

  const scrollToTop = useRef(null);

  useEffect(() => {
    scrollToTop.current.scrollTo(0, 0);
  });

  const dataPageName = 'D_HCOFacilityRelationships';
  const context = 'app/context';

  const parameters = {
    ID: props.HcoID,
    Index: controller.page,
    NumberRecords: controller.rowsPerPage
  };

  const options = {
    invalidateCache: true
  };

  const [facilityData, setFacilityData] = useState('');
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
      .then(response => {
        console.log('FacilityRelationships details', response);
        setFacilityData(response);
        props.setOrgData(response);

        setPageCount(response?.TotalRecords);
        setResultsFetched('fetched');
        if (response?.ErrorPage) {
          setErrorMsg(response.ErrorPage);
        }
        setIsLoading(false);
        props.setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setResultsFetched('no results');
        setPageCount(0);
        setIsLoading(false);
        props.setLoading(false);
      });
    //searchDB();
  }, [controller]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginTop: 20 }}>
        <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
          <div ref={scrollToTop} className='professional-relationships'>
            <Table sx={{ minWidth: 700 }} aria-label='customized table' stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='left'>Facility&nbsp;ID</StyledTableCell>
                  <StyledTableCell align='left'>Facility&nbsp;Name</StyledTableCell>
                  <StyledTableCell align='left' sx={{ width: 180 }}>
                    Status
                  </StyledTableCell>
                  {/* <StyledTableCell align='center'>HCO&nbsp;Name</StyledTableCell> */}
                  <StyledTableCell align='left'>Tax&nbsp;ID</StyledTableCell>
                  <StyledTableCell align='left'>Phone&nbsp;#</StyledTableCell>
                  {/* <StyledTableCell align='center'>Medicare&nbsp;#</StyledTableCell> */}
                  <StyledTableCell align='left'>Address</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {facilityData &&
                  facilityData?.Records?.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell align='left' component='th'>
                        <LinkStyled
                          style={{ width: '110%' }}
                          onClick={() => console.log('onclick')}
                        >
                          {row.FacilityID ? row.FacilityID : '--'}
                        </LinkStyled>
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {row.FacilityName ? row.FacilityName : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        <div
                          style={{
                            background:
                              row.Status === 'In-Network'
                                ? '#529535'
                                : row.Status === 'Out-Network' ||
                                  row?.Status?.toLowerCase() === 'out-of-network'
                                ? '#EA4040'
                                : row.Status === 'Inactive' || row.Status === 'Pending'
                                ? '#F7911D'
                                : '',
                            color: row.Status ? '#FFFFFF' : '#000000',
                            padding: '3px 3px 2px',
                            borderRadius: 25,
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: '0.875rem',
                            width: '100%'
                          }}
                        >
                          {row.Status ? row.Status : '--'}
                        </div>
                      </StyledTableCell>
                      {/* <StyledTableCell align='left'></StyledTableCell> */}
                      <StyledTableCell align='left'>{row.TaxID ? row.TaxID : '--'}</StyledTableCell>
                      <StyledTableCell align='left'>
                        <div style={{ width: '114%' }}>{row.Phone ? row.Phone : '--'}</div>
                      </StyledTableCell>
                      {/* <StyledTableCell align='left'>{row.Medicare}</StyledTableCell> */}
                      <StyledTableCell align='left'>{constructAddress(row)}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                {resultsFetched === 'loading' && <></>}
              </TableBody>
            </Table>
            {(!facilityData || (facilityData && facilityData?.Records?.length === 0)) &&
              resultsFetched === 'fetched' && <EmptyState />}
          </div>
        </TableStyleContaner>

        {facilityData && facilityData?.Records?.length > 0 && (
          <PaginationStyle>
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

export default FacilityRelationShipsList;
