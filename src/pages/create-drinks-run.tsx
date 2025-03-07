import { useEffect, useState } from "react";
import { useAddDrinkRun } from "../api/drink-runs";
import { IconSpinner } from "../assets/icons/icon-spinner";
import { Banner, BannerType } from "../components/banner";
import { Button, ButtonVariant } from "../components/button";
import { DrinksOrder } from "../components/drinks-order";
import { useUserContext } from "../context/user-context";

export const CreateDrinksRun = () => {
  const { users } = useUserContext();
  const { mutate, isSuccess, isError } = useAddDrinkRun();

  const chooseRunner = () => {
    return participants[Math.floor(Math.random() * participants.length)];
  };

  // Select the runner
  const participants = users.filter((user) => user.selected);
  const [runner, setRunner] = useState(chooseRunner());

  // Arbitrary loading state for suspense!
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  const shuffleDrinkRunner = () => {
    setLoading(true);
    setRunner(chooseRunner());
  };

  const saveDrinkRun = () => {
    mutate({
      participants: participants.map((participant) => ({
        name: participant.firstName,
        userId: participant.id,
        orderId: participant.selectedDrink.id,
      })),
    });
  };

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
      {isSuccess && (
        <div className="w-full mb-4">
          <Banner type={BannerType.SUCCESS}>Drink run saved!</Banner>
        </div>
      )}

      {isError && (
        <div className="w-full mb-4">
          <Banner type={BannerType.ERROR}>
            Oops! There was an error saving the drink run. Please try again
            later.
          </Banner>
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-top gap-5 w-full">
        <h2 className="text-xl text-center sm:text-left w-full">
          ☕ The tea runner is....
          <span className="font-bold">{runner?.firstName}</span>! Get the kettle
          on!
        </h2>

        <div className="flex flex-col-reverse justify-end sm:flex-row gap-2 w-full sm:w-fit h-fit">
          <Button
            onClick={shuffleDrinkRunner}
            variant={ButtonVariant.SECONDARY}
            disabled={isSuccess}
          >
            Shuffle the runner
          </Button>
          <Button onClick={saveDrinkRun} disabled={isSuccess}>
            Save
          </Button>
        </div>
      </div>

      <DrinksOrder participants={participants} />
    </div>
  );
};
