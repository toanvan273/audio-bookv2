import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        justify-content: center;
        align-items: center;
       .trick{
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
            background: #fecb27;
            text-transform: uppercase;
            color: #fff;

            width: 100%;
            padding: 10px;
            border-bottom: 4px solid rgb(197, 144, 0);
            border-radius: 10px;
            text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
            border-top-color: rgb(255, 241, 219);
            border-right-color: rgb(255, 241, 219);
            border-left-color: rgb(255, 241, 219);
            padding: 12px 15px;
            font-weight: bold;
            background-color: rgb(238, 168, 0) !important;
       }
       @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){ 
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
                /* background: #fecb27; */
                width: 100%;
                padding: 10px;
            }
        }
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
