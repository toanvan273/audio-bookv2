import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
.customer-think{
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    border: 1px solid rgb(174, 174, 174) !important;
    background-color: rgba(152, 152, 152, 0.17) !important;
    padding: 10px;
    box-sizing: border-box;
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
}
 .icon-customer{
    width: 300px;
    overflow: hidden;
    border-radius: 100%;
    img{
        width:100%;
    }
 }  

`
class App extends Component {

    render() {
        const { people, content, image } = this.props
        return (
            <Bound>
                <div className='icon-customer'>
                    <img src={image} alt='image' />
                </div>
                <div className='customer-think'>
                    <h3>{people}</h3>
                    <p className='tic'>{content}</p>
                </div>

            </Bound>
        );
    }
}

export default App;
