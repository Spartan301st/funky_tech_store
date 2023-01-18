import styled from "styled-components";

export const CartItemContainer = styled.div`
  height: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  overflow: hidden;
  gap: 5px;
`
export const CartItemImgContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`
export const CartItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5px;
  font-size: 12px;
  gap: 10px;
`
export const ItemName = styled.span``
export const ItemPrice = styled.span`
  font-weight: 500;
`
  