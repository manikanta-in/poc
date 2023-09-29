import React, { useEffect, useState } from 'react';

import { Flex, Tabs, TabPanel } from '@pega/cosmos-react-core';
import StyledTabs from './styles.js';
import FacilityDetails from './facilityDetails/facilityDetails.jsx';
import ProfessionalRelationShips from './professionalRelationships/professionalRelationships.jsx';
import Notes from './notes/notes.jsx';
import FacilityCard from '../common/FacilityCard/FacilityCard.jsx';

const HCFDetails = props => {
  const [panelShown, changePanel] = useState('1');
  const [panelOrgData, setPanelOrgData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultsFetched, setResultsFetched] = useState(false);

  const handleTabChange = id => {
    changePanel(id);
  };

  const tabs = [
    { name: 'Facility Details', id: '1' },
    { name: 'Professional Relationships', id: '2' },
    { name: 'Notes / Transactions', id: '3', disabled: true },
    { name: 'Documents', id: '4', disabled: true }
  ];

  const renderTab = () => {
    switch (panelShown) {
      case '1':
        return (
          <div style={{ width: '88%' }}>
            <FacilityDetails
              HcfID={props.HCFID}
              handleTabChange={handleTabChange}
              setPanelOrgData={setPanelOrgData}
            />
          </div>
        );
      case '2':
        return (
          <div style={{ width: '88%' }}>
            <ProfessionalRelationShips HcfID={props.HCFID} />
          </div>
        );
      case '3':
        return (
          <div style={{ width: '88%' }}>
            <Notes HcfID={props.HCFID} />
          </div>
        );
      case '4':
        return (
          <div style={{ width: '88%' }}>
            <h1>Coming soon</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <StyledTabs>
      <Flex container={{ direction: 'row' }}>
        <Flex
          container={{ direction: 'column' }}
          className='sidebar'
          style={{ marginLeft: '-20px' }}
        >
          <FacilityCard data={panelOrgData} />
          <Tabs
            tabs={tabs}
            type='vertical'
            onTabClick={handleTabChange}
            currentTabId={panelShown}
          />
        </Flex>

        {renderTab()}
      </Flex>
    </StyledTabs>
  );
};

export default HCFDetails;
