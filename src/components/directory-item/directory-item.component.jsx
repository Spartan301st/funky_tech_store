import "./directory-item.styles.scss"

const DirectoryItem = ({category}) => {
    const {imgUrl, title} = category
    return (
        <div className="directory-item-container">
          {/* img */}
          {/* <img src={imgUrl} alt={title}></img> */}
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
          <div className="directory-body-container">
            <h2>{title}</h2>
            <p>Grab your piece</p>
          </div>
        </div>
    )
}

export default DirectoryItem