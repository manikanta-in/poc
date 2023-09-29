import { FaDownload } from 'react-icons/fa';
import { Download } from '../icons.style';

const DownloadIcon = props => {
  return (
    <Download activeTab={props.activeTab}>
      <FaDownload style={{ color: '#425DEF', fontSize: '1.7rem' }} />
    </Download>
  );
};

export default DownloadIcon;
