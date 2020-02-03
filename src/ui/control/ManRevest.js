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
        grid-template-columns: 90% 10% ;
        padding: 5px 0;
        box-sizing: border-box;
    }
    .main{
        .title{
            padding-left: 15%;
            color:#fff;
        }
        .content-detail{
            padding-left: 15%;
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
class ManRevest extends Component {

    render() {
        // const {flat} = this.props
        const { flat, number, content, title } = this.props

        return (
            <Bound>
                <img src={flat} />
                <div className='content'>
                    <div className='main'>
                        <div className='title'>{title}</div>
                        <div className='content-detail'>{content}</div>
                    </div>
                    <div>{number}</div>

                </div>
            </Bound>
        );
    }
}

export default ManRevest;
