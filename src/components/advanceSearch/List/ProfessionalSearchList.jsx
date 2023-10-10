import { useEffect, useState, useContext, useRef } from 'react';
import { CloseButton } from '../../commonStyles/commonstyle.style';
import { Drawer, Button } from '@pega/cosmos-react-core';
import HCPDetails from '../../hcp/index.jsx';
import TableListView from '../Table/TableListView.jsx';
import FilterBy from '../../common/FilterBy/FilterBy.jsx';
import { errorMessage } from '../../shared/CommonData.js';

const ProfessionalSearchList = props => {
  const initialFilter = props.FilterBy;

  const setFetchResults = props.setFetchResults;
  const buttonText = '< Back to Search Results';
  const backToSearchText = '< Back to Search Screen';
  const [controller, setController] = useState({
    page: 1,
    rowsPerPage: 10
  });
  const dataPageName = 'D_HCPAdvancedSearch';
  const context = 'app/context';
  const options = {
    invalidateCache: true
  };
  const [parameters, setParameters] = useState({
    FirstName: props.FirstName,
    LastName: props.LastName,
    HCPID: props.HCPID,
    License: props.License,
    TaxId: props.TaxId,
    Street: props.Street,
    City: props.City,
    State: props.State,
    Zip: props.Zip,
    County: props.County,
    NPI: props.NPI,
    Specialty: props.Specialty,
    Medicare: props.Medicare,
    Vendor: props.Vendor,
    LegacyProviderID: props.LegacyProviderID,
    Medicaid: props.Medicaid,
    Phone: props.Phone,
    SearchString: props.SearchString,
    FilterBy: props.FilterBy,
    Index: controller.page,
    NumberRecords: controller.rowsPerPage
  });
  const filters = [
    {
      id: 'HCPID',
      primary: 'HCP ID'
    },
    {
      id: 'FirstName',
      primary: 'First Name'
    },
    {
      id: 'LastName',
      primary: 'Last Name'
    },
    {
      id: 'TaxID',
      primary: 'Tax ID'
    },
    {
      id: 'NPI',
      primary: 'NPI'
    },
    { id: 'LegacyVendorID', primary: 'Vendor ID' },
    { id: 'City', primary: 'City' },
    { id: 'State', primary: 'State' },
    { id: 'Street', primary: 'Street' }
  ];

  const [providerRecords, setProviderRecords] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultsFetched, setResultsFetched] = useState('loading');
  const [providerID, setProviderID] = useState('');
  const [openDetails, setOpenDetails] = useState(false);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    parameters.Index = controller.page;
    parameters.NumberRecords = controller.rowsPerPage;
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          setProviderRecords(response.ProviderRecords);
          setPageCount(response.TotalRecords);
          setResultsFetched('fetched');
          if (response?.ErrorPage) {
            setErrorMsg(response.ErrorPage);
          }
          setIsLoading(false);
        }
      )
      .catch(error => {
        console.log('error' + error);
        setErrorMsg({ errorMessage });
        setResultsFetched('error');
        setIsLoading(false);
      });
  }, [controller]);

  const handleRowClick = rowData => {
    setProviderID(rowData.ProfessionalID);
    setOpenDetails(true);
  };

  const onChangePage = newPage => {
    setController({
      ...controller,
      page: newPage
    });
  };

  const onChangePageSize = pageSize => {
    setController({
      ...controller,
      rowsPerPage: parseInt(pageSize, 10),
      page: 1
    });
  };

  const modalConent = {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: '20px'
    //borderRadius: '8px'
  };

  const drawer = (
    <Drawer
      open={openDetails}
      nullWhenClosed
      position='absolute'
      size='100%'
      placement='right'
      transitionSpeed='0.25s'
      style={{ zIndex: '1000' }}
    >
      <div style={modalConent}>
        <CloseButton>
          <Button onClick={() => setOpenDetails(false)}>{buttonText}</Button>
        </CloseButton>
        <HCPDetails HCPID={providerID} />
      </div>
    </Drawer>
  );

  const meta = {
    columns: [
      { label: `Professional ID`, align: 'left', fieldId: 'ProfessionalID' },
      { label: `Name`, align: 'left', fieldId: 'Name' },
      { label: `Status`, align: 'left', fieldId: 'NetworkStatus' },
      { label: `Phone #`, align: 'left', fieldId: 'Phone' },
      { label: `Medicare #`, align: 'left', fieldId: 'Medicare' },
      { label: `NPI`, align: 'left', fieldId: 'NPI' }
    ]
  };

  const onFilterChange = filter => {
    setParameters({
      ...parameters,
      FilterBy: filter.join('","')
    });
  };

  const filterStyle = {
    width: '20%',
    float: 'right'
  };

  return (
    <>
      {/* {props.globalSearch && (
        <FilterBy
          changeEvent={onFilterChange}
          filters={filters}
          styleEvent={filterStyle}
          initialFilter={initialFilter}
        />
      )} */}
      <div style={{ marginTop: '15px' }}>
        <Button
          variant='secondary'
          compact={false}
          onClick={() => {
            if (setFetchResults) {
              setFetchResults(false);
            }
          }}
        >
          {backToSearchText}
        </Button>
      </div>
      <TableListView
        errorMsg={errorMsg}
        isLoading={isLoading}
        meta={meta}
        resultsFetched={resultsFetched}
        pageCount={pageCount}
        filterData={filterData}
        data={providerRecords}
        pageData={controller}
        onChangePage={onChangePage}
        onChangePageSize={onChangePageSize}
        handleRowClick={handleRowClick}
      ></TableListView>
      {drawer}
    </>
  );
};

export default ProfessionalSearchList;
