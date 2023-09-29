import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TabPanel } from '@pega/cosmos-react-core';
import StyledHfGenericAdvancedSearchTabsWrapper from './styles';
import FacilitySearchList from '../List/FacilitySearchList.jsx';
import ProfessionalSearchList from '../List/ProfessionalSearchList.jsx';
import OrganizationSearchList from '../List/OrganizationSearchList.jsx';
import { Row } from '../../commonStyles/commonstyle.style';
export default function HfGenericListTabs(props) {
  const [panelShown, changePanel] = useState(props.panelShown);

  const renderTab = () => {
    switch (panelShown) {
      case 'organization':
        return <OrganizationSearchList {...props} />;
      case 'facility':
        return <FacilitySearchList {...props} />;
      case 'professional':
        return <ProfessionalSearchList {...props} />;
      default:
        return null;
    }
  };

  const tabs = [
    { name: 'Organization (HCO)', id: 'organization' },
    { name: 'Facility (HCF)', id: 'facility' },
    { name: 'Professional (HCP)', id: 'professional' }
  ];

  return (
    <StyledHfGenericAdvancedSearchTabsWrapper>
      <Grid item xs={12}>
        <Row>
          <Box sx={{ flexGrow: 1 }}>
            <div className='title' style={{ marginBottom: 4 }}>
              Advanced Search Results
            </div>
            <div className='line' style={{ marginLeft: 0 }}></div>
          </Box>
        </Row>
      </Grid>
      <TabPanel>{renderTab()}</TabPanel>
    </StyledHfGenericAdvancedSearchTabsWrapper>
  );
}
