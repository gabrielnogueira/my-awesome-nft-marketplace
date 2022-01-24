import {Meta, Story} from "@storybook/react";
import Icon, { IconProps } from './';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  icon: 'HeartIcon'
};

export const Outline = Template.bind({});
Outline.args = {
  icon: 'HeartIcon',
  outline: true
};