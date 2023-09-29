import { FaEdit } from 'react-icons/fa';
import { Edit } from '../icons.style';

const EditIcon = props => {
  const { setActions, activeTab } = props;
  return (
    <Edit onClick={setActions} activeTab={activeTab}>
      <FaEdit style={{ color: '#529535', fontSize: '1.8em' }} />
    </Edit>
  );
};

export default EditIcon;
