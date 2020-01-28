import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from '../../action/userAction'


import styled from 'styled-components'
const Bound = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
  .title{

  }
  .block{
    border: 1px solid gray;
    border-radius: 5px;
  }
  .table-control{
    .start{
        justify-content: center;
        display: flex;
    }
    .head-table{
        display:grid;
        grid-template-columns: 5% 20% 25% 20% 15% 15%;
        grid-template-rows:max-content;
        margin-bottom:10px;
        .index{
            height: 30px;
            display: flex;
            align-items: center;
        }
    }
    .body-table{
        .item{
            display:grid;
            grid-template-columns: 5% 20% 25% 20% 15% 15%;
            grid-template-rows:max-content;
            margin-bottom:10px;
            .btn-control{
                display: flex;
                justify-content: space-around;
            }
            .call{
                background: green;
                border: none;
                border-radius: 3px;
                color: #fff;
                cursor: default;
            }
            .delete{
                background: red;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                color: #fff
            }
        }
    }
  }
`
const User = props => {
    const [users, setUsers] = useState([])
    const dispatch = useDispatch();
    const { userReducer } = useSelector(state => ({
        userReducer: state.userReducer
    }))
    useEffect(() => {
        dispatch(getUserAction())
    }, []);
    useEffect(() => {

        const { data } = userReducer
        setUsers(data)
    }, [userReducer])
    return (
        <Bound>
            <div className='title'>
                <h1>Danh sách user</h1>
            </div>
            <div className='table-control'>
                <div className='head-table block'>
                    <div className='index start'>STT</div>
                    <div className='index'>Name</div>
                    <div className='index'>Phone</div>
                    <div className='index'>Address</div>
                    <div className='index'>Email</div>
                    <div className='index'></div>
                </div>
                <div className='body-table'>
                    {users && users.map((user, index) => {
                        return <div className='item' key={index}>
                            <div className='index start'>{index + 1}</div>
                            <div className='index'>{user.name}</div>
                            <div className='index'>{user.phone}</div>
                            <div className='index'>{user.address}</div>
                            <div className='index'>{user.email}</div>
                            <div className='index btn-control'>
                                {user.isCall ?
                                    <button className='call'>Called</button>
                                    :
                                    <button className='not'>Not yet</button>
                                }
                                <button className='delete'>Delete</button>
                            </div>
                        </div>
                    })

                    }

                </div>
            </div>
        </Bound>
    )
}

export default React.memo(User)