import { PropsWithChildren } from "react";
import { classNames } from "../helpers/classnames";

export enum ButtonVariant {
  PRIMARY,
  SECONDARY,
}

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: ButtonVariant;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  variant = ButtonVariant.PRIMARY,
  disabled = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={classNames(
        "flex gap-2 items-center justify-center border rounded-lg font-semibold text-sm px-3 py-2 text-nowrap w-full sm:w-fit",
        variant === ButtonVariant.PRIMARY
          ? "bg-primary border-lime-300 hover:bg-lime-200 text-lime-950"
          : "bg-white border-gray-300 hover:bg-gray-100 text-gray-600",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
