import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    /* flex-direction: column; */
    /* justify-content: center;
    align-items: center; */
    align-items: center;
    .div-number{
        width: 40px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color: #2c746d;
        border-bottom: 5px solid #ffca26;
        margin-right: 10px;
    }
   .title{
       font-weight:bold;
       color: #409c93;
   }
    /* @media only screen and (max-width: 600px) {
        margin-top: 10px;
        border-top: 1px solid #dbd9d9;
        padding-top: 8px;
        h4{
            margin-top: 5px;
            margin-bottom: 10px;
        }
    }
    @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){ 
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 600px) {
            margin-top: 10px;
            border-top: 1px solid #dbd9d9;
            padding-top: 8px;
            h4{
                margin-top: 5px;
                margin-bottom: 10px;
            }
        }
    } */
`
class Title extends Component {

    render() {
        const { number, title } = this.props
        return (
            <Bound>
                <div className='div-number'>{number}</div>
                <div className='title'>{title}</div>
            </Bound>
        );
    }
}

export default Title;
