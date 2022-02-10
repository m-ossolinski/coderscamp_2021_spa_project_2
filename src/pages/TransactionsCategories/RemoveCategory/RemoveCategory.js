import { FaTrashAlt } from "react-icons/fa";
import { Confirmation, IconWrapper } from "./RemoveCategory.styled";
import Modal from "../../../components/Modal";
import { useModal } from "../../../services/hooks/useModal";
import PropTypes from "prop-types";

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
        modalHeader="Remove Category"
        cancelBtnLabel="Cancel"
        submitBtnLabel="Remove"
        onSubmit={handleSubmit}
      >
        <Confirmation>
          Are you sure to delete {category.name} category?
        </Confirmation>
      </Modal>
    </>
  );
};

RemoveCategory.propTypes = {
  removeCategory: PropTypes.func.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
