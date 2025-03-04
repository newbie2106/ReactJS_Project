import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";



const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="w-3/12 h-screen bg-white flex flex-col justify-between">
            <div>
                <div className="text-2xl font-bold mb-6 bg-purple-600 p-4">
                    <a href="#" className="text-white!">NurtureWave</a>
                </div>
                <nav>
                    <ul className="space-y-4 p-2">
                        <li><Link to="/" className="block p-2 hover:bg-gray-200 rounded text-gray-500!">Article</Link></li>
                        <li><Link to="/" className="block p-2 hover:bg-gray-200 rounded text-gray-500!">Category</Link></li>
                        <li><Link to="/vouchers" className="block p-2 hover:bg-gray-200 rounded text-gray-500!">Voucher</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="relative bg-[rgba(57,0,153,0.16)] p-6">
                <div className="flex items-center cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaUserCircle size={32} />
                    <span className="ml-2">Trịnh Tông Hiệp</span>
                </div>
                {menuOpen && (
                    <div className="absolute left-0 bottom-full mb-2 bg-white text-black rounded shadow-md w-40">
                        <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Change Password</Link>
                        <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;