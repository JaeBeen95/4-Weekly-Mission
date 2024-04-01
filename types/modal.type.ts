import { folderDataType } from "./folder.type";

export type modalType = string | undefined;

export type FolderId = number | null;

export interface modalGroup {
  linkId?: number | null;
  folderData?: folderDataType[];
  closeModal: () => void;
  modalTitle?: string;
  modalButtonName?: string;
}

export interface handleModalGroup {
  title: string;
  buttonName?: string;
  modalGroup: string;
}
