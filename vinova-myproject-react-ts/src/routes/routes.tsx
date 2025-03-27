
import { ROLE } from "@/components/constant/type";
import MainLayout from "@/components/layout/main-layout";
import Article from "@/pages/article";
import { ErrorPage } from "@/pages/error-page";
import { LoginForm } from "@/pages/login";
import Voucher from "@/pages/voucher";


export const publicRoutes = [
    { path: "/login", element: <LoginForm />, isLoginPage: true },
    { path: "/error", element: <ErrorPage /> }
];

export const privateRoutes = [
    {
        path: "/article",
        element: <Article />,
        layout: MainLayout,
        requiredRoles: [ROLE.SUPER_ADMIN]
    },
    {
        path: "/voucher",
        element: <Voucher />,
        layout: MainLayout,
        requiredRoles: [ROLE.SUPER_ADMIN]
    },

];
