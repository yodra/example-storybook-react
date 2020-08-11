import React from 'react';
import { action } from '@storybook/addon-actions';
import { ALL_COLOR_THEME, Button, ColorTheme } from "../Button";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {
  children: text("label", "Hello Storybook"),
  onClick: action('clicked')
}

const generateColorThemeSelector = (currentColor: ColorTheme) => select('colorTheme', ALL_COLOR_THEME, currentColor)



export const withText = () => <Button {...defaultProps} colorTheme={generateColorThemeSelector('default')}/>;
export const ofInfo = () => <Button {...defaultProps} colorTheme={generateColorThemeSelector('info')}/>;
export const ofWarning = () => <Button {...defaultProps} colorTheme={generateColorThemeSelector('warning')}/>;
export const ofError = () => <Button {...defaultProps} colorTheme={generateColorThemeSelector('error')}/>;
export const NoAccessibility = () => <Button {...defaultProps} colorTheme={generateColorThemeSelector('inaccessible')}/>;
export const NoAccessibilityWithEmoji = () => <Button {...defaultProps} colorTheme={generateColorThemeSelector('info')}>🤦‍♀️</Button>;
