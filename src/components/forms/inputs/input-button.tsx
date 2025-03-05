import { useFormContext } from "react-hook-form";
import { classNames } from "../../../helpers/classnames";
import { ButtonVariation } from "../../button";

export enum ButtonType {
  Submit = "submit",
  Reset = "reset",
}

type Props = {
  type: ButtonType;
  value: string;
  disabled?: boolean;
  variation?: ButtonVariation;
};

export const InputButton = ({
  type,
  value,
  disabled,
  variation = ButtonVariation.PRIMARY,
}: Props) => {
  const { reset } = useFormContext();

  const handleResetClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    reset();
  };
  return (
    <input
      className={classNames(
        "border cursor-pointer px-3 py-2 rounded-lg font-semibold text-sm",
        variation === ButtonVariation.PRIMARY
          ? "bg-primary border-lime-300 hover:bg-lime-200 text-lime-900"
          : "bg-white border-gray-300 hover:bg-gray-100 text-gray-600",
      )}
      type={type === ButtonType.Reset ? "button" : type}
      value={value}
      disabled={disabled}
      onClick={(event) => type === ButtonType.Reset && handleResetClick(event)}
    />
  );
};
