import type { Meta, StoryObj } from "@storybook/react";

import { Banner, BannerType } from "../banner";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Success: Story = {
  args: {
    type: BannerType.SUCCESS,
    children: "Success!",
  },
};

export const Error: Story = {
  args: { type: BannerType.ERROR, children: "Error :(" },
};
