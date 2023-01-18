import { useNavigate } from "react-router-dom"

import { BackgroundImage, DirectoryBodyCallToAction, DirectoryBodyContainer, DirectoryBodyTitle, DirectoryItemContainer } from "./directory-item.styles.jsx"

const DirectoryItem = ({category}) => {
    const {imgUrl, title, route} = category;
    const navigate = useNavigate();
    const navigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={navigateHandler}>
          {/* img */}
          {/* <img src={imgUrl} alt={title}></img> */}
          <BackgroundImage
            // style={{ backgroundImage: `url(${imgUrl})` }}
            imgUrl={imgUrl}
          ></BackgroundImage>
          <DirectoryBodyContainer>
            <DirectoryBodyTitle>{title}</DirectoryBodyTitle>
            <DirectoryBodyCallToAction>Grab your piece</DirectoryBodyCallToAction>
          </DirectoryBodyContainer>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem