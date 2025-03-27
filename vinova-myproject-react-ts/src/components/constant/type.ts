
import { ArticleListRes, ArticleRes } from "@/schemaValidations/article-schema"
import { LoginBody, LoginRes, RefreshTokenBody, RefreshTokenRes } from "@/schemaValidations/auth-schema"
import { z } from "zod"

export const ROLE = {
    SUPER_ADMIN: "superAdmin",
    ADMIN: 'admin',

}

export interface UserItemProps {
    id: string;
}
export interface AddEditDrawerProps {
    isAdd: boolean;
    articleId?: string;

}

// type ModalType = string;
// export interface ModalState {
//     activeModals: Record<ModalType, boolean>;
//     openModal: (modalType: ModalType) => void;
//     closeModal: (modalType: ModalType) => void;
//     toggleModal: (modalType: ModalType) => void;
//     isModalOpen: (modalType: ModalType) => boolean;
// }

export const FORM_ACTIONS = {
    ADD: "ADD",
    EDIT: "EDIT",
    DELETE: "DELETE",
    IDLE: "IDLE",
} as const;
export type FormActionType = (typeof FORM_ACTIONS)[keyof typeof FORM_ACTIONS];
export const IDLE_FORM: FormActionType = FORM_ACTIONS.IDLE;

export type ArticleResType = z.infer<typeof ArticleRes>
export type ArticleListResType = z.infer<typeof ArticleListRes>

export type RefreshTokenBodyType = z.infer<typeof RefreshTokenBody>
export type RefreshTokenResType = z.infer<typeof RefreshTokenRes>
export type LoginResType = z.infer<typeof LoginRes>
export type LoginBodyType = z.infer<typeof LoginBody>