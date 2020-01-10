import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .title{
        display: flex;
        align-items: center;
        img{
            width: 36px;
            height: 36px;
            margin-right: 10px;
        }
        h3{
            margin: 0;
        }
    }
`
class ItemPolicy extends Component {

    render() {
        const { icon, title, content ,data} = this.props
        return (
            <Bound>
                <div className='title'>
                    <img src={icon} alt='icon' />
                    <h3>{title}</h3>
                </div>
                <div className='content'>
                    {content}
                </div>
                {data &&
                    <div className='datalink'>
                        <p>Fanpage: {data.fan}</p>
                        <p>Hotline: <b>{data.phone}</b></p>
                    </div>
                }
            </Bound>
        );
    }
}

export default ItemPolicy;
