import Article from "./component/Article";
import Sidebar from "./component/layout/Sidebar";
import Header from "./component/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Voucher from "./component/Voucher";
const App = () => {
  return (

    <BrowserRouter>

      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col w-full min-w-0">
          <Header />
          <Routes>
            <Route>
              <Route path="/" element={<Article />} />
              <Route path="/vouchers" element={<Voucher />} />

            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
};

export default App;
