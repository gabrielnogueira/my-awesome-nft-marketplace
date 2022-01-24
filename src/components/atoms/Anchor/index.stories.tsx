import {Meta, Story} from "@storybook/react";
import Anchor, { AnchorProps } from '.';

export default {
  title: 'Atoms/Anchor',
  component: Anchor,
} as Meta;

const Template: Story<AnchorProps> = (args) => <Anchor {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Base Anchor'
};

