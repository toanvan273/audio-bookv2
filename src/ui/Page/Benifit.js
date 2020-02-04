import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
    .tic{
        font-size: 20px;
        text-align: justify
    }
    h3{
        margin-top: 5px;
        font-weight: 900;
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
        const { title, content } = this.props
        return (
            <Bound>
                <h3>{title}</h3>
                {content &&
                    <p className='tic'>{content}</p>
                }

            </Bound>
        );
    }
}

export default App;
