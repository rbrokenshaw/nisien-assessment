import { useParams } from "react-router";

export const DrinksRun = () => {
  const { id } = useParams();

  return <>Drinks Run {id}</>;
};
