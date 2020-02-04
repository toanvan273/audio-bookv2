import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){ 
            display: flex;
            display: -webkit-flex;
            display: -moz-flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        } */
        audio{
            width: 100%;
        }
        @media (max-width:960px){
            .tic{
            font-size: 14px;
            text-align: justify
            }
            h3{
                font-size: 18px;
                margin-top: 10px;
                font-weight: 600;
                text-align: center;
            }
        }
`
class App extends Component {

    render() {
        const { link, title } = this.props
        return (
            <Bound>
                <h3>{title}</h3>
                <audio controls >
                    <source src={link} type="audio/mpeg" />
                </audio>
            </Bound>
        );
    }
}

export default App;
