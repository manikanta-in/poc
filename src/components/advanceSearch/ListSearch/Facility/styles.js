import styled, { css } from 'styled-components';

const StyledForm = styled.div(() => {
  return css`
    margin: 8px 0;
    background: white;
    padding: 20px;
    & label {
      position: relative;
      top: 11px;
      background: #fff;
      opacity: 1;
      z-index: 41;
      left: 14px;
      padding: 0 8px;
      height: 39px;
      display: flex;
      font-size: 1.125rem;
      font-family: Segoe UI;
      color: #707070;
    }
    & input {
      width: auto;
      height: 100%;
      background: #fff 0 0 no-repeat padding-box;
      border: 1px solid #333;
      border-radius: 7px;
      opacity: 1;
      padding: 8px 18px;
      font-size: 1.25rem;
      font-weight: 600;
      font-family: Segoe UI;
    }

    & select {
      width: auto;
      height: 100%;
      border: 1px solid #333;
      border-radius: 7px;
      opacity: 1;
      padding: 8px 18px;
      font-size: 1.25rem;
      font-weight: 600;
      font-family: Segoe UI;
    }
  `;
});

export default StyledForm;
