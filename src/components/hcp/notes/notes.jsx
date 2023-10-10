import React, { useEffect, useState } from 'react';
import { Section, SectionDetail, Container } from '../../commonStyles/commonstyle.style';
import NotesTabContent from './NotesTabContent.jsx';
import TransactionsTabContent from './TransactionTabContent.jsx';
import Box from '@mui/material/Box';
import { Icon, Progress, Tabs } from '@pega/cosmos-react-core';
import ErrorPage from '../../common/Error/ErrorPage.jsx';

const Notes = props => {
  const { HcpID } = props;
  const [activeTab, setActiveTab] = useState('notes');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const handleTabChange = id => {
    setActiveTab(id);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'notes':
        return (
          <NotesTabContent
            HcpID={HcpID}
            legacyIds={props.data?.ProfessionalDetails?.LegacyProviderID}
            setLoading={setLoading}
            setErrorMsg={setErrorMsg}
          />
        );
      default:
        return <TransactionsTabContent />;
    }
  };

  const tabs = [
    { name: 'Notes', id: 'notes' },
    { name: 'Transactions', id: 'transactions', disabled: true }
  ];

  return (
    <Container style={{ width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={loading} />
      <SectionDetail style={{ height: '104vh' }}>
        {/* <InfoCard data={notesData} /> */}
        <Box className='info' sx={{ ml: '5px' }}>
          <Section style={{ height: '98%' }}>
            <Tabs
              tabs={tabs}
              type='horizontal'
              onTabClick={handleTabChange}
              currentTabId={activeTab}
              className='SearchTabs'
            />
            <div style={{ marginTop: '30px' }}>
              {errorMsg?.pyAdviceText &&
              errorMsg?.pyAdviceText != 'Results not found for selected criteria.' ? (
                <ErrorPage errorMsg={errorMsg} />
              ) : (
                renderTab()
              )}
            </div>
          </Section>
        </Box>
      </SectionDetail>
    </Container>
  );
};

export default Notes;
