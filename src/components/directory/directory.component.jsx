import CategoryItem from "../category-item/category-item.component";
import "./directory.styless.scss";

const Directory = ({ categories }) => {
  return (
    <div div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
