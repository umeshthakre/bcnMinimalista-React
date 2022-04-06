import { useState } from "react";

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }
  return { toggleModal, isModalVisible };
};

export default useModal;


