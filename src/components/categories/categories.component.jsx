import "./categories.styles.scss"
import CategoryItem from "../category-item/category-item.component"

const Categories = ({categories}) => {
    return (
        <div className="all-categories-container">
      {categories.map((category, i) => (
        <CategoryItem key={i} category={category} />
      ))}
    </div>
    )
}
export default Categories
