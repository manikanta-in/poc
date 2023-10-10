import Grid from '@mui/material/Grid';
import { useState } from 'react';
import EditIcon from '../../common/Icons/EditIcon';
import Model from '../../common/Model/model';
import SelectActions from '../../common/SelectAction/SelectAction';

const ActionEditor = ({ onChange }) => {
  const [showEdit, setShowEdit] = useState(true);
  const [data, setData] = useState({});

  const setActions = () => {
    setShowEdit(!showEdit);
  };

  const changeEvent = data => {
    setData(data);
  };

  const toggle = () => {};

  const onCheckClick = () => {
    setShowEdit(!showEdit);
  };

  const onArrowClick = () => {
    setShowEdit(!showEdit);
    onChange(data);
  };

  const onCloseClick =() => {
    setShowEdit(true);
  }

  return (
    <>
      <ActionSelectModal
        onArrowClick={onArrowClick}
        onCheckClick={onCheckClick}
        changeEvent={changeEvent}
        isShowing={!showEdit}
        onCloseClick={onCloseClick}
        toggle={toggle}
      />
      {showEdit && (
        <Grid container spacing={2} sx={{ mt: '5px' }}>
          <Grid item xs={8}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}>
            <EditIcon setActions={setActions} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

const ActionSelectModal = ({ changeEvent, onArrowClick, 
  onCloseClick,
  onCheckClick, isShowing, toggle }) => {
  return (
    <Model isShowing={isShowing} hide={toggle} width={'400px'} height={'200px'}>
      <SelectActions
        changeEvent={changeEvent}
        onArrowClick={onArrowClick}
        onCheckClick={onCheckClick}
        onCloseClick={onCloseClick}
      />
    </Model>
  );
};

export default ActionEditor;
