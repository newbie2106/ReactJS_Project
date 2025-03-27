import { format, parseISO } from 'date-fns';
import z from 'zod'

// Dữ liệu nhận từ request khi tạo bài viết
export const ArticleBody = z.object({
    title: z.string(),
    content: z.string(),
    picture: z.string(),
    status: z.string(),
    timeToRead: z.string(),
    categoryId: z.union([
        z.string(),
        z.object({ id: z.string(), name: z.string() })
    ]).transform((category) => typeof category === "string" ? category : category.id),
    author: z.string(),
});


// Dữ liệu bài viết từ API sau khi lưu vào database
export const ArticleSchema = z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    picture: z.object({
        createAt: z.string().optional(),
        id: z.string(),
        uri: z.string(),
        type: z.string(),
    }).nullable(),
    content: z.string(),
    status: z.string(),
    author: z.string(),
    category: z.object({
        id: z.string(),
        name: z.string(),
    }).transform((category) => category.name),
    createdAt: z.string().transform((dateStr) => {
        const date = parseISO(dateStr);
        return format(date, "dd/MM/yyyy HH:mm");
    }),
    type: z.string(),
});
export const MetadataSchema = z.object({
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
    totalCount: z.number(),
    hasNextPage: z.boolean(),
});

export const ArticleRes = z.object({
    data: ArticleSchema,
    message: z.string()
})
export const ArticleListRes = z.object({
    data: z.array(ArticleSchema),
    message: z.string(),
    metadata: MetadataSchema,
});

export const ArticleParams = z.object({
    page: z.number(),
    limit: z.number(),

})