import { useFieldArray, useFormContext } from "react-hook-form";
import { Form } from "../components/forms/form";
import { Button, ButtonVariation } from "../components/button";
import { IconCross } from "../assets/icons/icon-cross";
import { classNames } from "../helpers/classnames";
import { IconPlus } from "../assets/icons/icon-plus";

export const FormAddDrinkOrders = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "drinkOrders",
    control,
  });

  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    append({ name: "", type: "", description: "" });
  };

  const handleRemoveClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    event.preventDefault();
    remove(index);
  };

  return (
    <>
      {fields.map((field, index) => (
        <div className="flex gap-4 items-center justify-start w-full">
          <div className="flex gap-4 items-center w-full" key={field.id}>
            <Form.FormField fieldName={`drinkOrders.${index}.name`}>
              <Form.InputLabel value="Drink Name" />
              <Form.InputText
                key={`name-${field.id}-${index}`}
                fieldName={`drinkOrders.${index}.name`}
                validation={{ required: "Drink name is required" }}
              />
            </Form.FormField>

            <Form.FormField fieldName={`drinkOrders.${index}.type`}>
              <Form.InputLabel value="Drink Type" />
              <Form.InputText
                key={`type-${field.id}-${index}`}
                fieldName={`drinkOrders.${index}.type`}
                validation={{ required: "Drink type is required" }}
              />
            </Form.FormField>

            <Form.FormField fieldName={`drinkOrders.${index}.description`}>
              <Form.InputLabel value="Drink Description" />
              <Form.InputText
                key={`description-${field.id}-${index}`}
                fieldName={`drinkOrders.${index}.description`}
              />
            </Form.FormField>
          </div>

          <button
            className={classNames(
              "flex gap-2 items-center mt-8 cursor-pointer text-sm font-semibold",
              index === 0 ? "invisible" : "",
            )}
            onClick={(event) => handleRemoveClick(event, index)}
            disabled={index === 0}
          >
            <div className="w-4">
              <IconCross />
            </div>
            Remove
          </button>
        </div>
      ))}

      <Button
        onClick={handleAddClick}
        variation={ButtonVariation.PRIMARY_SMALL}
      >
        <div className="w-4">
          <IconPlus />
        </div>
        Add Drink Order
      </Button>
    </>
  );
};
