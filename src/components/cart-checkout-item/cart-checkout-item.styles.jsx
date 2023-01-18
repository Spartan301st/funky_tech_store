import styled from "styled-components";
import {ReactComponent as ArrowIcon} from "../../assets/arrow-icon.svg"
import {ReactComponent as RemoveIcon} from "../../assets/remove-icon.svg"

export const CartCheckoutItemContainer = styled.div`
    width: 100%;
    display: grid;
    height: 200px;
    grid-template-columns: repeat(4, 1fr) 0.5fr;
    gap: 20px;
    border-bottom: 1px solid gray;
    padding: 16px 0;
    &:last-of-type {
        border-bottom: none;
    }
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
    transition: all 0.5s;
    &:hover {
        transform: scale(1.2);
    }
`
export const CartItemInfoContainer = styled.div`
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const CartItemDescription = styled(CartItemInfoContainer)``
export const CartItemQuantityContainer = styled(CartItemInfoContainer)``
export const CartItemQty = styled.span`
    font-weight: 600;
    font-size: 1.2rem;
    padding: 1rem
`

export const BaseBtn = styled.button`
    background: transparent;
    border: none;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IncrDecrBtn = styled(BaseBtn)``

export const BaseArrowIcon = styled(ArrowIcon)`
    cursor: pointer;
`
export const ArrowIconLeft = styled(BaseArrowIcon)`
    transform: scale(1.8);
`
export const ArrowIconRight = styled(BaseArrowIcon)`
    transform: scale(-1.8, 1.8);
`

export const CartItemRemoveBtn = styled(BaseBtn)`
    padding: 0;
    border-radius: 50%;
    transform: scale(1.8);
`

export const RemoveIconStyled = styled(RemoveIcon)`
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        fill: rgb(254, 63, 63);
    }
`
export const BasePriceAndRemoveContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PriceContainer = styled(BasePriceAndRemoveContainer)``
export const RemoveBtnContainer = styled(BasePriceAndRemoveContainer)``
