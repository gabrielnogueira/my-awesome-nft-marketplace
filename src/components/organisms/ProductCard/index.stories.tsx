import { Meta, Story } from "@storybook/react";
import ProductCard, { ProductCardProps } from "./";

export default {
  title: "Organisms/ProductCard",
  component: ProductCard,
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Base = Template.bind({});
Base.args = {
};
