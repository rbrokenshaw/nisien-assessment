import { FieldValues } from "react-hook-form";
import { useAddUser, User, UserResponse } from "../api/users";
import { Form } from "../components/forms/form";
import { FormAddDrinkOrders } from "./form-add-drink-orders";
import { ButtonType } from "../components/forms/inputs/input-button";
import { DrinkOrder, useAddDrinkOrder } from "../api/drink-orders";
import { useState } from "react";
import { ButtonVariation } from "../components/button";

export const FormAddTeamMember = () => {
  const [drinkOrders, setDrinkOrders] = useState<DrinkOrder[]>();

  const handleOnAddUserSuccess = (data: UserResponse) => {
    if (drinkOrders && drinkOrders.length > 0) {
      drinkOrders.forEach((order) => {
        mutateDrinkOrder({ userId: data.id, ...order });
      });
    }
  };

  const {
    mutate: mutateUser,
    isPending: addUserIsPending,
    isSuccess: addUserIsSuccess,
    isError: addUserIsError,
  } = useAddUser(handleOnAddUserSuccess);

  const {
    mutate: mutateDrinkOrder,
    isPending: addDrinkOrderIsPending,
    isSuccess: addDrinkOrderIsSuccess,
    isError: addDrinkOrderIsError,
  } = useAddDrinkOrder();

  const defaultValues = {
    firstName: "",
    lastName: "",
    drinkOrders: [
      {
        name: "",
        type: "",
        description: "",
      },
    ],
  };

  const handleSubmit = (data: FieldValues) => {
    setDrinkOrders(data.drinkOrders);
    mutateUser(data as User);
  };

  if (addUserIsPending || addDrinkOrderIsPending) {
    return <div>Saving Team Member...</div>;
  }

  if (addUserIsError || addDrinkOrderIsError) {
    return <div>Error saving Team Member...</div>;
  }

  if (addUserIsSuccess && addDrinkOrderIsSuccess) {
    return <div>Team Member saved successfully</div>;
  }

  return (
    <Form defaultValues={defaultValues} onSubmit={handleSubmit}>
      <Form.SectionTitle value="Team Member Details" />

      <Form.FormField fieldName="firstName">
        <Form.InputLabel value="First Name" />
        <Form.InputText
          fieldName="firstName"
          validation={{ required: "First name is required" }}
          disabled={addUserIsPending || addDrinkOrderIsPending}
        />
      </Form.FormField>

      <Form.FormField fieldName="lastName">
        <Form.InputLabel value="Last Name" />
        <Form.InputText
          fieldName="lastName"
          validation={{ required: "Last name is required" }}
          disabled={addUserIsPending || addDrinkOrderIsPending}
        />
      </Form.FormField>

      <Form.SectionTitle value="Drink Orders" />

      <FormAddDrinkOrders />

      <div className="flex justify-end w-full gap-2">
        <Form.InputButton
          type={ButtonType.Reset}
          value="Reset"
          disabled={addUserIsPending || addDrinkOrderIsPending}
          variation={ButtonVariation.SECONDARY}
        />
        <Form.InputButton
          type={ButtonType.Submit}
          value="Save Team Member"
          disabled={addUserIsPending || addDrinkOrderIsPending}
        />
      </div>
    </Form>
  );
};
