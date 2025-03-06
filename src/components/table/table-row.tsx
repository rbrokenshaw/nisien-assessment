import { PropsWithChildren } from "react";

export const TableRow = ({ children }: PropsWithChildren) => {
  return (
    <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
      {children}
    </tr>
  );
};
