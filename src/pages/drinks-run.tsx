import { useNavigate, useParams } from "react-router";
import { useGetDrinkRun } from "../api/drink-runs";
import { Button } from "../components/button";
import { Table } from "../components/table/table";
import { useUserContext } from "../context/user-context";

export const DrinksRun = () => {
  const navigate = useNavigate();
  const { id: drinkRunId } = useParams();
  const { isLoading, data: drinkRunData } = useGetDrinkRun(drinkRunId);
  const { users } = useUserContext();

  if (isLoading) {
    return <div className="flex justify-center w-full text-sm">Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-3">
        <h2 className="text-xl font-semibold">Drinks Run {drinkRunId}</h2>

        <Button onClick={() => navigate("/drink-run-history")}>
          Back to history
        </Button>
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.CellHeader>Team Member</Table.CellHeader>
            <Table.CellHeader>Drink Name</Table.CellHeader>
            <Table.CellHeader>Drink Type</Table.CellHeader>
            <Table.CellHeader>Drink Description</Table.CellHeader>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {drinkRunData?.orders?.map((order) => {
            const user = users.find((user) => user.id === order.userId);
            return (
              <Table.Row key={order.id}>
                <Table.CellBody>
                  {user?.firstName} {user?.lastName}
                </Table.CellBody>
                <Table.CellBody>{order.name}</Table.CellBody>
                <Table.CellBody>{order.type}</Table.CellBody>
                <Table.CellBody>
                  {order.additionalSpecification?.description}
                </Table.CellBody>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
