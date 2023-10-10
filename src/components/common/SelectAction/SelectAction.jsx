import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';

const SelectActions = props => {
  const dataPageName = 'D_GetListOfCapabilities';
  const context = 'app/context';

  const [isLoading, setIsLoading] = useState(false);
  const [actions, setActions] = useState([]);
  const [currentstep, setCurrentStep] = useState(1);
  const [selectedData, setSelectedData] = useState({});
  const parameters = {
    RequestType: 'LookupData',
    NoOfReferenceRequests: '',
    NoOfLookupRequests: '1',
    ReferenceRequest: '',
    AreaOfExpertiseCode: '',
    ScreenCategoryCode: 'PLC'
  };

  const optionscache = {
    invalidateCache: true
  };

  const onStep1Change = data => {
    setSelectedData({ ...selectedData, step1: data });
    if (props.changeEvent) {
      props.changeEvent(selectedData);
    }
  };

  const onStep2Change = data => {
    setSelectedData({ ...selectedData, step2: data });
    if (props.changeEvent) {
      props.changeEvent(selectedData);
    }
  };

  const onCheckClick = () => {
    if (props.changeEvent) {
      props.changeEvent(selectedData);
    }
  };

  const onArrowClick = () => {
    debugger;
    setCurrentStep(currentstep + 1);
    if (props.changeEvent) {
      props.changeEvent(selectedData);
    }
    if (currentstep >= 2) {
      props.onArrowClick();
    }
  };

  const onCloseClick = () => {
    props.onCloseClick();
  };

  const mapResponse = data => {
    const result = [];
    Object.keys(data).forEach(key => {
      result.push({ id: `${key}`, value: data[`${key}`] });
    });
    return result;
  };

  useEffect(() => {
    setIsLoading(true);
    PCore.getDataPageUtils()
      .getPageDataAsync(dataPageName, context, parameters, optionscache)
      .then(response => {
        setActions(mapResponse(response));
        setIsLoading(false);
      })
      .catch(error => {
        console.log('error' + error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {currentstep == 1 && (
        <Step1
          actions={actions}
          onChange={onStep1Change}
          onArrowClick={onArrowClick}
          onCloseClick={onCloseClick}
        ></Step1>
      )}
      {currentstep == 2 && (
        <Step2
          onArrowClick={onArrowClick}
          onCloseClick={onCloseClick}
          onChange={onStep2Change}
        ></Step2>
      )}
    </Box>
  );
};

export default SelectActions;
