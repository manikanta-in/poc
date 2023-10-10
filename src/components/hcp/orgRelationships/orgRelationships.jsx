import React, { useEffect, useState } from 'react';
import { Progress } from '@pega/cosmos-react-core';
import { Container, Section, SectionDetail } from '../../commonStyles/commonstyle.style';
import OrgRelationshipCardContent from './orgRelationshipCardContent.jsx';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ErrorPage from '../../common/Error/ErrorPage.jsx';

const OrgRelationships = props => {
  const dataPageName = 'D_HCPOrgRelationshipDetails';
  const context = 'app/context';
  const parameters = { ID: props.HcpID };
  const options = {
    invalidateCache: true
  };
  const [orgData, setOrgData] = useState();
  const [errorMsg, setErrorMsg] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;
  //Get Org Relationships
  const fetchData = () => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
      // The response of this API is as shown below:
      {
        setOrgData(response);
        if (response?.ErrorPage) {
          setErrorMsg(response.ErrorPage);
        } else {
          const pages = Math.ceil(response?.OrganizationList?.length / itemsPerPage);
          setTotalPages(pages);
          setCurrentPage(1);
        }
        setIsLoading(false);
      }
      )
      .catch(error => {
        setTotalPages(0);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChangePage = newPage => {
    setCurrentPage(newPage);
  };


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = orgData?.OrganizationList?.slice(startIndex, endIndex);

  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />
      {errorMsg && (
        <Grid item xs={12}>
          <ErrorPage errorMsg={errorMsg} />
        </Grid>
      )}

      {!errorMsg && (
        <SectionDetail style={{ height: '104vh' }}>
          {/* <OrgCard data={orgData} /> */}
          <Box className='info' sx={{ ml: '5px' }}>
            <Section style={{ height: '96%' }}>
              <Grid container spacing={2} sx={{ ml: '2px', pl: '0px !important' }}>
                <Grid item xs={8} sx={{ mt: '1px', pl: '0px !important' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <div className='title' style={{ marginBottom: 4, marginLeft: '0px' }}>
                      Org Relationships
                    </div>
                    <div className='line'></div>
                  </Box>
                </Grid>
              </Grid>

              <OrgRelationshipCardContent
                totalPages={totalPages}
                currentPage={currentPage}
                onChangePage={onChangePage}
                data={currentPageData}
                errorMsg={errorMsg}
              />
            </Section>
          </Box>
        </SectionDetail>
      )}
    </Container>
  );
};

export default OrgRelationships;
