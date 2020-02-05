import React, { Component } from 'react';
import styled from 'styled-components'
import * as type from '../data'
// ui
import Title from './Page/Title'
import TitleBold from './Page/TitleBold'
import TitleIn from './Page/TitleIn'
import Audio from './Page/Audio'
import CustomerThink from './Page/CustomerThink'
import Benifit from './Page/Benifit'
import ImageSigle from './Page/ImageSingle'
import Iwant from './Page/Iwant'
import CountDown from './Page/CountDown'
import VideoControl from './Page/VideoControl'
import FormRegister from './Page/FormRegister'
import ProductPolicy from './Page/ProductPolicy'
import Header from './Page/Header'
// import BlockHeadMan from './Page/BlockHeadMan'
import BlockHeadManV2 from './Page/BlockHeadManV2'
// img
// import tieude from '../img/tieude.png'
import ic_6 from '../img/6.jpg'
import ic_4 from '../img/4.png'

import ic_22 from '../img/22.jpg'
import ic_33 from '../img/33.png'
import ic_a from '../img/a.jpg'
import ic_77 from '../img/77.jpg'
import kinhdoanh from '../img/book/18kinhdoanh.jpg'
import marketing from '../img/book/8marketing.jpg'
import taichinh from '../img/book/19taichinh.jpg'
import quantri from '../img/book/14quantri.jpg'
import loikhuyen from '../img/book/16loikhuyen.jpg'
import camhung from '../img/book/7camhung.jpg'
import tien from '../img/book/tien.jpg'
import nam from '../img/book/cuong.jpg'
// img benifit
import gr from '../img/benifit/05gr.png'
import khongbuonngu from '../img/benifit/khongbuonngu.png'
import nguoithanhdatkhuyendoc from '../img/benifit/nguoithanhdatkhuyendoc.png'
import taptrunghondocsachgiay from '../img/benifit/taptrunghondocsachgiay.png'
import thoigianranhroi from '../img/benifit/thoigianranhroi.png'
import tietkiemchiphi from '../img/benifit/tietkiemchiphi.png'

const video1 = 'video/success.mp4'
const Bound = styled.div`
    display:flex;
    display: -webkit-flex;
    display: -moz-flex;
    flex-direction:column;
    margin: 0 auto;
    overflow: hidden;
    .block-special-text{
        position: relative;
        height: 100px;
        display: flex;
        .special-text{
            font-family: DancingScript;
            color: rgb(223, 242, 246) !important;
            background: #000;
            flex:1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 34px;
            position: absolute;
            top: 0;
            left: -1024px;
            width: 100%;
            height: 100%;
            transition: all 0.5s;
            p{
                text-shadow: rgb(255, 255, 255) 0px 0px 4px;
            }
        }
    }
  
    /* // */
    @media (max-width:960px){
        box-sizing: border-box;
        padding: 0 5px;
        overflow-y: auto;
        h1{
        font-size: 20px;
        text-align: center;
        }
    }
    .main-title{
        img{
            width:100%;
        }
    }
    .title-video{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div{
            font-size: 15px;
            color: #00a651;
        }
        h4{
            margin: 0;
            color: #0a4f37;
        }
    }
    .header, .block{
        ul{
            line-height: 1.7;
            margin: 0;
            padding: 0;
            @media (max-width:960px){
                margin: 0;
                padding-left: 0px;
            }
        }
        li:nth-child(even) {background: #f2f2f2}
        li:nth-child(odd) {background: #FFF}
        li{
            list-style-type: none;
        }
        li div{
            font-size: 15px;
        }
    }
    .what-in{
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-align: justify;
        color: #0a4f54;
        @media (max-width:960px){
          font-size: 18px;
          text-align: center;
        }   
    }
    .line{
        border-top: 1px solid #dbd9d9;
        margin: 10px 0;
    }
    .footer{
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        flex-direction: column;
        align-items: center;
        background: #f2f2f2;
        border: none;
        padding: 0 10px;
        text-align: center;
        border-radius: 20px;
        @media (max-width:960px){
            padding: 10px;
          p{
              font-size:18px;
          }
          h4, h5{
              margin: 5px 0;
          }
          
        }
    }
    .main-title{
        font-size: 24px;
        font-weight: 900;
        font-family: inherit;
        text-transform: uppercase;
        line-height: 30px;
        text-align: justify;
        @media (max-width:960px){
            font-size: 22px;
            line-height: 25px;
            letter-spacing: 1px;
        }
    }
    &.thank{
        align-items: center;
        p,h3{
            text-align:center;
        }
    }
    .block-whatin-usb{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        @media (max-width:960px){
            display: flex;
            flex-direction: column;
        }
        .block-item{
            .block{
                height: 65vh;
                overflow: auto;
                @media (max-width:960px){
                    height: fit-content;
                }
                &::-webkit-scrollbar {
                width: 10px;
                }
                &::-webkit-scrollbar-track {
                background: #f1f1f1; 
                border-radius: 10px;
                }
                &::-webkit-scrollbar-thumb {
                background: #888; 
                border-radius: 10px;
                }
              
            }
        }
    }
`
class AdvertiseScreen extends Component {
    state = {
        isSubmit: false
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScrollTo)
    }
    onScrollTo=event=>{
        var elmnt = document.getElementById("special-text")
        let num = elmnt.getBoundingClientRect().top;
        if(num<200){
            elmnt.style.left=0
            window.removeEventListener('scroll',this.onScrollTo)
        }
        // console.log(num);
        // console.log(window.scrollY);
        
    }
    getSubmit = () => {
        this.setState({
            isSubmit: true
        })
    }
    toBottom = () => {
        var elmnt = document.getElementById("content-form");
        elmnt.scrollIntoView();
    }
    getKeyScroll = key => {
        const mainContent = document.getElementById('flat-bound')
        const audioBound = document.getElementById('main-audio')
        const toBuy = document.getElementById("content-form");
        let videoBound = document.getElementById('main-video')
        switch (key) {
            case 0:
                mainContent.scrollIntoView();
                break;
            case 1:
                audioBound.scrollIntoView();
                break;
            case 2:
                toBuy.scrollIntoView();
                break;
            case 3:
                videoBound.scrollIntoView();
                break;
            default:
                break;
        }
    }
    render() {
        const { isSubmit } = this.state
        return (
            <React.Fragment>
                {isSubmit ?
                    <Bound className='thank'>
                        <h2>CẢM ƠN BẠN ĐÃ ĐẶT MUA USB SÁCH NÓI</h2>
                        <h2>Chúng tôi sẽ GỌI ĐIỆN XÁC NHẬN và GIAO USB <span> đến địa chỉ của bạn</span>.</h2>
                        <h2>Bạn nhớ <span> ĐỂ Ý ĐIỆN THOẠI </span> nhé!</h2>
                        <p>Chúc bạn ngày mới vui vẻ</p>
                        <h2>THỜI ĐIỂM BẠN RA QUYẾT ĐỊNH LÀ LÚC VẬN MỆNH CỦA BẠN ĐƯỢC HÌNH THÀNH</h2>
                    </Bound>
                    :
                    <Bound>
                        <div className='header'>
                            <Header getKey={this.getKeyScroll} />
                            <h3 className='what-in'>5 GIÁ TRỊ TỪ BỘ SÁCH NÀY</h3>
                            <BlockHeadManV2 />
                        </div>
                        <div className='line'></div>
                        <div className='title-video'>
                            <div>Lời khuyên của nhà đầu tư vĩ đại nhất thế giới</div>
                            <h4>Warren Buffett</h4>
                        </div>
                        <VideoControl video={video1} />
                        <h3 className='what-in'>CÓ GÌ TRONG USB SÁCH NÓI NÀY ?</h3>
                        <div className='block-whatin-usb'>
                            <div className='block-item'>
                                <Title number={18}
                                    title={"CUỐN SÁCH VỀ TƯ DUY KINH DOANH "}
                                    book={kinhdoanh}
                                />
                                <div className='line'></div>
                                <div className='block'>
                                    <ul>
                                        {type.bussiness.map((item, index) => {
                                            return <li key={index}>
                                                <div>{index + 1}. {item.book} <span>{item.author}</span></div>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='block-item'>
                                <Title number={19}
                                    title={"SÁCH NÓI VỀ CHỦ ĐỀ TÀI CHÍNH"}
                                    book={taichinh}
                                />
                                <div className='line'></div>
                                <div className='block'>
                                    <ul>
                                        {type.final.map((item, index) => {
                                            return <li key={index}>
                                                <div>{index + 1}. {item.book} <span>{item.author}</span></div>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='block-item'>
                                <Title number={8}
                                    title={"SÁCH NÓI VỀ MARKETING & SALES"}
                                    book={marketing}
                                />
                                <div className='line'></div>
                                <div className='block'>
                                    <ul>
                                        {type.marheting.map((item, index) => {
                                            return <li key={index}>
                                                <div>{index + 1}. {item.book} <span>{item.author}</span></div>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='block-item'>
                                <Title number={13}
                                    title={"SÁCH NÓI VỀ QUẢN TRỊ HAY NHẤT"}
                                    book={quantri}
                                />
                                <div className='line'></div>
                                <div className='block'>
                                    <ul>
                                        {type.manager.map((item, index) => {
                                            return <li key={index}>
                                                <div>{index + 1}. {item.book} <span>{item.author}</span></div>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='block-item'>
                                <Title number={16}
                                    title={"SÁCH LỜI KHUYÊN KINH DOANH​"}
                                    book={loikhuyen}
                                />
                                <div className='line'></div>
                                <div className='block'>
                                    <ul>
                                        {type.advanceBussiness.map((item, index) => {
                                            return <li key={index}>
                                                <div>{index + 1}. {item.book} <span>{item.author}</span></div>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='block-item'>
                                <Title number={7}
                                    title={"CÂU CHUYỆN KINH DOANH CẢM HỨNG​"}
                                    book={camhung}
                                />
                                <div className='line'></div>
                                <div className='block'>
                                    <ul>
                                        {type.emotion.map((item, index) => {
                                            return <li key={index}>
                                                <div>{index + 1}. {item.book} <span>{item.author}</span></div>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Iwant toBottom={this.toBottom} />
                        <CountDown time={5400} />
                        <TitleBold
                            title={'Hãy gọi: 033 213 8583 để mua USB ngay!!!'}
                            sub={"NGHE THỬ SÁCH NÓI "} />
                     
                        <div id='main-audio'></div>
                        <Audio
                            title={"CHA GIÀU - CHA NGHÈO"}
                            link={'https://168trends.com/wp-content/uploads/2019/09/USB-Sách-Nói-Tủ-sách-Kinh-doanh-làm-giàu-hay-nhất-mọi-thời-đại-Usb-sách-nói.mp3'}
                        />
                        <Audio
                            title={"NGƯỜI GIÀU CÓ NHẤT THÀNH BABYLON"}
                            link={'https://168trends.com/wp-content/uploads/2019/09/USB-Sách-Nói-Tủ-sách-Kinh-doanh-làm-giàu-hay-nhất-mọi-thời-đại-Usb-sách-nói_2.mp3'}
                        />
                        <TitleIn
                            title={'Cảm nhận khách hàng'}
                            sub={'Ý kiến khách hàng đã mua và nghe USB sách nói của chúng tôi'}
                        />
                        <CustomerThink
                            rev={true}
                            image={nam}
                            people={'Anh Đặng Văn Nam'}
                            content={'Tôi rất thích đọc sách, mỗi ngày nhưng công việc quá nhiều tôi chưa thể sắp xếp được thời gian đọc sách của mình. Thời gian rảnh của tôi là lúc tập thể dục vào buổi sáng sớm, bởi tôi quan niệm nếu không có sức khỏe thì chẳng làm được gì. Cuối cùng tôi cũng tìm ra giải pháp để có thể đọc sách mỗi ngày, Thậm chí tôi còn tăng nhiều lần khả năng đọc sách của mình, dó chính là thay bằng đọc tôi chuyển sang nghe Audio book lúc tập thể dục nó đúng là giải pháp tuyệt vời đối với tôi'}
                        />
                        <CustomerThink
                            image={tien}
                            people={'Chị Thủy Tiên'}
                            content={'Trước đây mỗi lần ra quyết định trong công việc kinh doanh của mình, tôi đều rất trần trừ, phải so đo tính toán rất nhiều lần rồi mới ra quyết định. Từ khi nghe audio book tôi đã tích lũy được rất nhiều kinh nghiệm và áp dụng được nhiều trong công việc kinh doanh. Đặc biệt sự quyết đoán trong công việc của tôi đã được cải thiện rõ rệt.'}
                        />
                   
                        <h3 className='what-in'>TẠI SAO CHỌN USB SÁCH NÓI KINH DOANH - LÀM GIÀU ?</h3>
                        <div className='block-whatin-usb'>
                            <div className='block-item'>
                                <Benifit
                                    icon={thoigianranhroi}
                                    title={'TẬN DỤNG THỜI GIAN RẢNH RỖI'}
                                    content={'Hàng ngày, chúng ta có ít nhất 2 giờ đồng hồ cho những khoảng thời gian “chết” và lãng phí: khi di chuyển, khi ngồi rảnh, khi chờ đi ngủ, khi thức dậy. Nếu tranh thủ nghe ngấm những bài học thành công, bạn đã hơn hẳn ít nhất 90% số người xung quanh và có nhiều hơn 80% cơ hội thành đạt vượt xa họ'}
                                />
                            </div>
                            <div className='block-item'>
                                <Benifit
                                    icon={nguoithanhdatkhuyendoc}
                                    title={' NGƯỜI THÀNH ĐẠT KHUYÊN ĐỌC'}
                                    content={'Bộ sách được viết bởi những người thành công nhất thế giới như Dale Carnegie, Robert Kyosaki, Anthony Robbins , được những người thành đạt và giàu có nhất thế giới như Bill Gates, JackMa… khuyên đọc. Nghe những người tài giỏi và giàu có nhất chia sẻ hàng ngày giúp bạn mở rộng nhận thức, thay đổi tư duy, tay trắng làm nên…'}
                                />
                            </div>
                            <div className='block-item'>
                                <Benifit
                                    icon={taptrunghondocsachgiay}
                                    title={'TẬP TRUNG HƠN ĐỌC SÁCH GIẤY'}
                                    content={'Khi đeo tai nghe, ta thường tập trung hoàn toàn.Do vậy sẽ không bị xao nhãng, buồn ngủ, mệt mỏi như khi đọc sách'}
                                />
                            </div>
                            <div className='block-item'>
                                <Benifit
                                    icon={khongbuonngu}
                                    title={'TIẾT KIỆM THỜI GIAN'}
                                    content={'Bạn đang quá bận rộn hàng ngày và không có đủ thời gian thì đây là giải pháp hoàn hảo khi có chuyên gia tìm hiểu và đọc sách thay bạn. Tận dụng thời gian rảnh của bạn, thời gian "chết" của bạn không bị lãng phí khi đi lại, di chuyển, khi ngồi chờ, khi đi ngủ, khi thức dậy... nghe audio tập trung hơn đọc sách giấy.'}
                                />
                            </div>
                            <div className='block-item'>
                                <Benifit
                                    icon={tietkiemchiphi}
                                    title={'TÍNH ỨNG DỤNG CAO'}
                                    content={'95% kiến thức được học trong các khóa học không bao giờ được áp dụng - Bạn chỉ nghe để mát-xa não và rồi... lãng quên! 80% số sách bạn mua không bao giờ được đọc hết... và để mờ bụi! Kiến thức trong chiếc USB đã được chắt lọc tinh luyện có tính ứng dụng cao vào thực tế. Khi bạn nghe audio hàng ngày, thấy điều gì hay áp dụng ngay vào cuộc sống.'}
                                />
                            </div>
                            <div className='block-item'>
                                <Benifit
                                    icon={gr}
                                    title={'ĐẦU TƯ CÓ LÃI'}
                                    content={'"Xét cho cùng, có một khoản đầu tư có thể thay thế tất cả khoản đầu tư khác: Đó là đầu tư vào bản thân. Không ai có thể lấy đi năng lực của bạn.Bạn sẽ có một cuộc sống đáng mơ ước hơn, không chỉ là về lượng tiền kiếm được mà còn là niềm vui trong cuộc sống. Vì thế, hãy đầu tư vào bản thân.Chiếc USB này sẽ là khoản đầu tư có lãi nhất trong suốt cuộc đời của bạn!'}
                                />
                            </div>
                            <div className='block-item'>
                                <Benifit
                                    icon={nguoithanhdatkhuyendoc}
                                    title={'NGẮN GỌN & DỄ HIỂU'}
                                    content={'Chỉ với số tiền rất nhỏ mà có thể được sở hữu gần 100 cuốn sách best sellers của mọi thời đại (tổng trị giá trên Amazon là gần 1000 USD) (và có thêm 1 chiếc USB vô cùng hữu dụng để phục vụ cho công việc), một sự đầu tư quá xứng đáng'}
                                />
                            </div>
                        </div>
                        <Iwant toBottom={this.toBottom} />
                        <FormRegister getSubmit={this.getSubmit} />
                        <div className='block-special-text' >
                            <div className='special-text' id='special-text'>
                                <p>
                                    Thời điểm bạn đưa ra quyết định là lúc vận mệnh của bạn được hình thành
                            </p>
                            </div>
                        </div>

                        <Benifit
                            title={'CHÍNH SÁCH SẢN PHẨM'}
                        />
                        <ProductPolicy />
                        <div className='footer' >
                            <p>Hotline: 033 213 8583</p>
                            <p>Đ/c: Số 71, Đa Sỹ, Kiến Hưng, Hà Đông, Hà Nội</p>
                            <h4>HÃY MUA NGAY BỘ SÁCH SỐ 1 THẾ GIỚI VÀ LẮNG NGHE CÁC CÂU CHUYỆN THÀNH CÔNG HÀNG NGÀY.</h4>
                            <h4> TƯƠNG LAI ĐANG HOÀN TOÀN Ở TRONG TAY BẠN!</h4>
                            <h5> THỜI ĐIỂM BẠN RA QUYẾT ĐỊNH.</h5>
                            <h5>LÀ LÚC VẬN MỆNH CỦA BẠN ĐƯỢC HÌNH THÀNH!</h5>

                        </div>
                        <h1>Copyright © 2019: USB sách nói - Bí Quyết Thành Công</h1>
                    </Bound>
                }
            </React.Fragment>


        );
    }
}

export default AdvertiseScreen;
{/* <h1 className='main-title'>
            Chiếc USB này chứa những quyển sách vĩ đại về kinh doanh giúp đạt được giấc mơ làm giàu của bất kì ai may mắn sở hữu nó
        <span> 80 audiobooks kinh điển nhất do tạp chí New York Times bình chọn. </span>
        </h1> */}
{/* <div className='main-title'>
        <img src={tieude} alt='tieude' />
    </div> */}

{/* <ul>
            <li>
                <div>
                    <span>18 cuốn sách </span>
                    hay nhất về
                <span> TƯ DUY KINH DOANH </span>
                    khác biệt của người thành công
            </div>
            </li>
            <li>
                <div>
                    <span> 19 cuốn sách </span>
                    bán chạy nhất về làm chủ và đạt được thịnh vượng
                <span> TÀI CHÍNH </span>
                    từ các doanh nhân và nhà đầu tư sừng sỏ
            </div>
            </li>
            <li>
                <div>
                    <span> 8 cuốn sách </span>
                    tiêu biểu VỀ
                    <span> MARKETING & SALES</span>
                    , giúp bán được nhiều hàng, tạo dựng thương hiệu lớn
            </div>
            </li>
            <li>
                <div>
                    <span>14 cuốn sách </span>
                    kinh điển VỀ
                    <span> QUẢN TRỊ</span>
                    , giúp bạn quản lý thật tốt công việc kinh doanh của mình
            </div>
            </li>
            <li>
                <div>
                    <span> 7 câu chuyện </span>
                    truyền cảm hứng từ các tập đoàn lớn và doanh nhân thành công nhất
                </div>
            </li>
        </ul> */}