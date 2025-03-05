import { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import { getErrorValue } from "./helpers/get-error-value";

type Props = {
  fieldName: string;
};

export const FormField = ({
  fieldName,
  children,
}: PropsWithChildren<Props>) => {
  const {
    formState: { errors },
  } = useFormContext();

  const error = getErrorValue(errors, fieldName);

  return (
    <div className="flex flex-col gap-2 w-full">
      {children}

      {Object.keys(errors).length > 0 && (
        <p className="text-sm text-red-500 min-h-5">
          {error?.message as string}
        </p>
      )}
    </div>
  );
};
