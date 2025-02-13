import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/Header/Header';
import SlideMenu from '../../pages/SlideMenu/SlideMenu';

const MenuLayout = () => {  // ✅ Cambio de nombre para ser consistente
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <SlideMenu isOpen={isSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header toggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 mt-16">
                    <div className="container mx-auto px-6 py-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MenuLayout;
