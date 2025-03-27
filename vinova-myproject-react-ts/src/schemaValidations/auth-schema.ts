import { z } from "zod"



const nonEmptyString = z.string().min(1, "Không được để trống");

export const LoginBody = z
    .object({
        username: nonEmptyString,
        password: nonEmptyString.min(6).max(20)
    }).strict()


export const LoginRes = z.object({
    message: nonEmptyString,
    data: z.object({
        admin: z.object({
            id: nonEmptyString,
            username: nonEmptyString,
            firstName: z.string(),
            lastName: z.string(),
            role: z.string(),
            status: z.string(),
            email: z.string(),

        }),
        tokens: z.object({
            accessToken: nonEmptyString,
            refreshToken: nonEmptyString
        })
    })
});

export const RefreshTokenBody = z
    .object({
        refreshToken: nonEmptyString
    }).strict()

export const RefreshTokenRes = z.object({
    data: z.object({
        accessToken: nonEmptyString,
        refreshToken: nonEmptyString
    }),
    message: z.string()
})
