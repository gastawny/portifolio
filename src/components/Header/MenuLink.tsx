import { Link, useLocation } from "react-router-dom"
import styled, { keyframes, css } from "styled-components"

interface MenuLinkProps {
    to: string
    children: string
}

interface StyledProps {
    to: string
    local: string
}

export default ({ to, children }: MenuLinkProps) => {
    const local = useLocation()

    return (
        <>
            <div className="asd"></div>
            <li>
                <MenuLink
                    to={to}
                    local={local.pathname}
                >
                    {children}
                </MenuLink>
            </li>
        </>
    )
}

const hoverAnimation = keyframes`
    0%{
        width: 0%; 
    }
    100%{
        width: 100%; 
    }
`

const textHighlight = css<StyledProps>`
    content: '';
    position: absolute; 
    z-index: -1;
    bottom: .2rem;
    height: .8rem;
    background: ${({ to, local }) => to === local ? 'var(--purple)' : 'transparent'};
`

const animationOn = css`
    animation: ${hoverAnimation} .2s linear forwards;
`

const animationOff = css`
    animation: none;
`

const MenuLink = styled(Link) <StyledProps>`
    color: var(--font-color);
    font-size: 1.5rem;
    text-decoration: none;  
    letter-spacing: .1rem;
    font-weight: 500;
    position: relative;

    &:before {
        box-shadow: ${({ to, local }) => to === local ? '0 0 .5rem var(--purple), 0 0 1.75rem var(--purple)' : 'none'};
        width: 100%;
        ${textHighlight}
    }

    &:hover{
        &::before {
            /* box-shadow: 0 0 .75rem var(--purple), 0 0 2.25rem var(--purple); */
            background: var(--purple);
            ${({ to, local }) => to !== local ? animationOn : animationOff}
        }
    }
`