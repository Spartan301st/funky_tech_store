import styled from "styled-components"

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imgUrl}) => `url(${imgUrl})`}
`
export const DirectoryBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`
export const DirectoryBodyTitle = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 1.7rem;
  color: #4a4a4a;
  // text-transform: uppercase;
`
export const DirectoryBodyCallToAction = styled.p`
  font-weight: 300;
  font-size: 1rem;
`

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  transition: all 2s ease-out;
  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: all 2s ease-out;
    }

    & ${DirectoryBodyContainer} {
      opacity: 0.9;
    }
  }

  & .large {
    height: 380px;
  }
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`
  