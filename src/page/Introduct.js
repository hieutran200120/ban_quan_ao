import React from 'react'
import banner from '../img/banner-pierre-cardin.jpg'
import img from '../img/4-1024x683.jpg'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
const Introduct = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }} className='w-full h-52 bg-zinc-200'>
            </div>
            <div className='py-12 text-center '>
                <h3 className='font-bold  text-3xl mb-2'>TỔNG QUAN VỀ CÔNG TY</h3>
                <p>“Chúng tôi tự hào là một công ty chuyên về thời trang, mang đến những bộ sưu tập đa dạng và phong cách cho khách
                    hàng của chúng tôi. Với niềm đam mê với thế giới thời trang và sự tìm kiếm không ngừng nâng cao chất lượng,
                    chúng tôi cam kết cung cấp những sản phẩm quần áo chất lượng cao và theo xu hướng cho mọi lứa tuổi và phong cách.”
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-col-1 lg:grid-cols-2'>
                <div className='grid items-center p-4 mb-4'>
                    <p>Tại công ty chúng tôi, chúng tôi đặt khách hàng lên hàng đầu. Chúng tôi tin rằng mỗi người đều có phong cách và cá nhân riêng, do đó, chúng tôi cung cấp một loạt các sản phẩm đa dạng để đáp ứng nhu cầu và sở thích của từng khách hàng. Từ những bộ trang phục công sở lịch sự đến những trang phục thể thao năng động,
                        từ những bộ váy thanh lịch đến những trang phục hàng ngày thoải mái, chúng tôi có đủ để mọi người tìm thấy điều mình yêu thích.</p>
                </div>
                <div style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '26px 50px'
                }}>
                    <ul className='text-white '>
                        <li className='mb-6'><p><strong className='font-bold text-2xl'>5.000.000</strong > Sơ mi nam, nữ / năm</p></li>
                        <li className='mb-6'><p><strong className='font-bold text-2xl'>1.200.000</strong > Quần tây, Khaki nam, nữ / năm</p></li>
                        <li className='mb-6'><p><strong className='font-bold text-2xl'>300.000</strong >/streamless / năm</p></li>
                        <li className='mb-6'>  <p><strong className='font-bold text-2xl'>1.500.000</strong > Các sản phẩm khác / năm</p></li>
                        <li className='mb-6'><p>Veston nam, nữ / năm</p></li>
                        <li className='mb-6'> <p><strong className='font-bold text-2xl'>1.500.000</strong > Giày thể thao / năm</p></li>
                        <li className='mb-6'><p><strong className='font-bold text-2xl'>4.000.000</strong > Đồ lót / năm</p></li>
                        <li className='mb-6'><p><strong className='font-bold text-2xl'>1.200.000</strong > Dệt S</p></li>
                    </ul>
                </div>
            </div>
            <div className='text-center pt-24'>
                <h3 className='font-bold  text-3xl mb-2'>HỆ THỐNG CỬA HÀNG</h3>
                <p className='mb-5'>Chúng tôi là một hệ thống cửa hàng đa chi nhánh, tập trung vào việc mang đến cho khách hàng trải nghiệm mua sắm tuyệt vời và độc đáo.</p>
                <div className='grid grid-cols-3 gap-4'>
                    <div className=' overflow-hidden' >
                        <img src={img1}
                            class="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        />
                    </div>
                    <div className=' overflow-hidden' >
                        <img src={img2}
                            class="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        />
                    </div>
                    <div className=' overflow-hidden' >
                        <img src={img3}
                            class="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        />
                    </div>
                </div>
                <p className='mt-10 mb-3'>Chúng tôi tận dụng không gian để trưng bày sản phẩm một cách sáng tạo và hiệu quả, giúp khách hàng dễ dàng tìm thấy những món hàng mà
                    họ quan tâm. Các cửa hàng của chúng tôi được thiết kế phù hợp với từng địa điểm và mang đến không gian mua sắm độc đáo,
                    từ những cửa hàng lớn và rộng rãi đến những cửa hàng nhỏ và gọn nhẹ.</p>
            </div>
        </>

    )
}

export default Introduct