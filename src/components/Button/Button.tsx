import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconNameToIcon from '../../constants/iconNames';

interface ButtonProps {
    title?: string;
    onClick: () => void;
    className?: string;
    iconName?: string;
}

export default function Button({title, onClick, className, iconName}: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
        {iconName && <FontAwesomeIcon icon={iconNameToIcon[iconName]}/> }
        {title}
    </button>
  )
}
