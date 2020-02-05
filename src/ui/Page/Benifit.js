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
    .benifit-title{
        display: flex;
        flex-direction: column;
        display: -webkit-flex;
        display: -moz-flex;
        justify-content: center;
        align-items: center;
        img{
            width: 90px;
        }
    }
    .tic{
        color: #6d6d6d;
        font-size: 18px;
        text-align: justify
    }
    h3{
        margin-top: 5px;
        color: #205651;
        font-weight: 400;
        font-size: 20px;
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
class Benifit extends Component {

    render() {
        const { title, content, icon } = this.props
        return (
            <Bound>
                <div className='benifit-title'>
                    {icon &&
                        <img src={icon} alt='icon' />
                    }

                    <h3>{title}</h3>
                </div>

                {content &&
                    <p className='tic'>{content}</p>
                }

            </Bound>
        );
    }
}

export default Benifit;
