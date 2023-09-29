import { FaAccessibleIcon } from 'react-icons/fa';
import { LocationFeatures } from '../icons.style';

const AccessibilityIcon = props => {
  return (
    <LocationFeatures>
      <FaAccessibleIcon
        style={{ color: '#008BBF', fontSize: '2em', marginLeft: props.maginValue, marginTop: 3 }}
      />
    </LocationFeatures>
  );
};

export default AccessibilityIcon;
