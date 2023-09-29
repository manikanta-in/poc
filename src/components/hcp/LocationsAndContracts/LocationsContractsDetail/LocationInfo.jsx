import React from 'react';
import { Text, ErrorDiv } from '../LocationsAndContracts.style';
import { Grid } from '@mui/material';
import { constructAddress } from '../../../shared/utils';

const LocationInfo = props => {
  const { locationExpData, errorMsg } = props;
  return (
    <div>
      {errorMsg?.pyAdviceText && (
        <Grid item xs={12}>
          <ErrorDiv>{errorMsg.pyAdviceText}</ErrorDiv>
        </Grid>
      )}
      {!errorMsg?.pyAdviceText && (
        <>
          <Grid container style={{ marginBottom: '5%' }}>
            <Grid item sm={3.5}>
              <Text>Legacy Provider ID</Text>
              <div style={{ height: 50, overflow: 'auto', marginRight: '8%' }}>
                {locationExpData?.LegacyProviderID?.length === 0
                  ? '--'
                  : locationExpData?.LegacyProviderID?.map(item => (
                      <>
                        {item}
                        <br />
                      </>
                    ))}
              </div>
            </Grid>
            <Grid item sm={3.5}>
              <Text>Facility ID</Text>
              {locationExpData?.FacilityID && locationExpData?.FacilityID != ''
                ? locationExpData?.FacilityID
                : '--'}
            </Grid>
            <Grid item sm={5} style={{ maxWidth: '250px', maxHeight: '100px' }}>
              <Text>Office Languages</Text>
              <div style={{ maxHeight: '100px', overflow: 'auto' }}>
                {!locationExpData.OfficeLanguages || locationExpData?.OfficeLanguages?.length === 0
                  ? '--'
                  : locationExpData?.OfficeLanguages?.map(item => (
                      <>
                        {item}
                        <br />
                      </>
                    ))}
              </div>
            </Grid>
          </Grid>
          <Grid container style={{ marginBottom: '5%' }}>
            <Grid item sm={3.5}>
              <Text>HCO ID</Text>
              {locationExpData?.HCOID && locationExpData?.HCOID != ''
                ? locationExpData?.HCOID
                : '--'}
            </Grid>
            <Grid item sm={3.5}>
              <Text>HCO Name</Text>
              {locationExpData?.HCOName && locationExpData?.HCOName != ''
                ? locationExpData?.HCOName
                : '--'}
            </Grid>
          </Grid>
          <Grid container style={{ marginBottom: '5%' }}>
            <Grid item sm={12}>
              <Text>Practice Address</Text>
              {constructAddress(locationExpData)}
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default LocationInfo;
