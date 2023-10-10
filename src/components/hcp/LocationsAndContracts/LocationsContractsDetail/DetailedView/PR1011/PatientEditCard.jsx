import React from 'react';
import { Grid } from '@mui/material';
import { TextUnderLineHeader, HeaderText, Content } from '../style.js';

const PatientEditCard = props => {
  return (
    <Grid container>
      <Grid item>
        <TextUnderLineHeader>
          Patient Edits
          <p className='header-line' style={{ marginTop: '1vh' }}></p>
        </TextUnderLineHeader>
      </Grid>
      <Grid container style={{ marginTop: '2%', height: '30vh' }}>
        <Grid item sm={4}>
          <HeaderText>Accepting Patients</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Gender</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Age</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Handicap Access</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Practice Size Limit</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Practice Size Actual</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Combined Company</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PatientEditCard;
