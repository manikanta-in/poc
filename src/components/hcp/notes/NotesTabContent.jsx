import React, { useState, useEffect, useRef } from 'react';
import { NotesTableWrapper, SelectWrapper, IconWrapper } from './notes.style';
import Model from '../../common/Model/model.jsx';
import useModal from '../../common/Model/useModal.jsx';
import NotesModelForm from './ModelForm.jsx';
import AddIcon from '../../common/Icons/AddIcon/index.jsx';
import {
  PaginationStyle,
  StyledTableCell,
  StyledTableRow,
  Down,
  OverFlowCharacters
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
import { EmptyState, ErrorState } from '@pega/cosmos-react-core';
import { changeFormat, changeDateFormate } from '../../shared/utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DropdownSelect from '../../common/DropdownSelect/DropdownSelect.jsx';
import ChevronDownIcon from '../../common/Icons/ChevronDownIcon/index.jsx';

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
    borderSpacing: '0px 10px !important',
    marginTop: '-15px',
    width: '99%'
  }
}));

const NotesTabContent = props => {
  const { setErrorMsg } = props;
  const { isShowing, toggle } = useModal();
  const [showMore, setShowMore] = useState(false);

  const tableRef = useRef(null);

  useEffect(() => {
    tableRef.current.scrollTo(0, 0);
  });

  const [controller, setController] = useState({
    page: 1,
    rowsPerPage: 10
  });
  const [legacyIdValue, setLegacyIdValue] = useState([]);

  const handleChange = legacyId => {
    setLegacyIdValue(legacyId);
  };

  //   useEffect(() => {
  //     setSelectedValue(props.legacyIds?.ProfessionalDetails?.LegacyProviderID);
  //   }, [props.legacyIds]);

  const dataPageName = 'D_HCPNotes';
  const context = 'app/context';
  const parameters = {
    HCPID: props.HcpID,
    Index: controller.page,
    NumberRecords: controller.rowsPerPage,
    LegacyID: legacyIdValue === 'ALL' ? [] : legacyIdValue
  };
  const options = {
    invalidateCache: true
  };

  const [notesData, setNotesData] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
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
    setErrorMsg('');

    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response => {
        console.log('Notes details', response);
        setNotesData(response);
        setPageCount(response.TotalRecords);
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
        setApiError(true);
      });
    //searchDB();
  }, [controller, legacyIdValue]);

  return (
    <ThemeProvider theme={theme}>
      <NotesTableWrapper>
        <Grid container style={{ marginTop: '-1%' }}>
          <Grid item xs={4}>
            {/* <Box sx={{ flexGrow: 1, mb: '5px' }}>
              <div className='title' style={{ marginBottom: 4 }}>
                Notes
              </div>
              <div className='line'></div>
            </Box> */}
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={2.5}>
            <SelectWrapper>
              <DropdownSelect
                changeEvent={handleChange}
                label={'Legacy IDs'}
                data={props?.legacyIds}
              />
            </SelectWrapper>
          </Grid>
          <Grid item xs={2}>
            <IconWrapper>
              <AddIcon clickAdd={toggle} />
            </IconWrapper>
          </Grid>
        </Grid>

        {/* <Model isShowing={isShowing} hide={toggle}>
          <NotesModelForm name={'notes'} hide={toggle} />
        </Model> */}

        <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
          <div ref={tableRef} style={{ height: '410px', overflow: 'auto', marginTop: 15 }}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table' stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='left'>Notes</StyledTableCell>
                  <StyledTableCell align='left'>Legacy ID</StyledTableCell>
                  <StyledTableCell align='left'>
                    Created <br /> Date / Time
                  </StyledTableCell>
                  <StyledTableCell align='left'>Created by</StyledTableCell>
                  <StyledTableCell align='left'>
                    Updated <br /> Date / Time
                  </StyledTableCell>
                  <StyledTableCell align='left'>Updated by</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notesData &&
                  notesData?.Notes?.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell align='left' style={{ maxWidth: '200px' }}>
                        {row.Notes2.length >= 60 ? (
                          <div style={{ maxWidth: '400px' }}>
                            <Down onClick={() => setShowMore(previous => !previous)}>
                              <ChevronDownIcon />
                            </Down>
                            <OverFlowCharacters>
                              {showMore ? row.Notes2 : `${row.Notes2.substring(0, 70)}...`}
                            </OverFlowCharacters>
                          </div>
                        ) : row.Notes2 ? (
                          row.Notes2
                        ) : (
                          '--'
                        )}
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {row.LegacyID ? row.LegacyID : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        <div>{row.CreatedDate ? changeDateFormate(row.CreatedDate) : '--'}</div>
                        <div style={{ paddingLeft: '10px' }}>
                          {row?.CreatedTime ? changeFormat(row?.CreatedTime) : ''}
                        </div>
                      </StyledTableCell>

                      <StyledTableCell align='left'>
                        {row.CreatedBy ? row.CreatedBy : '--'}
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        <div>{row.UpdatedDate ? changeDateFormate(row.UpdatedDate) : '--'}</div>
                        <div style={{ paddingLeft: '10px' }}>
                          {row?.UpdatedTime ? changeFormat(row?.UpdatedTime) : ''}
                        </div>
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {row.UpdatedBy ? row.UpdatedBy : '--'}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
            {(!notesData || notesData?.TotalRecords === 0 || !notesData?.Notes) &&
              resultsFetched === 'fetched' && <EmptyState />}
            {apiError && <ErrorState message='API Error' />}
          </div>
        </TableStyleContaner>

        {notesData && notesData?.Notes?.length > 0 && (
          <PaginationStyle style={{ marginTop: '26px' }}>
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
    </ThemeProvider>
  );
};

export default NotesTabContent;
