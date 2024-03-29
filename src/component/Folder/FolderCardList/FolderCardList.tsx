import { useState } from "react";
import { elapsedTime, formatCreatedAt } from "../../../utils/utils";
import {
  folderCardListProps,
  handleModalType,
} from "../../../interfaces/folder.interface";
import ModalDelete from "../../Modal/ModalDelete";
import ModalAdd from "../../Modal/ModalAdd";
import kebab from "../../../assets/icons/kebab.svg";
import "./FolderCardList.css";

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
    <div className="card-list">
      {filteredItems?.map(
        ({ id, url, image_source, description, created_at }) => (
          <a key={id} href={url} target="_blank" rel="noopener noreferrer">
            <div className="card-container">
              <div
                className="cardImg"
                style={{ backgroundImage: `url(${image_source})` }}
              ></div>
              <div className="card-content">
                <span className="elapsed-time">{elapsedTime(created_at)}</span>
                <p className="description">{description}</p>
                <span className="createdAt">{formatCreatedAt(created_at)}</span>
              </div>
              <button
                className="edit-button"
                onClick={(e) => togglePopover(id, e)}
              >
                <img src={kebab} alt="Edit" />
                {popoverShows[id] && (
                  <div className="popover">
                    <ul className="popover-list">
                      <li
                        onClick={(e) =>
                          handlePopoverClick(e, id, {
                            title: "링크 삭제",
                            buttonName: "삭제하기",
                            modalType: "delete",
                          })
                        }
                      >
                        삭제하기
                      </li>
                      <li
                        onClick={(e) =>
                          handlePopoverClick(e, id, {
                            title: "폴더에 추가",
                            buttonName: "추가하기",
                            modalType: "add",
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
    </div>
  );
};

export default FolderCardList;
