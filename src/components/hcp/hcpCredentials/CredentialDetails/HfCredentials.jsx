// import { useState } from "react";
import React from 'react';
import { TextUnderLine, TextUnderLineHeader } from '../HcpCredentials.style';
import { Wrapper, Col } from '../../../commonStyles/commonstyle.style';
import { Row, StyledLine, HeaderText, Content, StyledTextWrapper } from './CredentialDetails.style';

const HfCredentials = props => {
  const { credentialDetails } = props;
  var length =
    credentialDetails?.CredentialsExpanded?.HFCredentialDetails?.CredentialsCheck?.length;
  var listOfCredentials =
    credentialDetails?.CredentialsExpanded?.HFCredentialDetails?.CredentialsCheck;

  return (
    <div style={{ position: 'relative', bottom: '30px' }}>
      <Wrapper style={{ flexDirection: 'column' }}>
        <Row style={{ marginBottom: '0px' }}>
          <Col>
            <TextUnderLineHeader>HF Credential Details</TextUnderLineHeader>
            <p className='line' style={{ marginTop: '1vh' }}></p>

            <div style={{ marginTop: 15 }}>Coming soon</div>

            {/* <StyledTextWrapper>
            <HeaderText>Credential Specialist</HeaderText>
            <Content>
              {credentialDetails?.CredentialsExpanded?.HFCredentialDetails
                ?.CredentialsSpecialist ?? "--"}
            </Content>
          </StyledTextWrapper> */}
          </Col>
          {/* <Col>
          <StyledTextWrapper style={{ marginTop: "68px", marginLeft: "-50%" }}>
            <HeaderText>Verification Date & Time</HeaderText>
            <Content>
              {credentialDetails?.CredentialsExpanded?.HFCredentialDetails
                ?.VerificationDateTime ?? "--"}
            </Content>
          </StyledTextWrapper>
        </Col> */}
        </Row>

        {/* {listOfCredentials &&
        listOfCredentials.map((item, index: number) => (
          <div>
            {index % 2 === 0 && index === length - 1 ? (
              <Row style={{ marginBottom: "0px" }}>
                <Col key={index}>
                  <StyledTextWrapper style={{ marginTop: "10px" }}>
                    <StyledLine>{listOfCredentials[index].Name}</StyledLine>
                    {listOfCredentials[index].CredPassed == "true" ? (
                      <MdCheckCircle
                        className="custom-tick-icon"
                        style={{
                          position: "relative",
                          bottom: 33,
                          left: 434,
                          color: "#529535",
                        }}
                      ></MdCheckCircle>
                    ) : (
                      ""
                    )}
                  </StyledTextWrapper>
                </Col>
              </Row>
            ) : (
              <div>
                {index % 2 === 0 && (
                  <Row style={{ marginBottom: "0px" }}>
                    <Col key={index}>
                      <StyledTextWrapper style={{ marginTop: "10px" }}>
                        <StyledLine>{listOfCredentials[index].Name}</StyledLine>
                        {listOfCredentials[index].CredPassed == "true" ? (
                          <MdCheckCircle
                            className="custom-tick-icon"
                            style={{
                              position: "relative",
                              bottom: 33,
                              left: 434,
                              color: "#529535",
                            }}
                          ></MdCheckCircle>
                        ) : (
                          ""
                        )}
                      </StyledTextWrapper>
                    </Col>
                    <Col key={index}>
                      <StyledTextWrapper style={{ marginTop: "10px" }}>
                        <StyledLine>
                          {listOfCredentials[index + 1].Name}
                        </StyledLine>
                        {listOfCredentials[index + 1].CredPassed == "true" ? (
                          <MdCheckCircle
                            className="custom-tick-icon"
                            style={{
                              position: "relative",
                              bottom: 33,
                              left: 434,
                              color: "#529535",
                            }}
                          ></MdCheckCircle>
                        ) : (
                          ""
                        )}
                      </StyledTextWrapper>
                    </Col>
                  </Row>
                )}
              </div>
            )}
          </div>
        ))} */}
      </Wrapper>
    </div>
  );
};

export default HfCredentials;
