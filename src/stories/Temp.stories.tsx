import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Button } from "./Temp";

export default {
  title: "Components/Temp",
  component: Button,
  args: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Story = Template.bind({});
Story.args = {};
