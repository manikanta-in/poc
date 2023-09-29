import React, { useEffect, useState } from 'react';
import { DetailInfo } from './orgRelationship.style';
import { Progress } from '@pega/cosmos-react-core';
import { Container, Detail } from '../../commonStyles/commonstyle.style';
import OrgRelationshipCardContent from './orgRelationshipCardContent.jsx';
import InfoCard from '../../common/InfoCard/InfoCard.jsx';

const OrgRelationships = props => {
  const dataPageName = 'D_HCPOrgRelationshipDetails';
  const context = 'app/context';
  const parameters = { ID: props.HcpID };
  const options = {
    invalidateCache: true
  };
  const [orgData, setOrgData] = useState();
  const [errorMsg, setErrorMsg] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  //Get Org Relationships
  useEffect(() => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          setOrgData(response);
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

  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />

      <Detail>
        <DetailInfo>
          <OrgRelationshipCardContent orgRelationships={orgData} errorMsg={errorMsg} />
        </DetailInfo>
      </Detail>
    </Container>
  );
};

export default OrgRelationships;
