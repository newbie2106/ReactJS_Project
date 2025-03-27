import PrivateRoute from "./private-route";
import { publicRoutes, privateRoutes } from "./routes";
import { createBrowserRouter } from "react-router-dom";

const privateRouteElements = privateRoutes.map(({ path, element, requiredRoles, layout: Layout }) => ({
    path,
    element: (
        <PrivateRoute requiredRoles={requiredRoles}>
            {Layout ? <Layout>{element}</Layout> : element}
        </PrivateRoute>
    ),
}));


const publicRouteElements = publicRoutes.map(({ path, element, isLoginPage }) => ({
    path,
    element: <PrivateRoute isLoginPage={isLoginPage}>{element}</PrivateRoute>,
}));


export const router = createBrowserRouter([
    ...publicRouteElements,
    ...privateRouteElements,
]);
