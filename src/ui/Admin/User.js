import React,  { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getUserAction} from '../../action/userAction'


import styled from 'styled-components'
const Bound = styled.div`
    display:flex;
    flex-direction:column;
    background:pink;
    flex:1;
  .title{

  }
  .block{
    border: 1px solid gray;
    border-radius: 5px;
  }
  .table-control{

    .head-table{
        display:grid;
        grid-template-columns: 10% 20% 20% 30% 20%;
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
            grid-template-columns: 10% 20% 20% 30% 20%;
            grid-template-rows:max-content;
            margin-bottom:10px;
        }
    }
  }
`
const User = props => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserAction())
    },[]);
    return (
        <Bound>
            <div className='title'>
                <h1>Danh sách user</h1>
            </div>
            <div className='table-control'>
                <div className='head-table block'>
                    <div className='index'>STT</div>
                    <div className='index'>Name</div>
                    <div className='index'>Phone</div>
                    <div className='index'>Address</div>
                </div>
                <div className='body-table'>
                    <div className='item'>
                        <div className='index'>STT</div>
                        <div className='index'>Name</div>
                        <div className='index'>Phone</div>
                        <div className='index'>Address</div>
                        <div className='index'>Address</div>
                    </div>
                </div>
            </div>
        </Bound>
    )
}

export default React.memo(User)