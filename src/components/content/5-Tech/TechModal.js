import React from "react";
import {Modal, ModalHeader, ModalBody } from "reactstrap";

// const TechModal = ({ isModalVisible, toggleModal }) => isModalVisible ? ReactDOM.createPortal(
const TechModal = ({ isModalVisible }) =>
  isModalVisible
    ? (
        <Modal>
            <ModalBody>
                <ModalHeader> Example Modal </ModalHeader>
            </ModalBody>
        </Modal>
      )
    : null;

export default TechModal;
