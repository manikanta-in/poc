import React from 'react';
import { TextUnderLineHeader, TextWrapper } from '../HcpCredentials.style';
import { Wrapper } from '../../../commonStyles/commonstyle.style';
import { HeaderText, Content } from './CredentialDetails.style';
import { Grid } from '@mui/material';

const CredentialCard = props => {
  const { credentialDetails } = props;
  console.log('credential details');
  console.log(credentialDetails);
  return (
    <>
      <Wrapper data-testid='credential-card' style={{ marginTop: '10px' }}>
        <Grid container>
          <Grid item sm={4}>
            <TextUnderLineHeader>Credentials</TextUnderLineHeader>
            <p className='line' style={{ marginTop: '1vh' }}></p>
          </Grid>
          <Grid item sm={7}>
            <TextWrapper style={{ marginTop: '0px' }}>
              <HeaderText>Effective&nbsp;Period</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.Credentials?.EffectivePeriod ?? '--'}
              </Content>
            </TextWrapper>
          </Grid>
          <Grid item sm={2} style={{ marginTop: '2%' }}>
            <TextWrapper>
              <HeaderText>Speciality</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.Credentials?.Specialty ?? '--'}
              </Content>
            </TextWrapper>
          </Grid>
          <Grid item sm={2} style={{ marginTop: '2%' }}>
            <TextWrapper>
              <HeaderText>Degree&nbsp;Name</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.Credentials?.DegreeName ?? '--'}
              </Content>
            </TextWrapper>
          </Grid>
          <Grid item sm={2} style={{ marginTop: '2%' }}>
            <TextWrapper>
              <HeaderText>Degree&nbsp;Period</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.Credentials?.DegreePeriod ?? '--'}
              </Content>
            </TextWrapper>
          </Grid>
          <Grid item sm={2} style={{ marginTop: '2%' }}>
            <TextWrapper>
              <HeaderText>Professional&nbsp;Training</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.Credentials?.ProfessionalTraining ?? '--'}
              </Content>
            </TextWrapper>
          </Grid>
          <Grid item sm={2} style={{ marginTop: '2%' }}>
            <TextWrapper>
              <HeaderText>License&nbsp;State</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.Credentials?.LicenseState ?? '--'}
              </Content>
            </TextWrapper>
          </Grid>
          <Grid item sm={2} style={{ marginTop: '2%' }}>
            <TextWrapper>
              <HeaderText>Educational&nbsp;Institution</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.Credentials?.EducationalInstitution ??
                  '--'}
              </Content>
            </TextWrapper>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};
export default CredentialCard;
