import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        status: "Published",
        category: "End of Life Care",
        duration: "",
        image: null as string | null,
        content: "",
    });

    const categories = ["End of Life Care", "Prenatal", "Postnatal"];
    const statuses = ["Published", "Unpublished", "Draft"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData({ ...formData, image: URL.createObjectURL(file) });
        }
    };

    return (
        <div className="fixed inset-0 flex justify-end bg-black/10 backdrop-blur-sm">
            <div className="bg-white w-1/3 h-full shadow-lg p-6 flex flex-col text-gray-300">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-black">{formData.title || "Create New Entry"}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-black">
                        <AiOutlineClose size={24} />
                    </button>
                </div>

                <div className="flex flex-col gap-4 flex-grow overflow-auto">
                    <label className="text-black">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        className="border p-2 rounded w-full placeholder-gray-200 text-black"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <label className="text-black">Author</label>
                    <input
                        type="text"
                        name="author"
                        placeholder="Enter author"
                        className="border p-2 rounded w-full placeholder-gray-200 text-black"
                        value={formData.author}
                        onChange={handleChange}
                    />

                    <label className="text-black">Status</label>
                    <select
                        name="status"
                        className="border p-2 rounded w-full text-black"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        {statuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>

                    <label className="text-black">Category</label>
                    <select
                        name="category"
                        className="border p-2 rounded w-full text-black"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>

                    <label className="text-black">Duration (minutes)</label>
                    <input
                        type="number"
                        name="duration"
                        placeholder="Enter duration"
                        className="border p-2 rounded w-full placeholder-gray-200 text-black"
                        value={formData.duration}
                        onChange={handleChange}
                    />

                    <label className="text-black">Upload Image</label>
                    <input
                        type="file"
                        className="border p-2 rounded w-full text-black"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {formData.image && <img src={formData.image} alt="Preview" className="w-full h-40 object-cover mt-2" />}

                    <label className="text-black">Content</label>
                    <textarea
                        name="content"
                        placeholder="Enter content"
                        className="border p-2 rounded w-full h-32 placeholder-gray-200 text-black"
                        value={formData.content}
                        onChange={handleChange}
                    />
                </div>

                <button className="bg-purple-600 text-white p-3 rounded-md w-full mt-4">
                    Create
                </button>
            </div>
        </div>
    );

};

export default ModalForm;