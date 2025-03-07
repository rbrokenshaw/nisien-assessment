import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "../../forms/form";
import { ButtonType } from "../../forms/inputs/input-button";
import { ButtonVariant } from "../../button";

const meta: Meta<typeof Form> = {
  title: "Components/Forms/Form",
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Form.SectionTitle value="Section Title" />
        <Form.FormField fieldName="firstName">
          <Form.InputLabel value="First name" />
          <Form.InputText fieldName="firstName" />
        </Form.FormField>

        <Form.FormField fieldName="lastName">
          <Form.InputLabel value="Last name" />
          <Form.InputText fieldName="lastName" />
        </Form.FormField>

        <div className="flex gap-2">
          <Form.InputButton
            value="Reset"
            type={ButtonType.Reset}
            variant={ButtonVariant.SECONDARY}
          />
          <Form.InputButton value="Submit" type={ButtonType.Submit} />
        </div>
      </>
    ),
  },
};
