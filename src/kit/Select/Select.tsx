import React, { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { Form } from 'react-bootstrap';

import './Select.module.scss';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
    options: any;
    name?: string;
    error?: string;
    defaultValue?: string;
    id?: string;
    label?: React.ReactNode;
    className?: string;
    disabledOption?: JSX.Element;
    onChange?: (any?) => any;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    const {
        options,
        name,
        className,
        error,
        defaultValue,
        id,
        label,
        disabledOption,
        onChange,
        ...others
    } = props;

    return (
        <Form.Group
            className={clsx(['form-select__wrapper', 'mb-3', className && className])}
            controlId={id}
            {...others}
        >
            {label && <Form.Label htmlFor={id}>{label}</Form.Label>}
            <Form.Select
                size='lg'
                defaultValue={defaultValue}
                className='form-select'
                ref={ref}
                id={id}
                onChange={onChange}
                {...others}
            >
                {disabledOption && disabledOption}
                {options.map(({ id, title }) => (
                    <option value={id} key={id}>
                        {title ? title : id}
                    </option>
                ))}
            </Form.Select>
            {error && <div className='form-select__error'>{error}</div>}
        </Form.Group>
    );
});

export default Select;
