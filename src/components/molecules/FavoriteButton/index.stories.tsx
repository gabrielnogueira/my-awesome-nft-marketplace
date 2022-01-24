import { Meta, Story } from "@storybook/react";
import FavoriteButton, { FavoriteButtonProps } from "./";

export default {
  title: "Molecules/FavoriteButton",
  component: FavoriteButton,
} as Meta;

const Template: Story<FavoriteButtonProps> = (args) => (
  <FavoriteButton {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: '76'
};

export const Active = Template.bind({});
Active.args = {
  children: '77',
  active: true
};