import { useState } from 'react';
import Drawer from 'react-modern-drawer';

import StyledDrawer from './styles.js';

import HfGenericAdvancedSearchTabs from '../../Hf_generic_AdvancedSearchTabs/index.jsx';

const SideBar = props => {
  const [isOpen, setIsOpen] = useState(props.searchType);
  const { setSearchData, setFetchResults, setTypeOfSearch } = props;
  props.setIsGlobalSearch(false);
  const onClose = isCose => {
    setIsOpen(!isCose);
    props.setAdvanceSearch(false);
  };

  return (
    <StyledDrawer>
      <div className='sidebar' data-tesid='sidebar'>
        <Drawer
          open={isOpen}
          onClose={() => onClose(true)}
          direction='right'
          size={650}
          className='drawersidebar'
        >
          <div className='heading'>
            <p>Advanced Search</p>
          </div>
          <div className='searchbar'>
            <HfGenericAdvancedSearchTabs
              setSearchData={setSearchData}
              setFetchResults={setFetchResults}
              onClose={onClose}
              setTypeOfSearch={setTypeOfSearch}
            />
          </div>
        </Drawer>
      </div>
    </StyledDrawer>
  );
};

export default SideBar;
