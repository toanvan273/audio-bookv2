import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    flex-direction: ${props=>props.reve?'row-reverse':'row'};
    align-items: center;
    margin-top: 15px;
    @media (max-width:960px){
        flex-direction: column;
    }
.customer-think{
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    border: 1px solid rgb(174, 174, 174) ;
    background-color: rgba(152, 152, 152, 0.17) ;
    padding: 10px;
    box-sizing: border-box;
    margin:  ${props=>props.reve?'0 10px 0 0':'0 0 0 10px'};
    box-shadow: 7px -8px 20px -3px rgba(108,73,153,1);
    .tic{
        font-size: 20px;
        text-align: justify;
    }
    h3{
        margin-top: 5px;
    }
    @media (max-width:960px){
        margin:  10px 0 0 0;
        .tic{
        font-size: 15px;
        }
        h3{
            margin: 0;
            color: #c00000;
        }
    }
}
 .icon-customer{
    width: 300px;
    overflow: hidden;
    border-radius: 100%;
    border: 3px solid #34b7a2;
    background: #34b7a2;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width:100%;
    }
 }  

`
class CustomerThink extends Component {

    render() {
        const { people, content, image , rev} = this.props
        return (
            <Bound reve={rev}>
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

export default CustomerThink;
