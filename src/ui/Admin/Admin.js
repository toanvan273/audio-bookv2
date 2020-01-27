import React,  { useState, useEffect } from 'react'
import styled from 'styled-components'
import User from './User'
const Bound = styled.div`
    display:flex;
    flex-direction:column;
    flex: 1;
`
const Admin = props => {
    return (
        <Bound>
           <User />
        </Bound>
    )
}

export default React.memo(Admin)