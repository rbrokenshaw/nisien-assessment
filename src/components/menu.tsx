import { useLocation, useNavigate } from "react-router";
import { Button, ButtonVariation } from "./button";
import { IconPlus } from "../assets/icons/icon-plus";

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
      <h1 className="text-3xl font-bold text-white">
        Nisien Tea Round Picker &#9749;
      </h1>
      <Button
        onClick={handleButtonClick}
        variation={
          !isHome ? ButtonVariation.SECONDARY : ButtonVariation.PRIMARY
        }
      >
        {isHome && (
          <div className="w-3">
            <IconPlus />
          </div>
        )}
        {isHome ? "Add a Team Member" : "Cancel"}
      </Button>
    </div>
  );
};
