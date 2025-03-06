import { PropsWithChildren } from "react";

export const TableHead = ({ children }: PropsWithChildren) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      {children}
    </thead>
  );
};
