import styled from "styled-components"

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 100px;
    &:last-of-type {
        margin-bottom: 0;
    }
`

export const CategoryPreviewTitle = styled.h2`
    cursor: pointer;
`

export const CategoryItemsPreviewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px 30px;
`
