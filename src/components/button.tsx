import { PropsWithChildren } from "react";
import { classNames } from "../helpers/classnames";

export enum ButtonVariation {
  PRIMARY,
  PRIMARY_SMALL,
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
        "flex gap-2 items-center border cursor-pointer px-3 py-2 rounded-md font-semibold w-fit",
        variation === ButtonVariation.PRIMARY ||
          variation === ButtonVariation.PRIMARY_SMALL
          ? "bg-primary border-lime-400 hover:bg-lime-200"
          : "bg-white border-gray-400 hover:bg-gray-100 text-gray-600",
        variation === ButtonVariation.PRIMARY_SMALL ? "text-sm" : "",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
