import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vh;
`;

export const Detail = styled.div`
  margin-top: 25px;
  .header {
    margin-top: -29px;
    display: flex;
    justify-content: space-between;
    padding: 0px 1px;
    .label {
      font-size: 0.875rem;
      font-weight: 300;
      letter-spacing: 0px;
      color: #474b55;
      opacity: 0.6;
    }
    .value {
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0px;
      color: #474b55;
    }
  }
  select {
    width: 270px;
    height: 53px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #333333;
    border-radius: 7px;
    font-size: 1.25rem;
    font-weight: 600;
    color: #333333;
  }
  .title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0px;
    color: #003863;
  }
  .info {
    margin: 40px 20px 0 0;
    background: #f4f6f4;
    border: 1px solid #f4f6f4;
    border-radius: 10px;
    height: 100%;

    .line {
      width: 50px;
      height: 0px;
      border: 2px solid #008bbf;
      opacity: 0.5;
      margin-right: 38px;
      margin-top: 2px;
    }
    .label {
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 0px;
      color: #707070;
      opacity: 0.6;
      margin-bottom: 4px;
    }
    .value {
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0px;
      color: #333333;
    }

    .tab {
      padding: 19px 30px 20px 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .tab button {
      background: none;
      border: none;
      border-bottom: 3px solid #d9ddde;
      height: 40px;
      width: 100%;
      cursor: pointer;
    }

    .tab button.active {
      border-bottom: 4px solid #008bbf;
    }
    .tab button p {
      margin-bottom: 9px;
      text-align: center;
      font-size: 1.125rem;
      letter-spacing: 0px;
      color: #333333;
      font-weight: 700;
      opacity: 0.6;
    }

    .tab button.active p {
      opacity: 1;
    }
  }
`;
