import React, { Component } from 'react';
import styled from 'styled-components'
const Bound = styled.div`
    display:flex;
    position: relative;
    .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 10% 90%;
        padding: 5px 0;
        box-sizing: border-box;
    }
    .main{
        .title{
            color:#fff;
        }
        .content-detail{
            color:#fff;
        }
        @media (max-width:960px){
            .title{
                font-size: 12px;
            }
            .content-detail{
                font-size: 11px;
            }
        }
    }
`
class ManBlock extends Component {

    render() {
        const { flat, number, content, title } = this.props
        return (
            <Bound>
                <img src={flat} alt='flat' />
                <div className='content'>
                    <div>{number}</div>
                    <div className='main'>
                        <div className='title'>{title}</div>
                        <div className='content-detail'>{content}</div>
                    </div>
                </div>
            </Bound>
        );
    }
}

export default ManBlock;
