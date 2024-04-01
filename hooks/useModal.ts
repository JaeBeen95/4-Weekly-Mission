import { useState } from "react";
import { ModalType, ModalGroup } from "@/types/modal.type";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalGroup, setModalGroup] = useState<ModalGroup | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalButtonName, setModalButtonName] = useState<ModalType>("");

  const openModal = (
    open: boolean,
    title: string,
    buttonName: ModalType,
    group: ModalGroup
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

  const changeModalGroup = (group: ModalGroup) => {
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
