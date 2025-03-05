import { PropsWithChildren } from "react";
import { FieldErrors, FieldValues, useFormContext } from "react-hook-form";

function getErrorValue(obj: FieldErrors<FieldValues>, path: string) {
  const keys = path.split(".");

  return keys.reduce((acc: any, key: any) => {
    if (key.includes("[")) {
      const [arrayKey, indexStr] = key.split("[");
      const index = parseInt(indexStr.replace("]", ""), 10);
      return acc[arrayKey]?.[index];
    }

    return acc?.[key];
  }, obj);
}

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
