import React, { useState, useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import { TextUnderLineHeader, Wrapper } from '../style.js';
import DemographicCard from './DemographicCard.jsx';
import LicenseCard from './LicenseCard.jsx';
import DefaultControlCard from './DefaultControlCard.jsx';
import ClaimCard from './ClaimCard.jsx';
import PatientEditCard from './PatientEditCard.jsx';
const PR1011 = props => {
  const { pr1011Data } = props;

  return (
    <>
      <TextUnderLineHeader style={{ marginBottom: '1%' }}>
        Provider Maintenance
        <p className='header-line' style={{ marginTop: '1vh' }}></p>
      </TextUnderLineHeader>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Wrapper
            style={{
              height: '95%',
              marginBottom: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
            }}
          >
            <DemographicCard pr1011Data={pr1011Data}></DemographicCard>
          </Wrapper>
          {/* <Wrapper
          style={{
            height: '25%',
            marginBottom: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
          }}
        >
          <DefaultControlCard></DefaultControlCard>
        </Wrapper> */}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Wrapper
            style={{
              height: '55%',
              marginBottom: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
            }}
          >
            <LicenseCard pr1011Data={pr1011Data}></LicenseCard>
          </Wrapper>
          <Wrapper
            style={{
              height: '36%',
              marginBottom: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
            }}
          >
            <ClaimCard pr1011Data={pr1011Data}></ClaimCard>
          </Wrapper>
          {/* <Wrapper
          style={{
            height: '40%',
            marginBottom: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
          }}
        >
          <PatientEditCard></PatientEditCard>
        </Wrapper> */}
        </div>
      </div>
    </>
  );
};
export default PR1011;
