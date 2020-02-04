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
    .tic{
        font-size: 20px;
        text-align: justify;
    }
    h3{
        margin-top: 5px;
    }
    @media (max-width:960px){
        .tic{
        font-size: 14px;
        text-align: justify
        }
        h3{
            margin-top: 0px;
            font-weight: 600;
        }
    }

`
class App extends Component {

    render() {
        const { people, content } = this.props
        return (
            <Bound>
                <h3>{people}</h3>
                <p className='tic'>{content}</p>
            </Bound>
        );
    }
}

export default App;
