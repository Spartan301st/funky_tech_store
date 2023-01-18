import styled from "styled-components"
import Button from '../button/button.component';

export const ProductCardImg = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
  margin-bottom: 5px;
  transition: all 200ms;
`
export const AddToCardBtn = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  transition: all 200ms;
`
export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px !important;
  align-items: center;
  position: relative;
  gap: 10px;
  &:hover {
    ${ProductCardImg} {
      opacity: 0.8;
    }

    ${AddToCardBtn} {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const ProductCardFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
export const ProductCardProdName = styled.span``
export const ProductCardProdPrice = styled.span``
  