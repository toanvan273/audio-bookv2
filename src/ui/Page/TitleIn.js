import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    b{
        color: #205651;
        font-weight: 700;
        font-size: 30px;
        font-style: italic;
        @media (max-width:960px){
            font-size: 26px;
        }
    }
    h3{
        margin-top: 5px;
        /* font-style: italic; */
        font-size: 18px;
        color: #46a99f;
        font-weight: 300;
        text-align: center;
    }
    @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){ 
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
        b{
            font-size: 20px;
            font-style: italic;
            @media (max-width:960px){
            font-size: 18px;
            }
        }
        h3{
            margin-top: 5px;
            font-style: italic;
        }
    }
`
class App extends Component {

    render() {
        const { title, sub } = this.props
        return (
            <Bound>
                <b>{title}</b>
                <h3>{sub}</h3>
            </Bound>
        );
    }
}

export default App;
