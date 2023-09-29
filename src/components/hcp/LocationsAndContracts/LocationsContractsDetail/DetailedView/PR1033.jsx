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

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 10px !important',
    marginTop: '-15px',
    width: '99%'
  }
}));

const PR1033 = props => {
  const { pr1033Data } = props;

  const tableRef = useRef(null);

  useEffect(() => {
    tableRef.current.scrollTo(0, 0);
  });

  const data = [
    {
      name: 30,
      value: 30
    },
    {
      name: 60,
      value: 60
    },
    {
      name: 90,
      value: 90
    }
  ];
  const onChange = () => {
    //
  };

  return (
    <>
      <Grid container>
        <Grid item sm={0.2}></Grid>
        {/* <SelectBox options={data} onChange={onChange} disableUnderline={true} label="Company"></SelectBox> */}
      </Grid>
      <Grid container>
        <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
          <div ref={tableRef} style={{ height: '100%', marginTop: 15, overflow: 'auto' }}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='center'>LOB</StyledTableCell>
                  <StyledTableCell
                    align='center'
                    style={{ paddingLeft: '65px', paddingRight: '65px' }}
                  >
                    Effective&nbsp;Period
                  </StyledTableCell>
                  <StyledTableCell align='center'>Age&nbsp;Limit</StyledTableCell>
                  <StyledTableCell align='center'>Parent&nbsp;Code</StyledTableCell>
                  <StyledTableCell align='center'>Area</StyledTableCell>
                  <StyledTableCell align='center'>POrg</StyledTableCell>
                  <StyledTableCell
                    align='center'
                    style={{ paddingBottom: '0px', paddingTop: '24px' }}
                  >
                    Practice Size&nbsp;Limit
                  </StyledTableCell>
                  <StyledTableCell align='center'>Panel&nbsp;Code</StyledTableCell>
                  <StyledTableCell
                    align='center'
                    style={{ paddingBottom: '0px', paddingTop: '24px' }}
                  >
                    Primary&nbsp;Care Capitation&nbsp;Code
                  </StyledTableCell>
                  <StyledTableCell align='center'>Gender</StyledTableCell>
                  <StyledTableCell align='center'>Accept</StyledTableCell>
                  <StyledTableCell align='center'>Reason</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pr1033Data &&
                  pr1033Data.length > 0 &&
                  pr1033Data.map((data, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell align='center' component='th'>
                        {data?.LOB}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{data?.EffectivePeriod}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.AgeLimit}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.ParentCode}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.Area}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.POrg}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.PracticeSizeLimit}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.PanelCode}</StyledTableCell>
                      <StyledTableCell align='center'>
                        {data?.PrimaryCareCapitationCode}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{data?.Gender}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.Accept}</StyledTableCell>
                      <StyledTableCell align='center'>{data?.Reason}</StyledTableCell>
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
export default PR1033;
