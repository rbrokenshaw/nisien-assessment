import { PropsWithChildren } from "react";
import { classNames } from "../helpers/classnames";

export enum ButtonVariant {
  PRIMARY,
  SECONDARY,
}

export enum ButtonSize {
  MEDIUM,
  LARGE,
}

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.MEDIUM,
  disabled = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={classNames(
        "flex gap-2 items-center border rounded-lg font-semibold",
        variant === ButtonVariant.PRIMARY
          ? "bg-primary border-lime-300 hover:bg-lime-200 text-lime-950"
          : "bg-white border-gray-300 hover:bg-gray-100 text-gray-600",
        size === ButtonSize.MEDIUM
          ? "px-3 py-2 text-sm w-fit"
          : "px-4 py-3 text-lg w-full justify-center sm:w-fit",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
