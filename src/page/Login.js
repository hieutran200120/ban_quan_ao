import React, { useState, useEffect } from 'react'
import * as httpRequest from '../utils/Api'
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [login, setLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState();
    const [matkhau, setmatkhau] = useState();

    useEffect(() => {
        if (sessionStorage.getItem("login")) {
            setLogin(true);
        }
    }, []);

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePass = (e) => {
        setmatkhau(e.target.value);
    };
    const handleCheck = async (e) => {
        e.preventDefault();
        try {
            httpRequest.post("DangNhap/login", { email, matkhau })
                .then((response) => {
                    if (response.makh > 0) {
                        alert('Login successfully');
                        sessionStorage.setItem('loginUser', true);
                        sessionStorage.setItem('email', email);
                        sessionStorage.setItem('KhachHangID', response.makh);
                        sessionStorage.setItem('KhachHangTenKH', response.tenkh);
                        sessionStorage.setItem('KhachHangDiaChi', response.diachi);
                        setLogin(true);
                    } else {
                        toast.error("Login error!");
                    }
                })

        } catch (error) {
            console.error(error);

        }
    }
    return (
        <div class="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-3">
            <div class="hidden md:block h-48 lg:col-span-2 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">
                <img class="absolute inset-0 h-full w-full " src="https://pos.nvncdn.net/312d68-57499/bn/20230614_jaIDles7.jpeg" />
                <div class="absolute inline-block p-4 min-w-full text-white text-5xl lg:text-7xl mt-20 ml-20 bg-gray-600 bg-opacity-50">
                    <h1>Lorem ipsum dolor sit amet</h1>
                </div>
            </div>

            <div class="flex items-center justify-center p-6 min-h-screen w-full">
                <div class="w-full">
                    <div class="sm:mx-auto sm:w-full sm:max-w-md">
                        <a href="#" class="flex justify-center font-bold text-4xl"> LOGO </a>

                        <h2 class="mt-6 text-2xl font-extrabold text-center leading-9">Sign in to your account</h2>

                        <p class="mt-2 text-sm text-center leading-5 max-w">
                            Or
                            <a href="#" class="font-medium transition ease-in-out duration-150"> create a new account </a>
                        </p>
                    </div>

                    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <form action="" onSubmit={handleCheck}>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"

                                        type="text"
                                        placeholder="email"
                                        value={email}
                                        onChange={changeEmail}
                                    />
                                </div>
                                <div className="space-y-2 relative">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        placeholder="Enter your password"
                                        value={matkhau}
                                        onChange={changePass}

                                    />
                                    <div className="absolute top-6 bottom-0 right-0 pr-3 flex items-center text-sm leading-5">
                                        <FontAwesomeIcon icon={faEye} onClick={() => setShowPassword(!showPassword)} />
                                    </div>

                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                        <label for="remember_me" className="ml-2 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="text-green-400 hover:text-green-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login