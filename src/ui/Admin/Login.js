import React, { useState } from 'react'
import styled from 'styled-components'
const Bound = styled.div`
    h1{
        text-align: center;
    }
    form{
        display: flex;
        flex-direction: column;
        /* width: 500px; */
        align-items: center;
        .input-text{
            width: 300px;
            margin-bottom: 10px;
            box-sizing: border-box;
            padding-left: 10px;
            border-radius: 2px;
            border: 1px solid gray;
            height:30px;
        }
    }
    .noti{
        color:red;
        text-align: center;
        margin-top: 10px;
    }
`
const data = {
    id:'admin',
    pass:'minhtuan'
}
const Login = props => {
    const [admin, setAdmin] = useState({})
    const [noti, setNoti] = useState('')
    const getText = e => {
        let target = e.target
        setAdmin({
            ...admin,
            [target.name]: target.value
        })
    }
    const submitAdmin = e =>{
        e.preventDefault()
        const {id,pass} = admin
        if(id&&pass){
            if(id===data.id&&pass===data.pass){
                props.getAdmin(admin)
            }else{
                setNoti("Sai thông tin đăng nhập.")
            }
        }else{
            setNoti('Vui lòng nhập đủ thông tin đăng nhập')
        }
    }
    return (
        <Bound>
            <h1>Form Login</h1>
            <form onSubmit={submitAdmin}>
                <input className='input-text' type='text' placeholder='Enter your ID' name='id' onChange={getText} />
                <input className='input-text' type='password' placeholder='Enter your Pass' name='pass' onChange={getText} />
                <button type='submit'>ĐĂNG NHẬP</button>
            </form>
            <p className='noti'>{noti}</p>
        </Bound>
    )
}

export default React.memo(Login)