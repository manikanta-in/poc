import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  //Adding new state for Multiple Model open in same page
  const [isShowingNotes, setIsShowingNotes] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  function toggleNotes() {
    setIsShowingNotes(!isShowingNotes);
  }

  return {
    isShowing,
    isShowingNotes,
    toggle,
    toggleNotes
  };
};

export default useModal;
