import React, { useEffect, useState } from 'react';

import { Flex, Tabs, TabPanel } from '@pega/cosmos-react-core';
import StyledTabs from './styles.js';
import ProviderDetails from './providerDetails/providerDetails.jsx';
import HcpCredentials from './hcpCredentials/index.jsx';
import OrgRelationships from './orgRelationships/orgRelationships.jsx';
import LocationsAndContracts from './LocationsAndContracts/LocationsAndContracts.jsx';
import Notes from './notes/notes.jsx';
import InfoCard from '../common/InfoCard/InfoCard.jsx';
const HCPDetails = props => {
  const [panelShown, changePanel] = useState('1');
  const [panelProviderData, setPanelProviderData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultsFetched, setResultsFetched] = useState(false);

  const handleTabChange = id => {
    changePanel(id);
  };

  const tabs = [
    { name: 'Professional Details', id: '1' },
    { name: 'Credentials', id: '2' },
    { name: 'Org Relationships', id: '3' },
    { name: 'Locations & Contracts', id: '4' },
    { name: 'Claims & Reimbursements', id: '5', disabled: true },
    { name: 'Notes / Transactions', id: '6' },
    { name: 'Documents', id: '7', disabled: true }
  ];

  const renderTab = () => {
    switch (panelShown) {
      case '1':
        return (
          <div style={{ width: '100%' }}>
            <ProviderDetails HCPID={props.HCPID} setPanelProviderData={setPanelProviderData} />
          </div>
        );
      case '2':
        return (
          <div style={{ width: '100%', background: '#f4f6f4', borderRadius: '10px' }}>
            <HcpCredentials HcpID={props.HCPID} />
          </div>
        );
      case '3':
        return (
          <div style={{ width: '83%' }}>
            <OrgRelationships HcpID={props.HCPID} />
          </div>
        );
      case '4':
        return (
          <div style={{ width: '100%' }}>
            <LocationsAndContracts HcpID={props.HCPID} />
          </div>
        );
      case '5':
        return <h1>WIP</h1>;
      case '6':
        return (
          <div style={{ width: '100%' }}>
            <Notes HcpID={props.HCPID} data={panelProviderData} />
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
          <div style={{ paddingBottom: '100px' }}>
            <InfoCard data={panelProviderData} />
          </div>
          <Tabs
            tabs={tabs}
            type='vertical'
            onTabClick={handleTabChange}
            currentTabId={panelShown}
            className='tabs'
          />
        </Flex>
        {renderTab()}
      </Flex>
    </StyledTabs>
  );
};

export default HCPDetails;
