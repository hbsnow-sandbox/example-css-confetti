import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Confetti } from ".";

export default {
  title: "Components/Confetti",
  component: Confetti,
} as ComponentMeta<typeof Confetti>;

const Template: ComponentStory<typeof Confetti> = (args) => (
  <div
    style={{
      width: 300,
      height: 300,
      border: "1px solid #ddd",
    }}
  >
    <Confetti {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  count: 30,
  pieceContainer: {
    duration: [2, 4],
    delay: [1, 12],
  },
  piece: {
    duration: [1, 3],
  },
};
