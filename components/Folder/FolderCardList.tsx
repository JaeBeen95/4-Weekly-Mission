import { useState } from "react";
import { elapsedTime, formatCreatedAt } from "../../utils/utils";
import {
  folderCardListProps,
  handleModalType,
} from "../../types/folder.interface";
import ModalDelete from "../Modal/ModalDelete";
import ModalAdd from "../Modal/ModalAdd";
import kebab from "../../public/icons/kebab.svg";
import styled from "styled-components";
import Image from "next/image";

const FolderCardList = ({
  filteredItems,
  isModalOpen,
  modalType,
  openModal,
  closeModal,
  changeModalType,
  modalTitle,
  modalButtonName,
  folderData,
}: folderCardListProps) => {
  const [popoverShows, setPopoverShows] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [selectedLinkId, setSelectedLinkId] = useState<null | number>(null);

  const togglePopover = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setPopoverShows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePopoverClick = (
    e: React.MouseEvent,
    id: number,
    { title, buttonName, modalType }: handleModalType
  ) => {
    e.preventDefault();
    setSelectedLinkId(id);
    changeModalType(modalType);
    openModal(true, title, buttonName, modalType);
  };

  return (
    <S.CardListWrapper>
      {filteredItems?.map(
        ({ id, url, image_source, description, created_at }) => (
          <a key={id} href={url} target="_blank" rel="noopener noreferrer">
            <S.Card>
              <S.CardImg backgroundImage={image_source} />
              <S.CardContent>
                <S.ElapsedTime>{elapsedTime(created_at)}</S.ElapsedTime>
                <S.Description>{description}</S.Description>
                <S.CreatedAt>{formatCreatedAt(created_at)}</S.CreatedAt>
              </S.CardContent>
              <S.EditButton onClick={(e) => togglePopover(id, e)}>
                <Image src={kebab} alt="Edit" />
                {popoverShows[id] && (
                  <S.Popover>
                    <S.PopoverList>
                      <S.PopoverItem
                        onClick={(e) =>
                          handlePopoverClick(e, id, {
                            title: "링크 삭제",
                            buttonName: "삭제하기",
                            modalType: "delete",
                          })
                        }
                      >
                        삭제하기
                      </S.PopoverItem>
                      <S.PopoverItem
                        onClick={(e) =>
                          handlePopoverClick(e, id, {
                            title: "폴더에 추가",
                            buttonName: "추가하기",
                            modalType: "add",
                          })
                        }
                      >
                        폴더에 추가
                      </S.PopoverItem>
                    </S.PopoverList>
                  </S.Popover>
                )}
              </S.EditButton>
            </S.Card>
          </a>
        )
      )}
      {isModalOpen && modalType === "delete" && (
        <ModalDelete
          linkId={selectedLinkId}
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
      {isModalOpen && modalType === "add" && (
        <ModalAdd
          folderData={folderData}
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
    </S.CardListWrapper>
  );
};

export default FolderCardList;

const S = {
  CardListWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(1, 32.5rem);
    justify-content: center;
    width: 100%;
    max-width: 106rem;
    gap: 2.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 34rem);
      column-gap: 2rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 34rem);
    }
  `,

  Card: styled.div`
    border-radius: 1.5rem;
    box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    height: 32.7rem;
    position: relative;
    width: 32.5rem;

    @media (min-width: 768px) {
      height: 33.4rem;
      width: 34rem;
    }
  `,

  CardImg: styled.div<{ backgroundImage: string }>`
    background-position: 50%;
    background-size: 100%;
    border-radius: 1.5rem 1.5rem 0 0;
    height: 19.2rem;
    min-height: 19.2rem;
    transition: background-size 0.3s ease-in-out;
    width: 100%;
    background-image: url(${({ backgroundImage }) => backgroundImage});

    @media (min-width: 768px) {
      min-height: 20rem;
      height: 20rem;
    }

    &:hover {
      background-size: 130%;
    }
  `,

  CardContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    transition: background-color 0.3s ease-in-out;
  `,

  ElapsedTime: styled.span`
    font-size: 1.3rem;
    color: var(--gray80);
  `,

  Description: styled.p`
    height: 4.9rem;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.6rem;
    line-height: 150%;
  `,

  CreatedAt: styled.span`
    font-size: 1.4rem;
    color: var(--grey100);
  `,

  EditButton: styled.button`
    position: absolute;
    right: 2rem;
    top: 20.7rem;

    @media (min-width: 768px) {
      top: 21.5rem;
    }
  `,

  Popover: styled.div`
    position: absolute;
    z-index: 50;
    top: unset;
    right: unset;
    bottom: unset;
    left: 0px;
  `,

  PopoverList: styled.ul`
    background: #fff;
    box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);
    display: flex;
    flex-direction: column;
    padding: 0;
    row-gap: 0.2rem;
    width: 10rem;

    li {
      align-items: center;
      display: flex;
      font-size: 1.4rem;
      height: 3.1rem;
      justify-content: center;
      list-style-type: none;

      &:hover {
        background: #e7effb;
        color: #6d6afe;
      }
    }
  `,

  PopoverItem: styled.li``,
};
