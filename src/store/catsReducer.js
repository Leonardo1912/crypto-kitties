import {GetCats} from "../api/api";

const SET_CATS = "SET_CATS"
const LOADING = "LOADING"
const SET_CURRENT_SORT = "SET_CURRENT_SORT"
const SET_DIRECTION_SORT = "SET_DIRECTION_SORT"
const SET_SORTED_CATS = "SET_SORTED_CATS"

let initialState = {
    cats: [],
    page: 1,
    loading: true,
    currentSort: "id",
    directionSort: true
}

const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATS: {
            return {
                ...state,
                cats: [...state.cats, ...action.payload.cats],
                page: action.payload.pagination_info.next_page,
            }
        }
        case LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case SET_CURRENT_SORT: {
            return {
                ...state,
                currentSort: action.payload
            }
        }
        case SET_DIRECTION_SORT: {
            return {
                ...state,
                directionSort: action.payload
            }
        }
        case SET_SORTED_CATS: {
            return {
                ...state,
                cats: action.payload.cats
            }
        }
        default:
            return state
    }
}

export const setCurrentSort = (payload) => ({type: SET_CURRENT_SORT, payload})
export const setDirectionSort = (payload) => ({type: SET_DIRECTION_SORT, payload})

export const getSortedCats = (currentSort, directionSort) => {
    return async (dispatch) => {
        dispatch({type: LOADING, payload: true})
        const data = await GetCats(1, 50, currentSort, directionSort)
        dispatch({type: SET_SORTED_CATS, payload: data})
        dispatch({type: LOADING, payload: false})
    }
}
export const getCats = (page, currentSort, directionSort) => {
    return async (dispatch) => {
        const data = await GetCats(page, 50, currentSort, directionSort)
        dispatch({type: SET_CATS, payload: data})
        dispatch({type: LOADING, payload: false})
    }
}

export default catsReducer