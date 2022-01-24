import { Meta, Story } from "@storybook/react";
import Dropdown, { DropdownProps } from "./";

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: 'Dropdown'
};

export const Opened = Template.bind({});
Opened.args = {
  children: 'Opened',
  opened: true
};