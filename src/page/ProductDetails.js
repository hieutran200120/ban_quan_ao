import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import * as httpRequest from '../utils/Api'
const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                httpRequest.get(`SanPhams/${id}`)
                    .then((response) => {
                        setProduct(response);
                    })

            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }
    //them gio hang
    const addToCart = () => {
        const cartData = localStorage.getItem('cart');
        let cart = [];
        if (cartData) {
            cart = JSON.parse(cartData);
        }
        cart.push({
            id: product.masp,
            product: product,
            quantity: 1
        });
        localStorage.setItem('cart', JSON.stringify(cart));

        console.log('Thêm vào giỏ hàng thành công');
    };
    return (
        <div className='mt-20'>
            <div class="grid grid-cols-2 gap-5">
                <div class=" text-center">
                    <img src={product.imageSrc} className="mr-auto ml-auto max-w-full h-auto mt-0 m-7" alt="employee-avatar" />
                </div>
                <div class="">
                    <h2 class="pb-3" >{product.tensp}</h2>
                    <h4 class="pb-3" > <span class="text-danger">Giá: {product.giaban}  VNĐ</span></h4>
                    <p >Chi tiết sản phẩm</p>
                    <p >{product.mota}</p>
                    <br />
                    <br />
                    <div>
                        <p>Màu sắc:</p>     <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Purple to pink
                            </span></button>
                        <p>kích thước:</p>     <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Purple to pink
                            </span></button>
                    </div>


                    <button type="button" className="rounded-md cursor-pointer text-white  bg-gradient-to-l from-orange-300 to-orange-300 transition-all duration-500 outline-none border-none p-3" onClick={addToCart}>
                        <FontAwesomeIcon icon={faShoppingCart} /> THÊM VÀO GIỎ HÀNG
                    </button>
                    <button type="button" className="rounded-md cursor-pointer text-white  bg-gradient-to-l from-orange-400 to-orange-600 transition-all duration-500 outline-none border-none p-3 ml-5" onClick={addToCart}>
                        XEM THÊM
                    </button>
                    <hr />
                    <p >Mã sản phẩm: {product.masp}</p>
                    <hr />

                </div>
            </div>
        </div>
    )
}

export default ProductDetails