import styled from 'styled-components';
import { Col } from '../../commonStyles/commonstyle.style';

export const CheckCircle = styled(Col)`
  margin-right: 14px;
  align-items: center;
  justify-content: center;
  background: #a8abac1a;
  box-shadow: inset 0px 0px 0px #00000029, 0px 1px 6px #00000029;
  height: 40px;
  width: 40px;
  border-radius: 10px;
`;

export const Download = styled(Col)`
  margin-right: 14px;
  align-items: center;
  cursor: ${props => (props.activeTab === 'second-tab' ? 'no-drop' : 'pointer')};
  justify-content: center;
  background: #a8abac1a;
  box-shadow: inset 0px 0px 0px #00000029, 0px 1px 6px #00000029;
  height: 40px;
  width: 40px;
  border-radius: 10px;
`;

export const Edit = styled(Col)`
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  cursor: ${props => (props.activeTab === 'second-tab' ? 'no-drop' : 'pointer')};
  background: #a8abac1a;
  box-shadow: inset 0px 0px 0px #00000029, 0px 1px 6px #00000029;
  height: 40px;
  width: 40px;
  border-radius: 10px;
`;

export const Close = styled.div`
  align-items: center;
  justify-content: center;
  padding: 6px;
  background: #a8abac1a 0% 0% no-repeat padding-box;
  // align-items:center;
  // justify-content:center;
  // background:#A8ABAC1A;
  box-shadow: inset 0px 0px 2px #00000029, 0px 1px 2px #00000029;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  Margin-left:-10px;
  cursor: pointer;
  background-color:#dfdfdf
`;

export const Tick = styled.div`
  align-items: center;
  justify-content: center;
  background: #a8abac1a;
  box-shadow: inset 0px 0px 2px #00000029, 0px 1px 2px #00000029;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  cursor: pointer;
  padding: 6px;
`;

export const Add = styled.div`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: #a8abac1a;
  box-shadow: inset 0px 0px 0px #00000029, 0px 1px 5px #00000029;
  height: 40px;
  width: 40px;
  border-radius: 10px;
`;
export const LocationFeatures = styled.div`
  height: 40px;
  width: 40px;
`;

export const ChevronDownIconStyled = styled.div`
  position: relative;
  left: 6px;
  bottom: 2px;
`;

export const TiPlusStyled = styled.svg`
  position: relative !important;
  top: 72px;
  left: -92px;
  color: rgb(234, 64, 64);
  font-size: 2.1rem;
  rotate: 47deg;
`;

export const CgCheckStyled = styled.svg`
  color: rgb(82, 149, 53);
  position: relative;
  top: -8px;
  left: -9px;
`;


export const Arrow = styled(Col)`
    align-items:center;
    cursor:${(props) => (!props.disable ? `no-drop` : `pointer`)};
    justify-content:center;
    background:#A8ABAC1A;
    height:40px;
    width:40px;
    padding:10px;
    margin-left:12px;
    box-shadow: inset 0px 3px 6px #00000029, 0px 3px 6px #00000029;
    border-radius:10px;
`