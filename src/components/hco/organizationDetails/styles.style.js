import styled from 'styled-components';

export const Section = styled.div`
  background: #fff;
  boxshadow: 0px 3px 6px #00000029;
  border: 1px solid #a8abac;
  border-radius: 10px;
  opacity: 1;
  margin: 10px;
  padding: 20px 15px 20px 0px;
`;

export const Detail = styled.div`
  margin-top: 25px;

  .title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0px;
    color: #003863;
  }
  .info {
    margin: 20px 20px 0px 0px;
    background: #f4f6f4;
    border: 1px solid #f4f6f4;
    border-radius: 10px;
    height: 100%;

    .line {
      margin-left: 0px;
      width: 50px;
      height: 0px;
      border: 2px solid #008bbf;
      opacity: 0.5;
      margin-right: 38px;
      margin-top: 2px;
    }
    .label {
      font-size: 0.85rem;
      font-weight: 300;
      letter-spacing: 0px;
      color: #707070;
      opacity: 0.6;
      margin-bottom: 4px;
    }
    .value {
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0px;
      color: #333333;
    }
    .value.link {
      cursor: pointer;
      color: #008bbf;
    }
    .value.list {
      font-size: 1rem !important;
      font-weight: 700;
      color: #333333;
    }
  }
`;

export const Contract = styled.div`
  border-style: solid;
  border-color: #529535;
  border-radius: 5px;
  border-width: 2px;
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #52953530;
  }

  .label-div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #529535;
    font-weight: 700;
    font-size: 1rem;
		/*1280 - 100 % Resolution */
		@media screen and (min-width: 1280px) and (max-width: 1360px) {
		font-size: 0.8rem;
		}
		/*1366 - 100 % Resolution */
		@media screen and (min-width: 1360px) and (max-width: 1379px) {
		font-size: 0.82rem;
		}
		/*1422 -- 90% */
		@media screen and (min-width: 1400px) and (max-width: 1500px) {
		font-size: 0.82rem;
		}
    /*1517 - 90 % Resolution */
    @media screen and (min-width: 1500px) and (max-width: 1530px) {
      font-size: 0.89rem;
    }
	}
    .amendimage {
      width: 24px;
      margin-top: 6px;
      /*1280 - 100 % Resolution */
      @media screen and (min-width: 1280px) and (max-width: 1360px) {
        width: 15px;
        margin-top: 6px;
        margin-left: -7px;
      }
      /*1366 - 100 % Resolution */
      @media screen and (min-width: 1360px) and (max-width: 1379px) {
        width: 15px;
        margin-top: 6px;
        margin-left: -5px;
      }
      /*1517 - 90 % Resolution */
      @media screen and (min-width: 1500px) and (max-width: 1530px) {
        width: 20px;
        margin-top: 6px;
        margin-left: -2px;
      }
	  /*1422 -- 90% */
		@media screen and (min-width: 1400px) and (max-width: 1500px) {
		width: 20px;
        margin-top: 6px;
        margin-left: -2px;
		}
    }
  }
`;

export const DisableContract = styled.div`
  border-style: solid;
  border-color: #a6c8938a;
  border-radius: 5px;
  border-width: 2px;
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;

  .label-div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a6c8938a;
    font-weight: 700;
    font-size: 1rem;
		/*1280 - 100 % Resolution */
		@media screen and (min-width: 1280px) and (max-width: 1360px) {
		font-size: 0.8rem;
		}
		/*1366 - 100 % Resolution */
		@media screen and (min-width: 1360px) and (max-width: 1379px) {
		font-size: 0.82rem;
		}
		/*1422 -- 90% */
		@media screen and (min-width: 1400px) and (max-width: 1500px) {
		font-size: 0.82rem;
		}
    /*1517 - 90 % Resolution */
    @media screen and (min-width: 1500px) and (max-width: 1530px) {
      font-size: 0.89rem;
    }
	}
    .amendimage {
      width: 24px;
      margin-top: 6px;
      /*1280 - 100 % Resolution */
      @media screen and (min-width: 1280px) and (max-width: 1360px) {
        width: 15px;
        margin-top: 6px;
        margin-left: -7px;
      }
      /*1366 - 100 % Resolution */
      @media screen and (min-width: 1360px) and (max-width: 1379px) {
        width: 15px;
        margin-top: 6px;
        margin-left: -5px;
      }
      /*1517 - 90 % Resolution */
      @media screen and (min-width: 1500px) and (max-width: 1530px) {
        width: 20px;
        margin-top: 6px;
        margin-left: -2px;
      }
	  /*1422 -- 90% */
		@media screen and (min-width: 1400px) and (max-width: 1500px) {
		width: 20px;
        margin-top: 6px;
        margin-left: -2px;
		}
    }
  }
`;

export const ProviderWrapper = styled.div`
  overflow-x: ${props => (props.legacyProviderIds ? 'hidden' : '')};
  /* Handle */
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #076bc9;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #076bc9;
  }
`;
