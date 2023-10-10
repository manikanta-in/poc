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
import StyledForm from './styles';
import OrganizationSearchList from '../../List/OrganizationSearchList.jsx';
import HfGenericListTabs from '../../Tab/index.jsx';

export default function OrganizationTab(props) {
  const [resultsFetched, setResultsFetched] = useState(false);
  const { setSearchData, onClose, setFetchResults, setTypeOfSearch } = props;
  const [fieldsRequired, setFieldsRequired] = useState(false);
  const [showError, setShowError] = useState(false);
  const [triggerRender, setTriggerRender] = useState(false);

  const [submitDisable, setsubmitDisable] = useState(true);
  const backButtonText = '< Back to Search Screen';
  const parameters = {
    NoOfReferenceRequests: '1',
    ReferenceRequest: 'HCOEntityType',
    RequestType: 'ReferenceData'
  };
  const options = {
    invalidateCache: true
  };
  const [entityList, setEntityList] = useState([]);
  //Load Entity Drop Down
  useEffect(
    () =>
      PCore.getDataPageUtils()
        .getPageDataAsync('D_LookUpRefData', 'app/context', parameters, options)
        .then(response => {
          setEntityList(response.ReferenceData.ReferenceResponse.HCOEntityType);
        })
        .catch(error => {
          console.log(error);
        }),
    []
  );

  const [errors, setErrors] = useState({
    Street: '',
    City: '',
    County: '',
    TaxID: '',
    NPIID: '',
    ZipCode: '',
    HCOID: '',
    POrg: ''
  });

  const [formData, setFormData] = useState({
    EntityType: '',
    HCOName: '',
    HCOID: '',
    TaxID: '',
    LegacyProviderID: '',
    LegacyVendorID: '',
    NPIID: '',
    POrg: '',
    Street: '',
    City: '',
    State: '',
    ZipCode: '',
    County: '',
    Index: '1',
    NumberRecords: '10'
  });

  useEffect(() => {
    CheckSubmitEnabled();
  }, [formData]);

  const emptyErrMsg = name => {
    errors[`${name}`] = '';
    setErrors(errors);
  };

  const handleValidation = event => {
    let formIsValid = true;

    if (event.target.name === 'TaxID') {
      if (!event.target.value.match(/^[0-9]{9}$/) && event.target.value?.length !== 0) {
        errors[`${event.target.name}`] = 'Enter valid 9 digit TAX ID';
        setErrors(errors);
        setTriggerRender(!triggerRender);

        return true;
      } else {
        emptyErrMsg(event.target.name);
        setTriggerRender(!triggerRender);

        return false;
      }
    } else if (event.target.name === 'NPIID') {
      if (!event.target.value.match(/^[0-9]{10}$/) && event.target.value?.length !== 0) {
        errors[`${event.target.name}`] = 'Enter valid 10 digit NPI ID';
        setErrors(errors);
        setTriggerRender(!triggerRender);

        return true;
      } else {
        emptyErrMsg(event.target.name);
        setTriggerRender(!triggerRender);

        return false;
      }
    } else if (event.target.name === 'ZipCode') {
      if (checkZip(event.target.value) || event.target.value?.length === 0) {
        emptyErrMsg(event.target.name);
        setTriggerRender(!triggerRender);

        return false;
      } else {
        errors[`${event.target.name}`] = 'Enter valid 5 digit Zip code';
        setErrors(errors);
        setTriggerRender(!triggerRender);

        return true;
      }
    } else if (event.target.name === 'HCOID') {
      var regExp = /^O-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/;
      if (regExp.test(event.target.value) || event.target.value?.length === 0) {
        emptyErrMsg(event.target.name);
        setTriggerRender(!triggerRender);

        return false;
      } else {
        errors[`${event.target.name}`] = 'Enter a valid HCO ID';
        setErrors(errors);
        setTriggerRender(!triggerRender);
        return true;
      }
    }

    // if (event.target.name === 'Street') {
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
    //handleValidation(e);

    setFormData(allValues => {
      if (e.target.name === 'HCOID') {
        return { ...allValues, [e.target.name]: e.target.value.toUpperCase() };
      } else {
        return { ...allValues, [e.target.name]: e.target.value };
      }
    });
  };
  const checkLength = param => {
    if (param?.length >= 1) {
      //Enable Search button more than 1 character
      return true;
    } else {
      return false;
    }
  };

  const CheckSubmitEnabled = () => {
    const stateVal = formData;
    //If any input is given, enable the search button
    if (
      stateVal['City'].length > 0 ||
      stateVal['County'].length > 0 ||
      stateVal['EntityType'].length > 0 ||
      //stateVal['HCOID'].length > 0 ||
      stateVal['HCOName'].length > 0 ||
      stateVal['LegacyProviderID'].length > 0 ||
      stateVal['LegacyVendorID'].length > 0 ||
      stateVal['POrg'].length > 0 ||
      stateVal['State'].length > 0 ||
      stateVal['Street'].length > 0
      //stateVal['NPIID'].length > 0 ||
      //stateVal['TaxID'].length > 0 ||
      //stateVal['ZipCode'].length > 0
    ) {
      setsubmitDisable(false);
    } else if (stateVal['HCOID']?.length > 0) {
      var regExp = /^O-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/;
      if (regExp.test(stateVal['HCOID'])) {
        setsubmitDisable(false);
      } else {
        setsubmitDisable(true);
      }
    } else if (stateVal['ZipCode'].length > 0) {
      if (checkZip(stateVal['ZipCode'])) {
        setsubmitDisable(false);
      } else {
        setsubmitDisable(true);
      }
    } else if (stateVal['TaxID'].length > 0) {
      if (stateVal['TaxID'].match(/^[0-9]{9}$/)) {
        setsubmitDisable(false);
      } else {
        setsubmitDisable(true);
      }
    } else if (stateVal['NPIID'].length > 0) {
      if (stateVal['NPIID'].match(/^[0-9]{10}$/)) {
        setsubmitDisable(false);
      } else {
        setsubmitDisable(true);
      }
    } else {
      setsubmitDisable(true);
    }
    //If any combo fails, set field required flag to true
    if (
      stateVal['TaxID'].length > 0 ||
      stateVal['HCOID'].length > 0 ||
      stateVal['LegacyProviderID'].length > 0 ||
      stateVal['NPIID'].length > 0
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['Street']) &&
      (checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['ZipCode']) ||
        checkLength(stateVal['County']) ||
        checkLength(stateVal['EntityType']) ||
        checkLength(stateVal['HCOName']) ||
        checkLength(stateVal['LegacyVendorID']) ||
        checkLength(stateVal['NPIID']) ||
        checkLength(stateVal['POrg']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['City']) &&
      (checkLength(stateVal['Street']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['ZipCode']) ||
        checkLength(stateVal['County']) ||
        checkLength(stateVal['EntityType']) ||
        checkLength(stateVal['HCOName']) ||
        checkLength(stateVal['LegacyVendorID']) ||
        checkLength(stateVal['NPIID']) ||
        checkLength(stateVal['POrg']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['State']) &&
      (checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['ZipCode']) ||
        checkLength(stateVal['County']) ||
        checkLength(stateVal['EntityType']) ||
        checkLength(stateVal['HCOName']) ||
        checkLength(stateVal['LegacyVendorID']) ||
        checkLength(stateVal['NPIID']) ||
        checkLength(stateVal['POrg']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['ZipCode']) &&
      (checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['County']) ||
        checkLength(stateVal['EntityType']) ||
        checkLength(stateVal['HCOName']) ||
        checkLength(stateVal['LegacyVendorID']) ||
        checkLength(stateVal['NPIID']) ||
        checkLength(stateVal['POrg']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['County']) &&
      (checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['ZipCode']) ||
        checkLength(stateVal['EntityType']) ||
        checkLength(stateVal['HCOName']) ||
        checkLength(stateVal['LegacyVendorID']) ||
        checkLength(stateVal['NPIID']) ||
        checkLength(stateVal['POrg']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['EntityType']) &&
      (checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['ZipCode']) ||
        checkLength(stateVal['County']) ||
        checkLength(stateVal['HCOName']) ||
        checkLength(stateVal['LegacyVendorID']) ||
        checkLength(stateVal['NPIID']) ||
        checkLength(stateVal['POrg']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['HCOName']) &&
      (checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['ZipCode']) ||
        checkLength(stateVal['EntityType']) ||
        checkLength(stateVal['County']) ||
        checkLength(stateVal['LegacyVendorID']) ||
        checkLength(stateVal['NPIID']) ||
        checkLength(stateVal['POrg']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['LegacyVendorID']) &&
      (checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['ZipCode']) ||
        checkLength(stateVal['EntityType']) ||
        checkLength(stateVal['HCOName']) ||
        checkLength(stateVal['County']) ||
        checkLength(stateVal['NPIID']) ||
        checkLength(stateVal['POrg']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['POrg']) &&
      (checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['ZipCode']) ||
        checkLength(stateVal['EntityType']) ||
        checkLength(stateVal['HCOName']) ||
        checkLength(stateVal['LegacyVendorID']) ||
        checkLength(stateVal['NPIID']) ||
        checkLength(stateVal['County']))
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
      Street: '',
      City: '',
      County: '',
      TaxID: '',
      NPIID: '',
      ZipCode: '',
      HCOID: ''
    });
    setFormData({
      EntityType: '',
      HCOName: '',
      HCOID: '',
      TaxID: '',
      LegacyProviderID: '',
      LegacyVendorID: '',
      NPIID: '',
      POrg: '',
      Street: '',
      City: '',
      State: '',
      ZipCode: '',
      County: '',
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
      setTypeOfSearch('organization');
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
            label='Entity Type'
            name='EntityType'
            onChange={handleChange}
            value={formData.EntityType}
          >
            <Option> </Option>
            {entityList.map((item, index) => (
              <Option value={item.code}>{item.Name}</Option>
            ))}
          </Select>

          <Input
            name='HCOName'
            label='HCO Name'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            value={formData.HCOName}
          />

          <Input
            name='HCOID'
            label='HCO ID'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            value={formData.HCOID}
            info={errors?.HCOID}
            status={errors?.HCOID ? 'error' : 'pending'}
          />
          <Input
            name='LegacyProviderID'
            label='Legacy Provider ID'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            value={formData.LegacyProviderID}
          />
          <Input
            name='TaxID'
            label='Tax ID'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            value={formData.TaxID}
            maxLength='9'
            info={errors?.TaxID}
            status={errors?.TaxID ? 'error' : 'pending'}
          />
          <Input
            name='LegacyVendorID'
            label='Legacy Vendor ID'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            value={formData.LegacyVendorID}
            disabled={true}
          />
          <Input
            name='NPIID'
            label='NPI ID'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            value={formData.NPIID}
            maxLength='10'
            info={errors?.NPIID}
            status={errors?.NPIID ? 'error' : 'pending'}
          />
          <Input
            name='POrg'
            label='POrg'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            value={formData.POrg}
            info={errors?.POrg}
            status={errors?.POrg ? 'error' : 'pending'}
          />
          <Select
            label='Network Status'
            name='NetworkStatus'
            onChange={handleChange}
            onBlur={handleValidation}
            value={formData.NetworkStatus}
            disabled={true}
          >
            <Option>All</Option>
            <Option>In-Network</Option>
            <Option>Out-Of-Network</Option>
          </Select>
          <Input
            name='Street'
            label='Street'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            info={errors?.Street}
            status={errors?.Street ? 'error' : 'pending'}
            value={formData.Street}
            disabled={true}
          />
          <Input
            name='City'
            label='City'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            info={errors?.City}
            status={errors?.City ? 'error' : 'pending'}
            value={formData.City}
            disabled={true}
          />
          <Input
            label='State'
            name='State'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            value={formData.State}
            disabled={true}
          />
          <Input
            name='ZipCode'
            label='Zip Code'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            value={formData.ZipCode}
            disabled={true}
            maxLength='5'
            info={errors?.ZipCode}
            status={errors?.ZipCode ? 'error' : 'pending'}
          />
          <Input
            name='County'
            label='County'
            onChange={handleChange}
            onBlur={handleValidation}
            autoComplete='off'
            info={errors?.County}
            status={errors?.County ? 'error' : 'pending'}
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
      <HfGenericListTabs {...formData} setResultsFetched={setResultsFetched} panelShown='HCO' />
    </div>
  );
}
