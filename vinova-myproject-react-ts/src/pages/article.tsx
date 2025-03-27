import { useMemo, useState } from "react";
import ContentHeader from "../components/common/content-header";
import { columnsArticle } from "../components/common/columns-page";
import { DataTable } from "../components/common/data-table";
import { Header } from "@/components/layout/header";
import { useUserStore } from "@/hooks/use-store";
import { useListArticle } from "@/hooks/use-article";

export default function Article() {

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  const { setModalType } = useUserStore();
  const columns = useMemo(() => columnsArticle(setModalType), [setModalType]);
  const data = useListArticle(page, limit, searchTerm)

  const handleSave = () => {
    console.log("Lưu thay đổi...");
  };

  const handleCancel = () => {
    console.log("Hủy thay đổi...");
  };

  return (
    <div>
      <Header
        title="Article"
        buttonLabel="Create Article"
        onSearch={(value) => setSearchTerm(value)}
        onButtonClick={() => console.log("Nhấn nút thêm mới")}
      />

      <div className="p-4 bg-gray-200">
        <div className="bg-white">

          <div className="py-2">
            <ContentHeader onSave={handleSave} onCancel={handleCancel} />
          </div>
          <div className="py-1.5">
            <DataTable columns={columns} data={data?.data?.data ?? []} />
          </div>
        </div>
      </div>
    </div>
  );
}
