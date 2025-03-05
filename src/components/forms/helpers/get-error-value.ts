import { FieldErrors, FieldValues } from "react-hook-form";

export const getErrorValue = (obj: FieldErrors<FieldValues>, path: string) => {
  const keys = path.split(".");

  return keys.reduce((acc: any, key: any) => {
    if (key.includes("[")) {
      const [arrayKey, indexStr] = key.split("[");
      const index = parseInt(indexStr.replace("]", ""), 10);
      return acc[arrayKey]?.[index];
    }

    return acc?.[key];
  }, obj);
};
