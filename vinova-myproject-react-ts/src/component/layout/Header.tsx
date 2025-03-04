import { useLocation } from "react-router-dom";
import ModalForm from "../common/ModalForm";
import { useState } from "react";

const Header = () => {
    const location = useLocation();

    // Object ánh xạ đường dẫn với tiêu đề
    const pageConfig: Record<string, string> = {
        "/articles": "Article",
        "/categories": "Category",
        "/vouchers": "Voucher",
        "/users": "User",
    };

    // Lấy tiêu đề dựa trên URL (mặc định là "Dashboard")
    const pageTitle = pageConfig[location.pathname] || "Article";

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="h-16 bg-gray-200 flex justify-between items-center px-6 w-full">
            <a className="text-xl font-bold">{pageTitle}</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md" onClick={() => setIsModalOpen(true)}>
                Create {pageTitle}
            </button>
            <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Header;
