import { useMutation, useQueryClient } from "@tanstack/react-query";

export type DrinkOrder = { name: string; type: string; description: string };

export type DrinkOrderData = DrinkOrder & {
  userId: string;
};

export type DrinkOrderResponse = DrinkOrderData & {
  id: string;
  additionalSpecification: {
    description: string;
  };
};

// ADD DRINK ORDER
const addDrinkOrder = async (orderData: DrinkOrderData) => {
  const payload = {
    userId: orderData.userId,
    name: orderData.name,
    type: orderData.type,
    additionalSpecification: {
      description: orderData.description,
    },
  };

  const response = await fetch("/v1/DrinkOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Error creating User");
  }

  const data = await response.json();
  return data;
};

export const useAddDrinkOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DrinkOrderData) =>
      addDrinkOrder(data).then((response) => response.json),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
