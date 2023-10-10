import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import OrgCard from '../../common/orgCard/orgCard.jsx';
import { Progress, Image } from '@pega/cosmos-react-core';

import { Section, Detail, Contract, ProviderWrapper, DisableContract } from './styles.style';
import {
  NetworkAccess,
  Container,
  StyledTableRow,
  PaginationStyle
} from '../../commonStyles/commonstyle.style';
import Pagination from '@mui/material/Pagination';
import OrgImg from '../../images/organization.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { GiNotebook } from 'react-icons/gi';
import AmendLogo from '../../images/todo-solid.svg';
import DisabledLogo from '../../images/todo-disabled.svg';
import { changeDateFormate } from '../../shared/utils.js';
import ErrorPage from '../../common/Error/ErrorPage.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    info: {
      main: '#003863'
    }
  }
});

const OrganizationDetails = props => {
  const dataPageName = 'D_HCOOrgDetails';
  const context = 'app/context';
  const parameters = { ID: props.HcoID };
  const options = {
    invalidateCache: true
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [resultsFetched, setResultsFetched] = useState(false);

  const [orgData, setOrgData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [enabledHCOList, setEnabledHCOList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [enableButton, setEnableButton] = useState(false);
  const [canInitiateAmendment, setCanInitiateAmendment] = useState(false);

  const [loading, setLoading] = useState(false);
  const targetContext = 'app';
  const className = 'HF-UPE-Work-ProviderMgmt-Contract';

  useEffect(() => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response => {
        console.log('Organization landing details', response);
        setOrgData(response);
        props.setPanelOrgData(response);
        if (response?.ErrorPage) {
          setErrorMsg(response.ErrorPage);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setResultsFetched('no results');
        setIsLoading(false);
      });

    PCore.getDataPageUtils()
      .getPageDataAsync('D_CheckPrivilege', context, {}, options)
      .then(response => {
        setCanInitiateAmendment(response.CanInitiateAmendment);
      })
      .catch(error => {
        console.log(error);
      });
    //searchDB();
  }, []);

  useEffect(() => {
    if (orgData?.Details?.OrganizationID) {
      PCore.getDataPageUtils()
        .getDataAsync('D_GetEnabledHCOs', context, {
          HCOID: orgData.Details?.OrganizationID,
          HCOName: orgData.Details?.OrganizationName,
          TaxID: orgData.Details?.TaxID
        })
        .then(response => {
          setEnabledHCOList(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [orgData]);

  useEffect(() => {
    if (enabledHCOList.resultCount > 0) {
      setEnableButton(true);
    }
  }, [enabledHCOList, orgData, canInitiateAmendment]);
  const headerNames = [
    { name: 'Tax ID', space: 3 },
    { name: 'NPI #', space: 3 },
    { name: 'DEA #', space: 3 },
    { name: 'Legacy Provider ID', space: 3 },
    { name: 'Delegation Status', space: 3 },
    { name: 'HCO Type', space: 3 },
    { name: 'Medicaid #', space: 3 },
    { name: 'Medicare #', space: 3 },
    { name: '# HCPs', space: 3 },
    { name: '# PCPs', space: 3 },
    { name: '# Specialists', space: 3 },
    { name: 'POrg', space: 3 }
  ];
  const tableValues = [
    'TaxID',
    'NPI',
    'DEA',
    'LegacyProviderID',
    'Delegated',
    'HCOType',
    'MedicaidList',
    'Medicare',
    'HCPs',
    'PCPs',
    'Specialties',
    'Porg'
  ];

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
    fontFamily: 'Museo Sans, Open Sans',
    fontWeight: 500
  }));

  const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
    table: {
      borderCollapse: 'separate !important',
      borderSpacing: '0px 5px !important',
      marginTop: '-15px'
    }
  }));

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

  const changeMenu = selectedMenuIndex => {
    props.handleTabChange(selectedMenuIndex);
  };

  const orgRelationshipData = orgData?.OrganizationRelationship;
  const totalPages = Math.ceil(orgData?.OrganizationRelationship?.length / itemsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const relationshipsToDisplay = orgRelationshipData?.slice(startIndex, endIndex);

  const createCase = () => {
    setLoading(true);
    const caseOptions = {
      pageName: 'pyDetails',
      startingFields: {
        ProviderDetails: {
          OrganizationID: orgData.Details.OrganizationID,
          LName: orgData.Details.OrganizationName,
          TIN: orgData.Details.TaxID
        }
      }
    };

    const createWorkPromise = PCore.getMashupApi().createCase(
      className,
      targetContext,
      caseOptions
    );

    createWorkPromise
      .then(() => {
        setLoading(false);
        console.log('case created');
      })
      .catch(() => {
        setLoading(false);
        console.log('case creation failed');
      });
  };
  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />
      <Progress variant='ellipsis' message='Creating Case...' visible={loading} />
      {errorMsg?.pyAdviceText && (
        <Grid item xs={12}>
          <ErrorPage errorMsg={errorMsg} />
        </Grid>
      )}
      {!errorMsg?.pyAdviceText && (
        <Detail>
          <>
            {/* <OrgCard data={orgData} /> */}
            <Box className='info'>
              <Section style={{ paddingLeft: '2%' }}>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container sx={{ mt: '15px' }}>
                        <Grid item xs={5.5}>
                          <div className='title' style={{ marginBottom: 4 }}>
                            Organization&nbsp;Details
                          </div>
                          <div className='line'></div>
                        </Grid>
                        <Grid item xs={3.5}>
                          {orgData?.Details?.NetworkStatus ? (
                            <NetworkAccess
                              color={
                                orgData?.Details?.NetworkStatus === 'In-Network'
                                  ? 'green'
                                  : orgData?.Details?.NetworkStatus === 'Out-Network' ||
                                    orgData?.Details?.NetworkStatus.toLowerCase() ===
                                      'out-of-network'
                                  ? 'red'
                                  : orgData?.Details?.NetworkStatus === 'Inactive'
                                  ? 'orange'
                                  : ''
                              }
                            >
                              <p className='status-text'>
                                {orgData?.Details?.NetworkStatus ?? '--'}
                              </p>
                            </NetworkAccess>
                          ) : (
                            <></>
                          )}
                        </Grid>

                        <Grid item xs={3} style={{ marginBottom: '3px' }}>
                          <div
                            className='label'
                            style={{ marginBottom: '-2px', fontSize: '0.95rem' }}
                          >
                            Effective from
                          </div>
                          <div className='value' style={{ fontSize: '1.1rem' }}>
                            {orgData?.Details?.EffectiveFrom
                              ? changeDateFormate(orgData?.Details?.EffectiveFrom)
                              : '--'}
                          </div>
                        </Grid>
                        <Grid item xs={2}></Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1, m: '4px' }}>
                      <Grid container spacing={2} sx={{ mt: '5px' }}>
                        <Grid item xs={12}>
                          <Grid container>
                            {headerNames.map((item, index) => (
                              <>
                                {item.name === 'POrg' ? (
                                  <>
                                    <Grid item xs={4} sm={4} lg={3} sx={{ mb: '35px' }}>
                                      <div className='label' style={{ marginBottom: 4 }}>
                                        {item.name}
                                      </div>
                                      <div className={`value`}>
                                        {orgData?.Details?.[tableValues[index]]
                                          ? orgData?.Details?.[tableValues[index]]
                                          : '--'}
                                      </div>
                                    </Grid>
                                  </>
                                ) : (
                                  <>
                                    <Grid item xs={4} sm={3} lg={item.space} sx={{ mb: '35px' }}>
                                      <div className='label' style={{ marginBottom: 4 }}>
                                        {item.name}
                                      </div>
                                      {item.name === '# HCPs' ||
                                      item.name === '# PCPs' ||
                                      item.name === '# Specialists' ? (
                                        <div
                                          className={
                                            orgData?.Details?.[tableValues[index]] != '' ||
                                            orgData?.Details?.[tableValues[index]] != 0
                                              ? `value link`
                                              : 'value'
                                          }
                                          onClick={() => changeMenu('2')}
                                        >
                                          {orgData?.Details?.[tableValues[index]] != '' ||
                                          orgData?.Details?.[tableValues[index]] != 0
                                            ? orgData?.Details?.[tableValues[index]]
                                            : '--'}
                                        </div>
                                      ) : (
                                        <ProviderWrapper
                                          className={`value`}
                                          legacyProviderIds={
                                            (item.name == 'Legacy Provider ID' &&
                                              orgData?.Details?.LegacyProviderID?.length >= 3) ||
                                            (item.name == 'DEA #' &&
                                              orgData?.Details?.DEA?.length >= 3) ||
                                            (item.name == 'Medicaid #' &&
                                              orgData?.Details?.MedicaidList?.length >= 3)
                                          }
                                          style={{
                                            height:
                                              (item.name === 'Legacy Provider ID' &&
                                                orgData?.Details?.LegacyProviderID?.length >= 3) ||
                                              (item.name == 'DEA #' &&
                                                orgData?.Details?.DEA?.length >= 3) ||
                                              (item.name == 'Medicaid #' &&
                                                orgData?.Details?.MedicaidList?.length >= 3)
                                                ? '80px'
                                                : '',
                                            width:
                                              (item.name == 'Legacy Provider ID' &&
                                                orgData?.Details?.LegacyProviderID?.length >= 3) ||
                                              (item.name == 'DEA #' &&
                                                orgData?.Details?.DEA?.length >= 3) ||
                                              (item.name == 'Medicaid #' &&
                                                orgData?.Details?.MedicaidList?.length >= 3)
                                                ? '150px'
                                                : ''
                                          }}
                                        >
                                          {item?.name === 'Legacy Provider ID' ||
                                          item?.name === 'DEA #' ||
                                          item?.name === 'Medicaid #'
                                            ? orgData?.Details?.[tableValues[index]] ===
                                                undefined ||
                                              orgData?.Details?.[tableValues[index]] === null ||
                                              orgData?.Details?.[tableValues[index]] === '' ||
                                              orgData?.Details?.[tableValues[index]]?.length === 0
                                              ? '--'
                                              : orgData?.Details?.[tableValues[index]]?.map(
                                                  (providers, index1) => (
                                                    <p>
                                                      {providers}
                                                      <br />
                                                    </p>
                                                  )
                                                )
                                            : orgData?.Details?.[tableValues[index]]
                                            ? orgData?.Details?.[tableValues[index]]
                                            : '--'}
                                        </ProviderWrapper>
                                      )}
                                    </Grid>
                                  </>
                                )}
                              </>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={2}>
                    <Grid container>
                      {enableButton && canInitiateAmendment && (
                        <Contract onClick={() => createCase()}>
                          <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={3}>
                              <div className='amendimage'>
                                <Image alt='AmendContract-Logo' src={AmendLogo} height={100} />
                              </div>
                            </Grid>
                            <Grid item xs={6} className='label-div'>
                              Manage&nbsp;Contract
                            </Grid>
                          </Grid>
                        </Contract>
                      )}
                      {!enableButton && canInitiateAmendment && (
                        <DisableContract>
                          <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={3}>
                              <div className='amendimage'>
                                <Image alt='AmendContract-Logo' src={DisabledLogo} height={100} />
                              </div>
                            </Grid>
                            <Grid item xs={6} className='label-div'>
                              Manage&nbsp;Contract
                            </Grid>
                          </Grid>
                        </DisableContract>
                      )}
                    </Grid>
                    <div
                      style={{
                        height: 230,
                        width: 150,
                        marginTop: '30px',
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <Image alt='Organization Logo' src={OrgImg} width={130} height={130} />
                    </div>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: '10px' }}>
                  <Grid item xs={12}>
                    <Box sx={{ flexGrow: 1, mb: '10px' }}>
                      <div className='title' style={{ marginBottom: 4 }}>
                        HF Delivery Systems Managers
                      </div>
                      <div className='line'></div>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={4} sm={3} lg={2} sx={{ mb: '35px' }}>
                        <div className='label' style={{ marginBottom: 4 }}>
                          {'Director'}
                        </div>
                        <div className='value'>
                          {orgData?.HFDeliverySystemsManager?.Director != ''
                            ? orgData?.HFDeliverySystemsManager?.Director
                            : '--'}
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={3} lg={2} sx={{ mb: '35px' }}>
                        <div className='label' style={{ marginBottom: 4 }}>
                          {'Account Manager'}
                        </div>
                        <div className='value'>
                          {orgData?.HFDeliverySystemsManager?.AccountManager != ''
                            ? orgData?.HFDeliverySystemsManager?.AccountManager
                            : '--'}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: '10px' }}>
                  <Grid item xs={12}>
                    <Box sx={{ flexGrow: 1, mb: '10px' }}>
                      <div className='title' style={{ marginBottom: 4 }}>
                        Hospital Affiliations
                      </div>
                      <div className='line'></div>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      {orgData?.HospitalAffiliations ? (
                        orgData?.HospitalAffiliations === undefined ||
                        orgData?.HospitalAffiliations === '' ||
                        orgData?.HospitalAffiliations === null ||
                        orgData?.HospitalAffiliations?.length === 0 ? (
                          <Grid item xs={12} style={{ paddingLeft: '20px' }}>
                            {'--'}
                          </Grid>
                        ) : (
                          orgData?.HospitalAffiliations?.map(item => (
                            <Grid item xs={12} sx={{ mb: '35px' }}>
                              <div
                                className='value list'
                                style={{
                                  height: item?.length > 200 ? '275px' : '',
                                  width: item?.length > 200 ? '99%' : '',
                                  overflowY: item?.length > 200 ? 'scroll' : 'hidden'
                                }}
                              >
                                {item}
                              </div>
                            </Grid>
                          ))
                        )
                      ) : (
                        <Grid item xs={12} style={{ paddingLeft: '20px' }}>
                          {'--'}
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: '10px' }}>
                  <Grid item xs={12}>
                    <Box sx={{ flexGrow: 1, mb: '10px' }}>
                      <div className='title' style={{ marginBottom: 4 }}>
                        Org Relationships
                      </div>
                      <div className='line'></div>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <TableStyleContaner
                        component={Paper}
                        style={{ border: 'none', boxShadow: 'none', margin: 12 }}
                      >
                        <div style={{ overflow: 'auto' }}>
                          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                            <TableHead>
                              <TableRow>
                                <StyledTableCell className='head' align='left'>
                                  Organization ID
                                </StyledTableCell>
                                <StyledTableCell className='head' align='left'>
                                  Child HCO Name
                                </StyledTableCell>
                                <StyledTableCell className='head' align='left'>
                                  # HCPs
                                </StyledTableCell>
                                <StyledTableCell className='head' align='left'>
                                  # PCPs
                                </StyledTableCell>
                                <StyledTableCell className='head' align='left'>
                                  # Specialties
                                </StyledTableCell>
                                <StyledTableCell className='head' align='left'>
                                  # HCFs
                                </StyledTableCell>
                                <StyledTableCell className='head' align='left'>
                                  Tax ID
                                </StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {relationshipsToDisplay?.map(row => (
                                <StyledTableRow key={row.Company}>
                                  <StyledTableCell component='th'>
                                    {row.OrganizationID != '' ? row.OrganizationID : '--'}
                                  </StyledTableCell>
                                  <StyledTableCell align='left'>
                                    {row.ChildHCOName != '' ? row.ChildHCOName : '--'}
                                  </StyledTableCell>
                                  <StyledTableCell
                                    className='link'
                                    align='left'
                                    onClick={() => changeMenu('2')}
                                  >
                                    {row.HCPs != '' || row.HCPs === 0 ? row.HCPs : '--'}
                                  </StyledTableCell>
                                  <StyledTableCell align='left' onClick={() => changeMenu('2')}>
                                    {/* {row.PCPs != '' || row.PCPs === 0 ? row.PCPs : '--'} commenting out as per ALM-18494, for now we are just showing "--"*/}
                                    --
                                  </StyledTableCell>
                                  <StyledTableCell align='left' onClick={() => changeMenu('2')}>
                                    {/* {row.Specialties != '' || row.Specialties === 0
                                      ? row.Specialties
                                      : '--'}
                                      commenting out as per ALM-18494, for now we are just showing "--"*/}
                                    --
                                  </StyledTableCell>
                                  <StyledTableCell
                                    className='link'
                                    align='left'
                                    onClick={() => changeMenu('2')}
                                  >
                                    {row.HCFs != '' || row.HCFs === 0 ? row.HCFs : '--'}
                                  </StyledTableCell>
                                  <StyledTableCell align='left'>
                                    {row.TaxID != '' ? row.TaxID : '--'}
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                          {orgData?.OrganizationRelationship?.length > 0 && (
                            <ThemeProvider theme={theme}>
                              <PaginationStyle
                                style={{ justifyContent: 'center', marginTop: '12px' }}
                              >
                                <div className='nav'>
                                  <Pagination
                                    sx={{ button: { color: '#ffffff' } }}
                                    color='info'
                                    hideNextButton
                                    hidePrevButton
                                    count={totalPages}
                                    page={currentPage}
                                    onChange={handlePageChange}
                                  />
                                </div>
                              </PaginationStyle>
                            </ThemeProvider>
                          )}
                        </div>
                      </TableStyleContaner>
                    </Grid>
                  </Grid>
                </Grid>
              </Section>
            </Box>
          </>
        </Detail>
      )}
    </Container>
  );
};

export default OrganizationDetails;
