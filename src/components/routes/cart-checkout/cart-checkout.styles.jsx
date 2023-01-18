import styled from "styled-components";

export const CheckoutItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;
`

export const CheckoutItemsHeadersContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr) 0.5fr;
    gap: 20px;
    text-align: center;
`

export const CheckoutItemsHeader = styled.span`
    padding: 20px 0;
`
export const CheckoutItemContainer = styled.div`
border-top: 1px solid gray;
border-bottom: 1px solid gray;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
`
export const CheckoutItemsTotalPrice = styled.span`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items:center;
    font-size: 2rem;
    padding: 10px 0;
`
// export const EmptyCartHeader = styled.span`
    
// `