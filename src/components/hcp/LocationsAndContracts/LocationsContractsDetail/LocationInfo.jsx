import React from 'react';
import { Text, ErrorDiv, Value } from '../LocationsAndContracts.style';
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
                <Value>
                  {locationExpData?.LegacyProviderID?.length === 0
                    ? '--'
                    : locationExpData?.LegacyProviderID?.map(item => (
                        <>
                          {item}
                          <br />
                        </>
                      ))}
                </Value>
              </div>
            </Grid>
            <Grid item sm={3.5}>
              <Text>Facility ID</Text>
              <Value>
                {locationExpData?.FacilityID && locationExpData?.FacilityID != ''
                  ? locationExpData?.FacilityID
                  : '--'}
              </Value>
            </Grid>
            <Grid item sm={5} style={{ maxWidth: '250px', maxHeight: '100px' }}>
              <Text>Office Languages</Text>
              <div style={{ maxHeight: '100px', overflow: 'auto' }}>
                {!locationExpData.OfficeLanguages || locationExpData?.OfficeLanguages?.length === 0
                  ? '--'
                  : locationExpData?.OfficeLanguages?.map(item => (
                      <Value>
                        {item}
                        <br />
                      </Value>
                    ))}
              </div>
            </Grid>
          </Grid>
          <Grid container style={{ marginBottom: '5%' }}>
            <Grid item sm={3.5}>
              <Text>HCO ID</Text>
              <Value>
                {locationExpData?.HCOID && locationExpData?.HCOID != ''
                  ? locationExpData?.HCOID
                  : '--'}
              </Value>
            </Grid>
            <Grid item sm={3.5}>
              <Text>HCO Name</Text>
              <Value>
                {locationExpData?.HCOName && locationExpData?.HCOName != ''
                  ? locationExpData?.HCOName
                  : '--'}
              </Value>
            </Grid>
          </Grid>
          <Grid container style={{ marginBottom: '5%' }}>
            <Grid item sm={12}>
              <Text>Practice Address</Text>
              <Value>{constructAddress(locationExpData)}</Value>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default LocationInfo;
