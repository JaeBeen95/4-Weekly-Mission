import { ALL } from "../../utils/utils";
import { folderToolBarProps } from "../../interfaces/folder.interface";
import styled from "styled-components";

const FolderButton = ({
  folderData,
  onFolderSelect,
  selectedButtonName,
}: folderToolBarProps) => {
  return (
    <S.FolderButtonWrapper>
      <S.FolderButton
        selected={selectedButtonName === ALL}
        onClick={() => {
          onFolderSelect?.(ALL);
        }}
      >
        <S.FolderName>{ALL}</S.FolderName>
      </S.FolderButton>
      {folderData.map(({ id, name }) => (
        <S.FolderButton
          key={id}
          selected={selectedButtonName === name}
          onClick={() => {
            onFolderSelect && onFolderSelect(id, name);
          }}
        >
          <S.FolderName>{name}</S.FolderName>
        </S.FolderButton>
      ))}
    </S.FolderButtonWrapper>
  );
};

export default FolderButton;

const S = {
  FolderButtonWrapper: styled.div`
    display: flex;
    gap: 0.8rem;
  `,

  FolderButton: styled.button<{ selected: boolean }>`
    align-items: center;
    border: 1px solid #6d6afe;
    border-radius: 5px;
    display: flex;
    font-size: 1.4rem;
    height: 3.1rem;
    padding: 0.8 1.2rem;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
    background-color: ${({ selected }) => (selected ? "#6d6afe" : "#fff")};
    color: ${({ selected }) => (selected ? "#fff" : "#000")};

    @media (min-width: 768px) {
      font-size: 1.6rem;
      height: 3.7rem;
      padding: 0 1.2rem;
    }

    &:hover {
      background-color: ${({ selected }) =>
        selected ? "#6d6afe" : "rgba(109, 106, 254, 0.3)"};
    }
  `,

  FolderName: styled.span``,
};
