import styled from 'styled-components';
import { Info, Col } from '../../commonStyles/commonstyle.style';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.isTop};
  width: ${props => props.theme.isWidth};
  margin-left: ${props => props.theme.isLeft};
  margin-right: ${props => props.theme.isRight};
`;

export const ColGroup = styled(Col)`
  flex: ${props => props.theme.isFlex};
`;

export const HeaderText = styled.p`
  // margin-top: 16px;
  display: flex;
  flex-direction: row;
  flex: 1;
  // font: normal normal normal 18px/22px Museo Sans 300;
  letter-spacing: 0px;
  color: #474b55;
  opacity: 0.6;
  height: 19px;

  font-size: 1.125rem;
  font-weight: 300;
  font-family: MuseoSans;
  font-style: normal;
  padding-left: 18px;
`;

export const StyledContent = styled.p`
  text-align: center;
  //font: normal normal normal 18px/22px Museo Sans 500;
  letter-spacing: 0px;
  color: ${props => props.theme.isColor};
  opacity: 1;
  font-size: 1.125rem;
  font-weight: 500;
  font-family: MuseoSans;
  font-style: normal;
  margin-top: 10px;
`;

export const DetailInfo = styled(Info)`
  height: 610px;
`;

export const NetworkAccess = styled.div`
  background: ${props =>
    props.color === 'green'
      ? '#529535'
      : props.color === 'red'
      ? '#EA4040'
      : props.color === 'orange'
      ? '#F7911D'
      : ''};
  color: #ffffff;
  width: 140px;
  margin-left: 0px;
  margin-top: -33px;
  height: 27px;
  border-radius: 25px;
  padding: 10px;
  text-align: center;
  .status-text {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    margin-top: -6px;
    opacity: 1;
  }
`;
