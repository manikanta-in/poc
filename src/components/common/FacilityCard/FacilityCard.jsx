import React from 'react';

import { Header, Label, Value, Data, Name, ID } from './facilityCard.style';
import { Grid } from '@mui/material';
import { FullAddress, constructAddress } from '../../shared/utils';

const FacilityCard = props => {
  const { data } = props;
  console.log(data);
  return (
    <Header>
      <Name>
        {data?.FacilityName === undefined || data?.FacilityName === null
          ? '--'
          : data?.FacilityName}
      </Name>
      <ID style={{ width: 150, marginLeft: '0px' }}>
        {(data?.FacilityID ?? data?.ID) != null ? data?.FacilityID ?? data?.FacilityID : '--'}
      </ID>
      <Grid container columns={2} sx={{ mt: 3, mb: 5 }}>
        <Label>Address</Label>
        <Grid item xs={12}>
          <Value>{constructAddress(data)}</Value>
        </Grid>
      </Grid>

      {/* <Grid container columns={1}>
        <Grid container columns={2} sx={{ mt: 3, mb: 10 }}>
          <Data>
            <Grid item xs={1.5}>
              <Label>Address</Label>
            </Grid>
            <Grid item xs={4} style={{ paddingRight: '10px' }}>
              <Value>{constructAddress(data)}</Value>
            </Grid>
          </Data>
        </Grid>
      </Grid> */}
    </Header>
  );
};

export default FacilityCard;
