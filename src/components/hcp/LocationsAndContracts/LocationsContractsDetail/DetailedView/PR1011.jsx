import React, { useEffect, useRef } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Grid from '@mui/material/Grid';
import TableBody from '@mui/material/TableBody';
import { StyledTableCell, StyledTableRow } from '../../../../commonStyles/commonstyle.style';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
//import { DemographicsCellHeader, LicenseDetailsCellHeader, DefaultControlsCellHeader } from "../../LocationsAndContracts.style";

import styles from '../../../../../assets/css/pr1011.module.css';

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 10px !important',
    marginTop: '-103px',
    width: '99%'
  }
}));

const PR1011 = props => {
  const { pr1011Data } = props;

  const tableRef = useRef(null);

  useEffect(() => {
    tableRef.current.scrollTo(0, 0);
  });

  //console.log("pr1011",pr1011Data)

  return (
    <>
      <Grid container>
        <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
          <div ref={tableRef} style={{ height: '100%', marginTop: 15, overflow: 'auto' }}>
            <div className={styles.demographicsPosition}>
              <div className={styles.headStyle}>
                <p className={`${styles.textBottom} ${styles.demographicsHeading}`}>Demographics</p>
                <div className={styles.underLine}></div>
              </div>
            </div>

            <div className={styles.licenseDetails}>
              <div className={styles.headStyle}>
                <p className={`${styles.textBottom} ${styles.licenseDetailsHeading}`}>
                  License&nbsp;Details
                </p>
                <div className={styles.underLine}></div>
              </div>
            </div>

            <div className={styles.defaultControls}>
              <div className={styles.headStyle}>
                <p className={`${styles.textBottom} ${styles.defaultControlsHeading}`}>
                  Default&nbsp;Controls
                </p>
                <div className={styles.underLine}></div>
              </div>
            </div>

            <Table sx={{ minWidth: 700 }} aria-label='customized table' className='tableTop'>
              <TableHead>
                <TableRow>
                  <StyledTableCell
                    align='center'
                    style={{ paddingLeft: '60px', paddingRight: '60px' }}
                  >
                    Name
                  </StyledTableCell>
                  <StyledTableCell align='center'>Title</StyledTableCell>
                  <StyledTableCell align='center'>Format</StyledTableCell>
                  <StyledTableCell
                    align='center'
                    style={{ paddingLeft: '27px', paddingRight: '27px' }}
                  >
                    Provider&nbsp;#
                  </StyledTableCell>
                  <StyledTableCell align='center'>Provider&nbsp;Type</StyledTableCell>
                  <StyledTableCell align='center'>Medicare&nbsp;#</StyledTableCell>
                  <StyledTableCell align='center'>Medicaid&nbsp;#</StyledTableCell>
                  <StyledTableCell align='center'>UPin</StyledTableCell>
                  <StyledTableCell align='center'>NPI&nbsp;#</StyledTableCell>
                  <StyledTableCell align='center'>NYOpCert</StyledTableCell>

                  {/* Demographics */}
                  {/* <DemographicsCellHeader>
                        <p>Demographics</p>
                        <div className="underline"></div>
                    </DemographicsCellHeader> */}
                  <StyledTableCell
                    align='center'
                    style={{ paddingLeft: '86px', paddingRight: '60px' }}
                  >
                    Address
                  </StyledTableCell>
                  <StyledTableCell
                    align='center'
                    style={{ paddingLeft: '45px', paddingRight: '45px' }}
                  >
                    Phone&nbsp;#
                  </StyledTableCell>
                  <StyledTableCell align='center'>Social&nbsp;Security&nbsp;#</StyledTableCell>
                  <StyledTableCell align='center'>DoB</StyledTableCell>
                  <StyledTableCell align='center'>Gender</StyledTableCell>

                  {/* License Details */}
                  {/* <LicenseDetailsCellHeader>
                        <p>License&nbsp;Details</p>
                        <div className="underline"></div>
                    </LicenseDetailsCellHeader> */}
                  <StyledTableCell
                    align='center'
                    style={{ paddingBottom: '1px', paddingTop: '25px', paddingLeft: '40px' }}
                  >
                    License&nbsp;State Code
                  </StyledTableCell>
                  <StyledTableCell align='center'>Fedral&nbsp;Tax&nbsp;ID</StyledTableCell>
                  <StyledTableCell align='center'>DEA&nbsp;#</StyledTableCell>
                  <StyledTableCell align='center'>License&nbsp;#</StyledTableCell>
                  <StyledTableCell
                    align='center'
                    style={{ paddingLeft: '60px', paddingRight: '60px' }}
                  >
                    Specialty
                  </StyledTableCell>
                  <StyledTableCell
                    align='center'
                    style={{ paddingBottom: '1px', paddingTop: '25px' }}
                  >
                    Board Certified
                  </StyledTableCell>
                  <StyledTableCell align='center'>Specialty&nbsp;Type</StyledTableCell>
                  <StyledTableCell align='center'>NPI&nbsp;Deactivation</StyledTableCell>
                  <StyledTableCell align='center'>NPI&nbsp;Reas&nbsp;Cd</StyledTableCell>

                  {/* Default Controls */}
                  {/* <DefaultControlsCellHeader>
                        <p>Default&nbsp;Controls</p>
                        <div className="underline"></div>
                    </DefaultControlsCellHeader> */}
                  <StyledTableCell
                    align='center'
                    style={{ paddingLeft: '90px', paddingRight: '95px' }}
                  >
                    Provider&nbsp;Org
                  </StyledTableCell>
                  <StyledTableCell align='center'>New&nbsp;Patients</StyledTableCell>
                  <StyledTableCell align='center'>Gender</StyledTableCell>
                  <StyledTableCell
                    align='center'
                    style={{ paddingBottom: '1px', paddingTop: '25px' }}
                  >
                    Handicap Access
                  </StyledTableCell>
                  <StyledTableCell align='center'>Parent</StyledTableCell>
                  <StyledTableCell align='center'>Area</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pr1011Data &&
                  pr1011Data.length > 0 &&
                  pr1011Data.map((data, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell align='center'>{data?.Name}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.Title}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.Format}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.Provider}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.ProviderType}</StyledTableCell>
                      <StyledTableCell align='center' style={{ paddingLeft: '10px' }}>
                        {data?.Medicare}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{data?.Medicaid}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.UPin}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.NPI}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.NYOpCert}</StyledTableCell>

                      {/* Demographics */}
                      {/* <DemographicsCellHeader></DemographicsCellHeader> */}
                      <StyledTableCell align='center' style={{ paddingLeft: '50px' }}>
                        {data?.Address}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{data?.Phone}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.SocialSecurity}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.DOB}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.DemographicGender}</StyledTableCell>

                      {/* License Details */}
                      {/* <LicenseDetailsCellHeader></LicenseDetailsCellHeader> */}
                      <StyledTableCell align='center' style={{ paddingLeft: '50px' }}>
                        {data?.LicenseState}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{data?.FedralTaxID}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.DEA}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.License}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.Specialty}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.BoardCertified}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.SpecialtyType}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.NPIDeactivation}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.NPIReasCd}</StyledTableCell>

                      {/* Default Controls */}
                      {/* <DefaultControlsCellHeader></DefaultControlsCellHeader> */}
                      <StyledTableCell align='center' style={{ paddingLeft: '60px' }}>
                        {data?.ProviderOrg}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{data?.NewPatients}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.DefaultGender}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.HandicapAccess}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.Parent}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.Area}</StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TableStyleContaner>
      </Grid>
    </>
  );
};
export default PR1011;
