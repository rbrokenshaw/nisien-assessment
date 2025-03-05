import { useFormContext } from "react-hook-form";

type Props = {
  fieldName: string;
  disabled?: boolean;
  validation?: Record<string, unknown>;
};

export const InputText = ({ fieldName, disabled, validation }: Props) => {
  const { register } = useFormContext();
  return (
    <input
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
      disabled={disabled}
      {...register(fieldName, { ...validation })}
    />
  );
};
