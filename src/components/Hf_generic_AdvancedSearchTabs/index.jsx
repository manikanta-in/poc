import { SetStateAction, useState } from 'react';
import { Flex, TabPanel, Tabs } from '@pega/cosmos-react-core';

import StyledHfGenericAdvancedSearchTabsWrapper from './styles';
import FacilityTab from '../advanceSearch/ListSearch/Facility/FacilityTab.jsx';
import OrganizationTab from '../advanceSearch/ListSearch/Organization/OrganizationTab.jsx';
import ProfessionalTab from '../advanceSearch/ListSearch/Professional/ProfessionalTab.jsx';

export default function HfGenericAdvancedSearchTabs(props) {
  const [panelShown, changePanel] = useState('HCO');
  const [tabDisabled, setTabDisabled] = useState(false);
  const handleTabChange = id => {
    changePanel(id);
  };

  const renderTab = () => {
    switch (panelShown) {
      case 'HCO':
        return <OrganizationTab {...props} />;
      case 'HCF':
        return <FacilityTab {...props} />;
      case 'HCP':
        return <ProfessionalTab {...props} />;
      default:
        return null;
    }
  };

  const tabs = [
    { name: 'Organization (HCO)', id: 'HCO', disabled: tabDisabled },
    { name: 'Facility (HCF)', id: 'HCF', disabled: tabDisabled },
    { name: 'Professional (HCP)', id: 'HCP', disabled: tabDisabled }
  ];

  return (
    <StyledHfGenericAdvancedSearchTabsWrapper>
      <Tabs tabs={tabs} type='horizontal' onTabClick={handleTabChange} currentTabId={panelShown} />

      <TabPanel>{renderTab()}</TabPanel>
    </StyledHfGenericAdvancedSearchTabsWrapper>
  );
}

// HfGenericAdvancedSearchTabs.defaultProps = {
//   header: PropTypes.string,
//   description: PropTypes.string,
//   datasource: PropTypes.instanceOf(Object),
//   whatsnewlink: PropTypes.string,
//   image: PropTypes.string
// };

// HfGenericAdvancedSearchTabs.propTypes = {
//   header: '',
//   description: '',
//   image: '',
//   datasource: [],
//   whatsnewlink: ''
// };
