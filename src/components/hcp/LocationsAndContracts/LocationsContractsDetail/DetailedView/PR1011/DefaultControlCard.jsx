import React from 'react';
import { Grid } from '@mui/material';
import { TextUnderLineHeader, HeaderText, Content } from '../style.js';

const DefaultControlCard = props => {
  return (
    <Grid container>
      <Grid item>
        <TextUnderLineHeader>
          Default Controls
          <p className='header-line' style={{ marginTop: '1vh' }}></p>
        </TextUnderLineHeader>
      </Grid>
      <Grid container style={{ marginTop: '2%', height: '15vh' }}>
        <Grid item sm={4}>
          <HeaderText>Provider Organization</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Captitation Schedule</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Start Capitation Period</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Capitation Size</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Start Size Reached</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
        <Grid item sm={4}>
          <HeaderText>Capitation Size Edit</HeaderText>
          <Content>{'Rodeney'}</Content>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DefaultControlCard;
