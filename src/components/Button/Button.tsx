import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "@emotion/styled";

export const ALL_COLOR_THEME = ['default', 'info', 'warning', 'error', 'inaccessible'] as const;
export type ColorTheme = typeof ALL_COLOR_THEME[number];
type BackgroundColor = {
  [key in ColorTheme]: string;
};

const BACKGROUND_COLORS: BackgroundColor = {
  default: '#000000',
  info: '#0064ff',
  warning: '#e2c802',
  error: '#f80202',
  inaccessible: '#51A7B2'
}

const Container = styled.button<any>`
  background-color: ${props => BACKGROUND_COLORS[props.colorTheme]};
  padding: 1rem;
  border: none;
  color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorTheme?: ColorTheme;
}

export const Button: FC<ButtonProps> = ({ colorTheme = 'default', children }) => {
  return <Container role="button" colorTheme={colorTheme}>
    {children}
  </Container>;
};
