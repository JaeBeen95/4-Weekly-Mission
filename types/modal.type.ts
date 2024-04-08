import { FolderDataType } from "@/types/folder.type";

interface ModalComponentProps {
  closeModal: () => void;
  modalTitle: string;
  modalButtonName?: string;
  folderData?: FolderDataType[];
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
  folderData?: FolderDataType[];
  linkId?: number | null;
}

export type ModalGroup = "edit" | "folder-add" | "share" | "delete";

export type ModalType = string | undefined;

export type FolderId = number | null;

export interface Modal {
  linkId?: number | null;
  folderData?: FolderDataType[];
  closeModal: () => void;
  modalTitle?: string;
  modalButtonName?: string;
}

export interface HandleModalType {
  title: string;
  buttonName?: string;
  modalGroup: ModalGroup;
}
