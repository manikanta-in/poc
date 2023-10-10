import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px 1px 0px 25px;
  // @media screen and (max-width: 1280px) {
  //   .MuiGrid-container {
  //     width: 90%;
  //   }
  // }

  // @media screen and (min-width: 1600px) and (max-width: 2020px) {
  //   .MuiGrid-container {
  //     width: 70%;
  //   }
  // }
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0px;
  color: #474b55;
  opacity: 0.6;
`;

export const Value = styled.p`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0px;
  color: black;
`;

export const ID = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0px;
  color: black;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0px;
  color: black;
  display: flex;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: row;
`;
