import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-20 bg-black p-14 text-center sm:float-left lg:float-left'>
            <div className='text-white'>
                <ul>
                    <li className='mb-4'>140 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú</li>
                    <li className='mb-4'>Email: Mark@gmail.com</li>
                    <li className='mb-4'>Điện thoại: 01293012390</li>
                    <li className='mb-4'>Skype: MarkLeoDemon</li>
                </ul>
            </div>
            <div className='text-white '>
                <ul>
                    <li className='pb-8 max-w-lg text-xl font-semibold leading-loose  dark:text-white '>VỀ CHÚNG TÔI</li>
                    <li className='mb-4'>Tổng quan về công ty</li>
                    <li className='mb-4'>Lịch sử hình thành</li>
                    <li className='mb-4'>Tầm nhìn – Sứ mệnh</li>
                    <li className='mb-4'>Câu chuyện thương hiệu</li>
                </ul>
            </div>
            <div className='text-white'>
                <ul>
                    <li className='pb-8 max-w-lg text-xl font-semibold leading-loose  dark:text-white'>HỖ TRỢ KHÁCH HÀNG</li>
                    <li className='mb-4'>Phiếu quà tặng</li>
                    <li className='mb-4'>Hướng dẫn chọn size</li>
                    <li className='mb-4'>Thẻ VIP</li>
                </ul>
            </div>
            <div className='text-white'>
                <ul>
                    <li className='pb-8 max-w-lg text-xl font-semibold leading-loose dark:text-white'>ĐĂNG KÍ NHẬN BẢN TIN</li>
                    <li className='mb-4'>Đăng ký với chúng tôi để nhận email về sản phẩm mới, khuyến mại đặc biệt và các sự kiện độc đáo.</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer