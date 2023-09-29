import React from 'react';
import { Wrapper } from '../../../commonStyles/commonstyle.style';
import { Text, TextUnderLineSubHeaders, TextUnderLineHeader } from '../HcpCredentials.style';
import { HeaderText, Content } from './CredentialDetails.style';
import { Grid } from '@mui/material';

const EducationCard = props => {
  const { credentialDetails } = props;

  return (
    <Wrapper style={{ flexDirection: 'column' }}>
      <Grid container>
        <Grid item>
          <TextUnderLineHeader>
            Education/Training
            <p className='line' style={{ marginTop: '1vh' }}></p>
          </TextUnderLineHeader>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '2%' }}>
        <TextUnderLineSubHeaders>
          Degree
          <p className='line' style={{ marginTop: '1vh' }}></p>
        </TextUnderLineSubHeaders>
      </Grid>
      <Grid container style={{ marginTop: '2%' }}>
        <Grid item sm={3}>
          <HeaderText>Name</HeaderText>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.DegreeInfo?.Name ?? '--'}
          </Content>
        </Grid>
        <Grid item sm={3}>
          <HeaderText>Address</HeaderText>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.DegreeInfo?.Address ??
              '--'}
          </Content>
        </Grid>
        <Grid item sm={3}>
          <HeaderText>Degree Awarded</HeaderText>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.DegreeInfo
              ?.DegreeAwarded ?? '--'}
          </Content>
        </Grid>
        <Grid item sm={3}>
          <Text>Degree Period</Text>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.DegreeInfo
              ?.DegreePeriod ?? '--'}
          </Content>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '2%' }}>
        <Grid item sm={6}>
          <TextUnderLineSubHeaders>
            Internship
            <p className='line' style={{ marginTop: '1vh' }}></p>
          </TextUnderLineSubHeaders>
        </Grid>
        <Grid item sm={6}>
          <TextUnderLineSubHeaders>
            Residency
            <p className='line' style={{ marginTop: '1vh' }}></p>
          </TextUnderLineSubHeaders>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '2%' }}>
        <Grid item sm={3}>
          <HeaderText>Department</HeaderText>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.InternshipInfo
              ?.Department ?? '--'}
          </Content>
        </Grid>
        <Grid item sm={3}>
          <HeaderText>Internship Period</HeaderText>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.InternshipInfo
              ?.InternshipPeriod ?? '--'}
          </Content>
        </Grid>
        <Grid item sm={3}>
          <HeaderText>Department</HeaderText>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.ResidentialInfo
              ?.Department ?? '--'}
          </Content>
        </Grid>
        <Grid item sm={3}>
          <HeaderText>Residential Period</HeaderText>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.ResidentialInfo
              ?.ResidencialPeriod ?? '--'}
          </Content>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '2%' }}>
        <Grid item>
          <TextUnderLineSubHeaders>
            Fellowship
            <p className='line' style={{ marginTop: '1vh' }}></p>
          </TextUnderLineSubHeaders>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '2%' }}>
        <Grid item sm={3}>
          <HeaderText>Department</HeaderText>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.Fellowship?.Department ??
              '--'}
          </Content>
        </Grid>
        <Grid item sm={3}>
          <HeaderText>Fellowship Period</HeaderText>
          <Content>
            {credentialDetails?.CredentialsExpanded?.EducationalTraining?.Fellowship
              ?.FellowshipPeriod ?? '--'}
          </Content>
        </Grid>
        <Grid item sm={3}></Grid>
        <Grid item sm={3}></Grid>
      </Grid>
    </Wrapper>
  );
};

export default EducationCard;
