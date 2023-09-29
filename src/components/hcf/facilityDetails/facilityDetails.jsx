import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import {
  Section,
  Detail,
  Container,
  IconWrapper,
  DateIconWrapper,
  TIME,
  NetworkAccess,
  ProviderWrapper,
  ContactCard
} from './styles.style';
import { changeDateFormate, ContactName, changeFormat } from '../../shared/utils';
import FacilityLogo from '../../images/base64/facilityLogo.jsx';

import { Progress, Image } from '@pega/cosmos-react-core';
import { FaAccessibleIcon, FaClock, FaCalendarMinus } from 'react-icons/fa';
import InfoIcon from '@mui/icons-material/Info';
import StethoscopeIcon from '../../common/stethoscopeIcon.jsx';
import CalendarImg from '../../images/calendar-solid.svg';
import ErrorPage from '../../common/Error/ErrorPage.jsx';

const FacilityDetails = props => {
  const dataPageName = 'D_HCFFacilityDetails';
  const context = 'app/context';
  const parameters = { ID: props.HcfID };
  const options = {
    invalidateCache: true
  };

  const [resultsFetched, setResultsFetched] = useState(false);
  const [facilityData, setFacilityData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response => {
        console.log('Facility landing details', response);
        setFacilityData(response);
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
  }, []);

  const headerNames = [
    { name: 'Organization ID', space: 3 },
    { name: 'Facility Type', space: 3 },
    { name: '#Memberships (PCPs)', space: 3 },
    { name: 'Legacy Provider ID', space: 3 },
    { name: 'OpCert #', space: 3 },
    { name: '# HCPs', space: 3 },
    { name: '# PCPs', space: 3 },
    { name: '# Specialists', space: 3 },
    { name: 'Office Languages', space: 3 },
    { name: 'Specialties', space: 3 }
  ];
  const tableValues = [
    'OrganizationID',
    'HealthCareFacilityType',
    'Memberships',
    'LegacyProviderID',
    'OpCert',
    'HCPs',
    'PCPs',
    'Specialists',
    'Languages',
    'SpecialtiesList'
  ];

  const changeMenu = selectedMenuIndex => {
    props.handleTabChange(selectedMenuIndex);
  };

  function handleFlagAccessible() {
    var status = true;
    return (
      <IconWrapper>
        {facilityData?.FacilityDetails?.Accessible?.map(item => {
          if (item === 'Telemedicine') {
            return <StethoscopeIcon width={17} height={33} />;
          } else if (status && (item == 'Handicap Access' || item == 'ADA')) {
            //Handicap,ADA
            status = false;
            return (
              <FaAccessibleIcon
                style={{
                  color: '#008BBF',
                  fontSize: '2rem'
                }}
              />
            );
          } else if (item === 'Schedule') {
            return (
              <Image
                alt='Calendar Logo'
                src={CalendarImg}
                width={80}
                height={40}
                style={{ marginTop: '-5px' }}
              />
            );
          }
        })}
      </IconWrapper>
    );
  }

  return (
    <Container style={{ width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />
      {errorMsg?.pyAdviceText && (
        <Grid item xs={12}>
          <ErrorPage errorMsg={errorMsg} />
        </Grid>
      )}
      {!errorMsg?.pyAdviceText && (
        <Detail>
          <>
            <Box className='info'>
              <Section style={{ paddingLeft: '2%' }}>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container sx={{ mt: '15px' }}>
                        <Grid item xs={6}>
                          <div className='title' style={{ marginBottom: 4 }}>
                            Facility&nbsp;Details
                          </div>
                          <div className='line'></div>
                        </Grid>
                        <Grid item xs={3}>
                          {facilityData?.FacilityDetails?.Status ? (
                            <NetworkAccess
                              color={
                                facilityData?.FacilityDetails?.Status === 'In-Network'
                                  ? 'green'
                                  : facilityData?.FacilityDetails?.Status === 'Out-Network'
                                  ? 'red'
                                  : facilityData?.FacilityDetails?.Status === 'Inactive'
                                  ? 'orange'
                                  : ''
                              }
                            >
                              <p className='status-text'>
                                {facilityData?.FacilityDetails?.Status ?? '--'}
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
                            Effective&nbsp;from
                          </div>
                          <div className='value' style={{ fontSize: '1.1rem' }}>
                            {facilityData?.FacilityDetails?.EffectiveFrom
                              ? changeDateFormate(facilityData?.FacilityDetails?.EffectiveFrom)
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
                                <Grid item xs={4} sm={3} lg={item.space} sx={{ mb: '35px' }}>
                                  <div className='label' style={{ marginBottom: 4 }}>
                                    {item.name}
                                  </div>
                                  {item.name === '# HCPs' ||
                                  item.name === '# PCPs' ||
                                  item.name === '# Specialists' ? (
                                    <div
                                      className={
                                        facilityData?.FacilityDetails?.[tableValues[index]] != '' ||
                                        facilityData?.FacilityDetails?.[tableValues[index]] != 0
                                          ? `value link`
                                          : 'value'
                                      }
                                      onClick={() => changeMenu('2')}
                                    >
                                      {!facilityData?.FacilityDetails?.[tableValues[index]] ||
                                      facilityData?.FacilityDetails?.[tableValues[index]] === '' ||
                                      facilityData?.FacilityDetails?.[tableValues[index]] === 0 ||
                                      facilityData?.FacilityDetails?.[tableValues[index]] === null
                                        ? '--'
                                        : facilityData?.FacilityDetails?.[tableValues[index]] === 0
                                        ? facilityData?.FacilityDetails?.[tableValues[index]]
                                        : facilityData?.FacilityDetails?.[tableValues[index]]}
                                    </div>
                                  ) : (
                                    <ProviderWrapper
                                      className={`value`}
                                      legacyProviderIds={
                                        (item.name == 'Legacy Provider ID' &&
                                          facilityData?.FacilityDetails?.LegacyProviderID?.length >=
                                            3) ||
                                        (item.name == 'Office Languages' &&
                                          facilityData?.FacilityDetails?.Languages?.length >= 3) ||
                                        (item.name == 'Specialties' &&
                                          facilityData?.FacilityDetails?.SpecialtiesList?.length >=
                                            3) ||
                                        (item.name == 'OpCert #' &&
                                          facilityData?.FacilityDetails?.OpCert?.length >= 3)
                                      }
                                      style={{
                                        height:
                                          (item.name === 'Legacy Provider ID' &&
                                            facilityData?.FacilityDetails?.LegacyProviderID
                                              ?.length >= 3) ||
                                          (item.name == 'Office Languages' &&
                                            facilityData?.FacilityDetails?.Languages?.length >=
                                              3) ||
                                          (item.name == 'Specialties' &&
                                            facilityData?.FacilityDetails?.SpecialtiesList
                                              ?.length >= 3) ||
                                          (item.name == 'OpCert #' &&
                                            facilityData?.FacilityDetails?.OpCert?.length >= 3)
                                            ? '65px'
                                            : '',
                                        width:
                                          (item.name == 'Legacy Provider ID' &&
                                            facilityData?.FacilityDetails?.LegacyProviderID
                                              ?.length >= 3) ||
                                          (item.name == 'Office Languages' &&
                                            facilityData?.FacilityDetails?.Languages?.length >=
                                              3) ||
                                          (item.name == 'Specialties' &&
                                            facilityData?.FacilityDetails?.SpecialtiesList
                                              ?.length >= 3) ||
                                          (item.name == 'OpCert #' &&
                                            facilityData?.FacilityDetails?.OpCert?.length >= 3)
                                            ? '200px'
                                            : ''
                                      }}
                                    >
                                      {item?.name === 'Legacy Provider ID' ||
                                      item.name == 'Office Languages' ||
                                      item.name == 'Specialties' ||
                                      item.name == 'OpCert #'
                                        ? facilityData?.FacilityDetails?.[tableValues[index]] ===
                                            undefined ||
                                          facilityData?.FacilityDetails?.[tableValues[index]] ===
                                            null ||
                                          facilityData?.FacilityDetails?.[tableValues[index]] ===
                                            '' ||
                                          facilityData?.FacilityDetails?.[tableValues[index]]
                                            ?.length === 0
                                          ? '--'
                                          : facilityData?.FacilityDetails?.[
                                              tableValues[index]
                                            ]?.map((providers, index1) => (
                                              <p>
                                                {providers}
                                                {facilityData?.FacilityDetails?.[tableValues[index]]
                                                  ?.length ===
                                                index1 + 1
                                                  ? ''
                                                  : ','}
                                              </p>
                                            ))
                                        : facilityData?.FacilityDetails?.[tableValues[index]]
                                        ? facilityData?.FacilityDetails?.[tableValues[index]]
                                        : '--'}
                                    </ProviderWrapper>
                                  )}
                                </Grid>
                              </>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item xs={2}>
                    <Grid container>
                      <Grid item style={{ paddingTop: '30px' }}>
                        {handleFlagAccessible()}
                      </Grid>
                    </Grid>
                    <Grid container>
                      <div
                        style={{
                          height: 230,
                          width: 150,
                          marginTop: '105px',
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        <FacilityLogo width={130} height={130} />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box sx={{ flexGrow: 1, mb: '10px' }}>
                      <div className='title' style={{ marginBottom: 4 }}>
                        Office Hours
                      </div>
                      <div className='line'></div>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={4} sm={3} lg={2} sx={{ mb: '35px' }}>
                        <DateIconWrapper>
                          <FaClock className='clock'></FaClock>
                          <p className='days'>Monday</p>
                        </DateIconWrapper>
                        <TIME>
                          {facilityData?.FacilityDetails?.OfficeHours?.Monday === undefined ||
                          facilityData?.FacilityDetails?.OfficeHours?.Monday === null ||
                          facilityData?.FacilityDetails?.OfficeHours?.Monday === '' ||
                          facilityData?.FacilityDetails?.OfficeHours?.Monday?.length === 0
                            ? '--'
                            : facilityData?.FacilityDetails?.OfficeHours?.Monday?.map(item => {
                                return (
                                  <>
                                    {changeFormat(item)}
                                    <br />
                                  </>
                                );
                              })}
                        </TIME>
                        <DateIconWrapper>
                          <FaClock className='clock'></FaClock>
                          <p className='days'>Tuesday</p>
                        </DateIconWrapper>
                        <TIME>
                          {facilityData?.FacilityDetails?.OfficeHours?.Tuesday === undefined ||
                          facilityData?.FacilityDetails?.OfficeHours?.Tuesday === null ||
                          facilityData?.FacilityDetails?.OfficeHours?.Tuesday === '' ||
                          facilityData?.FacilityDetails?.OfficeHours?.Tuesday?.length === 0
                            ? '--'
                            : facilityData?.FacilityDetails?.OfficeHours?.Tuesday?.map(item => {
                                return (
                                  <>
                                    {changeFormat(item)}
                                    <br />
                                  </>
                                );
                              })}
                        </TIME>
                      </Grid>
                      <Grid item xs={4} sm={3} lg={2} sx={{ mb: '35px' }}>
                        <DateIconWrapper>
                          <FaClock className='clock'></FaClock>
                          <p className='days'>Wednesday</p>
                        </DateIconWrapper>
                        <TIME>
                          {facilityData?.FacilityDetails?.OfficeHours?.Wednesday === undefined ||
                          facilityData?.FacilityDetails?.OfficeHours?.Wednesday === null ||
                          facilityData?.FacilityDetails?.OfficeHours?.Wednesday === '' ||
                          facilityData?.FacilityDetails?.OfficeHours?.Wednesday?.length === 0
                            ? '--'
                            : facilityData?.FacilityDetails?.OfficeHours?.Wednesday?.map(item => {
                                return (
                                  <>
                                    {changeFormat(item)}
                                    <br />
                                  </>
                                );
                              })}
                        </TIME>
                        <DateIconWrapper>
                          <FaClock className='clock'></FaClock>
                          <p className='days'>Thursday</p>
                        </DateIconWrapper>
                        <TIME>
                          {facilityData?.FacilityDetails?.OfficeHours?.Thursday === undefined ||
                          facilityData?.FacilityDetails?.OfficeHours?.Thursday === null ||
                          facilityData?.FacilityDetails?.OfficeHours?.Thursday === '' ||
                          facilityData?.FacilityDetails?.OfficeHours?.Thursday?.length === 0
                            ? '--'
                            : facilityData?.FacilityDetails?.OfficeHours?.Thursday?.map(item => {
                                return (
                                  <>
                                    {changeFormat(item)}
                                    <br />
                                  </>
                                );
                              })}
                        </TIME>
                      </Grid>
                      <Grid item xs={4} sm={3} lg={2} sx={{ mb: '35px' }}>
                        <DateIconWrapper>
                          <FaClock className='clock'></FaClock>
                          <p className='days'>Friday</p>
                        </DateIconWrapper>
                        <TIME>
                          {facilityData?.FacilityDetails?.OfficeHours?.Friday === undefined ||
                          facilityData?.FacilityDetails?.OfficeHours?.Friday === null ||
                          facilityData?.FacilityDetails?.OfficeHours?.Friday === '' ||
                          facilityData?.FacilityDetails?.OfficeHours?.Friday?.length === 0
                            ? '--'
                            : facilityData?.FacilityDetails?.OfficeHours?.Friday?.map(item => {
                                return (
                                  <>
                                    {changeFormat(item)}
                                    <br />
                                  </>
                                );
                              })}
                        </TIME>
                        <DateIconWrapper>
                          <FaClock className='clock'></FaClock>
                          <p className='days'>Saturday</p>
                        </DateIconWrapper>
                        <TIME>
                          {facilityData?.FacilityDetails?.OfficeHours?.Saturday === undefined ||
                          facilityData?.FacilityDetails?.OfficeHours?.Saturday === null ||
                          facilityData?.FacilityDetails?.OfficeHours?.Saturday === '' ||
                          facilityData?.FacilityDetails?.OfficeHours?.Saturday?.length === 0
                            ? '--'
                            : facilityData?.FacilityDetails?.OfficeHours?.Saturday?.map(item => {
                                return (
                                  <>
                                    {changeFormat(item)}
                                    <br />
                                  </>
                                );
                              })}
                        </TIME>
                      </Grid>
                      <Grid item xs={4} sm={3} lg={2} sx={{ mb: '35px' }}>
                        <DateIconWrapper>
                          <FaClock className='clock'></FaClock>
                          <p className='days'>Sunday</p>
                        </DateIconWrapper>
                        <TIME>
                          {facilityData?.FacilityDetails?.OfficeHours?.Sunday === undefined ||
                          facilityData?.FacilityDetails?.OfficeHours?.Sunday === null ||
                          facilityData?.FacilityDetails?.OfficeHours?.Sunday === '' ||
                          facilityData?.FacilityDetails?.OfficeHours?.Sunday?.length === 0
                            ? '--'
                            : facilityData?.FacilityDetails?.OfficeHours?.Sunday?.map(item => {
                                return (
                                  <>
                                    {changeFormat(item)}
                                    <br />
                                  </>
                                );
                              })}
                        </TIME>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ ml: '', mt: '5px' }}>
                  <Grid item xs={6}>
                    <Box sx={{ flexGrow: 1, mb: '5px' }}>
                      <div className='title' style={{ marginBottom: 4 }}>
                        Contact Information
                      </div>
                      <div className='line'></div>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    {facilityData?.FacilityDetails?.ContactInfo.map(item => (
                      <ContactCard color='green'>
                        <Grid container spacing={0}>
                          <Grid container>
                            <Grid item xs={6}>
                              <div className='value'>{ContactName(item)}</div>
                            </Grid>
                            <Grid item xs={5}></Grid>
                            {/* <Grid justifyContent='end' item xs={1}>
                          <div>
                            <InfoIcon sx={{ fontSize: '1rem', cursor: 'pointer' }}></InfoIcon>
                          </div>
                        </Grid> */}
                            <Grid item xs={4}>
                              <div className='value'>{item?.Role != '' ? item?.Role : '--'}</div>
                            </Grid>
                            <Grid item xs={2}>
                              {item?.Email != '' ? (
                                <div className='value emailID'>
                                  <a
                                    href={'mailto:' + item?.Email + '?subject=Contact Tom'}
                                    className='emailID'
                                  >
                                    {item?.Email != '' ? item?.Email : '--'}
                                  </a>
                                </div>
                              ) : (
                                '--'
                              )}
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={4}>
                              <div className='label' style={{ marginBottom: 2 }}>
                                Phone #
                              </div>
                              <div className='value'>{item?.Phone != '' ? item?.Phone : '--'}</div>
                            </Grid>
                            <Grid item xs={2}>
                              <div className='label' style={{ marginBottom: 2 }}>
                                Fax #
                              </div>
                              <div className='value'>{item?.Fax != '' ? item?.Fax : '--'}</div>
                            </Grid>
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

export default FacilityDetails;
