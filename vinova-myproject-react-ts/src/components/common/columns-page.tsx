import { ColumnDef } from "@tanstack/react-table"
import { ArticleListResType, FORM_ACTIONS, FormActionType } from "../constant/type";
import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useUserStore } from "@/hooks/use-store";

export type ColumnDataPageArticle = ArticleListResType["data"][number];

export function columnsArticle(
    openModal: (type: FormActionType, id: string) => void
): ColumnDef<ColumnDataPageArticle>[] {
    return [
        { accessorKey: "id", header: "ID" },
        { accessorKey: "title", header: "Title" },
        { accessorKey: "author", header: "Author" },
        { accessorKey: "category", header: "Category" },
        { accessorKey: "createdAt", header: "Created Date" },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.original.status;
                return (
                    <Badge
                        variant={
                            status === "published"
                                ? "secondary"
                                : status === "draft"
                                    ? "warning"
                                    : "destructive"
                        }
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </Badge>
                );
            },
        },
        {
            accessorKey: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const article = row.original;
                const { setArticleId } = useUserStore();
                return (
                    <div className="flex">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                openModal(FORM_ACTIONS.EDIT, article.id)
                                setArticleId(article.id);
                            }
                            }
                        >
                            <Pencil />
                        </Button>
                        <Button
                            className="ml-3"
                            size="icon"
                            variant="destructive"
                            onClick={() => {
                                openModal(FORM_ACTIONS.DELETE, article.id);
                                setArticleId(article.id);
                            }
                            }>
                            <Trash />
                        </Button>
                    </div >
                );
            },
        },
    ];
}