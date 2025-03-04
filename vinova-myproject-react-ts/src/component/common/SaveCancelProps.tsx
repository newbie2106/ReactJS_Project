import React from "react";

interface SaveCancelProps {
  onSave: () => void;
  onCancel: () => void;
  isDisabled?: boolean; // Nếu cần disable nút Save
}

const SaveCancelButtons: React.FC<SaveCancelProps> = ({ onSave, onCancel, isDisabled = false }) => {
  return (
    <div className="bg-white m-auto p-2">
      <p className="text-black">Drag and drop to rearrange, then click 'Save' to apply changes.</p>
      <div className="flex gap-2 mt-4 pt-2 pb-4 justify-center">

        <button
          className="px-8! py-3! border border-purple-600! rounded-md bg-white! text-purple-600 hover:bg-purple-100!"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className={`px-8! py-3! rounded-md ${isDisabled ? "bg-purple-600! hover:bg-purple-800! text-white cursor-not-allowed" : "bg-gray-800 text-white! hover:bg-gray-900"}`}
          onClick={onSave}
          disabled={isDisabled}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SaveCancelButtons;
