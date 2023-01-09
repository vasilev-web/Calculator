import React, { useState, useRef, forwardRef } from 'react';
import clsx from 'clsx';

import styles from './InputSwitcher.module.scss';

export interface InputSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: string;
    error?: string;
    defaultChecked?: boolean;
    minValue?: number;
    maxValue?: number;
    label?: React.ReactNode;
    onHandler?: (value: any) => void;
}

const InputSwitcher = forwardRef<HTMLInputElement, InputSwitcherProps>((props, ref) => {
    const {
        name,
        className,
        error,
        defaultValue = 0,
        label,
        minValue = 0,
        maxValue = 20,
        onHandler,
        ...others
    } = props;
    const [value, setInputValue] = useState(defaultValue);
    const inputEl = useRef(null);

    const inputHandler = (event, type = null) => {
        let value = Number(inputEl.current.value);

        if (type) {
            if (type == -1) {
                value -= 1;
            } else {
                value += 1;
            }
        }

        if (value < Number(minValue)) {
            inputEl.current.value = minValue;
        } else if (value > Number(maxValue)) {
            inputEl.current.value = maxValue;
        } else {
            inputEl.current.value = value;
        }

        setInputValue(inputEl.current.value);

        onHandler && onHandler(inputEl.current.value);
    };

    return (
        <div className={clsx([styles['form-switcher'], className && className])} {...others}>
            {label ? (
                <label
                    htmlFor={others?.id ? others.id : null}
                    className={clsx(styles['form-switcher__label'])}
                >
                    {label}
                </label>
            ) : (
                ''
            )}
            <div className={styles['form-switcher__wrapper']}>
                <button
                    className={styles['form-switcher__button']}
                    onClick={(e) => inputHandler(e, -1)}
                >
                    -
                </button>
                <input
                    type='number'
                    name={name}
                    max={maxValue}
                    min={minValue}
                    defaultValue={value}
                    ref={inputEl}
                    className={styles['form-switcher__input']}
                    onChange={(e) => inputHandler(e)}
                />
                <button
                    className={styles['form-switcher__button']}
                    onClick={(e) => inputHandler(e, 1)}
                >
                    +
                </button>
            </div>
            {error && <div className={styles['form-switcher__error']}>{error}</div>}
        </div>
    );
});

export default InputSwitcher;
