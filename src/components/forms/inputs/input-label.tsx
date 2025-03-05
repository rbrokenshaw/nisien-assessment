type Props = { value: string; required?: boolean };

export const InputLabel = ({ value, required }: Props) => {
  return (
    <label className="block text-gray-700 text-sm">
      {value}
      {required && " *"}
    </label>
  );
};
