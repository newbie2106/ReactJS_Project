
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Voucher from "./components/pages/Voucher";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/layout/app-sidebar";
import Article from "./components/pages/Article";
import { LoginForm } from "./components/pages/Login";
const App = () => {
  return (

    <BrowserRouter>

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Article />} />
            <Route path="/vouchers" element={<Voucher />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </BrowserRouter>

  );
};

export default App;
