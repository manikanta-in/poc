import React, { useEffect, useState } from 'react';
import OrgCard from '../../common/orgCard/orgCard.jsx';
import { Section, SectionDetail, Container } from '../../commonStyles/commonstyle.style';
import NotesTabContent from './NotesTabContent.jsx';
import TransactionsTabContent from './TransactionsTabContent.jsx';
import { Tab } from './notes.style';
import Box from '@mui/material/Box';
import { Progress } from '@pega/cosmos-react-core';

const Notes = props => {
  const [activeTab, setActiveTab] = useState('notes');
  const [notesData, setNotesData] = useState({});

  const [loading, setLoading] = useState(false);

  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={loading} />

      <SectionDetail style={{ height: '620px' }}>
        {/* <OrgCard data={notesData} /> */}
        <Box className='info' sx={{ ml: '5px' }}>
          <Section style={{ height: '98%' }}>
            <Tab>
              <button
                className={activeTab === 'notes' ? 'active' : 'tablink'}
                onClick={() => {
                  setActiveTab('notes');
                }}
              >
                <p className='active'>Notes</p>
              </button>
              <button
                className={activeTab === 'transactions' ? 'active' : 'tablink'}
                onClick={() => {
                  setActiveTab('transactions');
                }}
              >
                <p>Transactions</p>
              </button>
            </Tab>

            {activeTab === 'notes' ? (
              <NotesTabContent setNotesData={setNotesData} setLoading={setLoading} />
            ) : (
              <TransactionsTabContent setNotesData={setNotesData} setLoading={setLoading} />
            )}
          </Section>
        </Box>
      </SectionDetail>
    </Container>
  );
};

export default Notes;
