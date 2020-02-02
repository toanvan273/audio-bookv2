import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    flex-direction:${props=>props.styleList.re?'column-reverse':'column'} ;
    width: 80%;
    height:200px;
    border-radius: 10px;
    overflow: hidden;
    .body{
        display: flex;
        flex: 1;
        background: ${props=>props.styleList&&props.styleList.bg};
        /* text-align: center; */
        align-items: center;
        justify-content: center;
        padding: 10px;
        color: #fff;
        flex-direction:${props=>props.styleList.re?'column-reverse':'column'} ;
        img{
            width: 30px;
        }
    }
   .title{
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
   }

`
class HeadMan extends Component {

    render() {
        const { title, content, dataStyle } = this.props
        console.log(dataStyle);
        
        return (
            <Bound styleList={dataStyle}>
                <div className='title'>
                    <span>{title}</span>
                </div>
                <div className='body'>
                    <span>{content}</span>
                    <img src={dataStyle.icon&&dataStyle.icon} alt='icon'/>
                </div>
            </Bound>
        );
    }
}

export default HeadMan;
