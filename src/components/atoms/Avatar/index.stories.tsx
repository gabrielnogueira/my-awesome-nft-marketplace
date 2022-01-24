import {Meta, Story} from "@storybook/react";
import Avatar, { AvatarProps } from '.';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Base = Template.bind({});
Base.args = {
  src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};
