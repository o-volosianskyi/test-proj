import {ADD_INVOICE, LOAD_INVOICES, REMOVE_INVOICE} from "../types";

const handlers =  {
    [ADD_INVOICE]: (state,{payload}) => ({...state, invoices: [...state.invoices, payload]}),
    [LOAD_INVOICES]: (state,{payload}) => ({...state, invoices: payload}),
    [REMOVE_INVOICE]: (state, {payload}) => ({...state, invoices: state.invoices.filter(invoice => invoice.id !== payload )}),
    DEFAULT: state => state,

}
export const  serverReducer  = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}