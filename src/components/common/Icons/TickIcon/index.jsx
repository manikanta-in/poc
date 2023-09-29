import { FaCheck } from 'react-icons/fa';

const CheckIcon = props => {
  return <FaCheck onClick={props.onClick} style={{ color: '#529535', fontSize: 25 , ...props.style}} />;
};

export default CheckIcon;
