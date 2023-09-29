import { useState, useEffect } from 'react';
import { MdNavigateBefore } from 'react-icons/md';
import { Detail, BackButton } from './LocationsAndContracts.style';
import LocationCard from './LocationCard.jsx';
import { Progress } from '@pega/cosmos-react-core';

import InfoCard from '../../common/InfoCard/InfoCard.jsx';
import { Container } from '../../commonStyles/commonstyle.style';
import LocationContractDetails from './LocationsContractsDetail/LocationsContractsDetail.jsx';

// interface KeyValuePair {
//   name: string;
//   color: string;
//   displayName: string;
// }

// const tabArr: KeyValuePair[] = [
//   {
//     name: "default",
//     color: "#FFF",
//     displayName: ProviderInfo.ProfessionalId + " || " + ProviderInfo.Name,
//   },
// ];

const LocationsAndContracts = props => {
  const [activeTab, setActiveTab] = useState('first-tab');
  const [showActions, setActions] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [enableIcon, setEnableIcon] = useState(true);
  const [locationObject, setLocationObject] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationData, setLocationData] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const dataPageName = 'D_HCPLocationandContracts';
  const context = 'app/context';
  const parameters = { ID: props.HcpID };
  const options = {
    invalidateCache: true
  };
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          console.log(response);
          setLocationData(response);
          if (response?.ErrorPage) {
            setErrorMsg(response.ErrorPage);
          }
          setIsLoading(false);
        }
      )
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const [isAddLocation, setAddLocationFlag] = useState(false);

  const onBack = () => {
    setShowDetails(false);

    setEnableIcon(true);
    setActions(false);
    setAddLocationFlag(false);
  };

  const setDetails = param => {
    setShowDetails(true);
    setEnableIcon(false);
    setLocationObject(param);
  };

  // const addNewTab = () => {
  //   const newTab: KeyValuePair = {
  //     name: "IR-create",
  //     color: "#FFF",
  //     displayName: ProviderInfo.ProfessionalId + " || " + ProviderInfo.Name,
  //   };
  //   const updatedState = tabArray.map((tab) => {
  //     if (tab.name === "default") tab.color = "#e6f0e6";
  //     return tab;
  //   });
  //   const newTabArr = [...updatedState, newTab];
  //   setTabArray(newTabArr);
  //   setShowDetails(true);
  //   setActiveTab("second-tab");
  //   setEnableIcon(false);
  //   setActions(false);
  // };

  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />

      <Detail>
        {showDetails && activeTab === 'second-tab' ? (
          <SuccessBar open={open} setOpen={setOpen} />
        ) : (
          ''
        )}
        {/* <InfoCard data={locationData} /> */}
        {showDetails && activeTab === 'first-tab' ? (
          <div className='info'>
            <>
              <BackButton
                className='back-arrow'
                style={{ position: 'relative', marginTop: '-2.1%', top: '11px' }}
                onClick={() => onBack()}
              >
                <MdNavigateBefore
                  style={{
                    marginTop: '4px',
                    color: '#333333',
                    opacity: 0.8,
                    fontSize: '1.25rem'
                  }}
                ></MdNavigateBefore>
                <p style={{ fontWeight: 600 }} className='back-text'>
                  Back
                </p>
              </BackButton>
              <LocationContractDetails
                locationObject={locationObject}
                locationData={locationData?.Locations}
                HcpID={props.HcpID}
                {...props}
              />
            </>
          </div>
        ) : (
          <div className={locationData?.Locations?.length > 0 ? 'info' : ''}>
            <LocationCard setDetails={setDetails} locationData={locationData} errorMsg={errorMsg} />
          </div>
        )}
      </Detail>
    </Container>
  );
};

export default LocationsAndContracts;
