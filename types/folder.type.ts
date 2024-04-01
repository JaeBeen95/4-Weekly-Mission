import { ALL } from "../utils/utils";
import { ModalGroup } from "./modal.type";

export type FolderId = typeof ALL | number;

export interface folderDataType {
  created_at: string;
  favorite: boolean;
  id: number;
  link: { [key: string]: number };
  name: string;
  user_id: number;
}

export interface InputSectionProps {
  folderData: folderDataType[];
}

export interface linksType extends folderDataType {
  description: string;
  image_source: string;
  title: string;
  updated_at: null;
  url: string;
}

export interface folderToolBarProps {
  folderData: folderDataType[];
  filteredItems?: linksType[];
  selectedButtonName?: string;
  onFolderSelect?: (folderId: typeof ALL | number, folderName?: string) => void;
}

export interface folderCardListProps extends folderToolBarProps {
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

export interface searchBarProps {
  onSearch: (searchTerm: string) => void;
}
