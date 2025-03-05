import { Menu } from "./menu";

export const LayoutTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Menu />
      <div className="m-8 bg-white p-8 rounded-lg">{children}</div>
    </div>
  );
};
