import React, { useState } from 'react';
import { TitleText, TextAreaInput, TextCharacters } from './notes.style';
import CloseIcon from '../../common/Icons/CloseIcon/index.jsx';
import CheckIcon from '../../common/Icons/CheckIcon/index.jsx';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ModelForm = props => {
  const [maxChar, setMaxChar] = useState(250);
  const [charLeft, setCharLeft] = useState(250);

  const handleWordCount = event => {
    const charCount = event.target.value.length;
    const charLength = maxChar - charCount;
    setCharLeft(charLength);
  };

  return (
    <>
      <Box>
        <Grid container spacing={2} sx={{ ml: '2px' }}>
          <Grid item xs={12} sx={{ mt: '1px' }}>
            <Box sx={{ flexGrow: 1 }}>
              <div className='title' style={{ marginBottom: 4 }}>
                Add Notes
              </div>
              <div className='line'></div>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: '1px' }}>
            <Box sx={{ flexGrow: 1 }}>
              <TitleText> Description</TitleText>
              <TextAreaInput
                name='description'
                rows={5}
                type='text'
                maxLength='250'
                required
                onChange={handleWordCount}
              ></TextAreaInput>
              <TextCharacters>Max {charLeft} characters</TextCharacters>
            </Box>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} sx={{ mt: '-12px' }}>
            <CloseIcon position={'relative'} left={'410px'} hide={props.hide} />
          </Grid>
          <Grid item xs={4} sx={{ mt: '-12px' }}>
            <CheckIcon position={'relative'} left={'185px'} hide={props.hide} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ModelForm;
