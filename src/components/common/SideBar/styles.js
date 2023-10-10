import styled, { css } from 'styled-components';

const StyledDrawer = styled.div(() => {
  return css`
    .EZDrawer .EZDrawer__checkbox {
      display: none;
    }
    .EZDrawer .EZDrawer__checkbox:checked ~ .EZDrawer__overlay {
      display: block;
      opacity: 1;
    }
    .EZDrawer .EZDrawer__checkbox:checked ~ .EZDrawer__container {
      visibility: visible;
      transform: translate3d(0, 0, 0) !important;
    }

    .EZDrawer .EZDrawer__overlay {
      display: none;
      height: 100vh;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
    }

    .EZDrawer .EZDrawer__container {
      position: fixed;
      padding-right: 25px;
      visibility: hidden;
      background: white;
      transition: all;
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    }
    .sidebar .heading p {
      margin-top: 20px;
      margin-left: 30px;
      font-size: 2rem;
      display: inline-block;
      position: relative;
      text-align: left;
      font-weight: 700;
      font-size: normal;
      letter-spacing: 0px;
      color: #003863;
      opacity: 1;
    }

    .heading p:after {
      content: '';
      height: 0px;
      width: 79px;
      border: 3px solid #008bbf;
      opacity: 0.5;
      position: absolute;
      bottom: -0.5em;
      left: 40px;
      transform: translate(-50%);
    }

    .sidebar .searchbar {
      width: 100%;
      display: flex;
      height: inherit;
      margin-top: 50px;
      margin-left: 30px;
    }

    .drawersidebar {
      overflow-y: scroll;
    }
  `;
});

export default StyledDrawer;
