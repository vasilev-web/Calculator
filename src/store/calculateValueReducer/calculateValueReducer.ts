import { CalculateValuesProp } from '@store/types';

const [SET_CALCULATE_DEBT_VALUE] = ['SET_CALCULATE_DEBT_VALUE'];
const [SET_CALCULATE_LENDERS_VALUE] = ['SET_CALCULATE_LENDERS_VALUE'];
const [SET_CALCULATE_DOCS_VALUE] = ['SET_CALCULATE_DOCS_VALUE'];
const [SET_CALCULATE_CHILDREN_VALUE] = ['SET_CALCULATE_CHILDREN_VALUE'];
const [SET_CALCULATE_PROPERTY_VALUE] = ['SET_CALCULATE_PROPERTY_VALUE'];
const [SET_CALCULATE_DEALS_VALUE] = ['SET_CALCULATE_DEALS_VALUE'];

const defaultState: CalculateValuesProp = {
    debt: '',
    lenders: '',
    docs: '',
    children: '',
    property: '',
    deals: ''
};

const setValueDebt = (summa) => ({ type: SET_CALCULATE_DEBT_VALUE, payload: summa });
const setValueLenders = (summa) => ({ type: SET_CALCULATE_LENDERS_VALUE, payload: summa });
const setValueDocs = (summa) => ({ type: SET_CALCULATE_DOCS_VALUE, payload: summa });
const setValueChildren = (summa) => ({ type: SET_CALCULATE_CHILDREN_VALUE, payload: summa });
const setValueProperty = (summa) => ({ type: SET_CALCULATE_PROPERTY_VALUE, payload: summa });
const setValueDeals = (summa) => ({ type: SET_CALCULATE_DEALS_VALUE, payload: summa });

const calculateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CALCULATE_DEBT_VALUE:
            return {
                ...state,
                debt: action.payload
            };
        case SET_CALCULATE_LENDERS_VALUE:
            return {
                ...state,
                lenders: action.payload
            };
        case SET_CALCULATE_DOCS_VALUE:
            return {
                ...state,
                docs: action.payload
            };
        case SET_CALCULATE_CHILDREN_VALUE:
            return {
                ...state,
                children: action.payload
            };
        case SET_CALCULATE_PROPERTY_VALUE:
            return {
                ...state,
                property: action.payload
            };
        case SET_CALCULATE_DEALS_VALUE:
            return {
                ...state,
                deals: action.payload
            };
        default:
            return state;
    }
};

export {
    setValueDebt,
    setValueLenders,
    setValueDocs,
    setValueChildren,
    setValueProperty,
    setValueDeals
};
export default calculateReducer;
