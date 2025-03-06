import { useMutation } from "@tanstack/react-query";

type DrinkRun = {
  participants: { userId: string }[];
};

// ADD DRINK RUN
const addDrinkRun = async (drinkRunData: DrinkRun) => {
  const response = await fetch("/v1/DrinkRun", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(drinkRunData),
  });

  if (!response.ok) {
    throw new Error("Error creating drink run");
  }

  const data = await response.json();
  return data;
};

export const useAddDrinkRun = () => {
  return useMutation({
    mutationFn: (data: DrinkRun) => addDrinkRun(data),
  });
};
