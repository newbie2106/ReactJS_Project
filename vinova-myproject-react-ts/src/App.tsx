
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Voucher from "./pages/voucher";
// import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
// import { AppSidebar } from "./components/layout/app-sidebar";
// import Article from "./pages/article";
// import { LoginForm } from "./pages/login";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";


const App = () => {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>

    //   <SidebarProvider>
    //     <AppSidebar />
    //     <SidebarInset>
    //       <Routes>
    //         <Route path="/login" element={<LoginForm />} />
    //         <Route path="/" element={<Article />} />
    //         <Route path="/vouchers" element={<Voucher />} />
    //       </Routes>
    //     </SidebarInset>
    //   </SidebarProvider>
    // </BrowserRouter>

  );
};

export default App;
