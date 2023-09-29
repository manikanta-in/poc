import { useState, useEffect } from 'react';
import { FaSearch, FaDropbox } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import SideBar from '../SideBar/SideBar.jsx';
import {
  InputHolder,
  Divider,
  Input,
  SearchIcon,
  MoreIcon,
  List,
  SearchArea,
  HomeWrapper
} from './SearchBar.style';

import FacilitySearchList from '../../advanceSearch/List/FacilitySearchList.jsx';
import OrganizationSearchList from '../../advanceSearch/List/OrganizationSearchList.jsx';
import ProfessionalSearchList from '../../advanceSearch/List/ProfessionalSearchList.jsx';
import WaterMark from '../WaterMark.jsx';
import HfGenericListTabs from '../../advanceSearch/Tab/index.jsx';
import GlobalSearch from '../../advanceSearch/List/GlobalSearch.jsx';

const GlobalSearchLabels = {
  'Phone #': 'Phone',
  'Medicare #': 'Medicare',
  'Medicaid #': 'Medicaid',
  'License #': 'License',
  'Tax ID': 'TaxID',
  'Professional ID': 'HCPID',
  'Organization ID': 'HCOID',
  'HCO Name': 'HCOName',
  'HCF Name': 'FacilityName',
  'First Name': 'FirstName',
  'Last Name': 'LastName',
  'Contact Name': 'ContactName',
  FacilityID: 'HCFID',
  Zipcode: 'ZipCode',
  NPI: 'NPI',
  SSN: 'SSN',
  CAQH: 'CAQH',
  Street: 'Street',
  City: 'City',
  State: 'State',
  County: 'County',
  Country: 'Country',
  LegacyProviderID: 'LegacyProviderID'
};

const SearchBar = props => {
  const [minimize, setMinimize] = useState(true);
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [searchData, setSearchData] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchProvider, setSearchProvider] = useState('');
  const [isEmptyData, setIsEmptyData] = useState(false);
  const [callApi, setCallApi] = useState(false);
  const [fetchResults, setFetchResults] = useState(false);
  const [providerCount, setProviderCount] = useState(false);
  const [searchCount, setSearchCount] = useState(false);
  const [typeOfSearch, setTypeOfSearch] = useState('');
  const [isGlobalSearch, setIsGlobalSearch] = useState(false);

  const dataPageName = 'D_GlobalSearch';
  const context = 'app/context';
  const options = {
    invalidateCache: true
  };

  useEffect(() => {
    if (callApi) {
      const parameters = { query: searchValue };
      PCore.getDataPageUtils()
        .getPageDataAsync(dataPageName, context, parameters, options)
        .then(response =>
          // The response of this API is as shown below:
          {
            setSearchProvider(response);
            //console.log(response);
          }
        )
        .catch(error => {
          setSearchProvider({});
          console.log('error' + error);
        });

      //console.log(searchProvider);
    } else {
      setSearchProvider({});
    }
  }, [searchValue, callApi]);

  const [emptyDataMsg, setEmptyDataMsg] = useState('');

  const handleSearch = event => {
    if (event.target.value.length >= 3) {
      setSearchValue(event.target.value);
      setCallApi(true);
      setProviderCount(false);
      setSearchCount(false);
    } else if (event.target.value.length == 0) {
      setProviderCount(true);
      setSearchCount(false);
    } else if (event.target.value.length <= 2) {
      setCallApi(false);
      setSearchCount(true);
      setProviderCount(false);
    }
  };

  useEffect(() => {
    if (!advanceSearch) {
      setMinimize(props.minimize);
    }
    return () => {
      setMinimize(true);
    };
  }, [props.minimize]);

  const onAction = () => {
    if (props.minimize) {
      setSearchCount(false);
      setMinimize(!minimize);
    }
  };

  const onBlurAction = () => {
    if (!minimize && props.minimize) {
      setSearchCount(false);
      setMinimize(!minimize);
    }
  };
  const modalOpen = () => {
    setAdvanceSearch(true);
    setEmptyDataMsg(null);
  };

  const handleClick = (item, type) => {
    setSearchProvider({});
    setEmptyDataMsg(null);
    setFetchResults(true);
    setTypeOfSearch(type);
    setIsGlobalSearch(true);
    const CategoryName = GlobalSearchLabels[item.CategoryName];

    setSearchData({
      Index: '1',
      NumberRecords: '10',
      FilterBy: CategoryName,
      SearchString: searchValue
    });
  };

  return (
    <>
      {!fetchResults && (
        <>
          <HomeWrapper>
            <SearchArea data-testid='search-input'>
              <div className='globalsearch'>
                <InputHolder
                  style={{ background: minimize ? '#76a960' : '#FFF' }}
                  onBlur={() => setTimeout(onBlurAction, 500)}
                >
                  <SearchIcon style={{ top: props.isSearch ? '8px' : '0px' }} onClick={onAction}>
                    <FaSearch
                      style={{
                        fontSize: '1.8rem',
                        color: minimize ? '#FFF' : '#529535',
                        position: 'relative'
                      }}
                    />
                  </SearchIcon>
                  <Divider />
                  <Input
                    style={{
                      color: minimize ? '#539535' : '#121212',
                      background: minimize ? '#539535' : '#FFF',
                      width: minimize ? 0 : '600px',
                      top: minimize ? '300px' : '350px'
                    }}
                    onChange={handleSearch}
                    ref={input => input && input.focus()}
                    placeholder='Enter 3 characters for the system to auto populate the results'
                    type='text'
                    minLength={3}
                    maxLength={200}
                  />

                  {!advanceSearch &&
                    searchProvider &&
                    !isEmptyData &&
                    searchProvider?.pxResults?.length > 0 &&
                    !searchCount &&
                    !providerCount &&
                    !minimize && (
                      <List>
                        <div className='contain'>
                          {searchProvider.pxResults.map(pItem => {
                            return (
                              pItem.CategoryValue.length > 0 && (
                                <div key={pItem.CategoryName} className='p_item'>
                                  <div className='header'>
                                    <div>{pItem.CategoryName}</div>
                                    <div className='links'>
                                      <span
                                        className='count'
                                        onClick={() => {
                                          handleClick(pItem, 'facility');
                                        }}
                                      >
                                        {/* {pItem?.FacilityResultsCount > 0
                                          ? 'Facility - ' + pItem?.FacilityResultsCount ?? 0
                                          : ''} */}
                                        {pItem?.FacilityResultsCount > 0 ? 'Facility ' : ''}
                                      </span>
                                      {pItem?.OrgResultsCount > 0 && pItem?.FacilityResultsCount > 0
                                        ? ' || '
                                        : ''}
                                      <span
                                        className='count'
                                        onClick={() => {
                                          handleClick(pItem, 'organization');
                                        }}
                                      >
                                        {/* {pItem?.OrgResultsCount > 0
                                          ? ' Organization - ' + pItem?.OrgResultsCount ?? 0
                                          : ''} */}
                                        {pItem?.OrgResultsCount > 0 ? ' Organization ' : ''}
                                      </span>
                                      {pItem?.OrgResultsCount > 0 && pItem?.ProviderResultsCount > 0
                                        ? ' || '
                                        : ''}
                                      <span
                                        className='count'
                                        onClick={() => {
                                          handleClick(pItem, 'professional');
                                        }}
                                      >
                                        {/* {pItem?.ProviderResultsCount > 0
                                          ? ' Professional - ' + pItem?.ProviderResultsCount ?? 0
                                          : ''} */}
                                        {pItem?.ProviderResultsCount > 0 ? ' Professional ' : ''}
                                      </span>
                                    </div>
                                  </div>
                                  <div className='values'>
                                    {pItem.CategoryValue.map(nItem => {
                                      return <div>{nItem}</div>;
                                    })}
                                  </div>
                                </div>
                              )
                            );
                          })}
                        </div>
                      </List>
                    )}

                  {!advanceSearch && searchCount && !minimize && (
                    <List>
                      <div className='no-record'>
                        <FaDropbox style={{ fontSize: '2rem', color: '#529535' }} />
                        <div className='msg'>
                          Enter 3 characters for the system to auto populate the results
                        </div>
                      </div>
                    </List>
                  )}
                  {emptyDataMsg && !minimize && (
                    <List>
                      <div className='no-record'>
                        <FaDropbox style={{ fontSize: '2rem', color: '#529535' }} />
                        <div className='msg'>No records found</div>
                      </div>
                    </List>
                  )}
                </InputHolder>
                <MoreIcon
                  style={{ background: minimize ? '' : '#539535' }}
                  data-testid='more'
                  onClick={modalOpen}
                >
                  {advanceSearch && (
                    <SideBar
                      searchType={advanceSearch}
                      setAdvanceSearch={setAdvanceSearch}
                      setSearchData={setSearchData}
                      setFetchResults={setFetchResults}
                      setTypeOfSearch={setTypeOfSearch}
                      setIsGlobalSearch={setIsGlobalSearch}
                    />
                  )}
                  <FiMoreHorizontal
                    size={'2em'}
                    style={{ fontSize: '2.375rem', padding: '10px' }}
                  />
                </MoreIcon>
              </div>
            </SearchArea>
            <WaterMark></WaterMark>
          </HomeWrapper>
        </>
      )}
      {fetchResults && isGlobalSearch && (
        <GlobalSearch
          {...searchData}
          setFetchResults={setFetchResults}
          panelShown={typeOfSearch}
          globalSearch={true}
        />
      )}
      {fetchResults && !isGlobalSearch && (
        <HfGenericListTabs
          {...searchData}
          setFetchResults={setFetchResults}
          panelShown={typeOfSearch}
        />
      )}
    </>
  );
};

export default SearchBar;
