import { ALL } from "../utils/utils";
import { ModalGroup } from "./modal.type";

export type FolderId = typeof ALL | number;

export interface FolderDataType {
  created_at: string;
  favorite: boolean;
  id: number;
  link: { [key: string]: number };
  name: string;
  user_id: number;
}

export interface InputSectionProps {
  folderData: FolderDataType[];
}

export interface LinksType extends FolderDataType {
  description: string;
  image_source: string;
  title: string;
  updated_at: null;
  url: string;
}

export interface FolderToolBarProps {
  folderData: FolderDataType[];
  filteredItems?: LinksType[];
  selectedButtonName?: string;
  onFolderSelect?: (folderId: typeof ALL | number, folderName?: string) => void;
}

export interface FolderCardListProps extends FolderToolBarProps {
  isModalOpen?: boolean;
  modalGroup: ModalGroup | null;
  openModal: (
    open: boolean,
    title: string,
    buttonName: string | undefined,
    group: ModalGroup
  ) => void;
  closeModal: () => void;
  changeModalType: (type: ModalGroup) => void;
  modalTitle: string;
  modalButtonName?: string;
}

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
