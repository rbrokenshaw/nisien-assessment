import { useFieldArray, useFormContext } from "react-hook-form";
import { IconCross } from "../assets/icons/icon-cross";
import { IconPlus } from "../assets/icons/icon-plus";
import { Button } from "../components/button";
import { Form } from "../components/forms/form";
import { classNames } from "../helpers/classnames";

export const FormAddDrinkOrders = () => {
  const { watch, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "drinkOrders",
    control,
  });

  const firstName = watch("firstName");
  const drinkOrders = watch("drinkOrders");

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
    <div className="flex flex-col gap-4 mt-5">
      <Form.SectionTitle
        value={`${firstName ? firstName : "Member"}'s drink order${drinkOrders.length > 1 ? "s" : ""}`}
      />

      {fields.map((field, index) => (
        <div
          className="flex gap-4 items-center justify-start w-full border-b border-gray-200 pb-5"
          key={field.id}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
            <Form.FormField fieldName={`drinkOrders.${index}.name`}>
              <Form.InputLabel value="Drink Name" required={true} />
              <Form.InputText
                key={`name-${field.id}-${index}`}
                fieldName={`drinkOrders.${index}.name`}
                validation={{
                  required: "Drink name is required",
                  maxLength: {
                    value: 50,
                    message: "Drink name may be no more than 50 characters",
                  },
                }}
                placeholder="e.g. Tea, Coffee, Water"
              />
            </Form.FormField>

            <Form.FormField fieldName={`drinkOrders.${index}.type`}>
              <Form.InputLabel value="Drink Type" required={true} />
              <Form.InputText
                key={`type-${field.id}-${index}`}
                fieldName={`drinkOrders.${index}.type`}
                validation={{
                  required: "Drink type is required",
                  maxLength: {
                    value: 50,
                    message: "Drink type may be no more than 50 characters",
                  },
                }}
                placeholder="e.g. Earl Grey, Cappuccino"
              />
            </Form.FormField>

            <Form.FormField fieldName={`drinkOrders.${index}.description`}>
              <Form.InputLabel value="Drink Description" />
              <Form.InputText
                key={`description-${field.id}-${index}`}
                fieldName={`drinkOrders.${index}.description`}
                placeholder="e.g. Milk, two sugars, vanilla syrup"
                validation={{
                  maxLength: {
                    value: 100,
                    message: "Description may be no more than 100 characters",
                  },
                }}
              />
            </Form.FormField>
          </div>

          <button
            className={classNames(
              "flex gap-2 items-center mt-8  text-sm font-semibold",
              index === 0
                ? "text-gray-400 cursor-not-allowed"
                : "cursor-pointer",
            )}
            onClick={(event) => handleRemoveClick(event, index)}
            disabled={index === 0}
          >
            <div
              className={classNames("w-3", index === 0 ? "text-gray-400" : "")}
            >
              <IconCross />
            </div>
            Remove
          </button>
        </div>
      ))}

      <Button onClick={handleAddClick}>
        <div className="w-3">
          <IconPlus />
        </div>
        Add another drink order
      </Button>
    </div>
  );
};
