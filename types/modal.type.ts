import { folderDataType } from "@/types/folder.type";

interface ModalComponentProps {
  closeModal: () => void;
  modalTitle: string;
  modalButtonName?: string;
  folderData?: folderDataType[];
  linkId?: number | null;
}

export interface ModalMapType {
  [key: string]: (props: ModalComponentProps) => JSX.Element;
}

export interface ModalMapProps {
  modalGroup: ModalGroup | null;
  closeModal: () => void;
  modalTitle: string;
  modalButtonName?: string;
  folderData?: folderDataType[];
  linkId?: number | null;
}

export type ModalGroup = "edit" | "folder-add" | "share" | "delete";

export type ModalType = string | undefined;

export type FolderId = number | null;

export interface modal {
  linkId?: number | null;
  folderData?: folderDataType[];
  closeModal: () => void;
  modalTitle?: string;
  modalButtonName?: string;
}

export interface handleModal {
  title: string;
  buttonName?: string;
  modalGroup: ModalGroup;
}
