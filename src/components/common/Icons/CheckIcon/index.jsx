import { CgCheck } from 'react-icons/cg';
import { Tick, CgCheckStyled } from '../icons.style';

const CheckIcon = props => {
  return (
    <Tick
      onClick={props.hide}
      style={{ position: props.position, left: props.left, fontSize: '3rem' }}
    >
      <CgCheckStyled>
        <CgCheck />
      </CgCheckStyled>
    </Tick>
  );
};

export default CheckIcon;
