import styled from "styled-components";
import Button from "../button/button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  overflow-y: scroll;
`
export const CartEmptyMsg = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
export const CartItemsContainer = styled.div`
  padding: 20px 20px 0;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const HeadToCheckoutBtn = styled(Button)`
  font-size: 0.7rem;
`
export const CartDropdownBtnContainer = styled.div`
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content:center;
  align-items:center;
  z-index: 10;
`
  