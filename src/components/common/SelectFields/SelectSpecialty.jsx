import { useEffect, useRef, useState, useMemo } from 'react';
import { TextField, Autocomplete, Stack, createFilterOptions } from '@mui/material';
import { ComboBox, menuHelpers } from '@pega/cosmos-react-core';
import FilterBy from '../../common/FilterBy/FilterBy.jsx';

const SelectSpecialty = props => {
  const [options, setOptions] = useState([]);

  const Combo = useRef();
  let arrayDropown = [];

  const dataPageName = 'D_LookUpRefData';
  const context = 'app/context';

  const [isLoading, setIsLoading] = useState(false);
  const [resultsFetched, setResultsFetched] = useState('loading');

  const parameters = {
    RequestType: 'ReferenceData',
    NoOfReferenceRequests: '1',
    NoOfLookupRequests: '',
    ReferenceRequest: 'HCPSpecialty',
    AreaOfExpertiseCode: '',
    ScreenCategoryCode: ''
  };

  const optionscache = {
    invalidateCache: true
  };

  const [specialties, setSpecialties] = useState([
    { specialty_cd: '', specialty_nm: 'All Specialties' }
  ]);
  const [filters, setFilters] = useState([{ id: '', primary: 'All Specialties' }]);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, optionscache)
      .then(response =>
        // The response of this API is as shown below:
        {
          setSpecialties(
            response?.ReferenceData.ReferenceResponse.HCPSpecialty ?? [
              { specialty_cd: '', specialty_nm: '' }
            ]
          );
          console.log('Select Speciality details', response);
          var arr = [];
          response?.ReferenceData.ReferenceResponse.HCPSpecialty?.map((item, index) => {
            arr.push({ id: item.specialty_cd, primary: item.specialty_nm });
          });
          setFilters(arr);
          setIsRender(true);

          setResultsFetched('fetched');
          setIsLoading(false);
        }
      )
      .catch(error => {
        console.log('error' + error);
        setResultsFetched('no results');
        setIsLoading(false);
      });
  }, []);
  //console.log('Select Speciality filters', filters);

  const onFilterChange = filter => {
    props.changeEvent(filter);
  };

  const setDropdownValues = values => {
    arrayDropown = [];
    values.map(val => arrayDropown.push(val.specialty_nm));
    if (arrayDropown?.length < 1) props.changeEvent(arrayDropown);
  };

  return (
    <>
      {isRender && (
        <FilterBy
          changeEvent={onFilterChange}
          filters={filters}
          label='Select Specialty'
          placeholder='All Specialties'
        />
      )}
    </>
  );
};

export default SelectSpecialty;
