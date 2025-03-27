import { ArticleListResType, ArticleResType } from "@/components/constant/type"
import articleApiRequest from "@/configs/api-article"
import { ArticleListRes } from "@/schemaValidations/article-schema"
import { useQuery } from "@tanstack/react-query"


export const useListArticle = (page: number, limit: number, search: string) => {
    return useQuery<ArticleListResType>({
        queryKey: ["articles", page, limit, search],
        queryFn: async () => {
            const response = await articleApiRequest.listArticle({
                page,
                limit,
                search,
            });

            return ArticleListRes.parse(response.payload);
        },
        placeholderData: (previousData) => previousData

    });
};


export const useArticleById = (articleId?: string) => {
    return useQuery<ArticleResType, Error>({
      queryKey: ["article", articleId],
      queryFn: async () => {
        if (!articleId) {
          throw new Error("articleId is required");
        }
        const response = await articleApiRequest.getArticleById(articleId);
        return response.payload;
      },
      enabled: Boolean(articleId), // Không gọi API nếu articleId là undefined
    });
  };