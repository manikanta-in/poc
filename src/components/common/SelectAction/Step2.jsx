import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Checkbox, Input } from '@pega/cosmos-react-core';
import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';


export const Step2 = ({ onChange, onArrowClick }) => {
  const [value, setValue] = useState(null);
  const [check, setCheck] = useState(false);

  const onCheckChange = event => {
    setCheck(event.target.value);
    if (onChange) {
      onChange({ check: event.target.value === 'on', value });
    }
  };

  const onClickArrow = () => {
    if (onChange) {
      onChange({ check, value });
    }
    onArrowClick();
  };

  const onChangeValue = event => {
    setValue(event.target.value);
    if (onChange) {
      onChange({ check, value: event.target.value });
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Checkbox onClick={onCheckChange}></Checkbox>
        </Grid>
        <Grid item xs={6}>
          <Input
            label='IR ID'
            autoComplete='off'
            onChange={onChangeValue}
            placeholder='Enter IR ID'
            maxLength='9'
          />
        </Grid>
        <Grid item xs={2}>
          <ArrowIcon style={{ marginTop: '20px', marginLeft: '10px' }} onClick={onClickArrow} />
        </Grid>
      </Grid>
    </>
  );
};
