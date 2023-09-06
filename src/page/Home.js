
import { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import carousel1 from '../img/carousel2.jpg'
import carousel2 from '../img/carousel3.jpg'
import carousel3 from '../img/carousel4.jpg'
import banner from "../img/banner-pierre-cardin.jpg"
import cm1 from '../img/cm1.jpg'
import cm3 from '../img/cm3.jpg'
import cm4 from '../img/cm4crop.jpg'
import about from '../img/about.jpg'
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as httpRequest from '../utils/Api'
export default function Home() {
    const [product, setProduct] = useState(null);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1
        }
    };
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                httpRequest.get(`SanPhams/img`)
                    .then((response) => {
                        setProduct(response.sanphams);
                        console.log(response.sanphams)
                    })

            } catch (error) {
                console.log(error);
            }

        };
        fetchProduct();
    }, []);
    return (
        <>
            <div className='h-96 mt-5 '>
                <Carousel>
                    <img
                        alt="..."
                        src={carousel1}
                    />
                    <img
                        alt="..."
                        src={carousel2}
                    />
                    <img
                        alt="..."
                        src={carousel3}
                    />
                </Carousel>
            </div>


            <h4 class="mt-2 mb-2 font-bold text-2xl relative after:absolute  after:left-0 after:h-1 after:w-52 after:bottom-0  after:transition-all after:ease-in-out after:duration-300 after:bg-red-600">
                SẢN PHẨM NỔI BẬT

            </h4>

            <div className='h-96'>
                <MultiCarousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {Array.isArray(product) && product.length > 0 ? (
                        product.map((slide, index) => (
                            <div key={index} className="item" style={{ boxShadow: '0 0 8px 2px rgba(0,0,0,0.2)' }}>
                                <a href={`XemChiTiet/${slide.masp}`}>
                                    <img src={slide.imageSrc} className='h-80 w-80 ' alt={`product-${index}`} />
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>Không có sản phẩm để hiển thị.</p>
                    )}
                </MultiCarousel>

            </div>
            <div className='grid grid-rows-1 grid-cols-2 mt-20 gap-4 ml-10 mr-10 md:grid-rows-2 md:grid-cols-3'>
                <div className='relative row-span-2'>
                    <a href="">
                        <img src={cm3} className="w-100" />

                        <div className="absolute top-0 left-0 w-full text-right text-white p-6 ">
                            <h3 className='translate-y-6 ease-in'>TRANG PHỤC NỮ</h3>

                        </div>
                    </a></div>
                <div className='relative row-span-2'>
                    <a href="">
                        <img src={cm1} className="w-100" />
                        <div className="absolute top-0 left-0  text-right text-white p-6 ">
                            <h3 className='translate-y-6 ease-in'>TRANG PHỤC NAM</h3>
                        </div>
                    </a>
                </div>

                <div className='relative md:row-start-1 md:col-start-3'>
                    <a href="">
                        <img src={banner} className="w-96 h-80" />
                        <div className="absolute top-0 left-0  text-right text-white p-6">
                            <h3 className='translate-y-6 ease-in'>TRANG PHỤC NAM</h3>
                        </div>
                    </a>
                </div>
                <div className='relative md:row-start-2 md:col-start-3'>
                    <a href="">
                        <img src={cm4} className="w-96 h-80 " />
                        <div className="absolute top-0 left-0  text-right text-white p-6">
                            <h3 className='translate-y-6 ease-in'>QUÀ TẶNG</h3>
                        </div>
                    </a>
                </div>

            </div>
            <div style={{
                backgroundImage: `url(${about})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundposition: 'center'

            }}>
                <section className=" mb-5 text-white px-3 py-56 mt-10">
                    <div className="">
                        <h3 className="py-5 max-w-lg text-xl font-semibold leading-loose  dark:text-white">Công ty</h3>
                        <div className="">
                            <h1 className='text-base md:text-lg lg:text-xl xl:text-2xl'>CÔNG TY SỐNG THEO CÁCH CỦA BẠN</h1>
                            <p class="py- text-base md:text-lg lg:text-xl xl:text-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    TÌM HIỂU VỀ CHÚNG TÔI
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


