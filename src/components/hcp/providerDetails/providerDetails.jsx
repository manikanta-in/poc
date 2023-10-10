import React, { useEffect, useState } from 'react';

import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import InfoCard from '../../common/InfoCard/InfoCard.jsx';
import { Progress, Image } from '@pega/cosmos-react-core';

import { Section, Detail, ProviderWrapper, ContactCard } from './styles.style';
import { NetworkAccess, Container } from '../../commonStyles/commonstyle.style';
import ProviderLogo from '../../images/provider.png';
import { FullAddress, changeDateFormate, constructAddress } from '../../shared/utils.js';
import ErrorPage from '../../common/Error/ErrorPage.jsx';
import ActionEditor from './action.jsx';

const ProviderDetails = props => {
  const dataPageName = 'D_HCPProviderProfessionalDetails';
  const context = 'app/context';
  const parameters = { ID: props.HCPID };
  const options = {
    invalidateCache: true
  };

  const [resultsFetched, setResultsFetched] = useState(false);
  const [providerData, setProviderData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response => {
        console.log('professional details', response);
        setProviderData(response);
        props.setPanelProviderData(response);
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
    //searchDB();
  }, []);

  const headerNames = [
    { name: 'DoB', space: 3 },
    { name: 'Place of Birth', space: 3 },
    { name: 'Medicare #', space: 3 },
    { name: 'Alias', space: 3 },
    { name: 'NPI #', space: 3 },
    { name: 'Social Security', space: 3 },
    { name: 'UPIN #', space: 3 },
    { name: 'CAQH ID', space: 3 },
    { name: 'Taxonomy', space: 3 },
    { name: 'DEA #', space: 3 },
    { name: 'Legacy Provider ID', space: 3 },
    { name: 'Medicaid #', space: 3 },
    { name: 'Provider Languages', space: 3 }
  ];
  const tableValues = [
    'DoB',
    'BirthCity',
    'Medicare',
    'Alias',
    'NPI',
    'SSN',
    'UPIN',
    'CAQHID',
    'Taxonomy',
    'DEA',
    'LegacyProviderID',
    'MedicaidList',
    'ProviderLanguages'
  ];


  const onChange = (data) => {
    console.log(data);
  };
  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />
      {errorMsg?.pyAdviceText && (
        <Grid item xs={12}>
          <ErrorPage errorMsg={errorMsg} />
        </Grid>
      )}
      {!errorMsg?.pyAdviceText && (
        <Detail>
          <>
            {/* <InfoCard
            data={providerData}
            // enableIcon={true}
          /> */}
            <Box className='info' sx={{ ml: '5px' }}>
              <Section>
                <ActionEditor onChange={onChange} />
                <Grid container spacing={2} sx={{ ml: '2px' }}>
                  <Grid item xs={10}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container sx={{ mt: '15px' }}>
                        <Grid item xs={3}>
                          <div className='title' style={{ marginBottom: 4 }}>
                            Professional Details
                          </div>
                          <div className='line'></div>
                        </Grid>
                        <Grid item xs={2.5}></Grid>
                        <Grid item xs={3.5}>
                          {providerData?.ProfessionalDetails?.NetworkStatus ? (
                            <NetworkAccess
                              color={
                                providerData?.ProfessionalDetails?.NetworkStatus === 'In-Network'
                                  ? 'green'
                                  : providerData?.ProfessionalDetails?.NetworkStatus ===
                                    'Out-of-Network'
                                  ? 'red'
                                  : providerData?.ProfessionalDetails?.NetworkStatus === 'Inactive'
                                  ? 'orange'
                                  : ''
                              }
                            >
                              <p className='status-text'>
                                {providerData?.ProfessionalDetails?.NetworkStatus ?? '--'}
                              </p>
                            </NetworkAccess>
                          ) : (
                            <></>
                          )}
                        </Grid>

                        <Grid item xs={3}>
                          <div className='label' style={{ marginBottom: 4 }}>
                            Effective from
                          </div>
                          <div className='value'>
                            {providerData?.ProfessionalDetails?.EffectiveFrom
                              ? changeDateFormate(providerData?.ProfessionalDetails?.EffectiveFrom)
                              : '--'}
                            {/* <span> - </span>
                          {providerData?.ProfessionalDetails?.EndDate
                            ? changeDateFormate(providerData?.ProfessionalDetails?.EndDate)
                            : ''} */}
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1, m: '4px' }}>
                      <Grid container spacing={2} sx={{ mt: '5px' }}>
                        <Grid item xs={12}>
                          <Grid container>
                            {headerNames.map((item, index) => (
                              <Grid item xs={4} sm={3} lg={item.space} sx={{ mb: '35px' }}>
                                <div className='label' style={{ marginBottom: 4 }}>
                                  {item.name}
                                </div>
                                <ProviderWrapper
                                  className='value'
                                  legacyProviderIds={
                                    (item.name == 'Legacy Provider ID' &&
                                      providerData?.ProfessionalDetails?.LegacyProviderID?.length >=
                                        3) ||
                                    (item.name == 'DEA #' &&
                                      providerData?.ProfessionalDetails?.DEA?.length >= 3) ||
                                    (item.name == 'Medicaid #' &&
                                      providerData?.ProfessionalDetails?.MedicaidList?.length >=
                                        3) ||
                                    (item.name == 'Provider Languages' &&
                                      providerData?.ProfessionalDetails?.ProviderLanguages
                                        ?.length >= 3)
                                  }
                                  style={{
                                    height:
                                      (item.name == 'Legacy Provider ID' &&
                                        providerData?.ProfessionalDetails?.LegacyProviderID
                                          ?.length >= 3) ||
                                      (item.name == 'DEA #' &&
                                        providerData?.ProfessionalDetails?.DEA?.length >= 3) ||
                                      (item.name == 'Medicaid #' &&
                                        providerData?.ProfessionalDetails?.MedicaidList?.length >=
                                          3) ||
                                      (item.name == 'Provider Languages' &&
                                        providerData?.ProfessionalDetails?.ProviderLanguages
                                          ?.length >= 3)
                                        ? '80px'
                                        : '',
                                    width:
                                      (item.name == 'Legacy Provider ID' &&
                                        providerData?.ProfessionalDetails?.LegacyProviderID
                                          ?.length >= 3) ||
                                      (item.name == 'Provider Languages' &&
                                        providerData?.ProfessionalDetails?.ProviderLanguages
                                          ?.length >= 3)
                                        ? '160px'
                                        : item.name == 'DEA #' &&
                                          providerData?.ProfessionalDetails?.DEA?.length >= 3
                                        ? '110px'
                                        : item.name == 'Medicaid #' &&
                                          providerData?.ProfessionalDetails?.MedicaidList?.length >=
                                            3
                                        ? '135px'
                                        : ''
                                  }}
                                >
                                  {item?.name === 'DoB'
                                    ? providerData?.ProfessionalDetails?.[tableValues[index]] ===
                                        '' ||
                                      providerData?.ProfessionalDetails?.[tableValues[index]] ===
                                        null ||
                                      providerData?.ProfessionalDetails?.[tableValues[index]] ===
                                        undefined ||
                                      providerData?.ProfessionalDetails?.[tableValues[index]]
                                        ?.length === 0
                                      ? '--'
                                      : changeDateFormate(
                                          providerData?.ProfessionalDetails?.[tableValues[index]]
                                        )
                                    : item?.name === 'Legacy Provider ID' ||
                                      item?.name === 'DEA #' ||
                                      item?.name === 'Medicaid #' ||
                                      item?.name === 'Provider Languages'
                                    ? providerData?.ProfessionalDetails?.[tableValues[index]] ===
                                        undefined ||
                                      providerData?.ProfessionalDetails?.[tableValues[index]] ===
                                        null ||
                                      providerData?.ProfessionalDetails?.[tableValues[index]] ===
                                        '' ||
                                      providerData?.ProfessionalDetails?.[tableValues[index]]
                                        ?.length === 0
                                      ? '--'
                                      : providerData?.ProfessionalDetails?.[
                                          tableValues[index]
                                        ]?.map((providers, index1) => (
                                          <p title={providers}>
                                            {providers}
                                            <br />
                                          </p>
                                        ))
                                    : providerData?.ProfessionalDetails?.[tableValues[index]] ===
                                        '' ||
                                      providerData?.ProfessionalDetails?.[tableValues[index]] ===
                                        undefined ||
                                      providerData?.ProfessionalDetails?.[tableValues[index]] ===
                                        null
                                    ? '--'
                                    : providerData?.ProfessionalDetails?.[tableValues[index]] ??
                                      '--'}
                                </ProviderWrapper>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <div style={{ height: 230, width: 150, marginTop: '6px', marginLeft: '10%' }}>
                      <Image alt='providerlogo' src={ProviderLogo} width={130} height={130} />
                      {/* <img alt="water icon" src={} style={{ marginLeft: "12px", width: '130px' }} /> */}
                      {/* <Grid container sx={{ mt: "30px" }}>
                    <Grid item xs={4}>
                      <Link
                        rel="noopener"
                        href={providerData?.ProfessionalDetails?.Facebook}
                        target="_blank"
                      >
                        <FacebookIcon
                          sx={{
                            fontSize: "2rem",
                            color: "#4267b2ff",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Link
                        href={providerData?.ProfessionalDetails?.LinkedIn}
                        target="_blank"
                      >
                        <LinkedInIcon
                          sx={{
                            fontSize: "2rem",
                            color: "#0072b1ff",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Link
                        href={providerData?.ProfessionalDetails?.Twitter}
                        target="_blank"
                      >
                        <TwitterIcon
                          sx={{
                            fontSize: "2rem",
                            color: "#1da1f2ff",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                    </Grid>
                  </Grid> */}
                    </div>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ ml: '2px', mt: '10px' }}>
                  <Grid item xs={12}>
                    <Box sx={{ flexGrow: 1, mb: '5px' }}>
                      <div className='title' style={{ marginBottom: 4 }}>
                        Identifiers
                      </div>
                      <div className='line'></div>
                    </Box>
                  </Grid>
                  <Grid container sx={{ ml: '2px', mt: '10px' }}>
                    <Grid item xs={3}>
                      <div className='label' style={{ marginBottom: 4, marginLeft: 15 }}>
                        AANA #
                      </div>
                      <div className='value' style={{ marginLeft: 15 }}>
                        {providerData?.ProfessionalDetails?.AANA ?? '--'}
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className='label' style={{ marginBottom: 4 }}>
                        CDR #
                      </div>
                      <div className='value'>{providerData?.ProfessionalDetails?.CDR ?? '--'}</div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className='label' style={{ marginBottom: 4 }}>
                        Add. Licenses
                      </div>
                      <ProviderWrapper
                        className='value'
                        legacyProviderIds={providerData?.License?.length > 2}
                        style={{
                          height: providerData?.License?.length > 2 ? '50px' : '',
                          width: providerData?.License?.length > 2 ? '100px' : ''
                        }}
                      >
                        {providerData?.License === undefined ||
                        providerData?.License === null ||
                        providerData?.License === '' ||
                        providerData?.License?.length === 0
                          ? '--'
                          : providerData?.License?.map((providers, index) => (
                              <p>
                                {providers}
                                {providerData?.License?.length === index + 1 ? '' : ','}
                              </p>
                            ))}
                      </ProviderWrapper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ ml: '2px', mt: '10px' }}>
                  <Grid item xs={12}>
                    <Box sx={{ flexGrow: 1, mb: '5px' }}>
                      <div className='title' style={{ marginBottom: 4 }}>
                        Contact Information
                      </div>
                      <div className='line'></div>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    {providerData.ProfessionalDetails &&
                      providerData.ProfessionalDetails.ContactInformationCard.map(item => (
                        <ContactCard color={item.AddressType === 'Office' ? 'yellow' : 'green'}>
                          <Grid container>
                            <Grid item xs={12}>
                              <div className='value'>{constructAddress(item)}</div>
                            </Grid>

                            <Grid item xs={6}>
                              <div className='value'>
                                {item.AddressType != '' ? item.AddressType : '--'}
                              </div>
                            </Grid>

                            <Grid item xs={6}>
                              <div className='value emailID'>
                                {item.Email != '' ? item.Email : '--'}
                              </div>
                            </Grid>

                            <Grid item xs={6}>
                              <div className='label' style={{ marginBottom: 4 }}>
                                Phone #
                              </div>
                              <div className='value'>
                                {item.PhoneList?.length === 0 ||
                                item.PhoneList === undefined ||
                                item.PhoneList === ''
                                  ? '--'
                                  : item.PhoneList.map(item => <p>{item}</p>)}
                              </div>
                            </Grid>

                            <Grid item xs={6}>
                              <div className='label' style={{ marginBottom: 4 }}>
                                Fax #
                              </div>
                              <div className='value'>{item.Fax != '' ? item.Fax : '--'}</div>
                            </Grid>
                          </Grid>
                        </ContactCard>
                      ))}
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

export default ProviderDetails;
