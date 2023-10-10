import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 100%;
  // 100%
  // @media screen and (min-width: 1280px) and (max-width: 1360px) {
  //   width: 84%;
  // }
  // // 100%
  // @media screen and (min-width: 1120px) and (max-width: 1279px) {
  //   width: 81%;
  // }
  // // 80%
  // @media screen and (min-width: 1467px) and (max-width: 1580px) {
  //   width: 93%;
  // }
`;
export const TableWrapper = styled.div`
  overflow-x: ${props => (props.Medicaid ? 'hidden' : '')};
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
