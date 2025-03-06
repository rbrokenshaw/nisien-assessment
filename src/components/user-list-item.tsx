import { useNavigate } from "react-router";
import { UserToSelect } from "../context/user-context";
import { classNames } from "../helpers/classnames";
import { Button } from "./button";
import { Dropdown } from "./dropdown";

type Props = {
  user: UserToSelect;
  handleCheckboxClick: (userId: string) => void;
  handleDropdownChange: (userId: string, value: any) => void;
};

export const UserListItem = ({
  user,
  handleCheckboxClick,
  handleDropdownChange,
}: Props) => {
  return (
    <div
      key={user.id}
      className={classNames(
        "flex flex-col sm:flex-row justify-between items-center gap-2 px-4 py-2 rounded-lg sm:h-12 w-full",
        user.selected ? "bg-lime-300" : "bg-lime-100",
      )}
    >
      <div className="flex items-center justify-between gap-2 w-full">
        <div
          className="flex items-center gap-2 max-w-full truncate"
          onClick={() => handleCheckboxClick(user.id)}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 accent-black ring-0 cursor-pointer rounded-2xl"
              checked={user.selected}
              onChange={() => handleCheckboxClick(user.id)}
            />
          </div>

          <span className="font-semibold truncate w-full sm:max-w-[200px] cursor-pointer">
            {user.firstName} {user.lastName}
          </span>
        </div>

        <div className="sm:hidden">
          <EditButton userId={user.id} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
        <div className="flex items-center gap-2 w-full">
          <span className="text-sm">Drink:</span>

          <Dropdown
            options={user.drinkOrders}
            value={user.selectedDrink}
            onChange={(value) => handleDropdownChange(user.id, value)}
          />
        </div>

        <div className="hidden sm:flex">
          <EditButton userId={user.id} />
        </div>
      </div>
    </div>
  );
};

const EditButton = ({ userId }: { userId: string }) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(`/edit-team-member/${userId}`)}>
      Edit
    </Button>
  );
};
