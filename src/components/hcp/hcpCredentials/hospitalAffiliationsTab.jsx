import React from 'react';
import { TableWrapper, LinkStyled, TableRowText } from '../../commonStyles/commonstyle.style';

import {
  HealthAfflicationTableHeader,
  HealthAfflicationTableHead,
  HealthAfflicationTableRows
} from './HcpCredentials.style';

const hospitalAffiliationsTab = props => {
  const { hospitalAaffiliationsData } = props;
  console.log(hospitalAaffiliationsData);

  return (
    <>
      {hospitalAaffiliationsData === undefined ? (
        <h1>No Hospital Affiliation Data</h1>
      ) : (
        <TableWrapper data-testid='hospital-affiliation'>
          <HealthAfflicationTableHead>
            <HealthAfflicationTableHeader>Facility ID</HealthAfflicationTableHeader>
            <HealthAfflicationTableHeader style={{ justifyContent: 'center' }}>
              Facility Name
            </HealthAfflicationTableHeader>
            <HealthAfflicationTableHeader style={{ justifyContent: 'center' }}>
              OPCERT
            </HealthAfflicationTableHeader>
            <HealthAfflicationTableHeader style={{ justifyContent: 'center' }}>
              Address
            </HealthAfflicationTableHeader>
            <HealthAfflicationTableHeader style={{ justifyContent: 'center' }}>
              Start Date
            </HealthAfflicationTableHeader>
            <HealthAfflicationTableHeader style={{ justifyContent: 'center' }}>
              End Date
            </HealthAfflicationTableHeader>
            <HealthAfflicationTableHeader style={{ justifyContent: 'center' }}>
              Type of <br></br> Privileges
            </HealthAfflicationTableHeader>
          </HealthAfflicationTableHead>
          {hospitalAaffiliationsData &&
            hospitalAaffiliationsData?.length > 0 &&
            hospitalAaffiliationsData.map((item, index) => (
              <HealthAfflicationTableRows>
                <TableRowText style={{ marginTop: 25, alignItems: 'center' }}>
                  <LinkStyled onClick={() => console.log('Clicked: ' + item?.FacilityId)}>
                    {item?.FacilityId}
                  </LinkStyled>
                </TableRowText>
                <TableRowText
                  style={{ marginTop: 25, alignItems: 'center', justifyContent: 'center' }}
                >
                  {item?.FacilityName}{' '}
                </TableRowText>
                <TableRowText
                  style={{ marginTop: 25, alignItems: 'center', justifyContent: 'center' }}
                >
                  {item?.OPCERT}
                </TableRowText>
                <TableRowText
                  style={{ marginTop: 25, alignItems: 'center', justifyContent: 'center' }}
                >
                  {item?.Address}
                </TableRowText>
                <TableRowText
                  style={{ marginTop: 25, alignItems: 'center', justifyContent: 'center' }}
                >
                  {item?.StartDate}
                </TableRowText>
                <TableRowText
                  style={{ marginTop: 25, alignItems: 'center', justifyContent: 'center' }}
                >
                  {item?.EndDate}
                </TableRowText>
                <TableRowText
                  style={{ marginTop: 25, alignItems: 'center', justifyContent: 'center' }}
                >
                  {item?.TypeOfPrivileges}
                </TableRowText>
              </HealthAfflicationTableRows>
            ))}
        </TableWrapper>
      )}
    </>
  );
};

export default hospitalAffiliationsTab;
