import * as types from '../const/types'

const initState = {
    data: []
}
export default function userReducer(state = initState, action){
    switch(action.type){
        case types.GET_USER:
            return {
                ...state,
                data: action.data
            }
        case types.GET_USER_ERR:
            return {
                ...state,
                err: action.err
            }
        default:
            return state
    }
}