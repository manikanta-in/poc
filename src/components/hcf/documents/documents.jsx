import { useEffect, useState } from 'react';

import { Section, SectionDetail, Container } from '../../commonStyles/commonstyle.style';
import DocumentCard from './DocumentCard.jsx';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

const FacilityInfo = {
  FacilityId: 'F-7HG82J49',
  Name: 'Montefiore Medical Center',
  Address: '1 Sunrise Canyon Dr, New York , NY 10001'
};

const Documents = props => {
  const [closeTabId, setCloseTabId] = useState(null);
  const [tabList, setTabList] = useState(null);

  const { id } = props;

  useEffect(() => {
    if (closeTabId) {
      setCloseTabId(null);
    }
  }, [closeTabId]);

  return (
    <Container style={{ width: '100%', paddingBottom: '25px' }}>
      <SectionDetail style={{ height: '610px' }}>
        <Box className='info' sx={{ ml: '5px' }}>
          <Section style={{ height: '96%' }}>
            <Grid container spacing={2} sx={{ ml: '2px' }}>
              <Grid item xs={12} sx={{ mt: '1px' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <div className='title' style={{ marginBottom: 4 }}>
                    Documents
                  </div>
                  <div className='line'></div>
                </Box>
              </Grid>
            </Grid>
            <DocumentCard />
          </Section>
        </Box>
      </SectionDetail>
    </Container>
  );
};

export default Documents;
