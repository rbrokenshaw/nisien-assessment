import { PropsWithChildren } from "react";

export const TableCellHeader = ({ children }: PropsWithChildren) => {
  return (
    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
      {children}
    </th>
  );
};
