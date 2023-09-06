import React, { useState, useEffect } from 'react'
import axios from "axios";
import Pagination from '../components/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as httpRequest from '../utils/Api'
const ProductList = () => {
    const [search, setSearch] = useState('');
    const [Product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageSize = 12; // Số lượng nhân viên hiển thị trên mỗi trang
    const refreshProduct = (page) => {
        httpRequest.get(`SanPhams?page=${page}&pageSize=${pageSize}`)
            .then((res) => {
                setProduct(res.sanphams);
                setTotalPages(res.totalPages);
            })
            .catch((err) => console.log(err));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        refreshProduct(currentPage);
    }, [currentPage]);
    //chuyển trang 
    const handleButtonClick = async (masp) => {

        // Chuyển hướng đến trang chi tiết sản phẩm
        window.location.href = `/ProductDetails/${masp}`;
    }
    //tìm kiếm sản phẩm 
    const searchProduct = (evt) => {
        if (evt.key === "Enter") {
            evt.preventDefault();
            httpRequest.get(`SanPhams/tim_kiem/${search}`, 'GET', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    console.log(response.data);
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
            setSearch(" ");
        }
    }
    const imageCard = (data) => (
        <div className="rounded-lg m-7 delay-75 items-center border-none hover:scale-105 hover:z-10 hover:shadow-3xl">
            <button onClick={() => handleButtonClick(data.masp)}>
                <img src={data.imageSrc} className="mr-auto ml-auto w-48 h-48 m-7" alt="employee-avatar" />
                <div className="text-center m-7">
                    <h5>{data.tensp}</h5>
                    <span className="card-text">Giá bán: {data.giaban} VNĐ</span> <br />

                </div>
            </button>
        </div>
    );

    return (
        <div className="row mt-8">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <form class="flex items-center justify-end">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div className="relative w-60 ">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value) }}
                                    onKeyPress={searchProduct}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Movie Name..." required />
                            </div>
                            <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={searchProduct}>
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>

                    </div>
                </div>

            </div>
            <div className="col-md-9">
                <table>
                    <tbody>
                        {Product && Product.length > 0 ? (
                            [...Array(Math.ceil(Product.length / 4))].map((e, i) => (
                                <tr key={i}>
                                    <td>{imageCard(Product[4 * i])}</td>
                                    <td>
                                        {Product[4 * i + 1] ? imageCard(Product[4 * i + 1]) : null}
                                    </td>
                                    <td>
                                        {Product[4 * i + 2] ? imageCard(Product[4 * i + 2]) : null}
                                    </td>
                                    <td>
                                        {Product[4 * i + 3] ? imageCard(Product[4 * i + 3]) : null}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No employees found.</td>
                            </tr>
                        )}

                    </tbody>

                </table>
            </div>
            {/* Nút phân trang */}
            <div className=" flex justify-center">
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>

    )
}

export default ProductList