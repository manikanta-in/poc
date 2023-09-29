import Grid from '@mui/material/Grid';
import { Option, Select } from '@pega/cosmos-react-core';
import { useState } from 'react';

import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';
import CheckIcon from '../Icons/TickIcon';
import { borderRadius } from 'polished';

export const Step1 = ({ actions, onChange, onCheckClick, onArrowClick }) => {
  const [selOption, setSelOption] = useState(null);

  const onSelect = (event) => {
    setSelOption(event.target.value);
    onChange(event.target.value);
  }

  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <p style={{background:'white', display:'inline-block', position:'absolute', marginTop:'38px', marginLeft:'20px', zIndex:'101' }}>Actions</p>
          <label style={{fontWeight:'600'}}>Select an Action</label>
          <hr style={{width:'35px', height:'3px', borderRadius:'20px', backgroundColor:'blue', marginTop:'8px'}}></hr>
          <Select name='Action' onChange={onSelect} style={{fontWeight:'700', zIndex:'100', marginTop:'18px', height:'50px'}}>
            {actions?.map((item, index) => (
              <Option key={index} value={item.id}>{item.value}</Option>
            ))}
          </Select>
        </Grid>
        <Grid item xs={2}>
          <CheckIcon style={{ marginTop: '58px', marginLeft: '10px', padding:'5px', borderRadius:'5px', backgroundColor:"#dfdfdf", width:'30px', height:'30px'}} onClick={onCheckClick} />
        </Grid>
        <Grid item xs={2}>
          <ArrowIcon style={{ marginTop: '58px', marginLeft: '-10px', padding:'5px', borderRadius:'5px', backgroundColor:"#dfdfdf", width:'30px', height:'30px' }} onClick={onArrowClick} />
        </Grid>
      </Grid>
    </>
  );
};
