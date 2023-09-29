import Grid from '@mui/material/Grid';
import { Option, Select } from '@pega/cosmos-react-core';
import { useState } from 'react';

import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';
import CheckIcon from '../Icons/TickIcon';

export const Step1 = ({ actions, onChange, onCheckClick, onArrowClick }) => {
  const [selOption, setSelOption] = useState(null);

  const onSelect = (event) => {
    setSelOption(event.target.value);
    onChange(event.target.value);
  }

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Select label='Actions' name='Action' onChange={onSelect}>
            {actions?.map((item, index) => (
              <Option key={index} value={item.id}>{item.value}</Option>
            ))}
          </Select>
        </Grid>
        <Grid item xs={2}>
          <CheckIcon style={{ marginTop: '20px', marginLeft: '10px' }} onClick={onCheckClick} />
        </Grid>
        <Grid item xs={2}>
          <ArrowIcon style={{ marginTop: '20px', marginLeft: '10px' }} onClick={onArrowClick} />
        </Grid>
      </Grid>
    </>
  );
};
