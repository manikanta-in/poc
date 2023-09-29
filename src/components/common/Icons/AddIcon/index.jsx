import { FaPlus } from 'react-icons/fa';
import { Add } from '../icons.style';

const AddIcon = props => {
  return (
    <Add onClick={props.clickAdd}>
      <FaPlus style={{ color: '#529535', fontSize: '1.5rem', marginTop: 8, marginLeft: 10 }} />
    </Add>
  );
};

export default AddIcon;
