import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    b{
        font-size: 20px;
        text-align: center;
        color: #fff;
        border-bottom: 4px solid rgb(169, 20, 0);
        border-radius: 10px;
        text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
        font-weight: bold;
        background-image: none;
        background-color: rgb(210, 27, 8);
        padding: 14px 35px !important;
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
class App extends Component {

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

export default App;
