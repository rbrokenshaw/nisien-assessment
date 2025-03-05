import { useLocation, useNavigate } from "react-router";
import { IconUserPlus } from "../assets/icons/icon-user-plus";
import { Button } from "./button";

export const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const handleButtonClick = () => {
    if (isHome) {
      navigate("/add-team-member");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center px-8 py-4 border-b mb-4 bg-black">
      <h1 className="text-3xl font-semibold text-white">
        Nisien Tea Round Picker
      </h1>
      <Button onClick={handleButtonClick}>
        {isHome && (
          <div className="w-4">
            <IconUserPlus />
          </div>
        )}
        {isHome ? "Add a Team Member" : "☕ Start a Tea Run"}
      </Button>
    </div>
  );
};
