import { Meta, Story } from "@storybook/react";
import ProductCover, { ProductCoverProps } from "./";

export default {
  title: "Organisms/ProductCover",
  component: ProductCover,
} as Meta;

const Template: Story<ProductCoverProps> = (args) => <ProductCover {...args} />;

export const Base = Template.bind({});
Base.args = {
};
