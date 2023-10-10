import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Input } from '@pega/cosmos-react-core';
import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';
import CloseIcon from '../Icons/CloseIcon';
import { CloseButton, Row } from '../../commonStyles/commonstyle.style';
import StyledStepsWrapper from './styles';
import AddIcon from '../Icons/AddIcon';

export const Step2 = ({ onChange, onArrowClick, onCloseClick }) => {
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
    <StyledStepsWrapper>
      <Grid container>
        <Grid item xs={12}>
          <div className='heading'>
            <p>Enter an Inventory Request ID</p>
          </div>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <div className='item'>
              <Input
                autoComplete='off'
                onChange={onChangeValue}
                placeholder='Enter IR ID'
                maxLength='9'
              />
            </div>
          </Grid>
        </Grid>
        <Grid
          style={{
            paddingTop: '50px'
          }}
          container
        >
          <Grid item xs={8}>
            <Button onClick={() => {}}>
              {' '}
              <AddIcon /> Create a new IR ID
            </Button>
          </Grid>
          <Grid item xs={2}>
            <ArrowIcon
              style={{
                marginLeft: '10px',
                padding: '5px',
                borderRadius: '5px',
                backgroundColor: '#dfdfdf',
                width: '30px',
                height: '30px'
              }}
              onClick={onClickArrow}
            />
          </Grid>

          <Grid item xs={2}>
            <CloseIcon hide={onCloseClick} />
          </Grid>
        </Grid>
      </Grid>
    </StyledStepsWrapper>
  );
};
