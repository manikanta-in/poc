import PropTypes from 'prop-types';
import SearchBar from '../common/SearchBar/SearchBar.jsx';

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
export default function HfGenericGlobalSearch(props) {
  return (
    <>
      <SearchBar {...props} />
    </>
  );
}
