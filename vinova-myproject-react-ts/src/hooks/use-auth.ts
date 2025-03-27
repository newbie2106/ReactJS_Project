
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./use-store";
import { LoginBodyType, ROLE } from "@/components/constant/type";
import authApiRequest from "@/configs/api-auth";
import { useMutation } from "@tanstack/react-query";
import { handleErrorApi } from "@/lib/error-handle";
import { toast } from "sonner";

export const useLogin = () => {
    const { setIsAuth, setRole } = useAuthStore();
    const navigate = useNavigate();
    const loginMutation = useMutation({
        mutationFn: async ({ values }: { values: LoginBodyType }) => {
            return await authApiRequest.sLogin(values);
        },
        onSuccess: (result) => {
            if (!result.payload?.data?.admin?.role) {
                throw new Error("Dữ liệu trả về từ server không hợp lệ");
            }
            toast.success(result.payload.message);
            const role = result.payload.data.admin.role;
            localStorage.setItem("ROLE_USER", role);
            setIsAuth(true);
            setRole(role);


            if (!Object.values(ROLE).includes(role)) {
                toast.error("Vai trò không hợp lệ!");
                navigate("/error");
                return;
            }

            if (role === ROLE.SUPER_ADMIN) {
                navigate("/article");
            } else if (role === ROLE.ADMIN) {
                navigate("/");
            } else {
                navigate("/voucher");
            }
        },
        onError: (error) => {
            handleErrorApi({ error });
        }
    });

    return { loginMutation };
};


export const useLogout = () => {
    const { setIsAuth, setRole } = useAuthStore();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("ROLE_USER");

        setIsAuth(false);
        setRole(null);

        toast.success("Đăng xuất thành công!");

        navigate("/login");
    };

    return { logout };
};

