import React from "react";

interface TableProps {
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 text-black">
      {children}
    </table>
  );
};
