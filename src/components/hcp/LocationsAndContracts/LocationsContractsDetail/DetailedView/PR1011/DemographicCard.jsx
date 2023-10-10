import React from 'react';
import { Grid } from '@mui/material';
import { TextUnderLineHeader, HeaderText, Content } from '../style.js';

const DemographicCard = props => {
  const { pr1011Data } = props;

  return (
    <Grid container style={{ padding: '20px 0px 0px 5px' }}>
      <Grid item>
        <TextUnderLineHeader>
          Demographics Information
          <p className='header-line' style={{ marginTop: '1vh' }}></p>
        </TextUnderLineHeader>
      </Grid>
      <Grid container style={{ marginTop: '6%', height: '70vh' }}>
        <Grid item sm={4}>
          <HeaderText>First Name</HeaderText>
          <Content>
            {pr1011Data?.FirstName && pr1011Data?.FirstName != '' ? pr1011Data?.FirstName : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Middle Name</HeaderText>
          <Content>
            {pr1011Data?.MiddleName && pr1011Data?.MiddleName != '' ? pr1011Data?.MiddleName : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Last Name</HeaderText>
          <Content>
            {pr1011Data?.LastName && pr1011Data?.LastName != '' ? pr1011Data?.LastName : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Provider ID</HeaderText>
          <Content>
            {pr1011Data?.ProviderID && pr1011Data?.ProviderID != '' ? pr1011Data?.ProviderID : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Title Code</HeaderText>
          <Content>
            {pr1011Data?.Title && pr1011Data?.Title != '' ? pr1011Data?.Title : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Gender</HeaderText>
          <Content>
            {pr1011Data?.Gender && pr1011Data?.Gender != '' ? pr1011Data?.Gender : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>License #</HeaderText>
          <Content>
            {pr1011Data?.License2 && pr1011Data?.License2 != '' ? pr1011Data?.License2 : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Contact Name</HeaderText>
          <Content>
            {pr1011Data?.ContactName && pr1011Data?.ContactName != ''
              ? pr1011Data?.ContactName
              : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Office Phone #</HeaderText>
          <Content>
            {pr1011Data?.OfficePhone && pr1011Data?.OfficePhone != ''
              ? pr1011Data?.OfficePhone
              : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Home Phone #</HeaderText>
          <Content>
            {pr1011Data?.HomePhone && pr1011Data?.HomePhone != '' ? pr1011Data?.HomePhone : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Social Security</HeaderText>
          <Content>
            {pr1011Data?.SocialSecurity && pr1011Data?.SocialSecurity != ''
              ? pr1011Data?.SocialSecurity
              : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>DoB</HeaderText>
          <Content>{pr1011Data?.Dob && pr1011Data?.Dob != '' ? pr1011Data?.Dob : '--'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Type</HeaderText>
          <Content>{pr1011Data?.Type && pr1011Data?.Type != '' ? pr1011Data?.Type : '--'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Medicare #</HeaderText>
          <Content>
            {pr1011Data?.Medicare && pr1011Data?.Medicare != '' ? pr1011Data?.Medicare : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Medicaid #</HeaderText>
          <Content>
            {pr1011Data?.Medicaid && pr1011Data?.Medicaid != '' ? pr1011Data?.Medicaid : '--'}
          </Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>NPI #</HeaderText>
          <Content>{pr1011Data?.NPI && pr1011Data?.NPI != '' ? pr1011Data?.NPI : '--'}</Content>
        </Grid>
        <Grid item sm={6}>
          <HeaderText>UPIN #</HeaderText>
          <Content>{pr1011Data?.Upin && pr1011Data?.Upin != '' ? pr1011Data?.Upin : '--'}</Content>
        </Grid>

        <Grid item sm={12}>
          <HeaderText>Address</HeaderText>
          <Content>
            {pr1011Data?.Address && pr1011Data?.Address != '' ? pr1011Data?.Address : '--'}
          </Content>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DemographicCard;
