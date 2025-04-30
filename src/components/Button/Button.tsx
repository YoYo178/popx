import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    bgColor: string;
    textColor: string;
    redirectPath: string;
    children: string | number;
}

export const Button: FC<ButtonProps> = ({ textColor, bgColor, redirectPath, children }) => {
    return (
        <Link
            className='button'
            to={redirectPath}
            style={{
                backgroundColor: bgColor ?? 'purple',
                color: textColor ?? 'white'
            }}
        >
            {children}
        </Link>
    )
}
