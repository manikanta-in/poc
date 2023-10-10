import React from 'react';
import {
  Row,
  ContactCard,
  Col,
  TableHeadText,
  TableRowsText
} from '../LocationsAndContracts.style';
import { TableWrapper, TableHead, TableRows } from '../../../commonStyles/commonstyle.style';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import { FaInfoCircle } from "react-icons/fa";
import { ContactName } from '../../../shared/utils';

const ContactCardInfo = props => {
  const { activePaymentCard, contactData } = props;
  const marginValue = activePaymentCard ? 4 : '';

  return (
    <Row>
      <Col>
        <div className='title'>Contact Information</div>
        <div className='line' style={{ marginLeft: 0 }}></div>

        <TableWrapper
          style={{
            height: contactData?.length > 4 ? 312 : '',
            width: '100%',
            margin: '0 0 0 10px',
            overflowY: 'auto'
          }}
        >
          <TableHead>
            <TableHeadText>Name</TableHeadText>
            <TableHeadText>Role</TableHeadText>
            <TableHeadText>Email</TableHeadText>
            <TableHeadText>Phone #</TableHeadText>
            <TableHeadText>Fax #</TableHeadText>
          </TableHead>
          {contactData?.map((item, index) => (
            <TableRows key={index}>
              <TableRowsText>{ContactName(item)}</TableRowsText>
              <TableRowsText>{item?.Role && item?.Role != '' ? item?.Role : '--'}</TableRowsText>

              <TableRowsText>
                {item?.Email && item?.Email != '' ? (
                  <a
                    href={`mailto:${item?.Email}?subject=Contact ${ContactName(item)}`}
                    className='emailID'
                  >
                    {item?.Email}
                  </a>
                ) : (
                  '--'
                )}
              </TableRowsText>
              <TableRowsText>{item?.Phone && item?.Phone != '' ? item?.Phone : '--'}</TableRowsText>
              <TableRowsText>{item?.Fax && item?.Fax != '' ? item?.Fax : '--'}</TableRowsText>
            </TableRows>
          ))}
        </TableWrapper>
      </Col>
      {/* <Grid container spacing={2} sx={{ ml: '2px', mt: marginValue }}>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1, mb: '12px' }}>
            <div className='title' style={{ marginBottom: 4 }}>
              Contact Information
            </div>
            <div className='line' style={{ marginLeft: 0 }}></div>
          </Box>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 1, ml: 2 }}>
          {contactData?.map(item => (
            <Grid item xs={6}>
              <ContactCard color={'yellow'}>
                <Grid container>
                  <Grid item xs={12}>
                    <div className='value'>{ContactName(item)}</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className='value'>{item?.ContactTitleName}</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className='value '>
                      {
                        <a href={`mailto:${item?.Email}?subject=Contact Tom`} className='emailID'>
                          {item?.Email}
                        </a>
                      }
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className='label' style={{ marginBottom: 4 }}>
                      Phone #
                    </div>
                    <div className='value'>{item?.Phone}</div>
                  </Grid>

                  <Grid item xs={6} sx={{ pl: 3 }}>
                    <div className='label' style={{ marginBottom: 4 }}>
                      Fax #
                    </div>
                    <div className='value'>{item?.Fax}</div>
                  </Grid>
                </Grid>
              </ContactCard>
            </Grid>
          ))}
        </Grid>
      </Grid> */}
    </Row>
  );
};

export default ContactCardInfo;
