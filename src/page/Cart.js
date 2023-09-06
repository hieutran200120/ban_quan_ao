import React, { useEffect, useState, useRef } from 'react';
const Cart = () => {
    const [cart, setCart] = useState([]);
    let storedLogin = sessionStorage.getItem("loginUser") === "true";
    //khởi tạo số lượng 
    let totalPrice = 0;
    //xóa sản phẩm trong giỏ hàng 
    const removeProductFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    //lấy dữ liệu
    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);

    if (cart.length === 0) {
        return <div>Giỏ hàng trống.</div>;
    }
    //chuyển trang đặt hàng 
    const handleClickOder = () => {
        if (!storedLogin) {
            window.location.href = '/user';
        } else {
            window.location.href = '/order';
        }

    }
    function formatNumber(number) {
        return new Intl.NumberFormat('vi-VN').format(number);
    }
    return (
        //phần header
        <>
            <table className="table table-hover table-striped mt-10 w-full" >
                <thead className="thead-dark bg-black text-white">
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th >Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th colspan="2" class="text-center">
                            <button className="text-white bg-red-600 p-2 rounded-lg" >Xóa tất cả</button>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {cart.map((item, index) => {
                        const productPrice = item.product.giaban * item.quantity;
                        totalPrice += productPrice;
                        const handleRemoveClick = () => {
                            removeProductFromCart(item.id);
                        };
                        //lưu số lương 
                        localStorage.setItem('quantity', JSON.stringify(item.quantity));
                        //tăng số lượng 
                        const handleIncrease = () => {
                            const newQuantity = item.quantity + 1;
                            const updatedCart = cart.map((cartItem) => {
                                if (cartItem.id === item.id) {
                                    return {
                                        ...cartItem,
                                        quantity: newQuantity
                                    };
                                }
                                return cartItem;
                            });

                            setCart(updatedCart);
                            localStorage.setItem('cart', JSON.stringify(updatedCart));
                        };
                        //giảm số lượng
                        const handleDecrease = () => {
                            if (item.quantity > 1) {
                                const newQuantity = item.quantity - 1;
                                const updatedCart = cart.map((cartItem) => {
                                    if (cartItem.id === item.id) {
                                        return {
                                            ...cartItem,
                                            quantity: newQuantity
                                        };
                                    }
                                    return cartItem;
                                });

                                setCart(updatedCart);
                                localStorage.setItem('cart', JSON.stringify(updatedCart));
                            }
                        };
                        return (
                            <>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.product.tensp}</td>
                                    <td><img className='w-32 h-70' src={item.product.imageSrc} /></td>
                                    <td >
                                        <div className="opacity-100 inline-flex whitespace-nowrap align-top">
                                            <div className="relative overflow-hidden bg-gray-200 h-7 w-7 p-0 border border-gray-300">
                                                <button className="absolute inset-0  text-shadow" onClick={handleDecrease}>-</button>
                                            </div>
                                            <div className='bg-white h-5 w-7 text-center text-base inline-block align-top m-0 border-t border-b border-gray-300 border-l-0 border-r-0 p-0'>
                                                {item.quantity}
                                            </div>
                                            <div className="relative overflow-hidden bg-gray-200 h-7 w-7 p-0 border border-gray-300">
                                                <button className="absolute inset-0  text-shadow" onClick={handleIncrease}>+</button>
                                            </div>
                                        </div>

                                    </td>
                                    <td >{formatNumber(item.product.giaban)} ₫</td>
                                    <td> {formatNumber(productPrice)} ₫</td>
                                    <td><button className="text-white bg-red-600 p-2 rounded-lg" onClick={handleRemoveClick}>Xóa</button></td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4" class="text-right">Tổng cộng: <span class="text-danger">{cart.length}</span></td>
                        <td colspan="2" class="text-right font-weight-bold">Tổng thành tiền: </td>
                        <td colspan="2" class="text-right"><span class="text-danger font-weight-bold">{formatNumber(totalPrice)} ₫</span></td>
                    </tr>
                    <tr>
                        <td colspan="8"><button className="text-white bg-red-600 p-2 rounded-lg" onClick={handleClickOder} >Đặt hàng</button></td>
                    </tr>
                </tfoot>
            </table>

        </>
    );
};


export default Cart;