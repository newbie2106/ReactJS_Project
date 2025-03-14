import { Button } from "@/components/ui/button";

interface ContentHeaderProps {
  onSave: () => void;
  onCancel: () => void;
}

export default function ContentHeader({ onSave, onCancel }: ContentHeaderProps) {
  return (
    <div className="flex flex-col items-center bg-white">

      <p className="text-gray-500 text-sm text-center mb-4">
        Drag and drop to rearrange, then click 'Save' to apply changes.
      </p>

      <div className="flex space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="customButton" onClick={onSave}>Save</Button>
      </div>
    </div>
  );
}
