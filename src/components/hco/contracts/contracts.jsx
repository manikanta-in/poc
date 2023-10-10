import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import OrgCard from '../../common/orgCard/orgCard.jsx';

import { Section, SectionDetail, Container } from '../../commonStyles/commonstyle.style';
import { TIN, Comment } from './styles.style';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { Progress } from '@pega/cosmos-react-core';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#474B55', // theme.palette.common.black,
    border: 'none',
    fontSize: '1rem',
    boxShadow: 'none'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1rem',
    border: 'none'
  },
  fontFamily: 'Museo Sans, Open Sans 500'
}));

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 10px !important',
    marginTop: '-15px'
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: '#a8abac26',
  borderRadius: '10px',
  height: '60px',
  'td:first-child': {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px'
  },
  'td:last-child': {
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px'
  },
  'th:first-child': {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px'
  }
}));

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid #A8ABAC`,
    borderRadius: '10px',
    fontSize: '1.5rem !important',
    marginBottom: '10px',
    colors: '#333333',
    boxShadow: '0px 3px 6px #00000029',
    '&:before': {
      display: 'none'
    }
  })
);

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#FFF',
  height: '60px',
  borderRadius: '10px',
  '& .MuiAccordionSummary-content > p': {
    fontSize: '1.3rem',
    fontWeight: '700 !important'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    fontSize: '1.5rem'
  },
  '.expandIcon': {
    color: ' #333333',
    fontSize: '2.5rem',
    marginRight: '10px'
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2)
}));

const ContractsAndReimbursements = props => {
  const dataPageName = 'D_HCOContracts';
  const context = 'app/context';
  const parameters = { ID: props.HcoID };
  const options = {
    invalidateCache: true
  };

  const [resultsFetched, setResultsFetched] = useState(false);
  const [orgData, setOrgData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response => {
        console.log('Organization Contracts & Reimbursement details', response);

        setOrgData(
          response.OrgContractsReimbursements ?? { ContractsReimbursements: { Contracts: [] } }
        );

        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setResultsFetched('no results');
        setIsLoading(false);
      });
    //searchDB();
  }, []);

  const orgContractsReimbursements = ['Sequestration', 'PCCCode', 'POrg', 'DelegatedLevel'];
  const orgContractsReimbursementsLabels = ['Sequestration', 'PCC Code', 'POrg', 'Delegated Level'];

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container style={{ height: window.innerHeight - 500, width: '100%' }}>
      <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />

      <SectionDetail>
        {/* <OrgCard data={orgData} enableIcon={true} /> */}
        <Box className='info'>
          <Section>
            <Grid container spacing={2} style={{ paddingLeft: '0.5%' }}>
              <Grid item xs={12} sx={{ mt: '15px' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <div className='title' style={{ marginBottom: 4 }}>
                    Contracts and Reimbursements
                  </div>
                  <div className='line' style={{ marginBottom: 12 }}></div>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  {orgContractsReimbursements.map((item, index) => (
                    <Grid item xs={4} sm={3} lg={2} sx={{ mb: '14px' }}>
                      <div className='label' style={{ marginBottom: 4 }}>
                        {orgContractsReimbursementsLabels[index]}
                      </div>
                      <div className='value'>
                        {orgData?.ContractsReimbursements?.[item] ?? '--'}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ mr: 4 }} style={{ marginRight: '8px' }}>
                  {orgData?.ContractsReimbursements?.Contracts.map((item, index) => (
                    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon' />}
                        aria-controls={`Contract-${index}-content`}
                        id={`Contract-${index}`}
                      >
                        <Typography>{item?.ContractName}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container sx={{ ml: 0, mb: 1 }}>
                          <Grid item xs={8}>
                            <TableStyleContaner
                              component={Paper}
                              style={{ border: 'none', boxShadow: 'none' }}
                            >
                              <Table aria-label='customized table'>
                                <TableHead>
                                  <TableRow>
                                    <StyledTableCell align='left'>Company</StyledTableCell>
                                    <StyledTableCell align='left'>Description</StyledTableCell>
                                    <StyledTableCell align='left'>IN</StyledTableCell>
                                    <StyledTableCell align='left'>CAP</StyledTableCell>
                                    <StyledTableCell align='left'>Rate %</StyledTableCell>
                                    <StyledTableCell align='left'>Fee Schedule</StyledTableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {item.Reimbursements.map(row => (
                                    <StyledTableRow key={row.Company}>
                                      <StyledTableCell component='th'>
                                        {row?.Company}
                                      </StyledTableCell>
                                      <StyledTableCell align='left'>
                                        {row?.Description}
                                      </StyledTableCell>
                                      <StyledTableCell align='left' style={{ paddingTop: '21px' }}>
                                        {row?.In === 'Yes' ? (
                                          <CheckCircleSharpIcon color='primary' fontSize='small' />
                                        ) : (
                                          ''
                                        )}
                                      </StyledTableCell>
                                      <StyledTableCell align='left' style={{ paddingTop: '22px' }}>
                                        {row?.Cap === 'Yes' ? (
                                          <CheckCircleSharpIcon color='primary' fontSize='small' />
                                        ) : (
                                          ''
                                        )}
                                      </StyledTableCell>
                                      <StyledTableCell align='left'>{row['Rate%']}</StyledTableCell>
                                      <StyledTableCell align='left'>
                                        {row?.FeeSchedule}
                                      </StyledTableCell>
                                    </StyledTableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableStyleContaner>
                          </Grid>

                          <Grid item xs={4}>
                            <Grid container sx={{ ml: 2 }}>
                              <Grid item xs={12}>
                                <Box sx={{ flexGrow: 1 }}>
                                  <div
                                    className='title'
                                    style={{ marginBottom: 4, fontSize: '1rem' }}
                                  >
                                    TIN(s)
                                  </div>
                                  <div className='line'></div>
                                </Box>
                              </Grid>
                              <Grid item xs={12}>
                                <Grid container sx={{ mt: 4 }}>
                                  {item.TINs.map((tin, index) => (
                                    <Grid item xs={4} key={index}>
                                      <TIN>{tin}</TIN>
                                    </Grid>
                                  ))}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12}>
                            <Box sx={{ flexGrow: 1, mt: 4, mb: 3 }}>
                              <div className='title' style={{ marginBottom: 4 }}>
                                Comment(s)
                              </div>
                              <div className='line'></div>
                            </Box>
                            <Box>
                              {item.Comments.map(comment => (
                                <Comment>{comment}</Comment>
                              ))}
                            </Box>
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Section>
        </Box>
      </SectionDetail>
    </Container>
  );
};

export default ContractsAndReimbursements;
