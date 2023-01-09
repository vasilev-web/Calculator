import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { Form, FormCheck } from 'react-bootstrap';

import './RadioboxLabel.module.scss';

export interface RadioboxLabelProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: string;
    error?: string;
    defaultChecked?: boolean;
    id?: string;
    label: React.ReactNode;
    className?: string;
    onChange?: (any?) => any;
}

const RadioboxLabel = forwardRef<HTMLInputElement, RadioboxLabelProps>((props, ref) => {
    const { name, className, error, defaultChecked, id, label, onChange, ...others } = props;

    return (
        <div className={clsx(['form-radiobox-label', className && className])} {...others}>
            <Form.Group className='mb-3' controlId={id}>
                <FormCheck className='form-radio-wrapper'>
                    <FormCheck.Label className='form-radio-label'>
                        <FormCheck.Input
                            isInvalid
                            className='form-radio-input'
                            type='radio'
                            ref={ref}
                            name={name}
                            id={id}
                            defaultChecked={defaultChecked}
                            onChange={onChange}
                            {...others}
                        />
                        <span className={clsx('icon', 'form-radio-view')}></span>
                        {label}
                    </FormCheck.Label>
                    {error && <div className='form-radiobox-label__error'>{error}</div>}
                </FormCheck>
            </Form.Group>
        </div>
    );
});

export default RadioboxLabel;
