import styled, { css } from 'styled-components';

const StyledFilterBox = styled.div(() => {
  return css`
    .filters {
      width: 100%;
      float: right;
    }
    & label {
      font-weight: 600;
    }
  `;
});

export default StyledFilterBox;
