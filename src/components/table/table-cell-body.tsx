import { PropsWithChildren } from "react";

export const TableCellBody = ({ children }: PropsWithChildren) => {
  return <td className="px-5 py-2">{children}</td>;
};
