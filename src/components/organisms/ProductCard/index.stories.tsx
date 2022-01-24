import { Meta, Story } from "@storybook/react";
import ProductCard, { ProductCardProps } from "./";

export default {
  title: "Organisms/ProductCard",
  component: ProductCard,
} as Meta;

const Template: Story<ProductCardProps> = (args) => <div style={{width: 300}}><ProductCard {...args} /></div>;

export const Base = Template.bind({});
Base.args = {
  item:{
    name: 'Item name',
    description: 'Item description',
    price: 123,
    favorites: 75,
    image: '/assets/images/product-1.png'
  }
};
