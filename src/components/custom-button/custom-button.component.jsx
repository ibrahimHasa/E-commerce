import React from 'react';
import './custom-button.styles.scss';

export default function CusttomButton({ children, ...otherProps }) {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}
