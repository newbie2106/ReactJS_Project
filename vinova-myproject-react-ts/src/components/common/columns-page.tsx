import { getArticle } from "@/configs/APIs"
import { ColumnDef } from "@tanstack/react-table"

export type ColumnDataPageArticle = {
    id: string
    title: string
    author: string
    category: string
    createdDate: string
    status: string
    action: string
}

export const columnsArticle: ColumnDef<ColumnDataPageArticle>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "author", header: "Author" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "createdDate", header: "Created Date" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "action", header: "Action" },
];

export type DataPage2 = {
    id: string
    packageName: string
    status: string
    createdOn: string
}

export const columnsPage2: ColumnDef<DataPage2>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "packageName", header: "Package Name" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "createdOn", header: "Created On" },
    { accessorKey: "action", header: "Action" },
]


export type DataPage3 = {
    slug: string
    category: string
    required: boolean
    title: string
    status: string
}

export const columnsPage3: ColumnDef<DataPage3>[] = [
    { accessorKey: "slug", header: "Slug" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "required", header: "Required" },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "action", header: "Action" },
]