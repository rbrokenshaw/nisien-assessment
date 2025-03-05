import { useMutation } from "@tanstack/react-query";

export type DrinkOrder = { name: string; type: string; description: string };

export type DrinkOrderData = DrinkOrder & {
  userId: string;
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
  return useMutation({
    mutationFn: (data: DrinkOrderData) =>
      addDrinkOrder(data).then((response) => response.json),
  });
};
