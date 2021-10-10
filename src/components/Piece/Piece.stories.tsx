import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Piece } from ".";

export default {
  title: "Components/Piece",
  component: Piece,
} as ComponentMeta<typeof Piece>;

const Template: ComponentStory<typeof Piece> = (args) => (
  <div style={{ padding: 100 }}>
    <Piece {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  color: "green",
  width: 100,
  height: 150,
  style: {
    animationDuration: "2s",
  },
};
