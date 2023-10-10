import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { SectionDetail, Container } from '../../../../commonStyles/commonstyle.style';
import { Tab } from '../../../notes/notes.style';
import { Icon, Progress, Tabs } from '@pega/cosmos-react-core';
import { BackButton, Section } from '../../LocationsAndContracts.style';
import PR1033 from './PR1033.jsx';
import PR1011 from './PR1011/PR1011.jsx';
import PR1013 from './PR1013.jsx';
import { Label, Value } from './style';
import DropdownSelect from '../../../../common/DropdownSelect/DropdownSelect.jsx';
import { constructAddress } from '../../../../shared/utils';
import PR1032 from './PR1032.jsx';
import { MdNavigateBefore } from 'react-icons/md';

const DetailedView = props => {
  const [activeTab, setActiveTab] = useState('pr1011');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [resultsFetched, setResultsFetched] = useState('loading');
  const [pr1013Data, setPr1013Data] = useState('');
  const [pr1032Data, setPr1032Data] = useState('');
  const [pr1033Data, setPr1033Data] = useState('');
  const [pr1011Data, setPr1011Data] = useState('');
  const [dropdownData, setDropdownData] = useState();

  const { facilityData, setShowDetailedView } = props;
  const [legacyID, setLegacyID] = useState(facilityData?.LegacyProviderID[0]);
  const dataPageName = 'D_LegacyDataAPI';
  const context = 'app/context';
  const options = {
    invalidateCache: true
  };

  const fetchData = () => {
    const parameters = { LegacyAPIID: legacyID };
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          setPr1013Data(response?.ProviderContractList);
          setPr1032Data(response?.ProviderService);
          setPr1011Data(response?.Provider);
          setResultsFetched('fetched');
          if (response?.ErrorPage) {
            setErrorMsg(response.ErrorPage);
          }
          setIsLoading(false);
        }
      )
      .catch(error => {
        console.log('error' + error);
        setErrorMsg(error);
        setResultsFetched('error');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    PCore.getDataPageUtils()
      .getDataAsync('D_CompanyDetailsList', context)
      .then(response => {
        setDropdownData(response?.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [legacyID]);
  const handleTabChange = id => {
    setActiveTab(id);
  };

  const changeCompanyFilter = filter => {
    setLegacyID(filter);
    console.log(filter);
  };

  const exitDetailedView = () => {
    setShowDetailedView(false);
  };
  const renderTab = () => {
    switch (activeTab) {
      case 'pr1011':
        return <PR1011 pr1011Data={pr1011Data} />;
      case 'pr1013':
        return (
          <PR1013
            pr1013Data={pr1013Data}
            errorMsg={errorMsg}
            isLoading={isLoading}
            resultsFetched={resultsFetched}
            setIsLoading={setIsLoading}
            dropdownData={dropdownData}
          />
        );
      case 'pr1032':
        return <PR1032 pr1032Data={pr1032Data} />;
      case 'pr1033':
        return <PR1033 />;

      default:
        return <PR1011 />;
    }
  };

  const tabs = [
    { name: 'PR1011', id: 'pr1011' },
    { name: 'PR1013', id: 'pr1013' },
    { name: 'PR1032', id: 'pr1032', disabled: true },
    { name: 'PR1033', id: 'pr1033', disabled: true }
  ];

  return (
    <>
      <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div>
          <BackButton
            className='back-arrow'
            style={{
              position: 'absolute',
              marginTop: '-56px',
              marginLeft: '-1%',
              alignItems: 'center'
            }}
            onClick={() => exitDetailedView()}
          >
            <MdNavigateBefore
              style={{
                color: '#333333',
                opacity: 0.8,
                fontSize: '1.25rem'
              }}
            ></MdNavigateBefore>
            <p style={{ fontWeight: 600, padding: 9 }} className='back-text'>
              Back
            </p>
          </BackButton>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <div className='title' style={{ marginBottom: 10 }}>
                Detailed Legacy View
              </div>
              <div className='header-line'></div>
            </Box>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: '5%', marginBottom: '5%' }}>
          <Grid item xs={5}>
            <Label>Practice Address</Label>
            <Value>{constructAddress(facilityData)}</Value>
          </Grid>
          <Grid item xs={1} title={legacyID}>
            <DropdownSelect
              label={'Legacy Provider ID'}
              changeEvent={changeCompanyFilter}
              data={facilityData?.LegacyProviderID}
              hideAllOption={true}
            />
          </Grid>
        </Grid>
        <div style={{ marginLeft: '15px', marginTop: '15px' }}>
          <Tabs
            tabs={tabs}
            type='horizontal'
            onTabClick={handleTabChange}
            currentTabId={activeTab}
            className='SearchTabs'
          />
        </div>
        <div style={{ marginTop: '30px' }}>{renderTab()}</div>
      </div>
    </>
  );
};
export default DetailedView;
