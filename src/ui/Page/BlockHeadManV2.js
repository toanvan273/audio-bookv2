import React, { Component } from 'react';
import styled from 'styled-components'
// import bg from '../../img/pen.png'
// import bg from '../../img/phone5.png'
import mobile from '../../img/coreformoblie.png'
import laptop from '../../img/coreforlaptop.png'
const Bound = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    img{
        width:100%;
    }
    @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        img{
            width:100%;
        }
    }
    @supports (overflow:-webkit-marquee) and (justify-content:inherit){
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        img{
            width:100%;
        }                  
    }
    @media screen and (-webkit-min-device-pixel-ratio:0) and (min-color-index:0){
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        img{
            width:100%;
        }
    }
    @supports (-webkit-text-size-adjust:none) and (not (-ms-ime-align:auto)) and (not (-moz-appearance:none)) {
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        img{
            width:100%;
        }
    }
`
class BlockHeadManV2 extends Component {
    state={
        bg:''
    }
    componentDidMount(){
        this.getResize()
        window.addEventListener('resize',this.getResize)
    }
    getResize=()=>{
        let width = window.innerWidth
        // console.log('width',width);
        if(width>960){
            this.setState({
                bg: laptop
            })
        }else{
            this.setState({
                bg:mobile
            })
        }
    }
    render() {
        const {bg} = this.state
        return (
            <Bound id='flat-bound'>
                <img src={bg} alt='alt' />
            </Bound>
        );
    }
}

export default BlockHeadManV2;
