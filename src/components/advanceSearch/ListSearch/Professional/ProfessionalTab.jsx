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
import ProfessionalSearchList from '../../List/ProfessionalSearchList.jsx';
import HfGenericListTabs from '../../Tab/index.jsx';

export default function ProfessionalTab(props) {
  const [resultsFetched, setResultsFetched] = useState(false);
  const { setSearchData, onClose, setFetchResults, setTypeOfSearch } = props;
  const [submitDisable, setsubmitDisable] = useState(true);
  const [fieldsRequired, setFieldsRequired] = useState(false);
  const [showError, setShowError] = useState(false);

  const backButtonText = '< Back to Search Screen';
  const parameters = {
    NoOfReferenceRequests: '1',
    ReferenceRequest: 'HCPSpecialty',
    RequestType: 'ReferenceData'
  };
  const options = {
    invalidateCache: true
  };
  const [SpecialtiesList, setSpecialtiesList] = useState([]);
  //Load HCP Specialties Drop Down
  useEffect(
    () =>
      PCore.getDataPageUtils()
        .getPageDataAsync('D_LookUpRefData', 'app/context', parameters, options)
        .then(response => {
          setSpecialtiesList(response.ReferenceData.ReferenceResponse.HCPSpecialty);
        })
        .catch(error => {
          console.log(error);
        }),
    []
  );

  const [errors, setErrors] = useState({
    FirstName: '',
    LastName: '',
    Street: '',
    City: '',
    County: ''
  });

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    HCPID: '',
    License: '',
    TaxId: '',
    Street: '',
    City: '',
    State: '',
    Zip: '',
    County: '',
    NPI: '',
    Specialty: '',
    Medicare: '',
    Vendor: '',
    LegacyProviderID: '',
    Medicaid: '',
    Phone: '',
    Index: '1',
    NumberRecords: '10'
  });

  useEffect(() => {
    CheckSubmitEnabled();
  }, [formData]);

  const checkString = event => {
    let valueLength = event.target.value.length === 0 ? true : false;
    if (valueLength) {
      emptyErrMsg(event.target.name);
      return false;
    } else {
      if (!event.target.value.match(/^[a-zA-Z]+$/)) {
        errors[`${event.target.name}`] = 'Please enter only letters';
        setErrors(errors);
        return true;
      } else {
        emptyErrMsg(event.target.name);
        return false;
      }
    }
  };

  const emptyErrMsg = name => {
    errors[`${name}`] = '';
    setErrors(errors);
  };

  const handleValidation = event => {
    let formIsValid = true;

    // if (event.target.name === 'FirstName') {
    //   if (checkString(event)) formIsValid = false;
    // } else if (event.target.name === 'LastName') {
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

  const handleChange = e => {
    handleValidation(e);

    const { name, value } = e.target;
    setFormData(allValues => {
      if (
        e.target.name === 'HCPID' ||
        e.target.name === 'LegacyProviderID' ||
        e.target.name === 'Medicare' ||
        e.target.name === 'Medicaid' ||
        e.target.name === 'Vendor'
      ) {
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

    if (
      stateVal['TaxId'].length > 0 ||
      stateVal['HCPID'].length > 0 ||
      stateVal['Vendor'].length > 0 ||
      stateVal['NPI'].length > 0 ||
      stateVal['License'].length > 0 ||
      stateVal['Medicare'].length > 0 ||
      stateVal['LegacyProviderID'].length > 0 ||
      stateVal['Medicaid'].length > 0 ||
      stateVal['FirstName'].length > 0 ||
      stateVal['LastName'].length > 0 ||
      stateVal['Specialty'].length > 0 ||
      stateVal['Street'].length > 0 ||
      stateVal['Phone'].length > 0 ||
      stateVal['City'].length > 0 ||
      stateVal['State'].length > 0 ||
      stateVal['Zip'].length > 0 ||
      stateVal['County'].length > 0
    ) {
      setsubmitDisable(false);
    } else {
      setsubmitDisable(true);
    }

    if (
      stateVal['TaxId'].length > 0 ||
      stateVal['HCPID'].length > 0 ||
      stateVal['Vendor'].length ||
      stateVal['NPI'].length > 0 ||
      stateVal['License'].length > 0 ||
      stateVal['Medicare'].length > 0 ||
      stateVal['LegacyProviderID'].length > 0 ||
      stateVal['Medicaid'].length > 0
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['FirstName']) &&
      (checkLength(stateVal['LastName']) ||
        checkLength(stateVal['Specialty']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['LastName']) &&
      (checkLength(stateVal['Specialty']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']) ||
        checkLength(stateVal['FirstName']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['Specialty']) &&
      (checkLength(stateVal['FirstName']) ||
        checkLength(stateVal['LastName']) ||
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
      (checkLength(stateVal['LastName']) ||
        checkLength(stateVal['FirstName']) ||
        checkLength(stateVal['Specialty']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['Street']) &&
      (checkLength(stateVal['LastName']) ||
        checkLength(stateVal['FirstName']) ||
        checkLength(stateVal['Specialty']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['City']) &&
      (checkLength(stateVal['LastName']) ||
        checkLength(stateVal['FirstName']) ||
        checkLength(stateVal['Specialty']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['State']) &&
      (checkLength(stateVal['LastName']) ||
        checkLength(stateVal['FirstName']) ||
        checkLength(stateVal['Specialty']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['Zip']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['Zip']) &&
      (checkLength(stateVal['LastName']) ||
        checkLength(stateVal['FirstName']) ||
        checkLength(stateVal['Specialty']) ||
        checkLength(stateVal['Street']) ||
        checkLength(stateVal['Phone']) ||
        checkLength(stateVal['City']) ||
        checkLength(stateVal['State']) ||
        checkLength(stateVal['County']))
    ) {
      setFieldsRequired(false);
    } else if (
      checkLength(stateVal['County']) &&
      (checkLength(stateVal['LastName']) ||
        checkLength(stateVal['FirstName']) ||
        checkLength(stateVal['Specialty']) ||
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
    setFormData({
      FirstName: '',
      LastName: '',
      HCPID: '',
      License: '',
      TaxId: '',
      Street: '',
      City: '',
      State: '',
      Zip: '',
      County: '',
      NPI: '',
      Specialty: '',
      Medicare: '',
      Vendor: '',
      LegacyProviderID: '',
      Medicaid: '',
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
      setTypeOfSearch('professional');
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
          <Input
            name='FirstName'
            label='First Name'
            onChange={handleChange}
            autoComplete='off'
            //info={errors?.FirstName}
            //status={errors?.FirstName ? 'error' : 'pending'}
            value={formData.FirstName}
          />

          <Input
            name='LastName'
            label='Last Name'
            onChange={handleChange}
            autoComplete='off'
            //info={errors?.LastName}
            //status={errors?.LastName ? 'error' : 'pending'}
            value={formData.LastName}
          />
          <Input
            name='HCPID'
            label='HCP ID'
            onChange={handleChange}
            autoComplete='off'
            value={formData.HCPID}
          />
          <Select label='Title' name='Title' disabled={true}>
            <Option></Option>
          </Select>
          <Input
            name='TaxId'
            label='Tax ID'
            onChange={handleChange}
            autoComplete='off'
            value={formData.TaxId}
          />
          <Input
            name='LegacyProviderID'
            label='Legacy Provider ID'
            onChange={handleChange}
            autoComplete='off'
            value={formData.LegacyProviderID}
          />
          <Input
            name='NPI'
            label='NPI ID'
            onChange={handleChange}
            autoComplete='off'
            value={formData.NPI}
          />
          <Input
            name='Vendor'
            label='Legacy Vendor ID'
            onChange={handleChange}
            autoComplete='off'
            value={formData.Vendor}
            disabled={true}
          />
          <Input
            name='License'
            label='License'
            onChange={handleChange}
            autoComplete='off'
            value={formData.License}
          />
          <Select
            label='Specialty'
            name='Specialty'
            onChange={handleChange}
            value={formData.Specialty}
          >
            <Option></Option>
            {SpecialtiesList.map((item, index) => (
              <Option value={item.specialty_cd}>{item.specialty_nm}</Option>
            ))}
          </Select>
          <Input
            name='Medicaid'
            label='Medicaid'
            onChange={handleChange}
            autoComplete='off'
            value={formData.Medicaid}
          />
          <Input
            name='Medicare'
            label='Medicare'
            onChange={handleChange}
            autoComplete='off'
            value={formData.Medicare}
          />
          <Select label='Network Status' name='NetworkStatus' disabled={true}>
            <Option>All</Option>
          </Select>
          <Select label='Type of Provider' name='ProviderType' disabled={true}>
            <Option></Option>
          </Select>
          <Select label='Accepting Memberships' name='AcceptingMemberships' disabled={true}>
            <Option></Option>
          </Select>

          <Input
            name='Phone'
            label='Phone #'
            onChange={handleChange}
            autoComplete='off'
            value={formData.Phone}
          />
          <Input
            name='Street'
            label='Street'
            onChange={handleChange}
            autoComplete='off'
            //info={errors?.Street}
            //status={errors?.Street ? 'error' : 'pending'}
            value={formData.Street}
            disabled={true}
          />
          <Input
            name='City'
            label='City'
            onChange={handleChange}
            autoComplete='off'
            //info={errors?.City}
            //status={errors?.City ? 'error' : 'pending'}
            value={formData.City}
            disabled={true}
          />
          <Input
            label='State'
            name='State'
            onChange={handleChange}
            autoComplete='off'
            value={formData.State}
            disabled={true}
          />

          <Input
            name='Zip'
            label='Zip Code'
            onChange={handleChange}
            autoComplete='off'
            value={formData.Zip}
            disabled={true}
          />
          <Input
            name='County'
            label='County'
            onChange={handleChange}
            autoComplete='off'
            //info={errors?.County}
            //status={errors?.County ? 'error' : 'pending'}
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
      <HfGenericListTabs {...formData} panelShown='HCP' />
    </div>
  );
}
