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
    .detailedview {
      width: 100%;
      /*1280 -- 100% */
      @media screen and (min-width: 1280px) and (max-width: 1360px) {
        width: 82%;
      }
      /*1366 -- 100% */
      @media screen and (min-width: 1360px) and (max-width: 1379px) {
        width: 83%;
      }
      /*1422 -- 90% */
      @media screen and (min-width: 1400px) and (max-width: 1500px) {
        width: 84%;
      }
      /*1517 -- 90% */
      @media screen and (min-width: 1500px) and (max-width: 1530px) {
        width: 85%;
      }
      /*1530 -- 90% */
      @media screen and (min-width: 1530px) and (max-width: 1599px) {
        width: 85%;
      }
    }
  `;
});

export default StyledTabs;
