import CategoryItem from "../category-item/category-item";

import "./directory.scss";

const Directory = ({ categories }) => {
  console.log("categories", categories);
  return (
    <div className="directory-container">
      {/* {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))} */}
    </div>
  );
};

export default Directory;
