import React, { useState, useRef, useEffect } from 'react';
import { DateAndTime, Text, PaymentInformation, IconWrapper } from '../LocationsAndContracts.style';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FaEyeSlash, FaEye, FaChevronDown } from 'react-icons/fa';
import ContactCardInfo from './ContactCardInfo.jsx';
import ContractsandFeeschedule from './ContractsandFeeschedule.jsx';
import PaymentCard from './PaymentCard.jsx';
import StethoscopeIcon from '../../../common/stethoscopeIcon.jsx';
import { NetworkAccess } from '../../../commonStyles/commonstyle.style';
import LocationInfo from './LocationInfo.jsx';
import OfficeAndMembership from './OfficeAndMembership.jsx';
import { Progress } from '@pega/cosmos-react-core';
import { Grid } from '@mui/material';
import AccessibilityIcon from '../../../common/Icons/AccessibilityIcon/index.jsx';
import CalenderIcon from '../../../common/Icons/CalenderIcon/index.jsx';
import { changeDateFormate } from '../../../shared/utils';

const ProviderInfoCard = props => {
  const { locationObject, locationData, showLoader, hideLoader, HcpID } = props;

  const [facilityId, setFacilityId] = useState(locationObject?.facilityId);
  const myRef = useRef(null);
  const [activePaymentCard, setActivePaymentCard] = useState(false);
  const [locationExpData, setLocationExpData] = useState('');
  const [officeHrs, setOfficeHrs] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [participatingSpecialties, setParticipatingSpecialties] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [expertise, setExpertise] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const dataPageName = 'D_HCPLocationDetailsExpPage';
  const context = 'app/context';
  const parameters = { HCPID: HcpID, HCFID: facilityId };

  const options = {
    invalidateCache: true
  };

  useEffect(() => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          console.log('Location Expanded Data');
          console.log(response);
          setLocationExpData(response);
          if (response?.ErrorPage) {
            setErrorMsg(response.ErrorPage);
          }
          setIsLoading(false);
        }
      )
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    PCore.getDataPageUtils()
      .getPageDataAsync(
        'D_HCPLocandConOfficeHours',
        context,
        { HCPMasterID: HcpID, HCFMasterID: facilityId },
        options
      )
      .then(response =>
        // The response of this API is as shown below:
        {
          console.log('Office Hour Data');
          console.log(response);
          setOfficeHrs(response.OfficeHours);
          setExpertise(response.AreaOfExpertise);
          //setIsLoading(false);
        }
      )
      .catch(error => {
        console.log(error);
        //setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    PCore.getDataPageUtils()
      .getPageDataAsync('D_HCPLCExpPSpecialities', context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          console.log('Specialties Data');
          console.log(response);
          setParticipatingSpecialties(response);
        }
      )
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    PCore.getDataPageUtils()
      .getPageDataAsync('D_HCPLocationContractExpContactInfo', context, parameters, options)
      .then(response =>
        // The response of this API is as shown below:
        {
          console.log('Contact Info');
          console.log(response);
          setContactInfo(response);
        }
      )
      .catch(error => {
        console.log(error);
      });
  }, []);
  const networkStatus = NetworkStatus => {
    if (NetworkStatus) {
      var status = NetworkStatus && NetworkStatus?.split('-');
      return (status[0] ?? '') + ' ' + (status[1] ?? '') + ' ' + (status[2] ?? '');
    } else return;
  };

  const executeScroll = () => {
    setActivePaymentCard(!activePaymentCard);
    if (!activePaymentCard) {
      myRef.current.scrollIntoView();
    }
  };

  const handleChange = event => {
    setFacilityId(event.target.value);
    let facilityId = event.target.value;
    //dispatchLocations(facilityId);
  };
  const showIconLists = Location_features => {
    if (Location_features) {
      let icons = Location_features?.map((feature, index) => {
        let array = [];
        let maginValue = index > 0 && '30px';
        if (feature === 'Telemedicine')
          array.push(
            <StethoscopeIcon width='2rem' height={44} style={{ marginLeft: maginValue }} />
          );
        if (feature === 'Handicap Access' || feature === 'ADA')
          array.push(<AccessibilityIcon maginValue={maginValue} />);
        if (feature === 'Schedule') array.push(<CalenderIcon maginValue={maginValue} />);
        return array;
      });
      return icons;
    }
  };

  return (
    <>
      {isLoading ? (
        <div>
          <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />
        </div>
      ) : (
        <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#474b55', width: '100%' }}>
          <Progress variant='ring' placement='local' message='Loading' visible={isLoading} />

          <Grid container style={{ marginLeft: '10px' }}>
            <Grid item sm={9}>
              <Grid container>
                <Grid item sm={7}>
                  <Select
                    variant='standard'
                    disableUnderline={true}
                    sx={{
                      minWidth: 350,
                      color: '#003863',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      '.MuiSvgIcon-root ': {
                        fill: '#003863 !important',
                        fontSize: '2.438rem'
                      }
                    }}
                    value={facilityId}
                    onChange={handleChange}
                    defaultValue={facilityId}
                    displayEmpty
                    IconComponent={() => <FaChevronDown style={{ color: '#003863' }} />}
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    {locationData &&
                      locationData?.length &&
                      locationData?.map(item => (
                        <MenuItem value={item?.ID} id={item?.ID} selected>
                          {item?.Name}
                        </MenuItem>
                      ))}
                  </Select>
                </Grid>

                <Grid item sm={5} className='network-acccess'>
                  {locationExpData?.NetworkStatus ? (
                    <NetworkAccess
                      color={locationExpData.NetworkStatus === 'Out-of-Network' ? 'red' : 'green'}
                    >
                      <p className='status-text'>{networkStatus(locationExpData?.NetworkStatus)}</p>
                    </NetworkAccess>
                  ) : (
                    <></>
                  )}
                </Grid>
                <Grid item sm={12} style={{ marginTop: '25px' }}>
                  <div style={{ marginLeft: '10px' }}>
                    <LocationInfo locationExpData={locationExpData} errorMsg={errorMsg} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={3} className='margin-down'>
              <Grid container>
                <Grid item sm={12}>
                  <Text>Effective from</Text>
                  <DateAndTime>
                    {locationExpData?.EffectiveFrom && locationExpData?.EffectiveFrom != ''
                      ? changeDateFormate(locationExpData?.EffectiveFrom)
                      : '--'}
                  </DateAndTime>
                </Grid>
              </Grid>
              <Grid item sm={1} style={{ marginTop: '15px' }}>
                <IconWrapper>{showIconLists(locationExpData?.LocationFeatures)}</IconWrapper>
              </Grid>
              <Grid item sm={2} style={{ marginTop: '40%' }}>
                <PaymentInformation
                  onClick={() => {
                    // executeScroll();
                    // setActivePaymentCard(!activePaymentCard);
                  }}
                >
                  {activePaymentCard ? (
                    <FaEye style={{ color: '#529535', fontSize: '1.125rem', margin: 17 }}></FaEye>
                  ) : (
                    <FaEyeSlash
                      style={{ color: '#529535', fontSize: '1.125rem', margin: 17 }}
                    ></FaEyeSlash>
                  )}
                  <p className='payment'>Payment Information</p>
                </PaymentInformation>
              </Grid>
            </Grid>
          </Grid>

          <OfficeAndMembership
            ref={myRef}
            officeHrs={officeHrs}
            AreaOfExpertise={expertise}
            particpatingSpeciality={participatingSpecialties}
            HCPID={parameters.HCPID}
            HCFID={parameters.HCFID}
          />

          {activePaymentCard ? <PaymentCard /> : ''}
          {contactInfo && (
            <ContactCardInfo
              // activePaymentCard={activePaymentCard}
              contactData={contactInfo.ContactInfo}
              mocked={false}
            />
          )}
          <ContractsandFeeschedule
            ContractsAndFeeSchedules={[
              {
                Participating_Plans: '--',
                area: '--',
                Rates: '--',
                types_of_fee: '--',
                fee_schedule: '--',
                vendor: '--'
              }
            ]}
            //selectedProvider={selectedProvider}
          />
        </div>
      )}
    </>
  );
};

export default ProviderInfoCard;
