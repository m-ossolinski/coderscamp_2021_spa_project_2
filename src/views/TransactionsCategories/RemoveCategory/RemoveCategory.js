import { FaTrashAlt } from "react-icons/fa";
import { IconWrapper } from "../CategoryItem/CategoryItem.style";
import Modal from "../../../components/Modal";
import { useModal } from "../../../services/hooks/useModal";

export const RemoveCategory = ({ removeCategory, category }) => {
  const { isVisible, toggleVisibility } = useModal();

  const { id: categoryId } = category;

  const handleSubmit = () => {
    removeCategory(categoryId);
  };

  return (
    <>
      <IconWrapper onClick={toggleVisibility}>
        <FaTrashAlt />
      </IconWrapper>
      <Modal
        isVisible={isVisible}
        onCancel={toggleVisibility}
        modalHeader={""}
        cancelBtnLabel={"Cancel"}
        submitBtnLabel={"Remove Category"}
        onSubmit={handleSubmit}
      >
        <div>Are you sure to delete {category.name} category?</div>
      </Modal>
    </>
  );
};
