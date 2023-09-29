import React from 'react';

import { NoRecords } from '../../commonStyles/commonstyle.style';
import { errorMessage } from '../../shared/CommonData.js';

const ErrorPage = props => {
  console.log('error component props', props);
  return (
    <NoRecords style={{ top: props?.top ? props.top : '' }}>
      {props?.errorMsg?.pyAdviceText ? props.errorMsg.pyAdviceText : { errorMessage }}
    </NoRecords>
  );
};

export default ErrorPage;
