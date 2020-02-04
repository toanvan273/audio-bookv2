import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    .mainbound-title{
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        align-items: center;
        .div-number{
            width: 40px;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            color: #2c746d;
            border-bottom: 5px solid #ffca26;
            margin-right: 10px;
        }
        .title{
            font-weight:bold;
            color: #409c93;
        }
    }
    img{
        width: 100%;
        margin-top: 5px;
    }
    
`
class Title extends Component {

    render() {
        const { number, title, book} = this.props
        return (
            <Bound>
                <div className='mainbound-title'>
                    <div className='div-number'>{number}</div>
                    <div className='title'>{title}</div>
                </div>
                <img src={book} alt='bo' />
            </Bound>
        );
    }
}

export default Title;
