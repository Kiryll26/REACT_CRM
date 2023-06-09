import * as React from 'react'
import * as S from './styled'

export type Props<T extends React.ElementType> = {
    render?: keyof JSX.IntrinsicElements | React.ComponentType<any> | T
    className?: string
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<T> &
    S.PropsButtonStyled

const ButtonComponent = <T extends React.ElementType = 'button'>({ children, render, ...rest }: Props<T>) => {
    return (
        <S.Button {...rest} as={render}>
            {children}
        </S.Button>
    )
}

ButtonComponent.size = S.Size

export const Button = ButtonComponent
