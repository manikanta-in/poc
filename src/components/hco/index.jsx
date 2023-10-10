import React, { useEffect, useState } from 'react';

import { Flex, Tabs, TabPanel } from '@pega/cosmos-react-core';
import StyledTabs from './styles.js';
import OrganizationDetails from './organizationDetails/organizationDetails.jsx';
import FacilityRelationShips from './facilityRelationships/facilityRelationships.jsx';
import ProfessionalRelationShips from './professionalRelationships/professionalRelationships.jsx';
import ContractsAndReimbursements from './contracts/contracts.jsx';
import Notes from './notes/notes.jsx';
import OrgCard from '../common/orgCard/orgCard.jsx';

const HCODetails = props => {
  const [panelShown, changePanel] = useState('1');
  const [panelOrgData, setPanelOrgData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultsFetched, setResultsFetched] = useState(false);

  const handleTabChange = id => {
    changePanel(id);
  };

  const tabs = [
    { name: 'Organization Details', id: '1' },
    { name: 'Professional Relationships', id: '2' },
    { name: 'Facility Relationships', id: '3' },
    { name: 'Contracts & Reimbursements', id: '4', disabled: true },
    { name: 'Notes / Transactions', id: '5', disabled: true },
    { name: 'Documents', id: '6', disabled: true }
  ];

  const renderTab = () => {
    switch (panelShown) {
      case '1':
        return (
          <div style={{ width: '88%' }}>
            <OrganizationDetails
              HcoID={props.HcoID}
              handleTabChange={handleTabChange}
              setPanelOrgData={setPanelOrgData}
            />
          </div>
        );
      case '2':
        return (
          <div style={{ width: '88%' }}>
            <ProfessionalRelationShips HcoID={props.HcoID} />
          </div>
        );
      case '3':
        return (
          <div style={{ width: '88%' }}>
            <FacilityRelationShips HcoID={props.HcoID} />
          </div>
        );
      case '4':
        //return <div style={{ width: '100%' }}><ContractsAndReimbursements HcoID={props.HcoID} /></div>;
        return <h1>WIP</h1>;
      case '5':
        //return <div style={{ width: '100%' }}><Notes HcoID={props.HcoID} /></div>;
        return <h1>WIP</h1>;
      case '6':
        return <h1>WIP</h1>;
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
          style={{ width: '260px', marginLeft: '-20px' }}
        >
          <OrgCard data={panelOrgData} />
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

export default HCODetails;
