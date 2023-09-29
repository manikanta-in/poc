import React from 'react';
import { Wrapper } from '../LocationsAndContracts.style';
import ProviderInfoCard from './ProviderInfoCard.jsx';

const LocationContractDetails = props => {
  const { locationObject, locationData, showLoader, hideLoader, HcpID } = props;

  return (
    <>
      <Wrapper>
        <ProviderInfoCard
          HcpID={HcpID}
          locationObject={locationObject}
          locationData={locationData}
          showLoader={showLoader}
          hideLoader={hideLoader}
        />
      </Wrapper>
    </>
  );
};

export default LocationContractDetails;
