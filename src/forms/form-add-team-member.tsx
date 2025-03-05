import { useState } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { Link } from "react-router";
import { DrinkOrder, useAddDrinkOrder } from "../api/drink-orders";
import { useAddUser, User, UserResponse } from "../api/users";
import { Banner, BannerType } from "../components/banner";
import { ButtonVariation } from "../components/button";
import { Form } from "../components/forms/form";
import { ButtonType } from "../components/forms/inputs/input-button";
import { FormAddDrinkOrders } from "./form-add-drink-orders";

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

  return (
    <Form defaultValues={defaultValues} onSubmit={handleSubmit}>
      <Banners
        isError={addUserIsError || addDrinkOrderIsError}
        isSuccess={addUserIsSuccess && addDrinkOrderIsSuccess}
      />

      <Form.SectionTitle value="Team member details" />

      <Form.FormField fieldName="firstName">
        <Form.InputLabel value="First Name" required={true} />
        <Form.InputText
          fieldName="firstName"
          validation={{ required: "First name is required" }}
          disabled={addUserIsPending || addDrinkOrderIsPending}
        />
      </Form.FormField>

      <Form.FormField fieldName="lastName">
        <Form.InputLabel value="Last Name" required={true} />
        <Form.InputText
          fieldName="lastName"
          validation={{ required: "Last name is required" }}
          disabled={addUserIsPending || addDrinkOrderIsPending}
        />
      </Form.FormField>

      <FormAddDrinkOrders />

      <div className="flex flex-col-reverse sm:flex-row justify-end w-full gap-2 mt-4">
        <Form.InputButton
          type={ButtonType.Reset}
          value="Reset"
          disabled={addUserIsPending || addDrinkOrderIsPending}
          variation={ButtonVariation.SECONDARY}
        />
        <Form.InputButton
          type={ButtonType.Submit}
          value="Save team member"
          disabled={addUserIsPending || addDrinkOrderIsPending}
        />
      </div>
    </Form>
  );
};

const Banners = ({
  isError,
  isSuccess,
}: {
  isError: boolean;
  isSuccess: boolean;
}) => {
  const { formState } = useFormContext();

  return (
    <>
      {!formState.isDirty && isError && (
        <Banner type={BannerType.ERROR}>
          Oops! There was an error while adding this team member. Please try
          again later.
        </Banner>
      )}

      {!formState.isDirty && isSuccess && (
        <Banner type={BannerType.SUCCESS}>
          <div>
            {`Team Member successfully added! Add another team member below, or `}
            <Link to={"/"} className="font-bold">
              start a tea run!
            </Link>
          </div>
        </Banner>
      )}
    </>
  );
};
