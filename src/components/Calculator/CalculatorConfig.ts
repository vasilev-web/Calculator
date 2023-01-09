const config = {
    options: [
        {
            title: 'Выберите вариант'
        },
        {
            id: 0,
            title: 'Нет'
        },
        {
            id: 1,
            title: 'Да'
        }
    ],
    lenders: 499,
    selectors: {
        docs: 15000,
        children: 10000,
        deals: 25000
    },
    optionsProperty: [
        {
            title: 'Выберите вариант'
        },
        {
            id: 1,
            title: 'Жилой дом',
            summa: 15000
        },
        {
            id: 2,
            title: 'Квартира',
            summa: 15000
        },
        {
            id: 3,
            title: 'Автомобиль',
            summa: 15000
        },
        {
            id: 4,
            title: 'Земельные участки',
            summa: 15000
        },
        {
            id: 5,
            title: 'Доли в ООО',
            summa: 15000
        }
    ],
    optionsDebt: [
        {
            id: 1,
            title: 'От 500 000 до 1 499 000 руб.',
            summa: 125000
        },
        {
            id: 2,
            title: 'От 1 500 000 до 2 499 000 руб.',
            summa: 135000
        },
        {
            id: 3,
            title: 'Более 2 500 000 руб.',
            summa: 145000
        }
    ]
};

export default config;
