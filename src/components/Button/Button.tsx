import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconNameToIcon from '../../constants/iconNames';
import './button.css';

interface ButtonProps {
    title?: string;
    onClick: () => void;
    className?: string;
    iconName?: string;
    color?: string;
}

export default function Button({title, onClick, className, iconName, color}: ButtonProps) {
  return (
    <button onClick={onClick} className={className} >
        {iconName && <FontAwesomeIcon icon={iconNameToIcon[iconName]} color={color}/> }
        {title}
    </button>
  )
}
