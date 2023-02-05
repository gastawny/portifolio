import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

interface ButtonProps {
    children: string
    to: string
    width?: string
}

interface IstyesBtn {
    width?: string,
    display?: string,
    justifyContent?: string,
    alignItems?: string
}

const Button = ({ children, to, width = '0' }: ButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null)
    let styles: IstyesBtn = {
        width: '0'
    }
    if (width != '0')
        styles = {
            width: width,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }

    const click = () => {
        setTimeout(() => {
            ref.current?.classList.toggle('click')
        }, 400)
        ref.current?.classList.toggle('click')
    }


    return (
        <Link to={to}>
            <button

                onClick={() => click()}
                className='Button'
                ref={ref}
            >
                <span style={styles.width != '0' ? styles : {}}>{children}</span><i></i>
            </button>
        </Link >
    )
}

export default Button