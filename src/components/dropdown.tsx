import Select, { StylesConfig } from "react-select";

export type DropdownOption = {
  label: string;
  value: string;
};

type Props = {
  options: DropdownOption[];
  value?: DropdownOption;
  onChange: (value: any) => void;
};

export const Dropdown = ({ options, value, onChange }: Props) => {
  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
    option: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
  };

  return (
    <Select
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "black",
        },
      })}
      styles={customStyles}
      className="cursor-pointer w-full"
      options={options}
      value={value}
      onChange={(value) => onChange(value)}
    />
  );
};
