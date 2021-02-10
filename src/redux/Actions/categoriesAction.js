import { FETCH_CATEGORIES, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from "../Types/reduxTypes"

const fetchCategory = () => {
    return{
        type: FETCH_CATEGORIES
    }
}

const fetchSuccess = (data) => {
    return{
        type: FETCH_CATEGORIES_SUCCESS,
        payload: data
    }
}


const fetchFailure = (error) => {
    return{
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}


export{fetchCategory, fetchFailure, fetchSuccess}
