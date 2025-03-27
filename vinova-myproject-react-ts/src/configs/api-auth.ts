import { LoginBodyType, LoginResType } from "@/components/constant/type";
import http from "@/lib/http";


const authApiRequest = {
    sLogin: (body: LoginBodyType) => http.post<LoginResType>('admins/auth/login', body),


}
export default authApiRequest;