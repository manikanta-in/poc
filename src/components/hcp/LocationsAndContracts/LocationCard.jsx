import React from 'react';
import { FaAccessibleIcon, FaCalendarMinus } from 'react-icons/fa';
import StethoscopeIcon from '../../common/stethoscopeIcon.jsx';
import {
  Text,
  HeadingText,
  Wrapper,
  DateAndTime,
  TextUnderLine,
  Day,
  Time,
  DateWrapper,
  ProviderIdWrapper,
  Email
} from './LocationsAndContracts.style';

import { NetworkAccess, NoRecords } from '../../commonStyles/commonstyle.style';
import { Grid } from '@mui/material';
import {
  FullAddress,
  ContactName,
  changeDateFormate,
  constructAddress,
  changeFormat
} from '../../shared/utils.js';
import { ErrorState } from '@pega/cosmos-react-core';
import ErrorPage from '../../common/Error/ErrorPage.jsx';

const LocationCard = props => {
  const { setDetails, locationData, errorMsg, tabIndex } = props;

  const networkStatus = NetworkStatus => {
    if (NetworkStatus) {
      var status = NetworkStatus && NetworkStatus.split('-');
      return (status[0] ?? '') + ' ' + (status[1] ?? '') + ' ' + (status[2] ?? '');
    } else return;
  };

  const showIconLists = Location_features => {
    let icons = Location_features.map((feature, index) => {
      let array = [];
      let maginValue = index > 0 && '20px';
      if (feature === 'Telemedicine')
        array.push(<StethoscopeIcon width={17} height={25} style={{ marginLeft: maginValue }} />);
      if (feature === 'Handicap Access')
        array.push(
          <FaAccessibleIcon
            style={{
              color: '#008BBF',
              fontSize: '1.563rem',
              marginLeft: maginValue
            }}
          />
        );
      if (feature === 'Schedule')
        array.push(
          <FaCalendarMinus
            style={{
              color: '#0BD6F5',
              fontSize: '1.563rem',
              marginLeft: maginValue
            }}
          />
        );
      return array;
    });
    return icons;
  };
  return (
    <>
      {locationData &&
        locationData?.Locations?.length > 0 &&
        locationData?.Locations?.map((data, index) => (
          <Wrapper
            onClick={() => {
              //   console.log(data);
              setDetails({ facilityId: data?.ID, Name: data?.Name });
            }}
            style={{ cursor: 'pointer' }}
            key={index}
          >
            <Grid container>
              <Grid item sm={9}>
                <Grid container style={{ marginBottom: '4%' }}>
                  <Grid item sm={5.5}>
                    <HeadingText>{data?.Name}</HeadingText>
                  </Grid>
                  <Grid item sm={3.5}>
                    {networkStatus(data?.Status) ? (
                      <NetworkAccess
                        color={data?.Status === 'In-Network' ? 'green' : 'red'}
                        isLeft={data?.Name.length > 24 ? true : false}
                      >
                        <p className='status-text'>{networkStatus(data?.Status)}</p>
                      </NetworkAccess>
                    ) : (
                      <div></div>
                    )}
                  </Grid>
                  {/* <Grid item sm={2.5}>
                    <IconWrapper>
                      {data?.LocationFeatures && showIconLists(data?.LocationFeatures)}
                    </IconWrapper>
                  </Grid> */}
                  <Grid item sm={3}>
                    <Text>Location Effective</Text>
                    <DateAndTime>
                      {data?.LocationEffective ? changeDateFormate(data?.LocationEffective) : '--'}
                    </DateAndTime>
                  </Grid>
                </Grid>
                <Grid container style={{ marginBottom: '5%' }}>
                  <Grid item sm={6}>
                    <Text>Address</Text>
                    <DateAndTime style={{ width: '100%' }}>{constructAddress(data)}</DateAndTime>
                  </Grid>
                  <Grid item sm={3}>
                    <Text>Hospital&nbsp;Affliation</Text>
                    <DateAndTime>
                      {data?.HospitalAffiliation ? data?.HospitalAffiliation : '--'}
                    </DateAndTime>
                  </Grid>
                  <Grid item sm={3}>
                    <Text className='legacy-provider'>Legacy&nbsp;Provider&nbsp;ID</Text>
                    <ProviderIdWrapper>
                      {data?.LegacyProviderID === undefined ||
                      data?.LegacyProviderID === null ||
                      data?.LegacyProviderID === '' ||
                      data?.LegacyProviderID?.length === 0
                        ? '--'
                        : data?.LegacyProviderID?.map((id, index) => (
                            <DateAndTime key={index}>{id}</DateAndTime>
                          ))}
                    </ProviderIdWrapper>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item sm={3}>
                    <Text>Tax ID</Text>
                    <DateAndTime>{data?.TaxID ? data?.TaxID : '--'}</DateAndTime>
                  </Grid>
                  <Grid item sm={3}>
                    <Text>Contact Name</Text>
                    <DateAndTime>{ContactName(data)}</DateAndTime>
                  </Grid>
                  <Grid item sm={3}>
                    <Text>Phone #</Text>
                    <p style={{ color: '#008BBF', fontSize: '1rem' }}>
                      {data?.Phone != '' ? data?.Phone : '--'}
                    </p>
                  </Grid>
                  <Grid item sm={3}>
                    <Text>Email</Text>
                    <Email>{data?.Email != '' ? data?.Email : '--'}</Email>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={0.1}>
                <div>&nbsp;</div>
              </Grid>
              {/* <Grid item sm={0.01}>
                <div className='horizontal-line'></div>
              </Grid> */}
              {/* <Grid item sm={2.5}>
                <Col style={{ flex: 1.3 }} className='participation-wrapper'>
                  <TextUnderLine style={{ marginLeft: '20px' }}>
                    Participating Specialty
                  </TextUnderLine>
                  <div className='line' style={{ marginLeft: '20px' }}></div>
                  <ParticipationWrapper>
                    {data?.ParticipatingSpecialty?.map(specialities => (
                      <Text style={{ marginTop: 7 }}>{specialities}</Text>
                    ))}
                  </ParticipationWrapper>
                </Col>
              </Grid> */}
              <Grid item sm={0.01}>
                <div className='horizontal-line'></div>
              </Grid>
              <Grid item sm={2.5}>
                <TextUnderLine>Office Hours</TextUnderLine>
                <div className='line'></div>
                <DateWrapper>
                  <Grid container>
                    <>
                      <Grid item sm={4}>
                        <Day>{'Monday'}</Day>
                      </Grid>
                      <Grid item sm={8}>
                        <Time>
                          {data?.OfficeHours['Monday'] === undefined ||
                          data?.OfficeHours['Monday'] === null ||
                          data?.OfficeHours['Monday'] === '' ||
                          data?.OfficeHours['Monday']?.length === 0
                            ? '--'
                            : data?.OfficeHours['Monday'].map(time => {
                                return (
                                  <>
                                    {changeFormat(time)}
                                    <br />
                                  </>
                                );
                              })}
                        </Time>
                      </Grid>
                    </>
                    <br />
                    <>
                      <Grid item sm={4}>
                        <Day>{'Tuesday'}</Day>
                      </Grid>
                      <Grid item sm={8}>
                        <Time>
                          {data?.OfficeHours['Tuesday'] === undefined ||
                          data?.OfficeHours['Tuesday'] === null ||
                          data?.OfficeHours['Tuesday'] === '' ||
                          data?.OfficeHours['Tuesday']?.length === 0
                            ? '--'
                            : data?.OfficeHours['Tuesday'].map(time => {
                                return (
                                  <>
                                    {changeFormat(time)}
                                    <br />
                                  </>
                                );
                              })}
                        </Time>
                      </Grid>
                    </>
                    <br />
                    <>
                      <Grid item sm={4}>
                        <Day>{'Wednesday'}</Day>
                      </Grid>
                      <Grid item sm={8}>
                        <Time>
                          {data?.OfficeHours['Wednesday'] === undefined ||
                          data?.OfficeHours['Wednesday'] === null ||
                          data?.OfficeHours['Wednesday'] === '' ||
                          data?.OfficeHours['Wednesday']?.length === 0
                            ? '--'
                            : data?.OfficeHours['Wednesday'].map(time => {
                                return (
                                  <>
                                    {changeFormat(time)}
                                    <br />
                                  </>
                                );
                              })}
                        </Time>
                      </Grid>
                    </>
                    <br />
                    <>
                      <Grid item sm={4}>
                        <Day>{'Thursday'}</Day>
                      </Grid>
                      <Grid item sm={8}>
                        <Time>
                          {data?.OfficeHours['Thursday'] === undefined ||
                          data?.OfficeHours['Thursday'] === null ||
                          data?.OfficeHours['Thursday'] === '' ||
                          data?.OfficeHours['Thursday']?.length === 0
                            ? '--'
                            : data?.OfficeHours['Thursday'].map(time => {
                                return (
                                  <>
                                    {changeFormat(time)}
                                    <br />
                                  </>
                                );
                              })}
                        </Time>
                      </Grid>
                    </>
                    <br />
                    <>
                      <Grid item sm={4}>
                        <Day>{'Friday'}</Day>
                      </Grid>
                      <Grid item sm={8}>
                        <Time>
                          {data?.OfficeHours['Friday'] === undefined ||
                          data?.OfficeHours['Friday'] === null ||
                          data?.OfficeHours['Friday'] === '' ||
                          data?.OfficeHours['Friday']?.length === 0
                            ? '--'
                            : data?.OfficeHours['Friday'].map(time => {
                                return (
                                  <>
                                    {changeFormat(time)}
                                    <br />
                                  </>
                                );
                              })}
                        </Time>
                      </Grid>
                    </>
                    <br />
                    <>
                      <Grid item sm={4}>
                        <Day>{'Saturday'}</Day>
                      </Grid>
                      <Grid item sm={8}>
                        <Time>
                          {data?.OfficeHours['Saturday'] === undefined ||
                          data?.OfficeHours['Saturday'] === null ||
                          data?.OfficeHours['Saturday'] === '' ||
                          data?.OfficeHours['Saturday']?.length === 0
                            ? '--'
                            : data?.OfficeHours['Saturday'].map(time => {
                                return (
                                  <>
                                    {changeFormat(time)}
                                    <br />
                                  </>
                                );
                              })}
                        </Time>
                      </Grid>
                    </>
                    <br />
                    <>
                      <Grid item sm={4}>
                        <Day>{'Sunday'}</Day>
                      </Grid>
                      <Grid item sm={8}>
                        <Time>
                          {data?.OfficeHours['Sunday'] === undefined ||
                          data?.OfficeHours['Sunday'] === null ||
                          data?.OfficeHours['Sunday'] === '' ||
                          data?.OfficeHours['Sunday']?.length === 0
                            ? '--'
                            : data?.OfficeHours['Sunday'].map(time => {
                                return (
                                  <>
                                    {changeFormat(time)}
                                    <br />
                                  </>
                                );
                              })}
                        </Time>
                      </Grid>
                    </>
                  </Grid>
                </DateWrapper>
              </Grid>
            </Grid>
          </Wrapper>
        ))}

      {locationData?.Locations?.length == 0 && (
        <NoRecords>
          <ErrorState message='No Locations Found' />
        </NoRecords>
      )}
      {errorMsg?.pyAdviceText && (
        <Grid item xs={12}>
          <ErrorPage errorMsg={errorMsg} />
        </Grid>
      )}
    </>
  );
};

export default LocationCard;
