import { useState } from 'react';
import { Flex, TabPanel, Tabs } from '@pega/cosmos-react-core';

import FacilitySearchList from './FacilitySearchList.jsx';
import OrganizationSearchList from './OrganizationSearchList.jsx';
import ProfessionalSearchList from './ProfessionalSearchList.jsx';
import StyledForm from './styles.js';
const GlobalSearch = props => {
  const [panelShown, changePanel] = useState(props.panelShown);
  const handleTabChange = id => {
    changePanel(id);
  };

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
    <StyledForm>
      <div className='SearchTabs'>
        <Tabs
          tabs={tabs}
          type='horizontal'
          onTabClick={handleTabChange}
          currentTabId={panelShown}
        />
      </div>
      {renderTab()}
    </StyledForm>
  );
};

export default GlobalSearch;
