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

// import ChevronDownIcon from "../../common/Icons/ChevronDownIcon";

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 10px !important',
    marginTop: '6px',
    width: '99%'
  }
}));

const TransactionsTabContent = props => {
  const [isLoaded, setisLoaded] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [showMore, setShowMore] = useState(false);
  const firstIndex = 0;
  const tableRef = useRef(null);

  useEffect(() => {
    tableRef.current.scrollTo(0, 0);
  });

  const handleChange = (event, value) => {
    console.log('handle change');
  };

  //Change width
  const changeWidth = e => {
    setPageSize(parseInt(e.target.value, 10));
  };

  return (
    <>
      <NotesTableWrapper>
        <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
          <div ref={tableRef} style={{ height: '420px', overflow: 'auto' }}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table' stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='left' sx={{ ml: 10 }}>
                    Date/Time
                  </StyledTableCell>
                  <StyledTableCell align='left' style={{ paddingLeft: '150px' }}>
                    Transactions
                  </StyledTableCell>
                  <StyledTableCell align='center'>Case</StyledTableCell>
                  <StyledTableCell align='center'>Updated by</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoaded &&
                  data &&
                  data.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component='th' sx={{ ml: 10 }}>
                        <div>{row.Date}</div>
                        <div style={{ paddingLeft: '10px' }}>{row?.Time}</div>
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {row.Transcations.length >= 60 ? (
                          <div style={{ maxWidth: '800px' }}>
                            <Down onClick={() => setShowMore(previous => !previous)}>
                              {/* <ChevronDownIcon /> */}
                            </Down>
                            <OverFlowCharacters>
                              {showMore
                                ? row.Transcations
                                : `${row.Transcations.substring(0, 70)}...`}
                            </OverFlowCharacters>
                          </div>
                        ) : (
                          row.Transcations
                        )}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{row.Case}</StyledTableCell>
                      <StyledTableCell align='center'>{row.UpdatedBy}</StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TableStyleContaner>

        {isLoaded && (
          <PaginationStyle>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <div className='limit'>
                    <div className='title'>Showing</div>
                    <select onChange={changeWidth} value={pageSize} className='selection'>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={40}>40</option>
                      <option value={50}>50</option>
                    </select>
                    <div className='title'>
                      of&nbsp;{tabState.tabs[tabState.activeTab].hcpTranscations.Records.length}
                    </div>
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
                        count={Math.ceil(
                          tabState.tabs[tabState.activeTab].hcpTranscations.Records.length /
                            pageSize
                        )}
                        onChange={handleChange}
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
