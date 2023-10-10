import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { OfficeHourStyle, Wrapper } from '../LocationsAndContracts.style';
import ProviderInfoCard from './ProviderInfoCard.jsx';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FaAccessibleIcon, FaClock, FaEyeSlash } from 'react-icons/fa';
import {
  Row,
  Col,
  TextWrapper,
  DateAndTime,
  Text,
  DateIconWrapper,
  TIME,
  TableHeadText,
  TableRowsText,
  AreaOfExpertiseStyle,
  OverFlowCharacters,
  SelectWrapper
} from '../LocationsAndContracts.style';
import {
  TableWrapper,
  TableHead,
  TableRows,
  Down,
  PaginationStyle
} from '../../../commonStyles/commonstyle.style';
import Grid from '@mui/material/Grid/Grid';
import widthConfigOptions from '@pega/cosmos-react-work/lib/components/ConfigurableLayout/options';
import ChevronDownIcon from '../../../common/Icons/ChevronDownIcon/index.jsx';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DropdownSelect from '../../../common/DropdownSelect/DropdownSelect.jsx';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { companiesList } from '../../../shared/CommonData.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { changeFormat, fullCompanyName } from '../../../shared/utils';
import { EmptyState, Progress } from '@pega/cosmos-react-core';

const theme = createTheme({
  palette: {
    info: {
      main: '#003863'
    }
  }
});

const LocationContractDetails = forwardRef((props, ref) => {
  const [controller, setController] = useState({
    page: 1
  });
  const { HCPID, HCFID, officeHrs, AreaOfExpertise, particpatingSpeciality } = props;
  const [MembershipData, setMembershipData] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [filter, setFilter] = useState('ALL');
  const [showRow, setShowRow] = useState(1);
  const [dropdownData, setDropdownData] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const context = 'app/context';
  const options = {
    invalidateCache: true
  };
  const parameters = {
    HCPID: HCPID,
    HCFID: HCFID,
    NumberRecords: '10',
    Index: controller.page,
    company_nm: filter === 'ALL' ? '' : filter,
    company_cd: filter === 'ALL' ? '' : filter
  };

  // const scrollToTop = useRef(null);

  // useEffect(() => {
  //   scrollToTop.current.scrollTo(0, 0);
  // });

  useEffect(() => {
    parameters.Index = controller.page;
    if (filter !== '' && filter !== 'ALL') {
      const companySplit = filter.split(/\(|\)/);
      const company_Name = companySplit[0].trim();
      const company_Code = companySplit[1];
      parameters.company_nm = company_Name;
      parameters.company_cd = company_Code;
    }
    PCore.getDataPageUtils()
      .getPageDataAsync('D_HCPLocMembership', context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          console.log('Membership Data');
          setPageCount(response.TotalRecords);
          setLoading(false);
          console.log(response);
          setMembershipData(response);
        }
      )
      .catch(error => {
        setLoading(false);
        setPageCount(0);
        console.log(error);
      });
    //scrollToTop.current.scrollTo(0, 0);
  }, [filter, controller]);

  useEffect(() => {
    PCore.getDataPageUtils()
      .getDataAsync('D_CompanyDetailsList', context)
      .then(response => {
        setDropdownData(response?.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const changeCompanyFilter = filter => {
    setLoading(true);
    setController({
      ...controller,
      page: 1
    });
    setFilter(filter);
  };
  const handlePaginationChange = (event, newPage) => {
    setLoading(true);
    setController({
      ...controller,
      page: newPage
    });
  };

  return (
    <>
      <Grid container>
        <Row>
          <Grid item xs={9}>
            <Col>
              <div className='title'>Participating Specialties</div>
              <div className='line' style={{ marginLeft: 0 }}></div>

              <TableWrapper
                style={{
                  height: particpatingSpeciality?.ParticipatingSpecialties?.length > 2 ? 312 : '',
                  width: '90%',
                  margin: '0 0 0 10px',
                  overflowY: 'auto',
                  marginBottom:
                    particpatingSpeciality?.ParticipatingSpecialties?.length > 2 ? '' : '10%'
                }}
                ref={ref}
              >
                <TableHead>
                  <TableHeadText>Participating Specialty</TableHeadText>
                  <TableHeadText>Age Limit</TableHeadText>
                  <TableHeadText>Gender</TableHeadText>
                  <TableHeadText>Division</TableHeadText>
                </TableHead>
                {particpatingSpeciality &&
                  particpatingSpeciality?.ParticipatingSpecialties?.map((specialty, index) => (
                    <TableRows key={index}>
                      <TableRowsText>
                        {specialty.ParticipatingSpeciality &&
                        specialty.ParticipatingSpeciality != ''
                          ? specialty.ParticipatingSpeciality
                          : '--'}
                      </TableRowsText>
                      <TableRowsText>
                        {specialty.Age && specialty.Age != '' ? specialty.Age : '--'}
                      </TableRowsText>
                      <TableRowsText>
                        {specialty.Gender && specialty.Gender != '' ? specialty.Gender : '--'}
                      </TableRowsText>
                      <TableRowsText>
                        {specialty.Division && specialty.Division != '' ? specialty.Division : '--'}
                      </TableRowsText>
                    </TableRows>
                  ))}
              </TableWrapper>
            </Col>
            <Col>
              <Grid container>
                <Grid item xs={10}>
                  <div className='title'>Membership(s) & Directory</div>
                  <div className='line' style={{ marginLeft: 0 }}></div>
                </Grid>
                <Grid item xs={2} title={filter}>
                  <SelectWrapper>
                    <DropdownSelect
                      label={'Company'}
                      changeEvent={changeCompanyFilter}
                      data={dropdownData?.map(obj => {
                        return fullCompanyName(obj);
                      })}
                    />
                  </SelectWrapper>
                </Grid>
              </Grid>

              <TableWrapper
                style={{
                  height: MembershipData?.MembershipDirectory?.length > 2 ? 312 : '',
                  width: '90%',
                  margin: '0 0 0 10px',
                  overflowY: 'auto',
                  tableLayout: 'fixed'
                }}
                ref={ref}
              >
                <TableHead>
                  <TableHeadText>LOB's</TableHeadText>
                  <TableHeadText>Directory Status</TableHeadText>
                  <TableHeadText>Accepting Memberships</TableHeadText>
                  <TableHeadText>#&nbsp;Members&nbsp;by Company</TableHeadText>
                  <TableHeadText>Capacity</TableHeadText>
                  <TableHeadText></TableHeadText>
                </TableHead>
                {loading && (
                  <div style={{ marginLeft: '50%', marginTop: '5%' }}>
                    <Progress
                      variant='ring'
                      placement='inline'
                      message='Loading'
                      visible={loading}
                    />
                  </div>
                )}
                {!loading && MembershipData && pageCount === 0 && <EmptyState />}
                {!loading &&
                  MembershipData &&
                  MembershipData?.MembershipDirectory?.map((membership, index) => (
                    <>
                      <TableRows key={index}>
                        <TableRowsText>
                          {membership?.ParticipatingPlanName
                            ? membership?.ParticipatingPlanName
                            : '--'}
                        </TableRowsText>
                        <TableRowsText>
                          {membership?.ReasonCode && membership?.ReasonCode != ''
                            ? 'Excluded'
                            : 'Included'}
                        </TableRowsText>
                        <TableRowsText>
                          {membership?.AcceptingMemberships
                            ? membership?.AcceptingMemberships
                            : '--'}
                        </TableRowsText>
                        <TableRowsText>
                          {membership?.MembersByCompany ? membership?.MembersByCompany : '--'}
                        </TableRowsText>
                        <TableRowsText>{membership?.Capacity}</TableRowsText>
                        <TableRowsText>
                          {membership?.ReasonCode && membership?.ReasonCode != '' ? (
                            <div
                              style={{ maxWidth: '800px', display: 'flex', justifyContent: 'end' }}
                            >
                              <Down
                                onClick={() => {
                                  setOpen(open => !open);
                                  setShowRow(index);
                                }}
                              >
                                {open && index === showRow ? (
                                  <KeyboardArrowUpIcon />
                                ) : (
                                  <KeyboardArrowDownIcon />
                                )}
                              </Down>
                            </div>
                          ) : (
                            <></>
                          )}
                        </TableRowsText>
                      </TableRows>
                      {open && index === showRow && (
                        <TableRows style={{ marginTop: '-18px' }}>
                          <Grid container>
                            <Grid item xs={12}>
                              <TableHeadText style={{ textAlign: 'start' }}>Reason</TableHeadText>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              style={{ fontWeight: 600, fontSize: '1rem', color: 'black' }}
                            >
                              {`${membership?.Reason ? membership.Reason : '--'}(${
                                membership.ReasonCode ? membership.ReasonCode : '--'
                              })`}
                            </Grid>
                          </Grid>
                        </TableRows>
                      )}
                    </>
                  ))}
              </TableWrapper>
              <ThemeProvider theme={theme}>
                <PaginationStyle>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={10}>
                        <div className='nav'>
                          {pageCount != 0 && (
                            <Stack spacing={2} style={{ marginLeft: '100px' }}>
                              <Pagination
                                sx={{ button: { color: '#ffffff' } }}
                                color='info'
                                hideNextButton
                                hidePrevButton
                                count={Math.ceil(pageCount / 10)}
                                page={controller.page}
                                onChange={handlePaginationChange}
                              />
                            </Stack>
                          )}
                        </div>
                      </Grid>
                    </Grid>
                  </Box>
                </PaginationStyle>
              </ThemeProvider>
            </Col>
          </Grid>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <div className='title'>Area of Expertise</div>
                  <div className='header-line'></div>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <AreaOfExpertiseStyle>
                  {AreaOfExpertise && AreaOfExpertise[0]
                    ? AreaOfExpertise?.map((item, index) => (
                        <Text style={{ fontWeight: 500, color: '#333333', opacity: 1 }}>
                          {item?.mixedValue}
                        </Text>
                      ))
                    : '--'}
                </AreaOfExpertiseStyle>
              </Grid>
              <Grid item xs={12} marginTop={5}>
                <Box>
                  <div className='title'>Office Hours</div>
                  <div className='header-line'></div>
                </Box>
                <OfficeHourStyle>
                  <DateIconWrapper>
                    <FaClock className='clock'></FaClock>
                    <p className='days'>Monday</p>
                  </DateIconWrapper>
                  {officeHrs?.Monday != undefined && officeHrs?.Monday.length > 0 ? (
                    officeHrs?.Monday?.map((time, index) =>
                      time?.pyValue && time?.pyValue != '' ? (
                        <TIME>{changeFormat(time.pyValue)}</TIME>
                      ) : (
                        <TIME>--</TIME>
                      )
                    )
                  ) : (
                    <TIME>--</TIME>
                  )}

                  <DateIconWrapper>
                    <FaClock className='clock'></FaClock>
                    <p className='days'>Tuesday</p>
                  </DateIconWrapper>
                  {officeHrs?.Tuesday != undefined && officeHrs?.Tuesday.length > 0 ? (
                    officeHrs?.Tuesday?.map((time, index) =>
                      time?.pyValue && time?.pyValue != '' ? (
                        <TIME>{changeFormat(time.pyValue)}</TIME>
                      ) : (
                        <TIME>--</TIME>
                      )
                    )
                  ) : (
                    <TIME>--</TIME>
                  )}

                  <DateIconWrapper>
                    <FaClock className='clock'></FaClock>
                    <p className='days'>Wednesday</p>
                  </DateIconWrapper>
                  {officeHrs?.Wednesday != undefined && officeHrs?.Wednesday.length > 0 ? (
                    officeHrs?.Wednesday?.map((time, index) =>
                      time?.pyValue && time?.pyValue != '' ? (
                        <TIME>{changeFormat(time.pyValue)}</TIME>
                      ) : (
                        <TIME>--</TIME>
                      )
                    )
                  ) : (
                    <TIME>--</TIME>
                  )}
                  <DateIconWrapper>
                    <FaClock className='clock'></FaClock>
                    <p className='days'>Thursday</p>
                  </DateIconWrapper>
                  {officeHrs?.Thursday != undefined && officeHrs?.Thursday.length > 0 ? (
                    officeHrs?.Thursday?.map((time, index) =>
                      time?.pyValue && time?.pyValue != '' ? (
                        <TIME>{changeFormat(time.pyValue)}</TIME>
                      ) : (
                        <TIME>--</TIME>
                      )
                    )
                  ) : (
                    <TIME>--</TIME>
                  )}
                  <DateIconWrapper>
                    <FaClock className='clock'></FaClock>
                    <p className='days'>Friday</p>
                  </DateIconWrapper>
                  {officeHrs?.Friday != undefined && officeHrs?.Friday.length > 0 ? (
                    officeHrs?.Friday?.map((time, index) =>
                      time?.pyValue && time?.pyValue != '' ? (
                        <TIME>{changeFormat(time.pyValue)}</TIME>
                      ) : (
                        <TIME>--</TIME>
                      )
                    )
                  ) : (
                    <TIME>--</TIME>
                  )}

                  <DateIconWrapper>
                    <FaClock className='clock'></FaClock>
                    <p className='days'>Saturday</p>
                  </DateIconWrapper>
                  {officeHrs?.Saturday != undefined && officeHrs?.Saturday.length > 0 ? (
                    officeHrs?.Saturday?.map((time, index) =>
                      time?.pyValue && time?.pyValue != '' ? (
                        <TIME>{changeFormat(time.pyValue)}</TIME>
                      ) : (
                        <TIME>--</TIME>
                      )
                    )
                  ) : (
                    <TIME>--</TIME>
                  )}
                  <DateIconWrapper>
                    <FaClock className='clock'></FaClock>
                    <p className='days'>Sunday</p>
                  </DateIconWrapper>
                  {officeHrs?.Sunday != undefined && officeHrs?.Sunday.length > 0 ? (
                    officeHrs?.Sunday?.map((time, index) =>
                      time?.pyValue && time?.pyValue != '' ? (
                        <TIME>{changeFormat(time.pyValue)}</TIME>
                      ) : (
                        <TIME>--</TIME>
                      )
                    )
                  ) : (
                    <TIME>--</TIME>
                  )}
                </OfficeHourStyle>
              </Grid>
            </Grid>
          </Grid>
        </Row>
      </Grid>
    </>
  );
});

export default LocationContractDetails;
