import { useEffect, useState } from "react";
import { Header } from "../layout/Header";
import ContentHeader from "../common/content-header";
import { ColumnDataPageArticle, columnsArticle } from "../common/columns-page";
import { DataTable } from "../common/data-table";
import { getArticle } from "@/configs/APIs";

export default function Article() {

  // Em xử lý mấy cái này ở đây được không ạ anh

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<ColumnDataPageArticle[]>([]);

  const handleSave = () => {
    console.log("Lưu thay đổi...");
  };

  const handleCancel = () => {
    console.log("Hủy thay đổi...");
  };


  useEffect(() => {
    const fetchDataArticle = async () => {
      try {
        const response = await getArticle();
        console.log("API Response:", response);
        const articles = response.articles.map((item: any) => ({
          id: item.id,
          title: item.title,
          author: item.author,
          category: item.category,
          createdDate: item.created_at,
          status: item.status,
          action: "Edit/Delete"
        }));

        setData(articles);
      } catch (error) {
        console.error("Lỗi lấy dữ liệu:", error);
      } finally {
        // set isLoading sau
      }
    };

    fetchDataArticle();
  }, []);

  //  ============ &&& =============

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
            <DataTable columns={columnsArticle} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
