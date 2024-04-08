import ModalEdit from "../Modal/ModalEdit";
import ModalShare from "../Modal/ModalShare";
import ModalDelete from "../Modal/ModalDelete";
import ModalAdd from "./ModalAdd";
import { ModalMapType, ModalMapProps } from "@/types/modal.type";

const MODAL_MAP: ModalMapType = {
  edit: ({ closeModal, modalTitle, modalButtonName }) => (
    <ModalEdit
      closeModal={closeModal}
      modalTitle={modalTitle}
      modalButtonName={modalButtonName}
    />
  ),
  "folder-add": ({ closeModal, modalTitle, modalButtonName, folderData }) => (
    <ModalAdd
      closeModal={closeModal}
      modalTitle={modalTitle}
      modalButtonName={modalButtonName}
      folderData={folderData}
    />
  ),
  share: ({ closeModal, modalTitle }) => (
    <ModalShare closeModal={closeModal} modalTitle={modalTitle} />
  ),
  delete: ({ closeModal, modalTitle, modalButtonName, linkId }) => (
    <ModalDelete
      closeModal={closeModal}
      modalTitle={modalTitle}
      modalButtonName={modalButtonName}
      linkId={linkId}
    />
  ),
};

const ModalMap = ({
  modalGroup,
  closeModal,
  modalTitle,
  modalButtonName,
}: ModalMapProps) => {
  if (!modalGroup) return null;

  const ModalComponent = MODAL_MAP[modalGroup];

  return (
    <ModalComponent
      closeModal={closeModal}
      modalTitle={modalTitle}
      modalButtonName={modalButtonName}
    />
  );
};

export default ModalMap;
