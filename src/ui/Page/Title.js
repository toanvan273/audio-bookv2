import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
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
`
class App extends Component {

    render() {
        const { number, title } = this.props
        return (
            <Bound>
                <p>{number}</p>
                <h4>{title}</h4>
            </Bound>
        );
    }
}

export default App;
