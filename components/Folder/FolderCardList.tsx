import { useState } from "react";
import { elapsedTime, formatCreatedAt } from "../../utils/utils";
import { folderCardListProps } from "../../types/folder.type";
import { handleModalGroup } from "../../types/modal.type";
import ModalDelete from "../Modal/ModalDelete";
import ModalAdd from "../Modal/ModalAdd";
import kebab from "../../public/icons/kebab.svg";
import styles from "./FolderCardList.module.css";
import Image from "next/image";
import Link from "next/link";

const FolderCardList = ({
  filteredItems,
  isModalOpen,
  modalGroup,
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
    { title, buttonName, modalGroup }: handleModalGroup
  ) => {
    e.preventDefault();
    setSelectedLinkId(id);
    changeModalType(modalGroup);
    openModal(true, title, buttonName, modalGroup);
  };

  return (
    <div className={styles.CardListWrapper}>
      {filteredItems?.map(
        ({ id, url, image_source, description, created_at }) => (
          <Link key={id} href={url} target="_blank" rel="noopener noreferrer">
            <div className={styles.Card}>
              <div
                className={styles.CardImg}
                style={{ backgroundImage: `url(${image_source})` }}
              />
              <div className={styles.CardContent}>
                <span className={styles.ElapsedTime}>
                  {elapsedTime(created_at)}
                </span>
                <p className={styles.Description}>{description}</p>
                <span className={styles.CreatedAt}>
                  {formatCreatedAt(created_at)}
                </span>
              </div>
              <button
                className={styles.EditButton}
                onClick={(e) => togglePopover(id, e)}
              >
                <Image src={kebab} alt="Edit" />
                {popoverShows[id] && (
                  <div className={styles.Popover}>
                    <ul className={styles.PopoverList}>
                      <li
                        className={styles.PopoverItem}
                        onClick={(e) =>
                          handlePopoverClick(e, id, {
                            title: "링크 삭제",
                            buttonName: "삭제하기",
                            modalGroup: "delete",
                          })
                        }
                      >
                        삭제하기
                      </li>
                      <li
                        className={styles.PopoverItem}
                        onClick={(e) =>
                          handlePopoverClick(e, id, {
                            title: "폴더에 추가",
                            buttonName: "추가하기",
                            modalGroup: "add",
                          })
                        }
                      >
                        폴더에 추가
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            </div>
          </Link>
        )
      )}
      {isModalOpen && modalGroup === "delete" && (
        <ModalDelete
          linkId={selectedLinkId}
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
      {isModalOpen && modalGroup === "add" && (
        <ModalAdd
          folderData={folderData}
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
    </div>
  );
};

export default FolderCardList;
