import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHouse, faShoppingCart, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Button, Navbar } from 'flowbite-react';
const Headder = () => {
    let storedLogin = sessionStorage.getItem("loginUser") === "true";
    const KhachHangTenKH = sessionStorage.getItem('KhachHangTenKH');
    const cartData = localStorage.getItem('cart');
    const gioHang = JSON.parse(cartData);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    const handleclick = () => {
        sessionStorage.clear();
        localStorage.clear();
        window.location.reload();
    }
    return (
        <Navbar
            fluid
            rounded
            className="bg-black  fixed left-0 right-0 z-50   "
        >
            <Navbar.Brand  >

                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-teal-50 ">
                    HieuThu2
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    as={Link} to="/"
                    className="font-sans  relative after:absolute after:left-0 after:h-0.5 after:w-0 after:bottom-0  after:transition-all after:ease-in-out hover:after:w-full after:duration-300 after:bg-red-600 text-white m-2 font-bold text-sm "
                >
                    <p>
                        TRANG CHỦ
                    </p>
                </Navbar.Link>
                <Navbar.Link as={Link} to="Introduct" className="font-sans  relative after:absolute after:left-0 after:h-0.5 after:w-0 after:bottom-0  after:transition-all after:ease-in-out hover:after:w-full after:duration-300 after:bg-red-600 text-white m-2 font-bold text-sm sm:text-b">
                    GIỚI THIỆU
                </Navbar.Link>
                <Navbar.Link as={Link} to="/product" className="font-sans  relative after:absolute after:left-0 after:h-0.5 after:w-0 after:bottom-0  after:transition-all after:ease-in-out hover:after:w-full after:duration-300 after:bg-red-600 text-white m-2 font-bold text-sm ">
                    SẢN PHẨM
                </Navbar.Link>
                {storedLogin != true ? (
                    <>
                        <Navbar.Link as={Link} to="/Rigister" className="font-sans  relative after:absolute after:left-0 after:h-0.5 after:w-0 after:bottom-0  after:transition-all after:ease-in-out hover:after:w-full after:duration-300 after:bg-red-600 text-white m-2 font-bold text-sm ">
                            ĐĂNG KÍ
                        </Navbar.Link>
                        <Navbar.Link as={Link} to="/Login" className="font-sans  relative after:absolute after:left-0 after:h-0.5 after:w-0 after:bottom-0  after:transition-all after:ease-in-out hover:after:w-full after:duration-300 after:bg-red-600 text-white m-2 font-bold text-sm ">
                            ĐĂNG NHẬP
                        </Navbar.Link>
                    </>
                ) : (
                    <>
                        <Navbar.Link href="#" className="font-sans  relative after:absolute after:left-0 after:h-0.5 after:w-0 after:bottom-0  after:transition-all after:ease-in-out hover:after:w-full after:duration-300 after:bg-red-600 text-white m-2 font-bold text-sm ">
                            LỊCH SỬ
                        </Navbar.Link>
                        <li className="font-sans   relative after:absolute after:left-0 after:h-0.5 after:w-0 after:bottom-0 after:transition-all after:ease-in-out hover:after:w-full after:duration-300 after:bg-red-600 text-white m-2 font-bold text-sm" >
                            <FontAwesomeIcon icon={faUser} /> {KhachHangTenKH}
                        </li>
                        <button className='text-white' onClick={handleclick}>ĐĂNG XUẤT</button>
                    </>)}

                <Navbar.Link as={Link} to="/Cart" className="font-sans   relative after:absolute after:left-0 after:h-0.5 after:w-0 after:bottom-0 after:transition-all after:ease-in-out hover:after:w-full after:duration-300 after:bg-red-600 text-white m-2 font-bold text-sm">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {gioHang && gioHang.length > 0 && (
                        <span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5 ">
                            {gioHang.length}
                        </span>
                    )}
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default Headder;