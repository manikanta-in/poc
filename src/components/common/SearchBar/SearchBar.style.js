import styled from 'styled-components';
export const InputHolder = styled.div`
  border: 1px #529535 solid;
  border-radius: 50px;
  padding: 2px 3px;
  display: flex;
  align-items: center;
  height: 50px;
  background: #fff;
  position: relative;
`;
export const Divider = styled.div`
  height: auto;
  margin: 0px 8px;
  padding: 12px 0px;
  width: 1px;
  background: #d7d7d7;
`;

export const Input = styled.input`
  transition: width 0.5s;
  font-size: 1rem;
  flex-grow: 1;
  autofocus: true;
  padding-top: 4px;
  border: none;
  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }
`;

export const SearchIcon = styled.div`
  margin: 4px 2px 0px 8px;
  position: relative;
`;

export const MoreIcon = styled.div`
  cursor: pointer;
  height: 100%;
  color: #fff;
  border-radius: 30px;
  width: 75px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  &:hover: {
    background: #458429;
  }
`;

export const SearchArea = styled.div`
  z-index: 99999999;
  .globalsearch {
    // @media screen and (max-width: 1400px) {
    //   position: relative;
    //   bottom: 100px;
    // }
    // @media screen and (min-width: 1400px) and (max-width: 1600px) {
    //   position: relative;
    //   bottom: 70px;
    // }
    width: 80%;
    position: relative;
    display: flex;
    //bottom: -100px;
  }
`;

export const List = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #529535;
  border-radius: 25px;
  position: absolute;
  top: 56px;
  overflow: auto;
  width: 100%;
  z-index: 99;
  overflow: hidden;
  .no-record {
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    .msg {
      color: #003863;
      font-size: 1.125rem;
      margin-left: 10px;
    }
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .contain::-webkit-scrollbar {
    width: 10px;
    background: #fff;
    height: 15px;
  }
  .contain::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  .contain {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .contain {
    margin-bottom: 14px;
    max-height: 304px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .p_item {
      border-bottom: 1px solid #70707025;
      .header {
        padding: 0px 31px;
        font-size: 1.2rem;
        font-weight: 800;
        letter-spacing: 0px;
        color: #003863;
        opacity: 1;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .count {
          cursor: pointer;
          font-size: 1rem;
          color: #008bbf;
          letter-spacing: -1px;
          font-weight: 600;
        }
        .links {
          font-size: 1rem;
          letter-spacing: -2px;
        }
      }
      .values {
        border-top: 1px solid #70707025;
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: 0px;
        color: #333333;
        padding: 12.5px 45px;
        .number {
          padding: 0px 0px 9px 0px;
          cursor: pointer;
        }
      }
    }
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79vw;
  margin-left: 200px;
  height: 87vh;
`;

export const WatermarkIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
