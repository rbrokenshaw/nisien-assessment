import { useEffect, useState } from "react";
import { useUserContext } from "../context/user-context";
import { DrinksOrder } from "../components/drinks-order";
import { useAddDrinkRun } from "../api/drink-runs";
import { IconSpinner } from "../assets/icons/icon-spinner";

export const CreateDrinksRun = () => {
  const { users } = useUserContext();
  const { mutate } = useAddDrinkRun();

  // Select the runner
  const participants = users.filter((user) => user.selected);
  const [runner, _] = useState(
    participants[Math.floor(Math.random() * participants.length)],
  );
  // Arbitrary loading state for suspense!
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);

      mutate({
        participants: participants.map((participant) => ({
          name: participant.firstName,
          userId: participant.id,
          orderId: participant.selectedDrink.id,
        })),
      });
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center w-full">
        <div className="w-5 h-5 animate-spin text-lime-800">
          <IconSpinner />
        </div>
        <span className="text-center">
          Hold tight! Brewing the tea runner...
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <h2 className="text-xl text-center">
        ☕ The tea runner is....
        <span className="font-bold">{runner?.firstName}</span>! Get the kettle
        on!
      </h2>

      <DrinksOrder participants={participants} />
    </div>
  );
};
