import React from 'react';
import { Grid } from '@mui/material';
import { TextUnderLineHeader, HeaderText, Content } from '../style.js';

const LicenseCard = props => {
  const { pr1011Data } = props;

  return (
    <Grid container style={{ padding: '20px 0px 0px 5px' }}>
      <Grid item>
        <TextUnderLineHeader>
          License Information
          <p className='header-line' style={{ marginTop: '1vh' }}></p>
        </TextUnderLineHeader>
      </Grid>
      <Grid container style={{ marginTop: '6%', height: '27vh' }}>
        <Grid item sm={4}>
          <HeaderText>License State Code</HeaderText>
          <Content>
            {pr1011Data?.LicenseState && pr1011Data?.LicenseState != ''
              ? pr1011Data?.LicenseState
              : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Federal Tax ID</HeaderText>
          <Content>
            {pr1011Data?.FederalTax && pr1011Data?.FederalTax != '' ? pr1011Data?.FederalTax : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>DEA #</HeaderText>
          <Content>{pr1011Data?.DEA1 && pr1011Data?.DEA1 != '' ? pr1011Data?.DEA1 : '--'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>License #</HeaderText>
          <Content>
            {pr1011Data?.License2 && pr1011Data?.License2 != '' ? pr1011Data?.License2 : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Specialties</HeaderText>
          <Content>
            {pr1011Data?.Specialty && pr1011Data?.Specialty != '' ? pr1011Data?.Specialty : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Board Certified</HeaderText>
          <Content>
            {pr1011Data?.BoardCertified && pr1011Data?.BoardCertified != ''
              ? pr1011Data?.BoardCertified
              : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Specialty Type</HeaderText>
          <Content>
            {pr1011Data?.SpecialtyType && pr1011Data?.SpecialtyType != ''
              ? pr1011Data?.SpecialtyType
              : '--'}
          </Content>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LicenseCard;
