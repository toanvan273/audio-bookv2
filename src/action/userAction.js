import Axios from 'axios'
import { host } from '../host'
import * as types from '../const/types'
const apiUser = host 
export const getUserAction = () => async dispatch => {
    try {
        const res = await Axios.get(apiUser)
        const {data} = res
        console.log(res);
        dispatch({
            type: types.GET_USER,
            data
        })
       
    } catch (err) {
        console.log(err);
        dispatch({
            type: types.GET_USER_ERR,
            err
        })
    }
}
export const addNewUserAction = (data) => async dispatch => {
    const dataQuery = {
        name:data.name,
        phone:data.phone,
        address:data.address,
        email:data.email
    }
    try{
        const res = await Axios.post(apiUser,dataQuery)
        console.log(res);
        const {data} = res
        dispatch({
            type:types.ADD_USER,
            data
        })
        
    }catch(err){
        console.log(err);
        dispatch({
            type:types.ADD_USER_ERR,
            err
        })
    }
}