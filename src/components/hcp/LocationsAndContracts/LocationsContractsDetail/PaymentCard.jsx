import React from 'react';
import { Row, StyledTableCell, StyledTableRow } from '../LocationsAndContracts.style';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { EmptyState } from '@pega/cosmos-react-core';

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 5px !important',
    marginTop: '-15px',
    width: '99%'
  }
}));

const PaymentCard = props => {
  // run this function from an event handler or pass it to useEffect to execute scroll
  return (
    <>
      <Row>
        <Grid container spacing={2} sx={{ ml: '2px', mt: '2px', pl: '0px' }}>
          <Grid item xs={12}>
            <Row>
              <Box sx={{ flexGrow: 1 }}>
                <div className='title' style={{ marginBottom: 4 }}>
                  Payment Information
                </div>
                <div className='line' style={{ marginLeft: 0 }}></div>
              </Box>
            </Row>
          </Grid>
          <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
            <div style={{ marginLeft: '15px', height: '250px', overflow: 'auto', marginTop: 15 }}>
              <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align='left'>Vendor ID</StyledTableCell>
                    <StyledTableCell align='left'>Bank Account #</StyledTableCell>
                    <StyledTableCell align='left'>Bank Routing #</StyledTableCell>
                    <StyledTableCell align='left'>Payment Type</StyledTableCell>
                    <StyledTableCell align='left'>Payment Address</StyledTableCell>
                    <StyledTableCell align='left'>Effective</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!props.paymentInfo ? (
                    <StyledTableRow>
                      <StyledTableCell component='th'>--</StyledTableCell>
                      <StyledTableCell align='left'>--</StyledTableCell>
                      <StyledTableCell align='left'>--</StyledTableCell>
                      <StyledTableCell align='left'>--</StyledTableCell>
                      <StyledTableCell align='left'>--</StyledTableCell>
                      <StyledTableCell align='left'>--</StyledTableCell>
                    </StyledTableRow>
                  ) : (
                    props.paymentInfo['payment'].map(payment => (
                      <StyledTableRow>
                        <StyledTableCell component='th'>{payment.vendor_id}</StyledTableCell>
                        <StyledTableCell align='left'>{payment.bank_account}</StyledTableCell>
                        <StyledTableCell align='left'>{payment.bank_routing}</StyledTableCell>
                        <StyledTableCell align='left'>{payment.payment_type}</StyledTableCell>
                        <StyledTableCell align='left'>{payment.payment_address}</StyledTableCell>
                        <StyledTableCell align='left'>{payment.effective}</StyledTableCell>
                      </StyledTableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </TableStyleContaner>
        </Grid>
      </Row>
    </>
  );
};

export default PaymentCard;
