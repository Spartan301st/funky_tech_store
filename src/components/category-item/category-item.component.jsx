import "./category-item.styles.scss"

const CategoryItem = ({category}) => {
    const {imgUrl, title} = category
    return (
        <div className="category-container">
          {/* img */}
          {/* <img src={imgUrl} alt={title}></img> */}
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Grab your piece</p>
          </div>
        </div>
    )
}

export default CategoryItem