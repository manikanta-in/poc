import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { Section, SectionDetail, Container } from '../../../../commonStyles/commonstyle.style';
import { Tab } from '../../../notes/notes.style';
import PR1033 from './PR1033';
import PR1011 from './PR1011';
import DetailViewInfoCard from '../../../../common/DetailViewInfoCard';
import { useDispatch } from 'react-redux';

const DetailedView = props => {
  const [activeTab, setActiveTab] = useState('pr1011');
  const dispatch = useDispatch();

  const { showLoader, hideLoader } = props;
  //Get the tab data
  const tabState = useAppSelector(state => state.tabState);

  // Get current tab state
  const [state, setStateValue] = useState(tabState.tabs[tabState.activeTab]);

  const [selectedProvider] = useState(state?.selectedMasterID);

  useEffect(() => {
    if (!tabState.tabs[tabState.activeTab]?.PR1011Details?.ProviderMaintenance) {
      showLoader();
      dispatch(getLocationAndContractsPR1011({ hf_hcp_master_id_cd: selectedProvider }));
    }
  }, []);
  useEffect(() => {
    if (!tabState.tabs[tabState.activeTab]?.PR1033Details?.ProviderMemberAttributes) {
      showLoader();
      dispatch(getLocationAndContractsPR1033({ hf_hcp_master_id_cd: selectedProvider }));
    }
  }, []);

  const [pr1011Data, setPR1011Data] = useState<anyObject>(
    state?.PR1011Details?.ProviderMaintenance ?? {}
  );

  const [pr1033Data, setPR1033Data] = useState<anyObject>(
    state?.PR1033Details?.ProviderMemberAttributes ?? {}
  );

  useEffect(() => {
    setPR1011Data(tabState.tabs[tabState.activeTab]?.PR1011Details?.ProviderMaintenance ?? {});
    setPR1033Data(tabState.tabs[tabState.activeTab]?.PR1033Details?.ProviderMemberAttributes ?? {});

    if (
      tabState.tabs[tabState.activeTab]?.PR1011Details?.ProviderMaintenance ||
      tabState.tabs[tabState.activeTab]?.PR1033Details?.ProviderMemberAttributes
    ) {
      hideLoader();
    }
  }, [tabState]);

  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <SectionDetail style={{ height: '640px' }}>
        <DetailViewInfoCard data={state?.PR1011Details} />
        <Box className='info' sx={{ ml: '5px' }}>
          <Section style={{ height: '98%' }}>
            <Grid container spacing={2} sx={{ ml: '2px' }}>
              <Grid item xs={12} sx={{ mt: '1px' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <div className='title' style={{ marginBottom: 4 }}>
                    Legacy Details
                  </div>
                  <div className='line'></div>
                </Box>
              </Grid>
            </Grid>
            <Tab>
              <button
                className={activeTab === 'pr1011' ? 'active' : 'tablink'}
                onClick={() => {
                  setActiveTab('pr1011');
                }}
              >
                <p className='active'>Provider Maintainance (PR1011)</p>
              </button>
              <button
                className={activeTab === 'pr1033' ? 'active' : 'tablink'}
                onClick={() => {
                  setActiveTab('pr1033');
                }}
              >
                <p>Provider Member Attributes (PR1033)</p>
              </button>
            </Tab>

            {activeTab === 'pr1011' ? (
              <PR1011 pr1011Data={pr1011Data} />
            ) : (
              <PR1033 pr1033Data={pr1033Data} />
            )}
          </Section>
        </Box>
      </SectionDetail>
    </Container>
  );
};
export default DetailedView;
