import { FaArrowRight } from 'react-icons/fa';
//import { Arrow } from '@components/commonStyles/commonstyle.style';
import { Arrow } from '../icons.style';

const ArrowIcon = props => {
  console.log(props.disable, 'disable');
  return (
    <Arrow onClick={props.onClick} style={{ position: props.position, left: props.left }} disable={props?.disable}>
      <FaArrowRight style={{ color: '#529535', fontSize: 20 }} />
    </Arrow>
  );
};

export default ArrowIcon;
