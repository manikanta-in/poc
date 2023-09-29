import styled, { css } from 'styled-components';

const StyledTable = styled.div(() => {
  return css`
    .advancesearch {
      width: 100%;
    }

    .advancesearch .tab_header {
      margin: 70px 0px 60px 0px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .advancesearch .table {
      margin-left: 18px;
      margin-top: -30px;
    }
    .advancesearch .tab_header .menus {
      border-bottom: 3px solid #a8abac25;
      display: flex;
      align-items: center;
      position: relative;
    }

    .advancesearch .tab_header .menus .item {
      font-size: 1.5rem;
      font-weight: 900;
      font-family: 'MuseoSans';
      font-style: normal;
      letter-spacing: 0px;
      color: #33333360;
      cursor: pointer;
      padding: 12px 45px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .advancesearch .tab_header .menus .unselectitem {
      font-size: 1.5rem;
      font-weight: 900;
      font-family: 'MuseoSans';
      font-style: normal;
      letter-spacing: 0px;
      color: #33333360;
      padding: 12px 45px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .advancesearch .tab_header .menus .menu {
      display: flex;
    }

    .advancesearch .tab_header .menus .selected_menu {
      cursor: default;
      color: #333333;
    }

    .advancesearch .tab_header .menus .title {
      margin-right: 8px;
      position: relative;
      top: 5px;
    }

    .subtitle {
      font-weight: 700;
      font-size: 1.25rem;
      margin-top: 9px;
    }

    .advancesearch .tab_header .menus .bar {
      background: #008bbf;
      position: absolute;
      width: 100%;
      bottom: -4px;
      transition: height 0.4s;
    }

    .advancesearch .tab_header .menus .selected {
      height: 5px;
    }

    .advancesearch .tab_header .menus .unselected {
      height: 0px;
      /* font-family: "MuseoSans700, Regular"; */
    }

    .table_height {
      height: 70vh;
      overflow: auto;
      width: 100%;
    }

    /* 1280px = 100% */
    @media screen and (min-width: 1280px) and (max-width: 1379px) {
      .table_height {
        height: 60vh;
        overflow: auto;
        width: 98%;
      }
    }
    /* 1132px = 90% */
    @media screen and (min-width: 1120px) and (max-width: 1279px) {
      .table_height {
        height: 60vh;
        overflow: auto;
        width: 99%;
      }
    }
    /* 80% */
    @media screen and (min-width: 1380px) and (max-width: 1490px) {
      .table_height {
        height: 70vh;
        overflow: auto;
        width: 100%;
      }
    }
    /*90%*/
    @media screen and (min-width: 1491px) and (max-width: 1690px) {
      .table_height {
        height: 70vh;
        overflow: auto;
        width: 100%;
      }
    }
    /* 1491px = 75% */
    @media screen and (min-width: 1691px) and (max-width: 1890px) {
      .table_height {
        height: 70vh;
        overflow: auto;
        width: 100%;
      }
    }
  `;
});

export default StyledTable;
