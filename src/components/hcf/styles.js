import styled, { css } from 'styled-components';

const StyledTabs = styled.div(() => {
  return css`
    .tabPanel {
      width: 100%;
    }
    .sidebar {
      max-width: 250px;
    }
    .tabs span {
      font-family: 'Museo Sans', 'Open Sans';
      font-weight: 500;
      color: rgb(71, 75, 85);
    }

    .SearchTabs span {
      color: black;
      font-size: larger;
    }
  `;
});

export default StyledTabs;
