import React, { useState } from 'react';
import { Section, SectionDetail } from '../../commonStyles/commonstyle.style';
import OrgCard from '../../common/orgCard/orgCard.jsx';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Progress } from '@pega/cosmos-react-core';
import FormControl from '@mui/material/FormControl';
import SelectSpecialty from '../../common/SelectFields/SelectSpecialty.jsx';

import ProfessionalRelationShipsList from './professionalRelationShipsList.jsx';
import { Container } from './styles.style';
import ErrorPage from '../../common/Error/ErrorPage.jsx';

const ProfessionalRelationships = props => {
  const [specialtyList, setSpecialtyList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = specialityArray => {
    setSpecialtyList(specialityArray);
  };

  const [orgData, setOrgData] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Progress variant='ring' placement='local' message='Loading' visible={loading} />
      {errorMsg?.pyAdviceText && (
        <Grid item xs={12}>
          <ErrorPage errorMsg={errorMsg} />
        </Grid>
      )}
      {!errorMsg?.pyAdviceText && (
        <SectionDetail style={{ height: '104vh' }}>
          {/* <OrgCard data={orgData} /> */}
          <Box className='info' sx={{ ml: '5px' }}>
            <Section style={{ height: '96%' }}>
              <Grid container spacing={2} sx={{ ml: '2px', pl: '0px !important' }}>
                <Grid item xs={8} sx={{ mt: '1px', pl: '0px !important' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <div className='title' style={{ marginBottom: 4, marginLeft: '0px' }}>
                      Professional Relationships
                    </div>
                    <div className='line'></div>
                  </Box>
                </Grid>
                <Grid item xs={4} sx={{ mt: '15px', ml: '-30px' }}>
                  <Box display='flex' justifyContent='flex-end'>
                    <FormControl style={{ width: '100%' }}>
                      <SelectSpecialty changeEvent={handleChange} />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>

              <ProfessionalRelationShipsList
                specialties={specialtyList}
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

export default ProfessionalRelationships;
