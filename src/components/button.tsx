import { PropsWithChildren } from "react";
import { classNames } from "../helpers/classnames";

export enum ButtonVariation {
  PRIMARY,
  SECONDARY,
}

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variation?: ButtonVariation;
};

export const Button = ({
  variation = ButtonVariation.PRIMARY,
  onClick,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={classNames(
        "flex gap-2 items-center border cursor-pointer px-3 py-2 rounded-lg font-semibold w-fit text-sm",
        variation === ButtonVariation.PRIMARY
          ? "bg-primary border-lime-300 hover:bg-lime-200 text-lime-900"
          : "bg-white border-gray-300 hover:bg-gray-100 text-gray-600",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
