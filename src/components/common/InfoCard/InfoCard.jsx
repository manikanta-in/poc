import { useState } from 'react';

import { Header, Label, Value, Data, Name, ID } from './style';

import { Grid } from '@mui/material';
import { FullName } from '../../shared/utils';
const InfoCard = props => {
  const { data } = props;
  // const fullName = `${data.prefix ? `${data.prefix} ` : ''}${data.fName ? `${data.fName} ` : ''}${
  //   data.mInitial ? `${data.mInitial} ` : ''
  // }${data.lName ? `${data.lName} ` : ''}${data.Suffix ? `${data.Suffix}` : ''}`;
  // console.log(data);

  const showGender = param => {
    if (param === 'M' || param === 'Male') {
      return 'Male';
    } else if (param === 'F' || param === 'Female') {
      return 'Female';
    } else return '--';
  };

  return (
    <Header>
      <Name>{FullName(data)}</Name>
      <ID style={{ width: 150, marginLeft: '0px' }}>
        {(data?.ProfessionalId ?? data?.ID) != null ? data?.ProfessionalId ?? data?.ID : '--'}
      </ID>
      <Grid container columns={1}>
        <Grid container columns={2}>
          <Data>
            <Grid item xs={1}>
              <Label>Title&nbsp;Code</Label>
            </Grid>
            <Grid item xs={1}>
              <Value style={{ width: 103 }}>
                {data?.Title != null && data?.Title != '' ? data?.Title : '--'}
              </Value>
            </Grid>
          </Data>
        </Grid>

        <Grid container columns={2}>
          <Data>
            <Grid item xs={1}>
              <Label>Gender</Label>
            </Grid>
            <Grid item xs={1}>
              <Value style={{ width: 150, position: 'relative', left: '-15px' }}>
                {showGender(data?.Sex ?? data?.Gender) === null
                  ? '--'
                  : showGender(data?.Sex ?? data?.Gender)}
              </Value>
            </Grid>
          </Data>
        </Grid>
        <Grid container columns={2}>
          <Data>
            <Grid item xs={1}>
              <Label>License&nbsp;#</Label>
            </Grid>
            <Grid item xs={1}>
              <Value style={{ width: 100 }}>
                {data?.ProfessionalDetails?.License != null &&
                data?.ProfessionalDetails?.License != ''
                  ? data?.ProfessionalDetails?.License?.join(', ')
                  : '--'}
              </Value>
            </Grid>
          </Data>
        </Grid>
      </Grid>
    </Header>
  );
};

export default InfoCard;
