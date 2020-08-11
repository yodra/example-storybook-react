import React from 'react';
import { Input } from "../Input";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs]
};

export const byDefault = () => <Input/>;
