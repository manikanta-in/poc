import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FaChevronDown } from 'react-icons/fa';
import Box from '@mui/material/Box';
import { SelectFields } from '../../commonStyles/commonstyle.style';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { formLabelClasses } from '@mui/material';
import { grey } from '@mui/material/colors';
import StyledForm from './styles';

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: grey[800],
          [`&.${formLabelClasses.focused}`]: {
            color: grey[800]
          }
        }
      }
    }
  }
});

const DropdownSelect = props => {
  function handleSelectChange(event) {
    console.log('event', event.target.value);
    props.changeEvent(event.target.value);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ minWidth: 120 }}>
          <StyledForm>
            <FormControl style={{ width: '100%' }}>
              <InputLabel variant='standard' htmlFor='uncontrolled-native'>
                {props?.label}
              </InputLabel>
              <SelectFields
                //defaultValue={30}
                inputProps={{
                  name: props?.label,
                  id: 'uncontrolled-native'
                }}
                sx={{ color: 'black' }}
                IconComponent={FaChevronDown}
                disableUnderline={true}
                onChange={handleSelectChange}
              >
                {!props.hideAllOption && <option value='ALL'>ALL</option>}
                {props?.data?.map((item, index) => {
                  return <option value={item}>{item}</option>;
                })}
              </SelectFields>
            </FormControl>
          </StyledForm>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default DropdownSelect;
