import {Meta, Story} from "@storybook/react";
import Button, { ButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Base Button'
};

export const Active = Template.bind({});
Active.args = {
  children: 'Active Button',
  active: true
};
