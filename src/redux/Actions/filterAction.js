import FILTER_CATEGORIES from "../Types/filterTypes"

const filterCategories = (categories) => {
    return{
        type: FILTER_CATEGORIES,
        payload: categories
    }
}

export default filterCategories