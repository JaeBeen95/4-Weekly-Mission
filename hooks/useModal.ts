import { useState } from "react";
import { modalType } from "@/types/modal.type";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalGroup, setModalGroup] = useState<modalType>("");
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalButtonName, setModalButtonName] = useState<modalType>("");

  const openModal = (
    open: boolean,
    title: string,
    buttonName: modalType,
    group: modalType
  ) => {
    setIsModalOpen(open);
    setModalGroup(group);
    setModalTitle(title);
    setModalButtonName(buttonName);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle("");
    setModalButtonName("");
  };

  const changeModalGroup = (group: modalType) => {
    setModalGroup(group);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    modalGroup,
    changeModalGroup,
    modalTitle,
    setModalTitle,
    modalButtonName,
    setModalButtonName,
  };
};

export default useModal;
