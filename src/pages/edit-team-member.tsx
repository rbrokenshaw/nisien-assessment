import { FieldValues } from "react-hook-form";
import { useParams } from "react-router";
import { DrinkOrder, useAddDrinkOrder } from "../api/drink-orders";
import { ButtonVariant } from "../components/button";
import { Form } from "../components/forms/form";
import { ButtonType } from "../components/forms/inputs/input-button";
import { Table } from "../components/table/table";
import { useUserContext } from "../context/user-context";
import { FormAddDrinkOrders } from "../forms/form-add-drink-orders";

export const EditTeamMember = () => {
  const { id: userId } = useParams();
  const { users } = useUserContext();

  const { mutate, isPending, isSuccess, isError } = useAddDrinkOrder();

  const userToEdit = users.find((user) => user.id === userId);

  const defaultValues = {
    firstName: userToEdit?.firstName,
    drinkOrders: [
      {
        name: "",
        type: "",
        description: "",
      },
    ],
  };

  const handleSubmit = (data: FieldValues) => {
    if (userId) {
      data.drinkOrders.forEach((order: DrinkOrder) => {
        mutate({ userId, ...order });
      });
    }
  };

  if (!userToEdit) {
    return <h1>User not found</h1>;
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold">
        {userToEdit?.firstName} {userToEdit?.lastName}
      </h2>

      <h3 className="font-semibold">Drink Orders</h3>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.CellHeader>Name</Table.CellHeader>
            <Table.CellHeader>Type</Table.CellHeader>
            <Table.CellHeader>Description</Table.CellHeader>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {userToEdit.drinkOrders.map((drink) => {
            return (
              <Table.Row key={drink.id}>
                <Table.CellBody>{drink.name}</Table.CellBody>
                <Table.CellBody>{drink.type}</Table.CellBody>
                <Table.CellBody>
                  {drink.additionalSpecification.description}
                </Table.CellBody>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <Form defaultValues={defaultValues} onSubmit={handleSubmit}>
        <Form.BannerGroup
          isError={isError}
          isSuccess={isSuccess}
          errorMessage="Oops! There was an error while adding these drink orders. Please try
          again later."
          successMessage="Drink orders added successfully!"
        />
        <h3 className="font-semibold mt-4">Add drink orders</h3>
        <FormAddDrinkOrders showTitle={false} />

        <div className="flex flex-col-reverse sm:flex-row justify-end w-full gap-2 mt-4">
          <Form.InputButton
            type={ButtonType.Reset}
            value="Reset"
            disabled={isPending}
            variant={ButtonVariant.SECONDARY}
          />
          <Form.InputButton
            type={ButtonType.Submit}
            value="Save drink orders"
            disabled={isPending}
          />
        </div>
      </Form>
    </div>
  );
};
