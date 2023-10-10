import styled, { css } from 'styled-components';

const StyledForm = styled.div(() => {
  return css`
    & label {
      //background: #fff;
      opacity: 0.7;
      z-index: 41;
      //left: 14px;
      display: flex;
      font-size: 1.2rem;
      font-family: Segoe UI;
      color: #707070;
    }

    & select {
      width: auto;
      height: 100%;
      border: none;
      opacity: 1;
      font-size: 1.1rem;
      font-weight: 500;
      font-family: Segoe UI;
      color: #333333;
    }
    & option {
      font-weight: 500;
      color: #333333;
    }
  `;
});

export default StyledForm;
