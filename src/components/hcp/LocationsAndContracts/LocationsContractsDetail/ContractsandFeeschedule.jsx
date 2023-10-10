import React from 'react';
import { Row, Col, TableHeadText, TableRowsText } from '../LocationsAndContracts.style';
import {
  TableRows,
  TableWrapper,
  TableHead,
  LinkStyled
} from '../../../commonStyles/commonstyle.style';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { BiSolidObjectsHorizontalLeft } from 'react-icons/bi';
import DetailedView from './DetailedView/DetailedView.jsx';

//import SelectBox from "@components/common/Select";

const ContractCardInfo = props => {
  const { ContractsAndFeeSchedules, selectedProvider, setShowDetailedView } = props;

  const handleClick = () => {
    setShowDetailedView(true);
  };

  return (
    <>
      <Row>
        <Grid container spacing={2} sx={{ ml: '2.5px', mt: '27px' }}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item sm={10}>
                <div className='title' style={{ marginBottom: 4 }}>
                  Contracts & Fee Schedules
                </div>
                <div className='line' style={{ marginLeft: 0 }}></div>
              </Grid>
              <Grid item sm={2}>
                <BiSolidObjectsHorizontalLeft style={{ fontSize: '0.938rem', color: '#008BBF' }} />

                <LinkStyled onClick={handleClick}>
                  <div className='detailed-view' style={{ marginBottom: 4 }}>
                    Detailed View
                  </div>
                </LinkStyled>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ flexGrow: 1, m: '14px' }}>
            {/* <Grid container spacing={2} > */}
            {/* <Grid item xs={12} > */}
            <Grid container sx={{ mr: '4' }}>
              {/* {providerData?.ProfessionalDetails && headerNames.map((item, index) => ( */}
              <Grid sm={1.5}>
                <div className='label' style={{ marginBottom: 4 }}>
                  Tax ID
                </div>
                <div className='value'> --</div>
              </Grid>
              <Grid sm={1.5}>
                <div className='label' style={{ marginBottom: 4 }}>
                  Hospital Affliation
                </div>
                <div className='value'> --</div>
              </Grid>
              <Grid sm={1.5}>
                <div className='label' style={{ marginBottom: 4 }}>
                  Sequestration
                </div>
                <div className='value'> --</div>
              </Grid>
              <Grid sm={1}>
                <div className='label' style={{ marginBottom: 4 }}>
                  Capitation
                </div>
                <div className='value'> --</div>
              </Grid>
              <Grid sm={1.5} style={{ paddingLeft: '15px' }}>
                <div className='label' style={{ marginBottom: 4 }}>
                  Capitation Code
                </div>
                <div className='value'> --</div>
              </Grid>
              <Grid sm={2}>
                <div className='label' style={{ marginBottom: 4 }}>
                  Contract Type
                </div>
                <div className='value'> --</div>
              </Grid>
              <Grid sm={1.5}>
                <div className='label' style={{ marginBottom: 4 }}>
                  # Total Members{' '}
                </div>
                <div className='value'> --</div>
              </Grid>
              <Grid sm={1.5}>
                <div className='label' style={{ marginBottom: 4 }}>
                  Company{' '}
                </div>
                <div className='value'> --</div>

                {/* <div className="value"><SelectBox variant={"standardSingle"} options={[1,2,30,34,40,42,45,60]} onChange={()=>{}}></SelectBox></div> */}
              </Grid>
            </Grid>
            {/* </Grid>

                </Grid> */}
          </Box>
        </Grid>
      </Row>

      {ContractsAndFeeSchedules && ContractsAndFeeSchedules.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <TableWrapper>
            <TableHead>
              <TableHeadText>LOBs</TableHeadText>
              <TableHeadText>Area</TableHeadText>
              <TableHeadText>Rates</TableHeadText>
              <TableHeadText>Type of Fee</TableHeadText>
              <TableHeadText>Fee Schedule(IN/XN)</TableHeadText>
              <TableHeadText># Vendor(s)</TableHeadText>
            </TableHead>
            {ContractsAndFeeSchedules?.map((contracts, index) => (
              <TableRows key={index}>
                <TableRowsText>{contracts.Participating_Plans}</TableRowsText>
                <TableRowsText>{contracts.area}</TableRowsText>
                <TableRowsText>{contracts.Rates}</TableRowsText>
                <TableRowsText>{contracts.types_of_fee}</TableRowsText>
                <TableRowsText>{contracts.fee_schedule}</TableRowsText>
                <TableRowsText>{contracts.vendor}</TableRowsText>
              </TableRows>
            ))}
          </TableWrapper>
        </Box>
      )}
    </>
  );
};

export default ContractCardInfo;
