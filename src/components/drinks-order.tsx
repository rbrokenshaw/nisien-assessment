import { UserToSelect } from "../context/user-context";
import { Table } from "./table/table";

export const DrinksOrder = ({
  participants,
}: {
  participants: UserToSelect[];
}) => {
  return (
    <div className="border border-primary p-5 rounded-lg w-full">
      <h1 className="text-xl font-bold mb-4">Drinks Order</h1>

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
          {participants.map((participant) => (
            <Table.Row key={participant.id}>
              <Table.CellBody>{participant.firstName}</Table.CellBody>
              <Table.CellBody>{participant.selectedDrink?.name}</Table.CellBody>
              <Table.CellBody>{participant.selectedDrink?.type}</Table.CellBody>
              <Table.CellBody>
                {
                  participant.selectedDrink?.additionalSpecification
                    ?.description
                }
              </Table.CellBody>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
