import React from 'react';
import { DocumentsTableWrapper } from './styles.style';
import Model from '../../common/Model/model';
import useModal from '../../common/Model/useModal';
import DocumentModelForm from './DocumentModalForm';
import AddIcon from '../../common/Icons/AddIcon';
import Documents from './data/Documents';

import {
  Row,
  //PaginationStyle,
  StyledTableCell,
  StyledTableRow
} from '../../commonStyles/commonstyle.style';
import { styled } from '@mui/material/styles';
//import Pagination from "@mui/material/Pagination";
//import Stack from "@mui/material/Stack";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const TableStyleContaner = styled(props => <TableContainer {...props} />)(({}) => ({
  table: {
    borderCollapse: 'separate !important',
    borderSpacing: '0px 5px !important',
    marginTop: '-25px',
    width: '99%'
  }
}));

const DocumentCard = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <DocumentsTableWrapper>
        <Grid item xs={12} sx={{ position: 'relative', bottom: '40px', right: '18px' }}>
          <Row style={{ float: 'right' }}>
            <AddIcon clickAdd={toggle} />
          </Row>
        </Grid>

        <Model isShowing={isShowing} hide={toggle}>
          <DocumentModelForm name={'document'} hide={toggle} />
        </Model>

        <TableStyleContaner component={Paper} style={{ border: 'none', boxShadow: 'none' }}>
          <div style={{ height: '375px', overflow: 'auto', marginLeft: 20 }}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='left'>Date/Time</StyledTableCell>
                  <StyledTableCell align='center'>Name</StyledTableCell>
                  <StyledTableCell align='center'>Type</StyledTableCell>
                  <StyledTableCell align='center'>Uploaded By</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Documents &&
                  Documents.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component='th' align='left'>
                        <div>{row.Date} </div>
                        <div style={{ paddingLeft: '15px' }}>{row?.Time}</div>
                      </StyledTableCell>
                      <StyledTableCell align='center' style={{ color: '#008BBF' }}>
                        {row.Attachment}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{row.FileType}</StyledTableCell>
                      <StyledTableCell align='center'>{row.UploadedBy}</StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TableStyleContaner>
      </DocumentsTableWrapper>
    </>
  );
};

export default DocumentCard;
