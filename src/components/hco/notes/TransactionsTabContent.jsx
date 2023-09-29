import React, { useState, useEffect, useRef } from 'react';
import {
  PaginationStyle,
  StyledTableCell,
  StyledTableRow,
  Down,
  OverFlowCharacters
} from '../../commonStyles/commonstyle.style';
import { NotesTableWrapper } from './notes.style';
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
import ChevronDownIcon from '../../common/Icons/ChevronDownIcon/index.jsx';
import { EmptyState } from '@pega/cosmos-react-core';

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 10px !important',
    marginTop: '6px',
    width: '99%'
  }
}));

const TransactionsTabContent = props => {
  const [showMore, setShowMore] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    tableRef.current.scrollTo(0, 0);
  });

  const [controller, setController] = useState({
    page: 1,
    rowsPerPage: 10
  });

  const dataPageName = 'D_HCONotesLandingDetails';
  const context = 'app/context';

  const parameters = {
    ID: props.HcoID,
    Index: controller.page,
    NumberRecords: controller.rowsPerPage
  };

  const options = {
    invalidateCache: true
  };

  const [notesData, setNotesData] = useState('');
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

  //This showing for Pagination dropdown selection
  useEffect(() => {
    parameters.Index = controller.page;
    parameters.NumberRecords = controller.rowsPerPage;
    setIsLoading(true);
    props.setLoading(true);

    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response => {
        console.log('Notes details', response);
        setNotesData(response.OrgNotes);
        props.setNotesData(response.OrgNotes);

        setPageCount(response.OrgNotes?.Records?.length);
        setResultsFetched('fetched');
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
  }, []);

  return (
    <>
      <NotesTableWrapper>
        <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
          <div ref={tableRef} style={{ height: '420px', overflow: 'auto' }}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table' stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='left'>Date/Time</StyledTableCell>
                  <StyledTableCell align='left' style={{ paddingLeft: '150px' }}>
                    Transcations
                  </StyledTableCell>
                  <StyledTableCell align='left'>Case</StyledTableCell>
                  <StyledTableCell align='left'>Updated by</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notesData &&
                  notesData?.Records?.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component='th'>
                        <div>{row.Date}</div>
                        <div style={{ paddingLeft: '10px' }}>{row?.Time}</div>
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {row.Description.length >= 60 ? (
                          <div style={{ maxWidth: '800px' }}>
                            <Down onClick={() => setShowMore(previous => !previous)}>
                              <ChevronDownIcon />
                            </Down>
                            <OverFlowCharacters>
                              {showMore
                                ? row.Description
                                : `${row.Description.substring(0, 70)}...`}
                            </OverFlowCharacters>
                          </div>
                        ) : (
                          row.Description
                        )}
                      </StyledTableCell>
                      <StyledTableCell align='left'>{row.Case}</StyledTableCell>
                      <StyledTableCell align='left'>{row.UpdatedBy}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                {resultsFetched === 'loading' && <></>}
              </TableBody>
            </Table>
          </div>
        </TableStyleContaner>
        {(!notesData || (notesData && notesData?.Records?.length === 0)) &&
          resultsFetched === 'fetched' && <EmptyState />}

        {notesData && notesData?.Records?.length > 0 && (
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
                    <Stack spacing={2}>
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
      </NotesTableWrapper>
    </>
  );
};

export default TransactionsTabContent;
