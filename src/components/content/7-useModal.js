import { useState } from "react";

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function toggleModal() {
    console.log("toggleModalClicked")
    setIsModalVisible(!isModalVisible);
    console.log(isModalVisible)
  }
  return { toggleModal, isModalVisible };
};

export default useModal;


