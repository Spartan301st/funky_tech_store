import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocs } from "../utils/firebase/firebase.utils"

// import SHOP_DATA from "../shop-data.js"

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setcategoriesMap] = useState({});
    // was necessary to write json data to firebase db
    // useEffect(() => {
    //     addCollectionAndDocs("categories", SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocs();
            // console.log(categoryMap);
            setcategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, [])
    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}