import { useEffect, useState } from 'react';
//import styles from '../../../assets/css/advancesearch.module.css';
import { CloseButton } from '../../commonStyles/commonstyle.style';
import { Drawer, Button } from '@pega/cosmos-react-core';
import HCODetails from '../../hco/index.jsx';
import TableListView from '../Table/TableListView.jsx';
import FilterBy from '../../common/FilterBy/FilterBy.jsx';
import { errorMessage } from '../../shared/CommonData.js';

const OrganizationSearchList = props => {
  const initialFilter = props.FilterBy;
  const setFetchResults = props.setFetchResults;

  const buttonText = '< Back to Search Results';
  const backToSearchText = '< Back to Search Screen';

  const [controller, setController] = useState({
    page: 1,
    rowsPerPage: 10
  });
  const dataPageName = 'D_HCOAdvancedSearch';
  const context = 'app/context';
  const options = {
    invalidateCache: true
  };
  const [parameters, setParameters] = useState({
    EntityType: props.EntityType,
    HCOName: props.HCOName,
    HCOID: props.HCOID,
    TaxID: props.TaxID,
    LegacyProviderID: props.LegacyProviderID,
    LegacyVendorID: props.LegacyVendorID,
    NPIID: props.NPIID,
    POrg: props.POrg,
    Street: props.Street,
    City: props.City,
    State: props.State,
    Zip: props.ZipCode,
    County: props.County,
    SearchString: props.SearchString,
    FilterBy: props.FilterBy,
    Index: controller.page,
    NumberRecords: controller.rowsPerPage
  });
  const filters = [
    {
      id: 'HCOID',
      primary: 'HCO ID'
    },
    {
      id: 'HCOName',
      primary: 'HCO Name'
    },
    {
      id: 'TaxID',
      primary: 'Tax ID'
    },
    {
      id: 'NPIID',
      primary: 'NPI ID'
    },
    { id: 'LegacyVendorID', primary: 'Vendor ID' },
    { id: 'City', primary: 'City' },
    { id: 'State', primary: 'State' },
    { id: 'Street', primary: 'Street' }
  ];

  const [orgRecords, setOrgRecords] = useState('');
  const [pageCount, setPageCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [resultsFetched, setResultsFetched] = useState('loading');
  const [providerID, setProviderID] = useState('');
  const [openDetails, setOpenDetails] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [filterData, setFilterData] = useState([]);

  const fetchData = () => {
    parameters.Index = controller.page;
    parameters.NumberRecords = controller.rowsPerPage;
    console.log('fetch data::', parameters);
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          setOrgRecords(response.OrganizationRecords);
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
  };

  useEffect(() => {
    fetchData();
  }, [controller]);

  const handleRowClick = rowData => {
    setProviderID(rowData.ID);
    setOpenDetails(true);
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
        <HCODetails HcoID={providerID} />
      </div>
    </Drawer>
  );

  const meta = {
    columns: [
      { label: `Organization ID`, align: 'left', fieldId: 'ID' },
      { label: `Entity Name`, align: 'center', fieldId: 'EntityName' },
      { label: `Status`, align: 'center', fieldId: 'NetworkStatus' },
      { label: `Tax ID`, align: 'center', fieldId: 'TaxID' },
      { label: `Phone #`, align: 'center', fieldId: 'Phone' },
      { label: `Medicare #`, align: 'center', fieldId: 'Medicare' },
      { label: `NPI`, align: 'center', fieldId: 'NPI' },
      { label: `Address`, align: 'center', fieldId: 'Address' }
    ]
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
        pageCount={pageCount}
        filterData={filterData}
        resultsFetched={resultsFetched}
        pageData={controller}
        data={orgRecords}
        onChangePage={onChangePage}
        onChangePageSize={onChangePageSize}
        handleRowClick={handleRowClick}
      ></TableListView>
      {drawer}
    </>
  );
};

export default OrganizationSearchList;
