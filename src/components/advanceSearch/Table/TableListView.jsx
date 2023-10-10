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

import StyledTable from './styles';
import { FullAddress, FullName, constructAddress } from '../../shared/utils';
import { Progress, EmptyState } from '@pega/cosmos-react-core';
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

const TableStyleContainer = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 10px !important',
    marginTop: '6px',
    width: '100%'
  }
}));

const TableListView = props => {
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
    onChangePageSize
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

  const getStyle = (row, column) => {
    const fieldId = column.fieldId;
    switch (fieldId) {
      case 'NetworkStatus':
        return {
          background:
            row[`${fieldId}`] === 'In-Network'
              ? '#529535'
              : row[`${fieldId}`] === 'Out Of Network' ||
                row[`${fieldId}`] === 'Out-Network' ||
                row[`${fieldId}`].toLowerCase() === 'out-of-network'
              ? '#EA4040'
              : row[`${fieldId}`] === 'Inactive'
              ? '#F7911D'
              : row[`${fieldId}`] === 'Pending'
              ? 'rgb(242 147 57)'
              : '',
          color:
            row[`${fieldId}`] === 'In-Network'
              ? '#FFFFFF'
              : row[`${fieldId}`] === 'Out Of Network' ||
                row[`${fieldId}`] === 'Out-Network' ||
                row[`${fieldId}`].toLowerCase() === 'out-of-network'
              ? '#FFFFFF'
              : row[`${fieldId}`] === 'Inactive'
              ? '#FFFFFF'
              : row[`${fieldId}`] === 'Pending'
              ? '#FFFFFF'
              : 'black',

          padding: '5px 12px 5px',
          borderRadius: 25,
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: '0.875rem',
          width: 180
        };
      case 'Address':
        return {
          //textAlign: 'center',
          //justifyContent: 'center',
          width: 400
        };
      case 'EntityName':
        return {
          //textAlign: 'center',
          //justifyContent: 'center',
          width: 200
        };
      case 'Name':
        return {
          //textAlign: 'center',
          //justifyContent: 'center',
          width: 200
        };
      case 'VendorID':
        return {
          //textAlign: 'center',
          //justifyContent: 'center',
          width: 200
        };
      default:
        return {
          //textAlign: 'center',
          //justifyContent: 'center',
          width: 125
        };
    }
  };

  const getColumnValue = (row, column) => {
    const fieldId = column.fieldId;
    switch (fieldId) {
      case 'Address':
        return constructAddress(row);
      case 'Name':
        return FullName(row);
      default:
        return row[`${column.fieldId}`] != '' ? row[`${column.fieldId}`] : '--';
    }
  };

  const getStyledColumn = (row, column) => {
    return (
      <StyledTableCell align='left'>
        <div style={getStyle(row, column)}>{getColumnValue(row, column)}</div>
      </StyledTableCell>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledTable>
        <div className='advancesearch'>
          <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />
          <div style={{ marginTop: 20 }}>
            <TableStyleContainer component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
              <div ref={tableRef} className='table_height'>
                {!errorMsg?.pyAdviceText && (
                  <Table sx={{ minWidth: 700 }} aria-label='customized table' stickyHeader>
                    <TableHead>
                      <TableRow>
                        {meta.columns.map(column => (
                          <StyledTableCell align={column.align}>{column.label}</StyledTableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data &&
                        data.length > 0 &&
                        data.map((row, index) => {
                          return (
                            <StyledTableRow
                              sx={{ cursor: 'pointer' }}
                              key={index}
                              onClick={() => handleRowClick(row)}
                            >
                              {meta.columns.map(column => getStyledColumn(row, column))}
                            </StyledTableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                )}
                {errorMsg?.pyAdviceText && (
                  <Grid item xs={12}>
                    <ErrorPage errorMsg={errorMsg} />
                  </Grid>
                )}
              </div>
            </TableStyleContainer>

            {(!data || data.length === 0) && resultsFetched === 'fetched' && errorMsg === '' && (
              <EmptyState style={{ marginTop: '-250px' }} />
            )}

            {data && data.length > 0 && (
              <PaginationStyle>
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
            )}
          </div>
        </div>
      </StyledTable>
    </ThemeProvider>
  );
};

export default TableListView;
