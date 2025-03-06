import { PropsWithChildren } from "react";
import { TableHead } from "./table-head";
import { TableBody } from "./table-body";
import { TableRow } from "./table-row";
import { TableCellHeader } from "./table-cell-header";
import { TableCellBody } from "./table-cell-body";

export const Table = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative overflow-x-auto border border-gray-200 sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-900">
        {children}
      </table>
    </div>
  );
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.CellHeader = TableCellHeader;
Table.CellBody = TableCellBody;
