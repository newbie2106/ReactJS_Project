import { useState } from "react";
import SaveCancelButtons from "./common/SaveCancelProps";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import ModalForm from "./common/ModalForm";


const Article = () => {

  const [hasChanges, setHasChanges] = useState(false);
  const articles = [
    { id: 1, title: "What is an End of Life Doula?", author: "Chris", category: "End of Life Care", date: "07/08/2024 10:00", status: "Published" },
    { id: 2, title: "Nick 9999", author: "Otis", category: "Prenatal", date: "09/08/2024 10:22", status: "Draft" },
    { id: 3, title: "Why Should I Engage with Some Doulas?", author: "Chris V.", category: "Prenatal", date: "07/08/2024 09:59", status: "Published" },
  ];

  const handleSave = () => {
    console.log("Lưu thay đổi...");
    setHasChanges(false);
  };

  const handleCancel = () => {
    console.log("Hủy thay đổi...");
    setHasChanges(false);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">

        <main className="flex-1 p-6 bg-gray-100 overflow-auto">

          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-end mt-4">
              <SaveCancelButtons onSave={handleSave} onCancel={handleCancel} isDisabled={!hasChanges} />
            </div>
            <table className="w-full border-collapse border border-gray-300 text-black">
              <thead>
                <tr className="bg-gray-300 border border-gray-300">
                  <th className="p-2 text-left border border-gray-300">ID</th>
                  <th className="p-2 text-left border border-gray-300">Title</th>
                  <th className="p-2 text-left border border-gray-300">Author</th>
                  <th className="p-2 text-left border border-gray-300">Category</th>
                  <th className="p-2 text-left border border-gray-300">Created Date</th>
                  <th className="p-2 text-left border border-gray-300">Status</th>
                  <th className="p-2 text-left border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {articles.map((article, index) => (
                  <tr
                    key={article.id}
                    className={`border border-gray-300 ${index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
                      }`}
                  >
                    <td className="p-2 border border-gray-300">{article.id}</td>
                    <td className="p-2 border border-gray-300">{article.title}</td>
                    <td className="p-2 border border-gray-300">{article.author}</td>
                    <td className="p-2 border border-gray-300">{article.category}</td>
                    <td className="p-2 border border-gray-300">{article.date}</td>
                    <td className="p-2 border border-gray-300">
                      <span
                        className={
                          article.status === "Published"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }
                      >
                        {article.status}
                      </span>
                    </td>
                    <td className="p-2 border border-gray-300">
                      <button
                        className="text-blue-500 mr-2 bg-transparent!"
                        onClick={() => setHasChanges(true)}
                      >
                        <AiFillEdit size={32}/>
                      </button>
                      <button className="text-red-500 bg-transparent!">
                        <AiOutlineDelete size={32}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Article;
