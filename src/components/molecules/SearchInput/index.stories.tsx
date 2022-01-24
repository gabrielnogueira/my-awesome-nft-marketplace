import { Meta, Story } from "@storybook/react";
import SearchInput, { SearchInputProps } from "./";

export default {
  title: "Molecules/SearchInput",
  component: SearchInput,
} as Meta;

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Base = Template.bind({});
Base.args = {
    placeholder: 'Search Text'
};
