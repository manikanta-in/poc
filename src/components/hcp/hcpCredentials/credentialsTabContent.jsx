import React from 'react';
import {
  TextWrapper,
  InfoText,
  InfoWrapper,
  Text,
  DateAndTime,
  TextUnderLine
} from './HcpCredentials.style';
import { Wrapper } from '../../commonStyles/commonstyle.style';
import { Grid } from '@mui/material';
import { changeDateFormate } from '../../shared/utils';
import { ErrorState } from '@pega/cosmos-react-core';
import ErrorPage from '../../common/Error/ErrorPage.jsx';

const credentialsTabContent = props => {
  const { setDetails, credentialData, tabIndex, apiError, errorMsg } = props;

  return (
    <>
      {credentialData &&
        credentialData?.length > 0 &&
        credentialData.map((item, index) => (
          <Wrapper
            style={{ padding: '25px' }}
            key={index}
            data-testid='credentials-content-wrapper'
            // onClick={() => {
            //   setDetails();
            // }}
          >
            <Grid container style={{}}>
              <Grid item sm={6} style={{ borderRight: '3px solid rgb(210 212 213)' }}>
                <Grid container style={{}}>
                  <Grid item sm={6} style={{ fontSize: 'large' }}>
                    <strong>
                      <h3>{item?.Specialty ? item?.Specialty : '--'}</h3>
                    </strong>
                  </Grid>
                  <Grid item sm={6} style={{}}>
                    <Text>Certification Period</Text>
                    <DateAndTime>
                      {!item?.CertificationStartDate ||
                      item?.CertificationStartDate == '' ||
                      !item?.CertificationEndDate ||
                      item?.CertificationEndDate == ''
                        ? '--'
                        : changeDateFormate(item.CertificationStartDate) +
                          ' - ' +
                          changeDateFormate(item.CertificationEndDate)}
                    </DateAndTime>
                  </Grid>
                  <Grid item sm={0}></Grid>
                </Grid>
                <Grid container style={{ marginTop: '35px' }}>
                  <Grid item sm={12}>
                    <Text>Certification</Text>
                    <DateAndTime>
                      {item?.CertificationName && item?.CertificationName !== ''
                        ? item.CertificationName
                        : '--'}

                      {item?.CertificationCode && item?.CertificationCode !== ''
                        ? ' (' + item.CertificationCode + ')'
                        : ''}
                    </DateAndTime>
                  </Grid>
                  <Grid item sm={0}></Grid>
                </Grid>
              </Grid>

              <Grid item sm={6} style={{ alignItems: 'center' }}>
                <TextUnderLine style={{ marginLeft: '10%' }}>
                  More Info
                  <p className='line'></p>
                </TextUnderLine>

                <Grid container style={{ alignItems: 'center' }}>
                  <Grid item sm={6}>
                    <TextWrapper style={{ marginLeft: '20%', marginTop: '5px' }}>
                      <Text>Internship Period</Text>
                      <DateAndTime>
                        {!item?.MoreInfo ||
                        !item?.MoreInfo[0]?.InternshipStartDate ||
                        item?.MoreInfo[0]?.InternshipStartDate == '' ||
                        !item?.MoreInfo[0]?.InternshipEndDate ||
                        item?.MoreInfo[0]?.InternshipEndDate == ''
                          ? '--'
                          : changeDateFormate(item.MoreInfo[0].InternshipStartDate) +
                            ' - ' +
                            changeDateFormate(item.MoreInfo[0].InternshipEndDate)}
                      </DateAndTime>
                    </TextWrapper>
                  </Grid>
                  <Grid item sm={6}>
                    <TextWrapper>
                      <Text>Fellowship Period</Text>
                      <DateAndTime>
                        {!item?.MoreInfo ||
                        !item?.MoreInfo[0]?.FellowshipStartDate ||
                        item?.MoreInfo[0]?.FellowshipStartDate == '' ||
                        !item?.MoreInfo[0]?.FellowshipEndDate ||
                        item?.MoreInfo[0]?.FellowshipEndDate == ''
                          ? '--'
                          : changeDateFormate(item.MoreInfo[0].FellowshipStartDate) +
                            ' - ' +
                            changeDateFormate(item.MoreInfo[0].FellowshipEndDate)}
                      </DateAndTime>
                    </TextWrapper>
                  </Grid>
                  <Grid item sm={6}>
                    <TextWrapper style={{ marginLeft: '20%', marginTop: '5px' }}>
                      <Text>Residency Period</Text>
                      <DateAndTime>
                        {!item?.MoreInfo ||
                        !item?.MoreInfo[0]?.ResidencyStartDate ||
                        item?.MoreInfo[0]?.ResidencyStartDate == '' ||
                        !item?.MoreInfo[0]?.ResidencyEndDate ||
                        item?.MoreInfo[0]?.ResidencyEndDate == ''
                          ? '--'
                          : changeDateFormate(item.MoreInfo[0].ResidencyStartDate) +
                            ' - ' +
                            changeDateFormate(item.MoreInfo[0].ResidencyEndDate)}
                      </DateAndTime>
                    </TextWrapper>
                  </Grid>
                  <Grid item sm={3}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Wrapper>
        ))}
      {credentialData && credentialData?.length === 0 && (
        <ErrorState message='No Credential Data Found' />
      )}
      {errorMsg?.pyAdviceText && (
        <Grid item xs={12}>
          <ErrorPage errorMsg={errorMsg} />
        </Grid>
      )}
      {apiError && <ErrorState message='API Error' />}
    </>
  );
};

export default credentialsTabContent;
