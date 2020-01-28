import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import User from './User'
import Login from './Login'
const Bound = styled.div`
    display:flex;
    flex-direction:column;
    flex: 1;
`

const Admin = props => {
    const [dataLogin, setDataLogin] = useState(null)
    useEffect(() => {
        const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
        if (dataLogin){
            setDataLogin(dataLogin)
        }
        return ()=>{
            console.log('un mount');
            localStorage.clear()
        }
    }, [])
   
    const getAdmin = data => {
        if (data) {
            localStorage.setItem('dataLogin', JSON.stringify(data))
            setDataLogin(data)
        }
    }
    return (
        <Bound>
            {dataLogin ?
                <User />
                :
                <Login getAdmin={getAdmin} />
            }

        </Bound>
    )
}

export default React.memo(Admin)