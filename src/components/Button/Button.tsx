import React from 'react';
import './Button.scss';

type Props = {
    backgroundColor: string,
    children: any
}

const Button = (props: Props) => {
    const {backgroundColor, children, ...rest} = props;

    return (
        <button {...rest} className="button"
             style={{backgroundColor}} role="button">
            {children}
        </button>
    );
};
Button.defaultProps = {
    backgroundColor: '#f1dbff'
};

export default Button;
