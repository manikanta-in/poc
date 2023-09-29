import React from 'react';
import { TextUnderLine, TextUnderLineHeader } from '../HcpCredentials.style';
import { Wrapper } from '../../../commonStyles/commonstyle.style';

import { HeaderText, Content } from './CredentialDetails.style';
import { Grid } from '@mui/material';
const CredentialCard = props => {
  const { credentialDetails } = props;

  return (
    <div style={{ display: 'flex', position: 'relative', bottom: '15px' }}>
      <Wrapper style={{ width: '50%', marginRight: '7px' }}>
        <Grid container>
          <Grid item>
            <TextUnderLineHeader>
              Board Certification
              <p className='line' style={{ marginTop: '1vh' }}></p>
            </TextUnderLineHeader>
          </Grid>
          <Grid container style={{ marginTop: '2%' }}>
            <Grid item sm={6}>
              <HeaderText>Certification</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.BoardCertification?.Certification ?? '--'}
              </Content>
            </Grid>
            <Grid item sm={6}>
              <HeaderText>Certification Period</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.BoardCertification?.CertificationPeriod ??
                  '--'}
              </Content>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
      <Wrapper style={{ width: '50%', marginLeft: '7px' }}>
        <Grid container>
          <Grid item sm={6}>
            <TextUnderLineHeader>
              Award
              <p className='line' style={{ marginTop: '1vh' }}></p>
            </TextUnderLineHeader>
          </Grid>
          <Grid item sm={6}>
            <HeaderText>Award Date</HeaderText>
            <Content>{credentialDetails?.CredentialsExpanded?.Award?.AwardDate ?? '--'}</Content>
          </Grid>
          <Grid container style={{ marginTop: '2%' }}>
            <Grid item sm={6}>
              <HeaderText>Name</HeaderText>
              <Content>{credentialDetails?.CredentialsExpanded?.Award?.Name ?? '--'}</Content>
            </Grid>
            <Grid item sm={6}>
              <HeaderText>Organization Name</HeaderText>
              <Content>
                {credentialDetails?.CredentialsExpanded?.Award?.OrganizationName ?? '--'}
              </Content>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </div>
  );
};

export default CredentialCard;
