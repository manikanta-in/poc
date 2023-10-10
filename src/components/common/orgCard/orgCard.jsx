import React from 'react';

import { Header, Label, Value, Data, Name, ID } from './orgCard.style';
import { Grid } from '@mui/material';
import { FullAddress, constructAddress } from '../../shared/utils';

const OrgCard = props => {
  const { data } = props;

  return (
    <Header>
      <Name>
        {data?.OrganizationName === undefined || data?.OrganizationName === null
          ? '--'
          : data?.OrganizationName}
      </Name>
      <ID style={{ width: 150, marginLeft: '0px' }}>
        {(data?.OrganizationID ?? data?.ID) != null
          ? data?.OrganizationID ?? data?.OrganizationID
          : '--'}
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

      {/* <Row style={{ alignItems: "center", marginRight: "23px" }}>
        <DownloadIcon />
        <EditIcon />
      </Row> */}
    </Header>
  );
};

export default OrgCard;
