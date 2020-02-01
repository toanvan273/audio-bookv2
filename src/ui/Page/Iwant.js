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
        color: #000000;
        border: none;
        width: 100%;
        padding: 10px;
       }
       
`
class App extends Component {

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

export default App;
