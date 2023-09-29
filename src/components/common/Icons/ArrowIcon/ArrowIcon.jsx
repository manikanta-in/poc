import { FaArrowRight } from 'react-icons/fa';
import { Arrow } from '../icons.style';

const ArrowIcon = props => {
  console.log(props.disable, 'disable');
  return (
    <Arrow onClick={props.onClick} style={{ position: props.position, left: props.left, ...props.style }} disable={props?.disable}>
      <FaArrowRight style={{ color: '#529535', fontSize: 20 }} />
    </Arrow>
  );
};

export default ArrowIcon;

