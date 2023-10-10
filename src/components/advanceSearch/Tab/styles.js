import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    margin: 0px 0;
    background-color: white;
    padding: 1rem;

    .title {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: 0px;
      color: #003863;
    }

    .line {
      margin-left: 0px;
      width: 50px;
      height: 0px;
      border: 2px solid #008bbf;
      opacity: 0.5;
      margin-right: 38px;
      margin-top: 2px;
    }
  `;
});
