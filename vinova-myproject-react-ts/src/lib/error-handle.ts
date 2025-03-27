// src/lib/errorHandler.ts
import { UseFormSetError } from "react-hook-form";
import { toast } from "sonner";
import { EntityError } from "./http";

export const handleErrorApi = ({
    error,
    setError,
    duration,
}: {
    error: any;
    setError?: UseFormSetError<any>;
    duration?: number;
}) => {
    if (error instanceof EntityError && setError) {
        error.payload.errors.forEach((item) => {
            setError(item.field, {
                type: "server",
                message: item.message,
            });
        });
    } else {
        toast.error(error?.payload?.message ?? "Lỗi không xác định", {
            duration: duration ?? 5000,
        });
    }
};
