import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Checkbox, Input } from '@pega/cosmos-react-core';
import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';
import CloseIcon from '../Icons/CloseIcon';


export const Step2 = ({ onChange, onArrowClick, onCloseClick}) => {
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
        <Grid item xs={12}>
        <label style={{color:'blue', fontWeight:'600'}}>Enter an Inventory Request ID</label>
        </Grid>

        <Grid item xs={12}>
        <div style={{width:'40px', height:'3px',borderRadius:'20px', backgroundColor:'blue', marginTop:'8px', marginBottom:'10px'}}></div>
        </Grid>
     
        <Grid item xs={1}>
          <Checkbox onClick={onCheckChange} style={{marginTop:'10px'}}></Checkbox>
        </Grid>
        <Grid item xs={7}>
          <Input
            autoComplete='off'
            onChange={onChangeValue}
            placeholder='Enter IR ID'
            maxLength='9'
          />
        </Grid>
        <Grid item xs={2}>
          <ArrowIcon style={{ marginLeft: '10px', padding:'5px', borderRadius:'5px', backgroundColor:"#dfdfdf", width:'30px', height:'30px'}} onClick={onClickArrow} />
          </Grid>

          <Grid item xs={2}>
         <CloseIcon />
        </Grid>
      </Grid>
    </>
  );
};
