import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    img{
        width: 100%;
        /* border: 5px solid #aa721a; */
    }
    @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){ 
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        img{
            width: 100%;
            /* border: 5px solid #aa721a; */
        }
    }
`
class ImageSingle extends Component {

    render() {
        const { imgLink } = this.props
        return (
            <Bound>
                <img src={imgLink} alt='alt' />
            </Bound>
        );
    }
}

export default ImageSingle;
