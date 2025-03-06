import { useMutation, useQuery } from "@tanstack/react-query";
import { DrinkOrderResponse } from "../drink-orders";

type DrinkRun = {
  participants: { userId: string }[];
};

type DrinkRunResponse = {
  id: string;
  orders: DrinkOrderResponse[];
};

// GET DRINK RUNS
const getDrinkRuns = async (): Promise<DrinkRunResponse[]> => {
  const response = await fetch("/v1/DrinkRun", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching drink runs");
  }

  const data = await response.json();
  return data;
};

export const useGetDrinkRuns = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["drinkRuns"],
    queryFn: getDrinkRuns,
    placeholderData: [],
  });

  return { isLoading, data };
};

// GET DRINK RUN
const getDrinkRun = async (
  drinkRunId: string | undefined,
): Promise<DrinkRunResponse> => {
  const response = await fetch(`/v1/DrinkRun/${drinkRunId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching drink run");
  }

  const data = await response.json();
  return data;
};

export const useGetDrinkRun = (drinkRunId: string | undefined) => {
  const { isLoading, data } = useQuery({
    queryKey: ["drinkRuns", drinkRunId],
    queryFn: () => getDrinkRun(drinkRunId),
    enabled: !!drinkRunId,
  });

  return { isLoading, data };
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
