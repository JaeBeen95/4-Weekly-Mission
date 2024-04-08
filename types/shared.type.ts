import { FolderDataType } from "./folder.type";

interface OwnerType {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderType {
  count: number;
  id: number;
  links: FolderDataType[];
  name: string;
  owner: OwnerType;
}

export interface UserType {
  folder: FolderType;
}

export interface CardListType {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}
