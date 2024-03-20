import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeModalType = (type) => {
    setModalType(type);
  };

  return {isModalOpen, openModal, closeModal, modalType, changeModalType};
};

export default useModal;
