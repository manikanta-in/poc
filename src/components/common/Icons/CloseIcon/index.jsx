import { TiPlus } from 'react-icons/ti';
import { Close, TiPlusStyled } from '../icons.style';

const CloseIcon = props => {
  return (
    <Close onClick={props.hide} style={{ position: props.position, left: props.left }}>
      <TiPlusStyled>
        <TiPlus />
      </TiPlusStyled>
    </Close>
  );
};

export default CloseIcon;
