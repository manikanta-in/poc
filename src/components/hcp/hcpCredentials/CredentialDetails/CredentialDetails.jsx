import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import CredentialCard from './CredentialCard.jsx';
import EducationCard from './EducationCard.jsx';
import CertificationCard from './CertificationCard.jsx';
import HfCredentials from './HfCredentials.jsx';

const CredentialDetails = props => {
  const [credentialExpandedData, setCredentialData] = useState('');
  const parameters = props;
  const dataPageName = 'D_HCPCredentialExpandedPage';
  const options = {
    invalidateCache: true
  };
  const context = 'app/context';

  useEffect(() => {
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          //console.log('credential details');
          setCredentialData(response);
          //console.log(response);
          //setIsLoading(false);
        }
      )
      .catch(error => {
        console.log(error);
        //setIsLoading(false);
      });
  }, []);
  return (
    <>
      {credentialExpandedData && (
        <>
          <CredentialCard credentialDetails={credentialExpandedData} />
          <EducationCard credentialDetails={credentialExpandedData} />
          <CertificationCard credentialDetails={credentialExpandedData} />
          <HfCredentials credentialDetails={credentialExpandedData} />
        </>
      )}
    </>
  );
};

export default CredentialDetails;
