import { CalculateReducerProp } from '@store/types';
import { baseConfig } from '@store/baseConfig';

const [SET_CALCULATE_DEBT] = ['SET_CALCULATE_DEBT'];
const [SET_CALCULATE_LENDERS] = ['SET_CALCULATE_LENDERS'];
const [SET_CALCULATE_DOCS] = ['SET_CALCULATE_DOCS'];
const [SET_CALCULATE_CHILDREN] = ['SET_CALCULATE_CHILDREN'];
const [SET_CALCULATE_PROPERTY] = ['SET_CALCULATE_PROPERTY'];
const [SET_CALCULATE_DEALS] = ['SET_CALCULATE_DEALS'];

const {
    SITE_CALCULATOR: {
        individual: { deposit, after }
    }
} = baseConfig();

const defaultState: CalculateReducerProp = {
    debt: 0,
    lenders: 0,
    docs: 0,
    children: 0,
    property: 0,
    deals: 0,
    deposit,
    after
};

const setCountDebt = (summa) => ({ type: SET_CALCULATE_DEBT, payload: summa });
const setCountLenders = (summa) => ({ type: SET_CALCULATE_LENDERS, payload: summa });
const setCountDocs = (summa) => ({ type: SET_CALCULATE_DOCS, payload: summa });
const setCountChildren = (summa) => ({ type: SET_CALCULATE_CHILDREN, payload: summa });
const setCountProperty = (summa) => ({ type: SET_CALCULATE_PROPERTY, payload: summa });
const setCountDeals = (summa) => ({ type: SET_CALCULATE_DEALS, payload: summa });

const calculateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CALCULATE_DEBT:
            return {
                ...state,
                debt: action.payload
            };
        case SET_CALCULATE_LENDERS:
            return {
                ...state,
                lenders: action.payload
            };
        case SET_CALCULATE_DOCS:
            return {
                ...state,
                docs: action.payload
            };
        case SET_CALCULATE_CHILDREN:
            return {
                ...state,
                children: action.payload
            };
        case SET_CALCULATE_PROPERTY:
            return {
                ...state,
                property: action.payload
            };
        case SET_CALCULATE_DEALS:
            return {
                ...state,
                deals: action.payload
            };
        default:
            return state;
    }
};

export {
    setCountDebt,
    setCountLenders,
    setCountDocs,
    setCountChildren,
    setCountProperty,
    setCountDeals
};
export default calculateReducer;
