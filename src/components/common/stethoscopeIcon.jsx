import React from 'react';
import { Image } from '@pega/cosmos-react-core';
import StethoscopeLogo from '../images/stethoscope.png';

const StethoscopeIcon = props => {
  return (
    <div className='stethoscope-icon' data-testid='stethoscope-mark-icon'>
      <img
        alt='stethoscope icon'
        src={StethoscopeLogo}
        style={{ width: '1.25rem', marginLeft: '20px', height: props.height }}
      />
    </div>
  );
}; //17, 25

export default StethoscopeIcon;
