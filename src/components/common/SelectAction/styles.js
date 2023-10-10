import styled, { css } from 'styled-components';

const StyledStepsWrapper = styled.div(() => {
  return css`
    .heading p {
      margin-top: 10px;
      margin-left: 10px;
      font-size: 1rem;
      display: inline-block;
      position: relative;
      text-align: left;
      font-weight: 700;
      font-size: normal;
      letter-spacing: 0px;
      color: #003863;
      opacity: 1;
    }
    .item {
        margin-top: 20px;
        margin-left: 10px;
        width: 80%
    }
    .selectItem {
        margin-top: 10px;
        margin-left: 10px;
        width: 100%
    }
    .heading p:after {
      content: '';
      height: 0px;
      width: 79px;
      border: 2px solid #008bbf;
      opacity: 0.5;
      position: absolute;
      bottom: -0.5em;
      left: 40px;
      transform: translate(-50%);
    }
  `;
});

export default StyledStepsWrapper;
