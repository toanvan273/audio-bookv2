import React, { Component } from 'react';
import styled from 'styled-components'
import HeadMan from '../control/HeadMan'
import song from './../../img/luonsong.png'
import icon1 from './../../img/icon/icon1.png'
import icon2 from './../../img/icon/icon2.png'
import icon3 from './../../img/icon/icon3.png'
import icon4 from './../../img/icon/icon4.png'
import icon5 from './../../img/icon/icon5.png'
const Bound = styled.div`
    display:flex;
    flex-direction: column;
    background: #e1e7ea;
    padding: 20px;
    .block{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .top-content{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
     
    }
    .bottom-content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 17%;
    }
    .song-content{
        display: flex;
        img{
            width:100%;
        }
    }
`
class BlockHeadMan extends Component {

    render() {
        return (
            <Bound>
                <div className='top-content'>
                    <div className='block'>
                        <HeadMan
                            title={'TƯ DUY KINH DOANH'}
                            content={'18 cuốn sách hay nhất về TƯ DUY KINH DOANH khác biệt của người thành công'}
                            dataStyle={{
                                bg: '#dd0274',
                                icon:icon1
                            }}
                        />
                    </div>

                    <div className='block'>
                        <HeadMan
                            title={'TÀI CHÍNH'}
                            content={'19 cuốn sách bán chạy nhất về làm chủ và đạt thịnh vượng tài chính từ các doanh nhân và nhà đầu tư sừng sỏ'}
                            dataStyle={{
                                bg: '#8ebf20',
                                icon:icon2
                            }}
                        />
                    </div>
                    <div className='block'>
                        <HeadMan
                            title={'MARKETING & SALE'}
                            content={'8 cuốn sách tiêu biểu về Marketing&sales giúp bạn bán được nhiều hàng và tạo dựng thương hiệu lớn'}
                            dataStyle={{
                                bg: '#5a1f6d',
                                icon:icon3
                            }}
                        />
                    </div>
                </div>
                <div className='song-content'>
                    <img src={song} alt='song' />
                </div>
                <div className='bottom-content'>
                    <div className='block'>
                        <HeadMan
                            title={'QUẢN TRỊ'}
                            content={'14 cuốn sách kinh điển về quản trị giúp bạn quản lý thật tốt công việc kinh doanh của mình'}
                            dataStyle={{
                                bg: '#1462a7',
                                re: true,
                                icon:icon4
                            }}
                        />
                    </div>
                    <div className='block'>
                        <HeadMan
                            title={'TRUYỀN CẢM HỨNG'}
                            content={'7 cầu chuyện ruyền cảm hứng từ các tập đoàn lớn và doanh nhân thành công nhất'}
                            dataStyle={{
                                bg: '#f6ae05',
                                re: true,
                                icon:icon5
                            }}
                        />
                    </div>
                </div>
            </Bound>
        );
    }
}

export default BlockHeadMan;
