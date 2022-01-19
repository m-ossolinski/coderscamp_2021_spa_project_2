import * as Icons from "react-icons/fa";

const CategoryItem = ({ category }) => {
  const { name, color, icon } = category;
  const { [icon]: Icon } = Icons;

  return (
    <>
      <td>
        <Icon style={{ color: `${color}` }} />
        {name}
      </td>

      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </>
  );
};

export default CategoryItem;
