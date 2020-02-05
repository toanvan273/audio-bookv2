import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        justify-content: center;
        align-items: center;
       .trick{
            padding: 10px 30px;
            cursor: pointer;
            margin-top: 20px;
            display: flex;
            display: -webkit-flex;
            display: -moz-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #fecb27;
            text-transform: uppercase;
            color: #ffd299;
            border-width: 0px;
            border-radius: 100px;
            font-size: 20px;
            font-weight: 700;
            background-image: radial-gradient(circle at center,#dd0d0d 0%,#9b1f1f 100%)!important;
            &:hover{
                box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.75);
            }
            @media (max-width:960px){
                font-size: 16px;
            }
       }
       /* @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){ 
            display: flex;
            display: -webkit-flex;
            display: -moz-flex;
            justify-content: center;
            align-items: center;
            .trick{
                color: #fff;
                text-transform: uppercase;
                width: 90%;
                border-radius: 10px;
                cursor: pointer;
                margin-top: 20px;
                display: flex;
                display: -webkit-flex;
                display: -moz-flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                padding: 10px;
            }
        } */
`
class Iwant extends Component {

    render() {
        return (
            <Bound onClick={()=>{this.props.toBottom()}}>
                <div className='trick' >
                <p>Tôi muốn sở hữu USB</p>
                <b>(Chỉ còn duy nhất 29 USB)</b>
                </div>
               
            </Bound>
        );
    }
}

export default Iwant;
