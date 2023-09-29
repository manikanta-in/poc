import PropTypes from 'prop-types';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Input,
  Select,
  Option,
  Configuration,
  Progress,
  Text
} from '@pega/cosmos-react-core';
import FacilitySearchList from '../../List/FacilitySearchList.jsx';
import StyledForm from './styles';
import HfGenericListTabs from '../../Tab/index.jsx';

export default function FacilityTab(props) {
  const [resultsFetched, setResultsFetched] = useState(false);
  const { setSearchData, onClose, setFetchResults, setTypeOfSearch } = props;
  const [fieldsRequired, setFieldsRequired] = useState(false);
  const [showError, setShowError] = useState(false);

  const [submitDisable, setsubmitDisable] = useState(true);
  const backButtonText = '< Back to Search Screen';
  const parameters = {
    NoOfReferenceRequests: '1',
    ReferenceRequest: 'TypeOfFacility',
    RequestType: 'ReferenceData'
  };
  const options = {
    invalidateCache: true
  };
  const [facilityList, setFacilityList] = useState([]);
  //Load HCP Specialties Drop Down
  useEffect(
    () =>
      PCore.getDataPageUtils()
        .getPageDataAsync('D_LookUpRefData', 'app/context', parameters, options)
        .then(response => {
          setFacilityList(response.ReferenceData.ReferenceResponse.TypeOfFacility);
        })
        .catch(error => {
          console.log(error);
        }),
    []
  );
  const [errors, setErrors] = useState({
    FacilityName: '',
    Street: '',
    City: '',
    County: '',
    HCFID: '',
    Phone: '',
    TaxId: '',
    Zip: ''
  });

  const [formData, setFormData] = useState({
    FacilityName: '',
    HCFID: '',
    TypeofFacility: '',
    TaxId: '',
    Street: '',
    City: '',
    State: '',
    Zip: '',
    County: '',
    Phone: '',
    SearchString: '',
    FilterBy: '',
    Index: '1',
    NumberRecords: '10'
  });

  useEffect(() => {
    CheckSubmitEnabled();
  }, [formData]);

  const checkString = event => {
    // let valueLength = event.target.value.length === 0 ? true : false;
    // if (valueLength) {
    //   emptyErrMsg(event.target.name);
    //   return false;
    // } else {
    //   if (!event.target.value.match(/^[a-zA-Z]+$/)) {
    //     errors[`${event.target.name}`] = 'Please enter only letters';
    //     setErrors(errors);
    //     return true;
    //   } else {
    //     emptyErrMsg(event.target.name);
    //     return false;
    //   }
    // }
  };

  const emptyErrMsg = name => {
    errors[`${name}`] = '';
    setErrors(errors);
  };

  const handleValidation = event => {
    let formIsValid = true;

    if (event.target.name === 'TaxId') {
      if (!event.target.value.match(/^[0-9]+$/) && event.target.value?.length !== 0) {
        errors[`${event.target.name}`] = 'Enter valid 9 digit TAX ID';
        setErrors(errors);
        return true;
      } else {
        emptyErrMsg(event.target.name);
        return false;
      }
    } else if (event.target.name === 'Phone') {
      var regExp = new RegExp('^\\d+$');
      if (!regExp.test(event.target.value) && event.target.value?.length !== 0) {
        errors[`${event.target.name}`] = 'Enter valid 10 digit phone number';
        setErrors(errors);
        return true;
      } else {
        emptyErrMsg(event.target.name);
        return false;
      }
    } else if (event.target.name === 'Zip') {
      if (checkZip(event.target.value) || event.target.value?.length === 0) {
        emptyErrMsg(event.target.name);
        return false;
      } else {
        errors[`${event.target.name}`] = 'Enter valid 5 digit Zip code';
        setErrors(errors);
        return true;
      }
    } else if (event.target.name === 'HCFID') {
      var regExp = /^F-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/;
      if (regExp.test(event.target.value) || event.target.value?.length === 0) {
        emptyErrMsg(event.target.name);
        return false;
      } else {
        errors[`${event.target.name}`] = 'Enter a valid HCF ID';
        setErrors(errors);
        return true;
      }
    }

    // if (event.target.name === 'FacilityName') {
    //   if (checkString(event)) formIsValid = false;
    // } else if (event.target.name === 'Street') {
    //   if (checkString(event)) formIsValid = false;
    // } else if (event.target.name === 'City') {
    //   if (checkString(event)) formIsValid = false;
    // } else if (event.target.name === 'County') {
    //   if (checkString(event)) formIsValid = false;
    // }
    return formIsValid;
  };

  function checkZip(value) {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
  }

  const handleChange = e => {
    handleValidation(e);

    setFormData(allValues => {
      if (e.target.name === 'HCFID') {
        return { ...allValues, [e.target.name]: e.target.value.toUpperCase() };
      } else {
        return { ...allValues, [e.target.name]: e.target.value };
      }
    });
  };
  const checkLength = param => {
    //Enable Search button more than 3 characters
    if (param?.length >= 1) return true;
    else return false;
  };

  const CheckSubmitEnabled = () => {
    const stateVal = formData;
    //If any input is given, enable the search button
    if (
      stateVal['TypeofFacility'].length > 0 ||
      stateVal['FacilityName'].length > 0 ||
      stateVal['HCFID'].length > 0 ||
      stateVal['TaxId'].length > 0 ||
      stateVal['Phone'].length > 0 ||
      stateVal['Street'].length > 0 ||
      stateVal['City'].length > 0 ||
      stateVal['State'].length > 0 ||
      stateVal['Zip'].length > 0 ||
      stateVal['County'].length > 0
    ) {
      setsubmitDisable(false);
    } else {
      setsubmitDisable(true);
    }
    //If any combo fails, set field required flag to true

    if (stateVal['HCFID'].length > 0 || stateVal['TaxId'].length > 0) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['FacilityName']) &&
      (checkLength(stateVal['TypeofFacility']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['TypeofFacility']) &&
      (checkLength(stateVal['FacilityName']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['Phone']) &&
      (checkLength(stateVal['FacilityName']) ||
        checkLength(stateVal['TypeofFacility']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['Street']) &&
      (checkLength(stateVal['FacilityName']) ||
        checkLength(stateVal['TypeofFacility']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['City']) &&
      (checkLength(stateVal['FacilityName']) ||
        checkLength(stateVal['TypeofFacility']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['State']) &&
      (checkLength(stateVal['FacilityName']) ||
        checkLength(stateVal['TypeofFacility']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['Zip']) &&
      (checkLength(stateVal['FacilityName']) ||
        checkLength(stateVal['TypeofFacility']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['County']) &&
      (checkLength(stateVal['FacilityName']) ||
        checkLength(stateVal['TypeofFacility']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']))
    ) {
      setFieldsRequired(false);
    } else {
      setFieldsRequired(true);
    }
  };

  const handleClear = () => {
    setShowError(false);
    setsubmitDisable(true);
    setErrors({
      FacilityName: '',
      Street: '',
      City: '',
      County: '',
      HCFID: '',
      Phone: '',
      TaxId: '',
      Zip: ''
    });
    setFormData({
      FacilityName: '',
      HCFID: '',
      TypeofFacility: '',
      TaxId: '',
      Street: '',
      City: '',
      State: '',
      Zip: '',
      County: '',
      Phone: '',
      SearchString: '',
      FilterBy: '',
      Index: '1',
      NumberRecords: '10'
    });
  };

  const handleSubmit = e => {
    if (!fieldsRequired) {
      onClose(true);
      console.log(formData);
      setFetchResults(true);
      setSearchData(formData);
      setTypeOfSearch('facility');
    } else {
      setShowError(true);
    }
  };

  const actions = (
    <>
      <Configuration
        theme={{
          components: {
            button: {
              'border-width': '0.0625rem',
              'border-radius': 9999,
              color: 'red',
              'secondary-color': 'white',
              padding: '1rem 2rem'
            }
          }
        }}
      >
        <Button name='Clear' variant='secondary' onClick={handleClear} type='reset'>
          Reset
        </Button>
      </Configuration>
      <Configuration
        theme={{
          components: {
            button: {
              'border-width': '0.0625rem',
              'border-radius': 9999,
              color: 'green',
              'secondary-color': 'white',
              padding: '1rem 2rem'
            }
          }
        }}
      >
        <Button
          name='Submit'
          type='button'
          variant='primary'
          disabled={submitDisable}
          onClick={() => handleSubmit()}
        >
          Search
        </Button>
      </Configuration>
    </>
  );

  return !resultsFetched ? (
    <StyledForm>
      <Form
        actions={actions}
        onSubmit={handleSubmit}
        style={{ margin: 'auto', maxWidth: '37.5rem' }}
      >
        {showError && (
          <Text variant='h1' status='error'>
            Please enter value for 1 more field for the system to search the records
          </Text>
        )}
        <Grid container={{ gap: 1, cols: `repeat(2, minmax(0, 1fr))` }}>
          <Select
            label='Facility Type'
            name='TypeofFacility'
            onChange={handleChange}
            value={formData.TypeofFacility}
          >
            <Option> </Option>
            {facilityList.map((item, index) => (
              <Option value={item.code}>{item.Name}</Option>
            ))}
          </Select>
          <Input
            name='FacilityName'
            label='Facility Name'
            onChange={handleChange}
            autoComplete='off'
            //info={errors?.FacilityName}
            //status={errors?.FacilityName ? 'error' : 'pending'}
            value={formData.FacilityName}
          />
          <Input
            name='HCFID'
            label='HCF ID'
            onChange={handleChange}
            autoComplete='off'
            value={formData.HCFID}
            //info={errors?.HCFID}
            //status={errors?.HCFID ? 'error' : 'pending'}
          />
          <Input
            name='TaxId'
            label='Tax ID'
            onChange={handleChange}
            autoComplete='off'
            value={formData.TaxId}
            maxLength='9'
            //info={errors?.TaxId}
            //status={errors?.TaxId ? 'error' : 'pending'}
          />
          <Input name='Vendor' label='Legacy Vendor ID' disabled={true} />
          <Input
            name='Phone'
            label='Phone #'
            onChange={handleChange}
            autoComplete='off'
            value={formData.Phone}
            maxLength='10'
            // info={errors?.Phone}
            //status={errors?.Phone ? 'error' : 'pending'}
          />
          <Input
            name='Street'
            label='Street'
            onChange={handleChange}
            autoComplete='off'
            //info={errors?.Street}
            //status={errors?.Street ? 'error' : 'pending'}
            value={formData.Street}
          />
          <Input
            name='City'
            label='City'
            onChange={handleChange}
            autoComplete='off'
            //info={errors?.City}
            //status={errors?.City ? 'error' : 'pending'}
            value={formData.City}
          />
          <Input
            label='State'
            name='State'
            onChange={handleChange}
            autoComplete='off'
            value={formData.State}
          />
          <Input
            name='Zip'
            label='Zip Code'
            onChange={handleChange}
            autoComplete='off'
            value={formData.Zip}
            maxLength='5'
            // info={errors?.Zip}
            //status={errors?.Zip ? 'error' : 'pending'}
          />
          <Input
            name='County'
            label='County'
            onChange={handleChange}
            autoComplete='off'
            //info={errors?.County}
            // status={errors?.County ? 'error' : 'pending'}
            value={formData.County}
            disabled={true}
          />
        </Grid>
      </Form>
    </StyledForm>
  ) : (
    <div style={{ padding: '1rem', backgroundColor: 'white' }}>
      <Button
        variant='secondary'
        compact={false}
        onClick={() => {
          setResultsFetched(false);
        }}
      >
        {backButtonText}
      </Button>
      <HfGenericListTabs {...formData} panelShown='HCF' />
    </div>
  );
}
