import { FaCalendarMinus } from 'react-icons/fa';
import { LocationFeatures } from '../icons.style';

const CalenderIcon = props => {
  return (
    <LocationFeatures>
      <FaCalendarMinus
        style={{
          color: '#529535',
          fontSize: '2em',
          marginLeft: props.maginValue
        }}
      />
    </LocationFeatures>
  );
};

export default CalenderIcon;
