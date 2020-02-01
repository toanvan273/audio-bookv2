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
