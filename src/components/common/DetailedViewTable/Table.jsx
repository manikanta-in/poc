import { useEffect, useState, useRef } from 'react';
import {
  PaginationStyle,
  StyledTableCell,
  StyledTableRow,
  NoRecords
} from '../../commonStyles/commonstyle.style';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { EmptyState } from '@pega/cosmos-react-core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { errorMessage } from '../../shared/CommonData.js';
import ErrorPage from '../../common/Error/ErrorPage.jsx';

const theme = createTheme({
  palette: {
    info: {
      main: '#003863'
    }
  }
});

const TableStyleContainer = styled(({ tableWidth, ...props }) => <TableContainer {...props} />)(
  ({ tableWidth }) => ({
    table: {
      borderCollapse: 'separate !important',
      borderSpacing: '0px 10px !important',
      marginTop: '6px',
      width: tableWidth,
      tableLayout: 'fixed'
    }
  })
);

const TableView = props => {
  const {
    meta,
    data,
    filterData,
    errorMsg,
    pageCount,
    isLoading,
    resultsFetched,
    pageData,
    handleRowClick,
    onChangePage,
    onChangePageSize,
    tableWidth
  } = props;
  const tableRef = useRef(null);

  const handlePaginationChange = (event, newPage) => {
    onChangePage(newPage);
  };

  const handleChangePageSize = event => {
    onChangePageSize(event.target.value);
  };

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTo(0, 0);
    }
  });

  const getColumnValue = (row, column) => {
    return row[`${column.fieldId}`] && row[`${column.fieldId}`] != ''
      ? row[`${column.fieldId}`]
      : '--';
  };

  const getStyledColumn = (row, column) => {
    return (
      <StyledTableCell
        align='left'
        style={{ wordWrap: 'break-word' }}
        title={getColumnValue(row, column)}
      >
        <div>{getColumnValue(row, column)}</div>
      </StyledTableCell>
    );
  };

  return (
    <>
      <Grid container>
        <TableStyleContainer
          component={Paper}
          style={{ border: 'none', boxShadow: 'none' }}
          tableWidth={tableWidth}
        >
          <div ref={tableRef} style={{ height: '58vh', marginTop: 15, overflow: 'auto' }}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table' stickyHeader>
              <TableHead>
                <TableRow>
                  {meta.columns.map(column => (
                    <StyledTableCell
                      align={column.align}
                      style={{ width: column?.width ? column.width : '', wordWrap: 'break-word' }}
                      title={column.label}
                    >
                      {column.label}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.length > 0 &&
                  data.map((row, index) => {
                    return (
                      <StyledTableRow key={index}>
                        {meta.columns.map(column => getStyledColumn(row, column))}
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
              {(!data?.length || data?.length === 0) && (
                <div style={{ position: 'absolute', left: '50%', marginTop: '2%' }}>
                  <EmptyState />
                </div>
              )}
            </Table>
          </div>
        </TableStyleContainer>

        {/* {data && data.length > 0 && (
              <PaginationStyle style={{ marginTop: '20px' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <div className='limit'>
                        <div className='title'>Showing</div>
                        <select
                          onChange={handleChangePageSize}
                          value={pageData.rowsPerPage}
                          className='selection'
                        >
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                          <option value={30}>30</option>
                          <option value={40}>40</option>
                          <option value={50}>50</option>
                        </select>
                        <div className='title'> of&nbsp; {pageCount}</div>
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
                            count={Math.ceil(pageCount / pageData.rowsPerPage)}
                            page={pageData.page}
                            onChange={handlePaginationChange}
                          />
                        </Stack>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </PaginationStyle>
            )}*/}
      </Grid>
      {(!data || data.length === 0) && resultsFetched === 'fetched' && errorMsg === '' && (
        <EmptyState style={{ marginTop: '-250px' }} />
      )}
    </>
  );
};

export default TableView;
