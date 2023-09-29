import React, { useState } from 'react';
import { Section, SectionDetail, Container } from '../../commonStyles/commonstyle.style';
import OrgCard from '../../common/orgCard/orgCard.jsx';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Progress } from '@pega/cosmos-react-core';

import FacilityRelationShipsList from './facilityRelationshipsList.jsx';
import ErrorPage from '../../common/Error/ErrorPage.jsx';

const FacilityRelationships = props => {
  const [orgData, setOrgData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={loading} />
      {errorMsg?.pyAdviceText && (
        <Grid item xs={12}>
          <ErrorPage errorMsg={errorMsg} />
        </Grid>
      )}
      {!errorMsg?.pyAdviceText && (
        <SectionDetail style={{ height: '680px' }}>
          {/* <OrgCard data={orgData} /> */}
          <Box className='info' sx={{ ml: '5px' }}>
            <Section style={{ height: '96%' }}>
              <Grid container spacing={2} sx={{ ml: '2px', pl: '0px !important' }}>
                <Grid item xs={12} sx={{ mt: '1px', pl: '0px !important' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <div className='title' style={{ marginBottom: 4, marginLeft: '0px' }}>
                      Facility Relationships
                    </div>
                    <div className='line'></div>
                  </Box>
                </Grid>
              </Grid>

              <FacilityRelationShipsList
                {...props}
                setOrgData={setOrgData}
                setLoading={setLoading}
                setErrorMsg={setErrorMsg}
              />
            </Section>
          </Box>
        </SectionDetail>
      )}
    </Container>
  );
};

export default FacilityRelationships;
