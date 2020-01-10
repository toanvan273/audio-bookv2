import React, { Component } from 'react';
import styled from 'styled-components'
import usbsubject from '../img/usbsubject.jpg'
import ItemPolicy from '../ui/control/ItemPolicy'
import tranfer from '../img/icon/tranfer.png'
import protech from '../img/icon/protech.png'
import twoyear from '../img/icon/twoyear.png'
import suport from '../img/icon/suport.png'
const Bound = styled.div`
    display: grid;
    grid-template-columns: 60% 39%;
    grid-gap: 1%;
    .left-content{

    }
    .right-content{
       img{
           width: 100%;
       } 
    }
`
class ProductPolicy extends Component {
    render() {
        return (
            <Bound>
                <div className='left-content'>
                    <ItemPolicy
                        content={'Trường hợp bạn không may nhận phải USB bị "lỗi dữ liệu", shop sẽ ngay lập tức đổi cho bạn chiếc USB khác và bạn không phải mất thêm bất kì 1 chi phí nào.'}
                        icon={tranfer} title={'Đổi trả miễn phí:'} />
                    <ItemPolicy
                        icon={protech}
                        title={'Bảo hành file dữ liệu bị mất cho khách'}
                        content={'Trong trường hợp bạn vô tình bị thất lạc file dữ liệu, shop sẽ hỗ trợ cung cấp lại file để các bạn down tải (link google driver).'}
                    />
                    <ItemPolicy
                        icon={twoyear}
                        title={'Phân phối bởi FPT, bảo hành 2 năm'}
                        content={'USB Kingston 32GB được phân phối bởi FPT bảo hành 2 năm: Sau khi bạn copy file dữ liệu từ USB vào máy tính, bạn có thể sử dụng chiếc USB cho mục đích khác. Nếu USB có trục trặc gì bạn có thể mang ra cửa hàng, đại lý của FPT để 1 đổi 1 (Chú ý tem bảo hành còn nguyên vẹn).'}
                    />
                    <ItemPolicy
                    data={{
                        fan:'facebook.com/TrituexanhVIBA/',
                        phone:'033 213 8583'
                    }}
                        icon={suport}
                        title={'Hỗ trợ tư vấn:'}
                        content={'Trong trường hợp khách có nhu cầu tư vấn thêm về sách hoặc hướng dẫn sử dụng USB, vui lòng inbox vào fanpage của shop, shop sẽ hỗ trợ các bạn nhiệt tình.'}
                    />
                </div>
                <div className='right-content'>
                    <img src={usbsubject} alt='acode' />
                </div>
            </Bound>
        );
    }
}

export default ProductPolicy;
