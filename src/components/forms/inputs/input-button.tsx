import { useFormContext } from "react-hook-form";
import { Button, ButtonVariant } from "../../button";

export enum ButtonType {
  Submit = "submit",
  Reset = "reset",
}

type Props = {
  type: ButtonType;
  value: string;
  disabled?: boolean;
  variant?: ButtonVariant;
};

export const InputButton = ({
  type,
  value,
  disabled,
  variant = ButtonVariant.PRIMARY,
}: Props) => {
  const { reset } = useFormContext();

  const handleResetClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    reset();
  };
  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={(event) => type === ButtonType.Reset && handleResetClick(event)}
    >
      {value}
    </Button>
  );
};
