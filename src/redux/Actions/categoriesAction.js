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

const fetch = (dispatch) => {
    dispatch(fetchCategory())

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => {
        response = response.json()
    })
    .then(data => {
        dispatch(fetchSuccess(data))
    })
    .catch(err => {
        dispatch(fetchFailure(err))
    });
}

export{fetchCategory, fetchFailure, fetchSuccess}
