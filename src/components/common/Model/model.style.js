import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  align-items: center;
`;

export const Modal = styled.div`
  z-index: 100;
  background: #fff;
  position: relative;
  margin: auto;
  //border-radius: 5px;
  max-width: 900px;
  width: ${props => (props.width ? `${props.width}` : '100%')};
  height: ${props => (props.height ? `${props.height}` : '380px')};
  padding: 1rem;
  left: 20px;
  top: 40px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.3;
  cursor: pointer;
  border: none;
`;

export const ModalBody = styled.div``;
