import { useEffect, useState } from 'react';
import { CloseButton } from '../../commonStyles/commonstyle.style';
import { Drawer, Button } from '@pega/cosmos-react-core';
import TableListView from '../Table/TableListView.jsx';
import FilterBy from '../../common/FilterBy/FilterBy.jsx';
import HCFDetails from '../../hcf/index.jsx';
import { errorMessage } from '../../shared/CommonData.js';

const FacilitySearchList = props => {
  const initialFilter = props.FilterBy;

  const { setFetchResults } = props;
  const [controller, setController] = useState({
    page: 1,
    rowsPerPage: 10
  });
  const buttonText = '< Back to Search Results';
  const backToSearchText = '< Back to Search Screen';
  const dataPageName = 'D_HCFAdvancedSearch';
  const context = 'app/context';
  const options = {
    invalidateCache: true
  };
  const [parameters, setParameters] = useState({
    FacilityName: props.FacilityName,
    HCFID: props.HCFID,
    TypeofFacility: props.TypeofFacility,
    TaxId: props.TaxId,
    Street: props.Street,
    City: props.City,
    State: props.State,
    Zip: props.Zip,
    County: props.County,
    Phone: props.Phone,
    SearchString: props.SearchString,
    FilterBy: props.FilterBy,
    Index: controller.page,
    NumberRecords: controller.rowsPerPage
  });

  const filters = [
    {
      id: 'HCFID',
      primary: 'HCF ID'
    },
    {
      id: 'FacilityName',
      primary: 'Facility Name'
    },
    {
      id: 'TaxID',
      primary: 'Tax ID'
    },
    { id: 'LegacyVendorID', primary: 'Vendor ID' },
    { id: 'City', primary: 'City' },
    { id: 'State', primary: 'State' },
    { id: 'Street', primary: 'Street' }
  ];

  const [facilityRecords, setFacilityRecords] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [resultsFetched, setResultsFetched] = useState('loading');
  const [filterData, setFilterData] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [facilityID, setFacilityID] = useState(null);

  const fetchData = () => {
    parameters.Index = controller.page;
    parameters.NumberRecords = controller.rowsPerPage;
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          setFacilityRecords(response.FacilityRecords);
          console.log(response);
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
    setFacilityID(rowData.FacilityID);
    setOpenDetails(true);
  };

  const modalConent = {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: '20px'
    //borderRadius: '8px'
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
        <HCFDetails HCFID={facilityID} />
      </div>
    </Drawer>
  );

  const meta = {
    columns: [
      { label: `Facility ID`, align: 'left', fieldId: 'FacilityID' },
      { label: `Facility Name`, align: 'center', fieldId: 'FacilityName' },
      { label: `Status`, align: 'center', fieldId: 'NetworkStatus' },
      { label: `HCO Name`, align: 'center', fieldId: 'HCOName' },
      { label: `Tax ID`, align: 'center', fieldId: 'TaxID' },
      { label: `Phone #`, align: 'center', fieldId: 'Phone' },
      { label: `Address`, align: 'center', fieldId: 'Address' }
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
        data={facilityRecords}
        pageData={controller}
        onChangePage={onChangePage}
        onChangePageSize={onChangePageSize}
        handleRowClick={handleRowClick}
      ></TableListView>
      {drawer}
    </>
  );
};

export default FacilitySearchList;
