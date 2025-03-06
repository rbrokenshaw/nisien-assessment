import { createContext, useContext, useEffect, useState } from "react";
import { useGetUsers, User, UserResponse } from "../api/users";
import { DropdownOption } from "../components/dropdown";

type UserContextValues = {
  users: UserToSelect[];
  setUsers: React.Dispatch<React.SetStateAction<UserToSelect[]>>;
  isLoadingUsers: boolean;
};

type DrinkOrder = DropdownOption & {
  id: string;
  name: string;
  type: string;
  additionalSpecification: {
    description: string;
  };
};

export type UserToSelect = User & {
  id: string;
  selected: boolean;
  selectedDrink: DrinkOrder;
  drinkOrders: DrinkOrder[];
};

const UserContext = createContext<UserContextValues | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, data } = useGetUsers();

  const [users, setUsers] = useState<UserToSelect[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(
        data.map((user: UserResponse) => {
          const drinkOrders = user.drinkOrders.map((drink) => {
            return {
              label: drink.name,
              value: drink.id,
              ...drink,
            };
          });

          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            drinkOrders: drinkOrders,
            selected: false,
            selectedDrink: drinkOrders[0],
          };
        }),
      );
    }
  }, [data]);

  const value = {
    users,
    setUsers,
    isLoadingUsers: isLoading,
  };
  return (
    <UserContext.Provider value={{ ...value }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
