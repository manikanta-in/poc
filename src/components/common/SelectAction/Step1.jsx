import Grid from '@mui/material/Grid';
import { Option, Select } from '@pega/cosmos-react-core';
import { useState } from 'react';

import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';
import CheckIcon from '../Icons/TickIcon';
import { borderRadius } from 'polished';
import CloseIcon from '../Icons/CloseIcon';
import StyledStepsWrapper from './styles';

export const Step1 = ({ actions, onChange, onCloseClick, onArrowClick }) => {
  const [selOption, setSelOption] = useState(null);

  const onSelect = event => {
    setSelOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <StyledStepsWrapper>
      <Grid container>
        <Grid item xs={8}>
          <div className='heading'>
            <p>Select an Action</p>
          </div>
          <div className='selectItem'>
            <p
              style={{
                background: 'white',
                display: 'inline-block',
                position: 'absolute',
                marginTop: '8px',
                marginLeft: '20px',
                zIndex: '101'
              }}
            >
              Actions
            </p>
            <Select
              name='Action'
              onChange={onSelect}
              style={{ fontWeight: '700', zIndex: '100', marginTop: '18px', height: '50px' }}
            >
              <Option key='0'></Option>
              {actions?.map((item, index) => (
                <Option key={index} value={item.id}>
                  {item.value}
                </Option>
              ))}
            </Select>
          </div>
        </Grid>

        <Grid
          style={{
            zIndex: '100',
            paddingLeft: '20px',
            paddingTop: '64px'
          }}
          item
          xs={2}
        >
          <CloseIcon hide={onCloseClick} />
        </Grid>
        <Grid style={{ zIndex: '100', paddingTop: '64px', height: '50px' }} item xs={2}>
          <ArrowIcon disable={!selOption} onClick={onArrowClick} />
        </Grid>
      </Grid>
    </StyledStepsWrapper>
  );
};
