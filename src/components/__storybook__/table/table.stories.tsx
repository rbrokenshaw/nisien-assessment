import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "../../table/table";

const meta: Meta<typeof Table> = {
  title: "Components/Table/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.CellHeader>First Name</Table.CellHeader>
            <Table.CellHeader>Last Name</Table.CellHeader>
            <Table.CellHeader>Drink</Table.CellHeader>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.CellBody>Tim</Table.CellBody>
            <Table.CellBody>Bisley</Table.CellBody>
            <Table.CellBody>Cappuccino</Table.CellBody>
          </Table.Row>
          <Table.Row>
            <Table.CellBody>Daisy</Table.CellBody>
            <Table.CellBody>Steiner</Table.CellBody>
            <Table.CellBody>Breakfast Tea</Table.CellBody>
          </Table.Row>
          <Table.Row>
            <Table.CellBody>Mike</Table.CellBody>
            <Table.CellBody>Watt</Table.CellBody>
            <Table.CellBody>Americano</Table.CellBody>
          </Table.Row>
          <Table.Row>
            <Table.CellBody>Brian</Table.CellBody>
            <Table.CellBody>Topp</Table.CellBody>
            <Table.CellBody>Green Tea</Table.CellBody>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
};
