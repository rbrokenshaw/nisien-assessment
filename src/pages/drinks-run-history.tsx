import { Link, useNavigate } from "react-router";
import { useGetDrinkRuns } from "../api/drink-runs";
import { Table } from "../components/table/table";
import { Button } from "../components/button";

export const DrinksRunHistory = () => {
  const navigate = useNavigate();
  const { isLoading, data: drinkRunData } = useGetDrinkRuns();

  if (isLoading) {
    return <div className="flex justify-center w-full text-sm">Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Drink Run History</h2>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.CellHeader>Id</Table.CellHeader>
            <Table.CellHeader>Number of Drink Orders</Table.CellHeader>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {drinkRunData?.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.CellBody>
                  <Link
                    to={`/drink-run/${data.id}`}
                    className="cursor-pointer font-semibold"
                  >
                    {data.id}
                  </Link>
                </Table.CellBody>
                <Table.CellBody>{data?.orders?.length}</Table.CellBody>
                <Table.CellBody>
                  <div className="w-full flex justify-end">
                    <Button onClick={() => navigate(`/drink-run/${data.id}`)}>
                      View Order
                    </Button>
                  </div>
                </Table.CellBody>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
