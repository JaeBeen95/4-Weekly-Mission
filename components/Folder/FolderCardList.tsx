import { useState } from "react";
import { elapsedTime, formatCreatedAt } from "../../utils/utils";
import { folderCardListProps } from "../../types/folder.type";
import { handleModal } from "../../types/modal.type";
import ModalMap from "../Modal/ModalMap";
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
    { title, buttonName, modalGroup }: handleModal
  ) => {
    e.preventDefault();
    setSelectedLinkId(id);
    changeModalType(modalGroup);
    openModal(true, title, buttonName, modalGroup);
  };

  return (
    <div className={styles.cardListWrapper}>
      {filteredItems?.map(
        ({ id, url, image_source, description, created_at }) => (
          <Link key={id} href={url} target="_blank" rel="noopener noreferrer">
            <div className={styles.card}>
              <div
                className={styles.cardImg}
                style={{ backgroundImage: `url(${image_source})` }}
              />
              <div className={styles.cardContent}>
                <span className={styles.elapsedTime}>
                  {elapsedTime(created_at)}
                </span>
                <p className={styles.description}>{description}</p>
                <span className={styles.createdAt}>
                  {formatCreatedAt(created_at)}
                </span>
              </div>
              <button
                className={styles.editButton}
                onClick={(e) => togglePopover(id, e)}
              >
                <Image src={kebab} alt="Edit" />
                {popoverShows[id] && (
                  <div className={styles.popover}>
                    <ul className={styles.popoverList}>
                      <li
                        className={styles.popoverItem}
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
                        className={styles.popoverItem}
                        onClick={(e) =>
                          handlePopoverClick(e, id, {
                            title: "폴더에 추가",
                            buttonName: "추가하기",
                            modalGroup: "folder-add",
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
      {isModalOpen && (
        <ModalMap
          modalGroup={modalGroup}
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
          folderData={folderData}
          linkId={selectedLinkId}
        />
      )}
    </div>
  );
};

export default FolderCardList;
