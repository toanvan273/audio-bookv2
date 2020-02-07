import React, { Component } from 'react';
import styled from 'styled-components'
import img from '../../img/vuong.png'
const cTitle = '#1fc6bf'
const Bound = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    @media (max-width:960px){
        display: flex;
        flex-direction: column;
    }
    .menu-main{
        display: flex;
        justify-content: space-around;
        color: #2c746d;
        border-bottom: 1px solid lightgrey;
        padding-bottom: 5px;
        u{
            font-weight:bold;
        }
        b,u{
            border-radius: 15px;
            height: 20px;
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover{
                background: #00dcfe;
            }
        }
    
    }
    .main-content{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* padding: 90px 0; */
        box-sizing: border-box;
        @media (max-width:960px){
            padding: 10px 0;
        }
       
        .title{
            display: flex;
            flex-direction: column;
            align-items: center;
            /* height: 100px; */
            justify-content: space-around;
            h1,p{
                margin:0;
            }
            h1{
                font-size: 75px;
                color:#ffa500;
                line-height: 1;
            }
            p{
                color: ${cTitle};
                font-size: 24px;
            }
        }
        .content{
            text-align: center;
            margin: 30px 0px;
            color: darkgrey;
        }
        .button-control{
            display: flex;
            justify-content: space-around;
            align-items: center;
            .get-more{
                width: 150px;
                height: 30px;
                border: none;
                border-radius: 20px;
                /* background: #1296a3; */
                color: #fff;
                cursor: pointer;
                background-image: radial-gradient(circle at center,#19d3e5 0%,#1296a3 100%);
            }
            .buy{
                width: 80px;
                height: 30px;
                border-radius: 20px;
                border: none;
                background-image: radial-gradient(circle at center,#dd0d0d 0%,#9b1f1f 100%);
                color: #ffd299;
                cursor: pointer;
            }
        }
    }
    .img-class{
        img{
            width:100%;
        }
    }
`
class Header extends Component {
    onConfirm=key=>{
        // console.log('key: ',key);
        this.props.getKey(key)
    }
    render() {
        return (
            <Bound >
                <div className='main-content'>
                    <div className='menu-main'>
                        <b onClick={()=>this.onConfirm(0)}>Nội dung sách</b>
                        <b onClick={()=>this.onConfirm(1)}>Nghe thử</b>
                        <u onClick={()=>this.onConfirm(2)}>Đặt mua</u>
                    </div>
                    <div className='title'>
                        <h1>80</h1>
                        <p>SÁCH NÓI</p>
                        <p>HAY NHẤT MỌI THỜI ĐẠI</p>
                    </div>
                    <div className='content'>
                        <p>Chiếc USB này chứa những quyển sách vĩ đại về kinh doanh được tạp chí New York Times bình chọn
                            giúp đạt được giấc mơ làm giàu của bất kỳ ai may mắn sở hữu nó!
                        </p>
                    </div>
                    <div className='button-control'>
                        <button className='get-more' onClick={()=>this.onConfirm(3)}>Tìm hiểu thêm</button>
                        <button className='buy' onClick={()=>this.onConfirm(2)}>Đặt mua</button>
                    </div>
                </div>
                <div className='img-class'>
                    <img src={img} alt='img' />
                </div>
            </Bound>
        );
    }
}

export default Header;
