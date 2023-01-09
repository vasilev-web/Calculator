import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import InputSwitcher from '@kit/InputSwitcher';
import RadioboxLabel from '@kit/RadioboxLabel';
import Select from '@kit/Select';

import { RootState } from '@store/store';
import { baseConfig } from '@store/baseConfig';
import FormaterPrice from '@helpers/FormaterPrice';

import {
    setCountDebt,
    setCountLenders,
    setCountDocs,
    setCountChildren,
    setCountDeals,
    setCountProperty
} from '@store/calculateReducer';

import {
    setValueDebt,
    setValueLenders,
    setValueDocs,
    setValueChildren,
    setValueDeals,
    setValueProperty
} from '@store/calculateValueReducer';

import config from './CalculatorConfig';

import './Calculator.module.scss';

const Calculator = () => {
    const {
        SITE_CALCULATOR: {
            individual: { deposit, after }
        }
    } = baseConfig();
    const {
        optionsDebt,
        options,
        optionsProperty,
        lenders,
        selectors: { docs, children, deals }
    } = config;

    const dispatch = useDispatch();
    const calculate = useSelector((state: RootState) =>
        Object.values(state.calculate).reduce((summa: number, value: number) => summa + value)
    );

    const getCurrentTextOption = (options) => options[options.selectedIndex].text;

    const summaSelect = (value, summa) => (!Number(value) ? 0 : Number(value) * summa);

    const inputHandler = (value) => {
        dispatch(setCountLenders(value * lenders));
        dispatch(setValueLenders(value));
    };

    useEffect(() => {
        dispatch(setCountDebt(optionsDebt[0].summa));
        dispatch(setValueDebt(optionsDebt[0].title));
    }, [dispatch, optionsDebt]);

    return (
        <Container className='calculator-form'>
            <div className={clsx('calculator-form__row', 'calculator-form__row--center')}>
                <div className='calculator-form__row-text'>
                    "Закон о несостоятельности (банкротстве)" №127-ФЗ от 26.10.2002г. <br />
                    В расчёте учтены все расходы на процедуру, включая вознаграждение (п.3 ст.20.6)
                    финансового управляющего в делах о банкротстве <br />
                    физ.лиц - {FormaterPrice(deposit)}
                </div>
            </div>

            <div className='calculator-form__row'>
                <div className='calculator-form__row-header'>Сумма долга</div>
                <div className='calculator-form__row-component'>
                    {optionsDebt.map((option, index) => (
                        <RadioboxLabel
                            key={option.id}
                            id={`debtOptions_${option.id}`}
                            name='debt'
                            defaultChecked={index === 0 ? true : false}
                            label={option.title}
                            onChange={() => {
                                dispatch(setCountDebt(option.summa));
                                dispatch(setValueDebt(option.title));
                            }}
                        />
                    ))}
                </div>
                <div className='calculator-form__row-text'>
                    Сумма Вашего долга составляет менее 500 000 руб.? <br />
                    <span className='calculator-form__row-link' children='Свяжитесь с нами' /> и мы
                    подберем для Вас оптимальный вариант решения Вашего вопроса!
                </div>
            </div>

            <div className={clsx('calculator-form__row', 'calculator-form__row--switcher')}>
                <div className='calculator-form__row-header'>Количество кредиторов</div>
                <div className='calculator-form__row-component'>
                    <InputSwitcher onHandler={inputHandler} />
                </div>
            </div>

            <div className='calculator-form__row'>
                <div className='calculator-form__row-header'>
                    Нужен сбор документов для процедуры
                </div>
                <div className='calculator-form__row-text'>
                    Рекомендуем осуществлять сбор документов самостоятельно. Это не займет много сил
                    и времени, а экономия существенная.
                </div>
                <div className='calculator-form__row-component'>
                    <Select
                        options={options}
                        name='docs'
                        defaultValue='Выберите вариант'
                        onChange={(e) => {
                            const textCurrent = getCurrentTextOption(e.target.options);
                            dispatch(setCountDocs(summaSelect(e.target.value, docs)));
                            dispatch(
                                setValueDocs(e.target.value == textCurrent ? '' : textCurrent)
                            );
                        }}
                    />
                </div>
            </div>

            <div className='calculator-form__row'>
                <div className='calculator-form__row-header'>Есть ли несовершеннолетние дети?</div>
                <div className='calculator-form__row-component'>
                    <Select
                        options={options}
                        name='children'
                        defaultValue='Выберите вариант'
                        onChange={(e) => {
                            const textCurrent = getCurrentTextOption(e.target.options);
                            dispatch(setCountChildren(summaSelect(e.target.value, children)));
                            dispatch(
                                setValueChildren(e.target.value == textCurrent ? '' : textCurrent)
                            );
                        }}
                    />
                </div>
            </div>

            <div className='calculator-form__row'>
                <div className='calculator-form__row-header'>Наличие имущества в собственности</div>
                <div className='calculator-form__row-text'>
                    Есть ли у вас какое-либо имущество, кроме единственного жилья? Например, жилой
                    дом, квартира, автомобиль, земельные участки, доли в ООО.
                </div>
                <div className='calculator-form__row-component'>
                    <Select
                        options={optionsProperty}
                        name='property'
                        defaultValue='Выберите вариант'
                        onChange={(e) => {
                            const textCurrent = getCurrentTextOption(e.target.options);
                            dispatch(setCountProperty(optionsProperty[e.target.value]?.summa ?? 0));
                            dispatch(
                                setValueProperty(e.target.value == textCurrent ? '' : textCurrent)
                            );
                        }}
                    />
                </div>
            </div>

            <div className='calculator-form__row'>
                <div className='calculator-form__row-header'>
                    Сделки с имуществом за последние 3 года
                </div>
                <div className='calculator-form__row-text'>
                    Совершались ли вами сделки по отчуждению ценного имущества?
                </div>
                <div className='calculator-form__row-component'>
                    <Select
                        options={options}
                        name='deals'
                        defaultValue='Выберите вариант'
                        onChange={(e) => {
                            const textCurrent = getCurrentTextOption(e.target.options);
                            dispatch(setCountDeals(summaSelect(e.target.value, deals)));
                            dispatch(
                                setValueDeals(e.target.value == textCurrent ? '' : textCurrent)
                            );
                        }}
                    />
                </div>
            </div>

            <div className={clsx('calculator-form__row', 'calculator-form__row--total')}>
                <div className='calculator-form__row-header'>Стоимость процедуры банкротства</div>
                <div className='calculator-form__total'>
                    ВСЕГО:
                    <div className='calculator-form__summa'>{FormaterPrice(calculate)}</div>
                </div>
            </div>

            <div className='calculator-form__row'>
                <div className='calculator-form__row-header'>
                    Калькулятор расчёта показывает итоговую фиксированную сумму расходов, которая
                    распределяется:
                </div>
                <div className='calculator-form__row-text'>
                    <ul>
                        <li>
                            {FormaterPrice(deposit)} &mdash; вносится на депозит Арбитражного суда
                            до запуска процедуры.
                        </li>
                        <li>
                            {FormaterPrice(after)} &mdash; авансируются публикации в процедуре после
                            приёма заявления о банкротстве.
                        </li>
                        <li>
                            Оставшаяся сумма выплачивается в рассрочку в течение 10 месяцев равными
                            платежами.
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Calculator;
