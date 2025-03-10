import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { IconUsersSlash } from "../assets/icons/icon-users-slash";
import { Button, ButtonVariant } from "../components/button";
import { UserListItem } from "../components/user-list-item";
import { UserToSelect, useUserContext } from "../context/user-context";
import { DropdownOption } from "../components/dropdown";

export const Home = () => {
  const navigate = useNavigate();
  const { users, setUsers, isLoadingUsers } = useUserContext();

  useEffect(() => {
    setUsers(users.map((user) => ({ ...user, selected: false })));
  }, []);

  const handleCheckboxClick = (userId: string) => {
    const updatedUsers = users?.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          selected: !user.selected,
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const handleDropdownChange = (userId: string, value: DropdownOption) => {
    const matchingDrink = users
      .find((user) => user.id === userId)
      ?.drinkOrders.find((drink) => drink.id === value.value);

    if (matchingDrink) {
      const updatedUsers = users?.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            selectedDrink: matchingDrink,
          };
        }
        return user;
      });

      setUsers(updatedUsers);
    }
  };

  if (isLoadingUsers) {
    return <div className="flex justify-center w-full text-sm">Loading...</div>;
  }

  if (users?.length === 0) {
    return (
      <div className="flex flex-wrap justify-center">
        <div className="w-6 mr-2">
          <IconUsersSlash />
        </div>
        <div className="flex items-center justify-center flex-wrap text-center">
          You have not created any team members yet.
          <Link to="/add-team-member" className="font-bold mx-1 w-fit">
            Click here
          </Link>
          to start!
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:flex-start sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">New Tea Run</h2>

          <p className="text-sm">
            Select at least two participating team members, choose their drinks,
            then click 'Start a Tea Run!' to find the lucky tea runner!
          </p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-2 items-start">
          <Button
            onClick={() => navigate("/drink-run-history")}
            variant={ButtonVariant.SECONDARY}
          >
            Run History
          </Button>
          <Button
            onClick={() => navigate("/create-drinks-run")}
            disabled={users?.filter((user) => user.selected).length < 2}
          >
            ☕ Start a Tea Run!
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {users?.map((user: UserToSelect) => {
          return (
            <UserListItem
              key={user.id}
              user={user}
              handleCheckboxClick={handleCheckboxClick}
              handleDropdownChange={handleDropdownChange}
            />
          );
        })}
      </div>
    </div>
  );
};
