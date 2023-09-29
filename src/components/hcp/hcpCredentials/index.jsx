import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CredentialsTabContent from './credentialsTabContent.jsx';
import HospitalAffiliationsTab from './hospitalAffiliationsTab.jsx';
import CredentialDetails from './CredentialDetails/CredentialDetails.jsx';
import { Detail, BackButton } from './HcpCredentials.style.js';
import { Container } from '../../commonStyles/commonstyle.style';
import { Icon, Progress, Tabs } from '@pega/cosmos-react-core';
// import { Detail } from './styles';
import InfoCard from '../../common/InfoCard/InfoCard.jsx';

const HcpCredentials = props => {
  const { HcpID } = props;
  const [activeTab, setActiveTab] = useState('credentials');
  const [showDetail, setDetail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [credentialData, setCredentialData] = useState('');
  const [apiError, setApiError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [hospitalAaffiliationsData, setHospitalAffiliationData] = useState('');

  const handleTabChange = id => {
    setActiveTab(id);
  };
  const renderTab = () => {
    switch (activeTab) {
      case 'credentials':
        return (
          <CredentialsTabContent
            setDetails={setDetails}
            credentialData={credentialData?.CredentialDetails}
            apiError={apiError}
            errorMsg={errorMsg}
          />
        );
      default:
        return (
          <HospitalAffiliationsTab
            hospitalAaffiliationsData={hospitalAaffiliationsData?.HospitalAffilitions}
          />
        );
    }
  };

  const tabs = [
    { name: 'Credentials', id: 'credentials' },
    { name: 'Hospital Affiliations', id: 'affiliations', disabled: true }
  ];

  //Setting variables needed to get credentials page details
  const dataPageName = 'D_HCPCredentialLandingDetails';
  const context = 'app/context';
  const parameters = { ID: HcpID };
  const options = {
    invalidateCache: true
  };

  //On rendering of the screen, fetch credentials page details
  useEffect(() => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          console.log('Credential Data');
          console.log(response);
          setCredentialData(response);
          if (response?.ErrorPage) {
            setErrorMsg(response.ErrorPage);
          }
          setIsLoading(false);
        }
      )
      .catch(error => {
        console.log(error);
        setApiError(true);
        setIsLoading(false);
      });
  }, []);

  //On rendering of the screen, fetch facility affiliations
  // useEffect(() => {
  //   setIsLoading(true);
  //   PCore.getDataPageUtils()
  //     .getPageDataAsync('D_HCPFacilityAffiliations', context, parameters, options)
  //     .then(response =>
  //       // The response of this API is as shown below:
  //       {
  //         console.log('Hospital Afilliation Data');
  //         console.log(response);
  //         setHospitalAffiliationData(response);
  //         setIsLoading(false);
  //       }
  //     )
  //     .catch(error => {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  const setDetails = () => {
    setDetail(true);
  };

  const onBack = () => {
    setDetail(false);
  };

  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <Detail>
        <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />
        {!showDetail ? (
          <div className='info'>
            <Tabs
              tabs={tabs}
              type='horizontal'
              onTabClick={handleTabChange}
              currentTabId={activeTab}
              className='SearchTabs'
            />
            <div style={{ marginTop: '30px' }}>{renderTab()}</div>
          </div>
        ) : (
          <>
            <div className='info'>
              <BackButton
                className='back-arrow'
                style={{
                  position: 'relative',
                  zIndex: '999',
                  marginTop: '-2.1%',
                  top: '12px',
                  left: '16px'
                }}
                onClick={() => onBack()}
              >
                <Icon
                  style={{ height: '1.25rem', width: '1.25rem' }}
                  name='caret-left'
                  role='img'
                  aria-label='caret-left'
                />
                <p style={{ fontWeight: 600 }} className='back-text'>
                  {' '}
                  Back{' '}
                </p>
              </BackButton>
              <CredentialDetails {...parameters} />
            </div>
          </>
        )}
      </Detail>
    </Container>
  );
};

export default HcpCredentials;
