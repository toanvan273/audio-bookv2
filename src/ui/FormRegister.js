import React, { Component } from 'react';
import styled from 'styled-components'
import bgform from '../img/bgform.jpg'
import usb from '../img/usb.png'
import neu from '../img/n.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faLaptop, faCar } from '@fortawesome/free-solid-svg-icons'
const Bound = styled.div`
    display: flex;
    background: url(${bgform});
    margin: 20px 0;
    @keyframes mymove {
        0% {transform: scaleX(1);}
        50% {transform: scale3d(1.05,1.05,1.05);}
        100% {transform: scaleX(1);}
    }
    @keyframes tada {
        0% {transform: scaleX(1);}
        10% {transform: scale3d(.9,.9,.9) rotate(-3deg);}
        20% {transform: scale3d(.9,.9,.9) rotate(-3deg);}
        30% {transform: scale3d(1.1,1.1,1.1) rotate(3deg);}
        40% {transform: scale3d(1.1,1.1,1.1) rotate(-3deg);}
        50% {transform: scale3d(1.1,1.1,1.1) rotate(3deg);}
        60% {transform: scale3d(1.1,1.1,1.1) rotate(-3deg);}
        70% {transform: scale3d(1.1,1.1,1.1) rotate(3deg);}
        80% {transform: scale3d(1.1,1.1,1.1) rotate(-3deg);}
        90% {transform: scale3d(1.1,1.1,1.1) rotate(3deg);}
        100% {transform: scaleX(1);}
    }
    .grid-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        grid-gap: 20px;
    }
    .image-content{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 100%;
            /* animation: mymove 1s infinite; */
        }
    }
    .form-content{
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        .main-form{
            display: flex;
            flex:1;
            background: #fff;
            border-radius: 20px;
            overflow: hidden;
            padding: 20px 0;
            flex-direction: column;
            .header{
                display: flex;
                align-items: center;
                padding: 0 20px;
                img{
                    /* animation: tada 1s infinite; */
                }
                .title{
                    font-size: 26px;
                    font-weight: 300;
                    color: #2c746d;
                    line-height: 30px;
                    margin-left: 10px;
                }
            }
            .sale-off{
                text-align: center;
                padding: 10px 0;
                background: #fecb27;
                font-size: 26px;
                color: #000;
            }
            .form{
                padding: 0 20px;
                .price{
                    font-size: 3.2rem;
                    text-align: center;
                }
                .old{
                    text-decoration: line-through;
                    color: rgba(0,0,0,.3);
                    font-weight: 300;
                }
                .new{
                    color: #ff7371;
                    font-weight: 700;
                }
                p{
                    color: #6d6d6d;
                    font-weight: 300;
                    text-align: center;
                }
                .icon-book{
                    padding-bottom: 5px;
                    border-bottom: 1px solid #ccc;
                    margin-bottom: 10px;
                   
                }
                .tranfer{
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    span{
                        color: #6d6d6d;
                        font-weight: 600
                    }
                }
            }
        }
    }
   
`
class FormRegister extends Component {

    render() {
        return (
            <Bound >
                <div className='grid-container'>
                    <div className='image-content'>
                        <img src={usb} alt='usb' />
                    </div>
                    <div className='form-content'>
                        <div className='main-form'>
                            <div className='header'>
                                <img src={neu} alt='neu' />
                                <div className='title'>
                                    KỶ NIỆM USB SÁCH NÓI ĐẠT 499,000 LƯỢT ĐĂNG KÝ
                                </div>
                            </div>
                            <h4 className='sale-off'>
                                Giảm giá tới 44%
                            </h4>
                            <div className='form'>
                                <div className='price'>
                                    <div className='old'>899,000đ</div>
                                    <div className='new'>499,000đ</div>
                                </div>
                                <div className='icon-book'>
                                    <p>+ Miễn phí vận chuyển</p>
                                    <p>+ Giao hàng toàn quốc, thanh toán tại nhà</p>
                                </div>
                                <p>Sử dụng được trên nhiều phương tiện</p>
                                <div className='tranfer'>
                                    <p>
                                        <FontAwesomeIcon icon={faLaptop} />
                                       <span> Máy tính</span>
                                        </p>
                                    <p>
                                        <FontAwesomeIcon icon={faMobile} />
                                       <span> Điện thoại</span>
                                        </p>
                                    <p>
                                        <FontAwesomeIcon icon={faCar} />
                                       <span> Xe hơi</span>
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Bound>
        );
    }
}

export default FormRegister;
