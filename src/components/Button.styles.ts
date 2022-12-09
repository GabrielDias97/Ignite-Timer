import styled, { css } from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'succes'

interface ButtonContainerProps {
  variant: ButtonVariants
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  succes: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  border-radius: 4px;
  border: 0;
  margin: 8px;

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
