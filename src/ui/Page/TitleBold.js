import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:10px;
    b{
        font-size: 20px;
        text-align: center;
        color: #fff;
        border-radius: 10px;
        text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
        font-weight: bold;
        padding: 14px 35px ;
        color: #ffd299;
        background-image: radial-gradient(circle at center,#dd0d0d 0%,#9b1f1f 100%)!important;
        text-transform: uppercase;
        @media (max-width:960px){
        font-size: 18px;
        }
    }
    h3{
        margin-top: 5px;
    }
    @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){ 
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        b{
            font-size: 20px;
            @media (max-width:960px){
            font-size: 18px;
            }
        }
        h3{
            margin-top: 5px;
        }
    }
`
class TitleBold extends Component {

    render() {
        const { title, sub } = this.props
        return (
            <Bound>
                <b>{title}</b>
                {sub &&
                    <h3>{sub}</h3>
                }

            </Bound>
        );
    }
}

export default TitleBold;
