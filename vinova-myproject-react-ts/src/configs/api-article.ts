import { ArticleListResType, ArticleResType } from "@/components/constant/type";
import http from "@/lib/http";


const articleApiRequest = {
    listArticle: ({ page, limit, search }: { page: number, limit: number, search?: string }) =>
        http.get<ArticleListResType>(`admins/articles`, {
            params: {
                page,
                limit,
                ...(search ? { search } : {})
            }
        }),
    getArticleById: (id: string) => http.get<ArticleResType>(`admins/articles/${id}`),


}
export default articleApiRequest;