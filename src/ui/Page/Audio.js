import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        audio{
            width: 100%;
            margin-top: 10px;
        }
        p{
            color: #6d6d6d;
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
                font-family: roboto,sans-serif;
                text-align: center;
                margin-bottom: 0;
            }
        }
`
class App extends Component {

    render() {
        const { link, title, author } = this.props
        return (
            <Bound>
                <h3>{title}</h3>
                <p>{author}</p>
                <audio controls >
                    <source src={link} type="audio/mpeg" />
                </audio>
            </Bound>
        );
    }
}

export default App;
