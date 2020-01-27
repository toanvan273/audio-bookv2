import React, { Component } from 'react';
import styled from 'styled-components'
import thumnal from '../../img/coverimg.jpg'
import ic_play from '../../img/555.png'
const Bound = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        position: relative;
        .main-video{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            video{

            }
            img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: auto;
            }
           
        }
       .icon-play{
            width: 30px;
            height: 30px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            img{
                width: 100%;
                cursor: pointer;
            }
       }
`
class App extends Component {
    state = {
        isShowPlay: true
    }
    onPlayVideo=()=>{
        // console.log(9);/
       let videoBound = document.getElementById('main-video')
       if(videoBound){
        //    console.log(0, videoBound);
           this.setState({
               isShowPlay:false
           },()=>{
               videoBound.play()
           })
       }
    }
    render() {
        const { video } = this.props
        const { isShowPlay } = this.state
        return (
            <Bound>
                <div className='main-video'>
                    <video width={'100%'} controls id='main-video'>
                        <source src={video} type="video/mp4" />
                    </video>
                    {isShowPlay &&
                        <img src={thumnal} alt='thumnal' />
                    }

                </div>
                {isShowPlay &&
                    <div className='icon-play' onClick={this.onPlayVideo}>
                        <img src={ic_play} alt='play' />
                    </div>
                }

            </Bound>
        );
    }
}

export default App;
