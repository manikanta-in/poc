import React from 'react';
import { Grid } from '@mui/material';
import { TextUnderLineHeader, HeaderText, Content } from '../style.js';

const ClaimCard = props => {
  const { pr1011Data } = props;

  return (
    <Grid container style={{ padding: '8px 0px 0px 5px' }}>
      <Grid item>
        <TextUnderLineHeader>
          Claim Processing & Location Details
          <p className='header-line' style={{ marginTop: '1vh' }}></p>
        </TextUnderLineHeader>
      </Grid>
      <Grid container style={{ marginTop: '6%', height: '18vh' }}>
        <Grid item sm={4}>
          <HeaderText>Parent</HeaderText>
          <Content>
            {pr1011Data?.ParentCode && pr1011Data?.ParentCode != '' ? pr1011Data?.ParentCode : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Area</HeaderText>
          <Content>{pr1011Data?.Area && pr1011Data?.Area != '' ? pr1011Data?.Area : '--'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Provider&nbsp;Organization</HeaderText>
          <Content>
            {pr1011Data?.ProviderOrganisation && pr1011Data?.ProviderOrganisation != ''
              ? pr1011Data?.ProviderOrganisation
              : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Accepting Patients</HeaderText>
          <Content>
            {pr1011Data?.AcceptingPatients && pr1011Data?.AcceptingPatients != ''
              ? pr1011Data?.AcceptingPatients
              : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Gender</HeaderText>
          <Content>
            {pr1011Data?.Gender && pr1011Data?.Gender != '' ? pr1011Data?.Gender : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Handicap&nbsp;Access</HeaderText>
          <Content>
            {pr1011Data?.HandicapAccess && pr1011Data?.HandicapAccess != ''
              ? pr1011Data?.HandicapAccess
              : '--'}
          </Content>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ClaimCard;
