import { Meta, Story } from "@storybook/react";
import ProductCover, { ProductCoverProps } from "./";

export default {
  title: "Organisms/ProductCover",
  component: ProductCover,
} as Meta;

const Template: Story<ProductCoverProps> = (args) => <div style={{ width: 1200}}><ProductCover {...args} /></div>;

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
