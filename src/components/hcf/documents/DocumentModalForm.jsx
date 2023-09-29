import React from "react";
import { Col } from "../../commonStyles/commonstyle.style";
import { styled } from "@mui/material/styles";
import {
  TextAreaInput,
  InputWrapper,
  Row,
  ClickHere,
  Drag,
} from "./styles.style";
import CloseIcon from "../../common/Icons/CloseIcon";
import CheckIcon from "../../common/Icons/CheckIcon";

import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const TextFields = styled(TextField)({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  borderRadius: "7px",
  width: "468px",
  color: "#333333",

  fontFamily: ["MuseoSans"].join(","),
  height: "55px",
  letterSpacing: 0,
  fontSize: "1.125rem",
  fontWeight: 500,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid #333333",
    },
    "&:hover fieldset": {
      border: "1px solid #333333",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #333333",
    },
  },
  "& .MuiInputLabel-formControl": {
    "&.Mui-focused": {
      color: "#707070",
      fontSize: "1rem",
      fontWeight: "300",
    },
  },
});

const DocumentModelForm = (props) => {
  return (
    <>
      <Box>
        <Grid container spacing={2} sx={{ ml: "2px" }}>
          <Grid item xs={12} sx={{ mt: "20px" }}>
            <Box sx={{ flexGrow: 1 }}>
              <div className="title" style={{ marginBottom: 4 }}>
                Upload Document
              </div>
              <div className="line"></div>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: "25px" }}>
            <Row className="upload">
              <Col>
                <TextAreaInput>
                  <ClickHere>
                    Click here to Upload
                    <br />
                    (or)
                  </ClickHere>
                  <br />
                  <Drag>Drag & Drop the files here</Drag>
                </TextAreaInput>
              </Col>
              <InputWrapper>
                <TextFields
                  style={{ width: "95%" }}
                  id="outlined-number"
                  label="File Name"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextFields
                  style={{ width: "95%" }}
                  id="outlined-number"
                  label="Type"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </InputWrapper>
            </Row>
          </Grid>
          <Grid item xs={4}>
            <div>Max file size: 2MB</div>
          </Grid>
          <Grid item xs={4} sx={{ mt: "12px" }}>
            <CloseIcon position={"relative"} left={"430px"} hide={props.hide} />
          </Grid>
          <Grid item xs={4} sx={{ mt: "12px" }}>
            <CheckIcon position={"relative"} left={"208px"} hide={props.hide}/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DocumentModelForm;
