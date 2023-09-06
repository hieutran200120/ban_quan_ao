import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Headder from '../common/Headder';
import Footer from '../common/Footer';
const DefaultLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {/* <!-- ===== Header Start ===== --> */}

            <Headder sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
                    <Outlet />
                </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
            <Footer />
        </div>
    );
};

export default DefaultLayout;