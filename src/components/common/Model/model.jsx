import React from 'react';
import {
  ModalOverlay,
  ModalWrapper,
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from './model.style';
const Model = ({ isShowing, children, width, height }) => {
  return (
    <>
      {isShowing ? (
        <ModalOverlay>
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role='dialog'>
            <Modal width={width} height={height}>
              {/* <ModalHeader>
                    <ModalCloseButton type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                    </ModalCloseButton>
                </ModalHeader> */}
              <ModalBody>{children}</ModalBody>
            </Modal>
          </ModalWrapper>
        </ModalOverlay>
      ) : null}
    </>
  );
};

export default Model;
