import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonVariant } from "../button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: ButtonVariant.PRIMARY, children: "Click me" },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
    disabled: true,
    children: "Click me",
  },
};

export const Secondary: Story = {
  args: { variant: ButtonVariant.SECONDARY, children: "Click me" },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
    disabled: true,
    children: "Click me",
  },
};
