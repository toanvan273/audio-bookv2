import React, { Component } from 'react';
import styled from 'styled-components'
import bg from '../../img/pen.png'
import ManBlock from '../control/ManBlock'
import ManRevest from '../control/ManRevest'
import flat1 from '../../img/icon/flatred.png'
import flat2 from '../../img/icon/nonchuoiflat.png'
import flat3 from '../../img/icon/yellowflat.png'
import flat4 from '../../img/icon/ograneflat.png'
import flat5 from '../../img/icon/flatblue.png'
const Bound = styled.div`
    position: relative;
    height: fit-content;
    display: flex;
    img{
        width:100%;
    }
    .fit-content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-row-gap: 10px;
        @media (max-width:960px){
            grid-row-gap: 0px;
        }
    }
    .div-left{
        display: flex;
        justify-content: flex-end;
    }
`
class BlockHeadManV2 extends Component {

    render() {
        return (
            <Bound>
                <img src={bg} alt='alt' />
                <div className='fit-content'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <ManBlock flat={flat1} 
                        title={'TƯ DUY KINH DOANH'}
                        content={'18 cuốn sách hay nhất về TƯ DUY KINH DOANH khác biệt của người thành công'}
                        />
                    </div>
                    <div className='div-left'>
                        <ManRevest flat={flat4}
                        title={'QUẢN TRỊ'}
                        content={'14 cuốn sách kinh điển về quản trị giúp bạn quản lý thật tốt công việc kinh doanh của mình'}
                        />
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <ManBlock flat={flat2}
                         title={'TÀI CHÍNH'}
                         content={'19 cuốn sách bán chạy nhất về làm chủ và đạt thịnh vượng tài chính từ các doanh nhân và nhà đầu tư sừng sỏ'}
                        />
                    </div>
                    <div className='div-left'>
                        <ManRevest flat={flat5}
                         title={'TRUYỀN CẢM HỨNG'}
                         content={'7 cầu chuyện ruyền cảm hứng từ các tập đoàn lớn và doanh nhân thành công nhất'}
                        />
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <ManBlock flat={flat3}
                         title={'MARKETING & SALE'}
                         content={'8 cuốn sách tiêu biểu về Marketing&sales giúp bạn bán được nhiều hàng và tạo dựng thương hiệu lớn'}
                        />
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </Bound>
        );
    }
}

export default BlockHeadManV2;
