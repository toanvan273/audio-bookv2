import React, { Component } from 'react';
import styled from 'styled-components'
import bgform from '../../img/bgform.jpg'
import usb from '../../img/usb.png'
import neu from '../../img/n.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faLaptop, faCar } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { addUserAction } from '../../action/userAction'
const Bound = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    background: url(${bgform});
    margin: 20px 0;
    @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){ 
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        background: url(${bgform});
        margin: 20px 0;
        .form-content{
            display: flex;
            display: -webkit-flex;
            display: -moz-flex;
            padding: 20px;
            box-sizing: border-box;
            @media (max-width:960px){
                padding: 10px;
            }
            .main-form{
                display: flex;
                display: -webkit-flex;
                display: -moz-flex;
                flex:1;
                background: #fff;
                border-radius: 20px;
                overflow: hidden;
                padding: 20px 0;
                flex-direction: column;
                @media (max-width:960px){
                    padding: 10px 0;
                }
                .header{
                    display: flex;
                    display: -webkit-flex;
                    display: -moz-flex;
                    align-items: center;
                    padding: 0 20px;
                    @media (max-width:960px){
                        display: none;
                    }
                    img{
                        animation: tada 1s infinite; 
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
                    color: #000;
                    background-image: radial-gradient(circle at center,#dd0d0d 0%,#9b1f1f 100%)!important;
                    color: #fecb27;
                    font-size: 26px;
                    @media (max-width:960px){
                        margin: 0px;
                    }
                }
                .form{
                    padding: 0 20px;
                    @media (max-width:960px){
                        padding: 0 10px;
                    }
                    .price{
                        font-size: 3.2rem;
                        text-align: center;
                        @media (max-width:960px){
                            font-size: 34px;
                        }
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
                    h4{
                        color: #6d6d6d;
                        font-weight: 300;
                        font-size: 20px;
                        font-family: serif;
                        text-align: center;
                        @media (max-width:960px){
                            margin: 15px 0;
                        }
                        span{
                            font-weight: 600;
                            color: #836d6d;
                        }
                    }
                    form{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        input{
                            width: 100%;
                            border-radius: 25px;
                            box-sizing: border-box;
                            padding-left: 20px;
                            border: 1px solid gray;
                            height: 45px;
                            margin-bottom: 10px;
                            font-size: 18px;
                            outline: none;
                        }
                        button{
                            color: #000;
                            background-color: #fecb27;
                            border: none;
                            border-radius: 20px;
                            height: 40px;
                            width: 80%;
                            cursor: pointer;
                            font-weight: 700;
                        }
                        @media (max-width:960px){
                            h4{
                                display:none;
                            }
                        }
                    }
                    .submited{
                        h2{
                            color: #6d6d6d;
                            font-weight: 600;
                            text-align: center;
                            font-size: 28px;
                        }
                    }
                }
            }
        }
    }
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
        @media (max-width:960px){
            display: flex;
            display: -webkit-flex;
            display: -moz-flex;
        }
    }
    .image-content{
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        align-items: center;
        justify-content: center;
        @media (max-width:960px){
            display: none;
        }
        img{
            width: 100%;
            animation: mymove 1s infinite;
        }
    }
    .form-content{
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        padding: 20px;
        box-sizing: border-box;
        @media (max-width:960px){
            padding: 10px;
        }
        .main-form{
            display: flex;
            display: -webkit-flex;
            display: -moz-flex;
            flex:1;
            background: #fff;
            border-radius: 20px;
            overflow: hidden;
            padding: 20px 0;
            flex-direction: column;
            @media (max-width:960px){
                padding: 10px 0;
            }
            .header{
                display: flex;
                display: -webkit-flex;
                display: -moz-flex;
                align-items: center;
                padding: 0 20px;
                @media (max-width:960px){
                    display: none;
                }
                img{
                    animation: tada 1s infinite; 
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
                font-size: 26px;
                background-image: radial-gradient(circle at center,#dd0d0d 0%,#9b1f1f 100%)!important;
                color: #fecb27;
                @media (max-width:960px){
                    margin: 0px;
                }
            }
            .form{
                padding: 0 20px;
                @media (max-width:960px){
                    padding: 0 10px;
                }
                .price{
                    font-size: 3.2rem;
                    text-align: center;
                    @media (max-width:960px){
                        font-size: 34px;
                    }
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
                h4{
                    color: #6d6d6d;
                    font-weight: 300;
                    font-size: 20px;
                    font-family: serif;
                    text-align: center;
                    @media (max-width:960px){
                        margin: 15px 0;
                    }
                    span{
                        font-weight: 600;
                        color: #836d6d;
                    }
                }
                form{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    input{
                        width: 100%;
                        border-radius: 25px;
                        box-sizing: border-box;
                        padding-left: 20px;
                        border: 1px solid gray;
                        height: 45px;
                        margin-bottom: 10px;
                        font-size: 18px;
                        outline: none;
                    }
                    button{
                        background: #fecb27;
                        text-transform: uppercase;
                        color: #ffd299;
                        border-width: 0px;
                        border-radius: 100px;
                        font-size: 20px;
                        font-weight: 700;
                        background-image: radial-gradient(circle at center,#dd0d0d 0%,#9b1f1f 100%)!important;
                        border: none;
                        height: 40px;
                        width: 80%;
                        cursor: pointer;
                    }
                    @media (max-width:960px){
                        h4{
                            display:none;
                        }
                    }
                }
                .submited{
                    h2{
                        color: #6d6d6d;
                        font-weight: 600;
                        text-align: center;
                        font-size: 28px;
                    }
                }
            }
        }
    }
   
`

class FormRegister extends Component {
    state = {
        isSubmit: false,
        noti: null
    }
    getName = e => {
        this.setState({
            name: e.target.value
        })
    }
    getPhone = e => {
        this.setState({
            phone: e.target.value
        })
    }
    getAdd = e => {
        this.setState({
            add: e.target.value
        })
    }
    onFormSubmit = async e => {
        e.preventDefault()
        const { name, phone, add } = this.state
        const data = { name, phone, address: add, email: null }
        // console.log('data', data);
        if (name && phone && add) {
            await this.props.addUser(data)
            await this.props.getSubmit(true)
        } else {
            // console.log(0);
            this.setState({
                noti: 'Vui lòng nhập đủ các trường !'
            })
        }


    }
    render() {
        const { isSubmit, noti } = this.state
        // console.log('render :', noti, this.state);

        return (
            <Bound id="content-form">
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
                                {!isSubmit ?
                                    <React.Fragment>
                                        <h4>Chỉ cần để lại thông tin, sẽ có nhân viên tư vấn gọi điện lại cho bạn để xác nhận đơn hàng(trong giờ hành chính)</h4>
                                        <form onSubmit={this.onFormSubmit} >
                                            <input
                                                onChange={this.getName}
                                                type="text" placeholder='Họ và tên' />
                                            <input
                                                onChange={this.getPhone}
                                                type='text' placeholder='Số điện thoại' />
                                            <input
                                                onChange={this.getAdd}
                                                type='text' placeholder='Địa chỉ nhận USB' />
                                            {noti &&
                                                <p style={{ color: 'red', marginBottom: '5px' }} >{noti}</p>
                                            }
                                            <button type='submit'>ĐẶT MUA USB</button>
                                        </form>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <div className='submited'>
                                            <h2>Cám ơn bạn đã để lại thông tin.</h2>
                                        </div>
                                    </React.Fragment>

                                }

                            </div>
                        </div>
                    </div>
                </div>

            </Bound>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    addUser: (data) => dispatch(addUserAction(data))
})
export default connect(null, mapDispatchToProps)(FormRegister);
