import { useMutation, useQuery } from "@tanstack/react-query";

export type User = {
  firstName: string;
  lastName: string;
};

export type UserResponse = User & {
  id: string;
};

// GET USERS
const getUsers = async (): Promise<UserResponse[]> => {
  const response = await fetch("/v1/Users", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching Users");
  }

  const data = await response.json();
  return data;
};

export const useGetUsers = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    placeholderData: [],
  });

  return { isLoading, data };
};

// ADD USER
const addUser = async (userData: User) => {
  const response = await fetch("/v1/Users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Error creating User");
  }

  const data = await response.json();
  return data;
};

export const useAddUser = (onSuccess: (data: UserResponse) => void) => {
  return useMutation({
    mutationFn: (data: User) => addUser(data),
    onSuccess: (data) => onSuccess(data),
  });
};
