import React, { useState } from 'react'
import { Label, TextInput, Button } from 'flowbite-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import fashionGirl from '../img/fashionGirl.png'

const Register = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const formik = useFormik({
        initialValues: {
            TenKH: '',
            ngaysinh: '',
            gioitinh: '',
            taikhoan: '',
            MatKhau: '',
            DiaChi: '',
            Email: '',
            sdt: '',
        },
        validationSchema: Yup.object({
            taikhoan: Yup.string()
                .required('tài khoản là bắt buộc'),

            MatKhau: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    'Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt'
                ),
            DiaChi: Yup.string()
                .required('Required'),
            Email: Yup.string()
                .required('Required')
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    'Please enter a valid email address'
                ),
            sdt: Yup.string()
                .required('Required')
                .matches(
                    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    'Must be a valid phone number'
                ),
            ngaysinh: Yup.date().required('Ngày tháng năm là bắt buộc'),
            gioitinh: Yup.string().required('Giới tính là bắt buộc'),
        }),
        onSubmit: (value) => {
            axios.post(`https://localhost:44340/api`, 'POST', value)
                .then((item) => {
                    console.log(item.data)
                    setSuccessMessage("Registration successful!");
                    alert("Đăng ký thành công");
                })
                .catch(error => {
                    console.log(error);
                    alert("Đăng ký không thành công");
                });
        },
    });

    return (
        <div>
            <div class="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-2 mt-5">
                <div class="hidden md:block h-48 lg:col-span-1 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">
                    <img class="absolute inset-0 h-full w-full " src={fashionGirl} />
                </div>
                <div class="flex items-center justify-center p-6 min-h-screen w-full">
                    <div class="w-full">
                        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            {successMessage && (
                                <div className="successMsg">{successMessage}</div>
                            )}
                            <form onSubmit={formik.handleSubmit} className="flex max-w-md flex-col gap-4">
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="kh"
                                            value="Tên Khách hàng"
                                        />
                                    </div>
                                    <TextInput
                                        type="text"
                                        placeholder=""
                                        name="TenKH"
                                        id='kh'
                                        value={formik.values.TenKH}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="ns"
                                            value="Ngày Sinh"
                                        />
                                    </div>
                                    <TextInput
                                        type="date"
                                        placeholder=""
                                        name="Ngaysinh"
                                        id='ns'
                                        value={formik.values.ngaysinh}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="tk"
                                            value="Tài khoản"
                                        />
                                    </div>
                                    <TextInput
                                        type="text"
                                        placeholder=""
                                        name="taikhoan"
                                        id='tk'
                                        value={formik.values.taikhoan}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="mk"
                                            value="Mật khẩu"
                                        />
                                    </div>
                                    <TextInput
                                        type="password"
                                        placeholder=""
                                        name="MatKhau"
                                        id='mk'
                                        value={formik.values.MatKhau}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.MatKhau && formik.errors.MatKhau && (
                                        <div className="errorMsg">{formik.errors.MatKhau}</div>
                                    )}
                                </div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="GT"
                                        value="Giới tính"
                                    />
                                    <TextInput
                                        type="text"
                                        placeholder=""
                                        name="gioitinh"
                                        id='GT'
                                        value={formik.values.gioitinh}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="DC"
                                        value="Địa Chỉ"
                                    />
                                    <TextInput
                                        type="text"
                                        placeholder=""
                                        name="DiaChi"
                                        id='DC'
                                        value={formik.values.DiaChi}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="EM"
                                        value="Email"
                                    />
                                    <TextInput
                                        type="email"
                                        placeholder=""
                                        name="Email"
                                        id='EM'
                                        value={formik.values.Email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <Button type="submit">
                                    Register new account
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register