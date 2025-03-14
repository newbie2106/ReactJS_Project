// import { useLocation } from "react-router-dom";
// import { Button } from "../ui/button";

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// const Header = () => {
//     const location = useLocation();

//     // Object ánh xạ đường dẫn với tiêu đề
//     const pageConfig: Record<string, string> = {
//         "/articles": "Article",
//         "/categories": "Category",
//         "/vouchers": "Voucher",
//         "/users": "User",
//     };

//     // Lấy tiêu đề dựa trên URL (mặc định là "Dashboard")
//     const pageTitle = pageConfig[location.pathname] || "Article";

//     // const [isModalOpen, setIsModalOpen] = useState(false);

//     return (
//         <div className="h-16 bg-gray-200 flex justify-between items-center px-6 w-full">
//             <a className="text-xl font-bold">{pageTitle}</a>
//             <Button variant="outline">Create {pageTitle} </Button>
//             {/* <button className="bg-purple-600 text-white px-4 py-2 rounded-md" onClick={() => setIsModalOpen(true)}>
//                 Create {pageTitle}
//             </button> */}
//             {/* <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
//         </div>
//     );
// };

// export default Header;


interface ContentHeaderProps {
  title: string;
  searchPlaceholder?: string;
  buttonLabel: string;
  onSearch: (value: string) => void;
  onButtonClick: () => void;
}

export function Header({
  title,
  searchPlaceholder = "Search",
  buttonLabel,
  onSearch,
  onButtonClick,
}: ContentHeaderProps) {
  return (
    <div className="flex items-center justify-between p-1.5 bg-white border-b-1">
      <a href="#" className="text-lg font-semibold text-gray-800">{title}</a>

      <div className="relative w-64">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder={searchPlaceholder}
          className="w-64 border border-gray-300 rounded-md px-3 py-4 bg-gray-100 placeholder-gray-500 focus:bg-white"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <Button variant="customButton" onClick={onButtonClick}>
        {buttonLabel}
      </Button>
    </div>
  );
}
