import React, {useReducer} from 'react';
import axios from 'axios';
import {ServerContext} from './serverContext';
import {serverReducer} from './serverReducer'
import {ADD_INVOICE, LOAD_INVOICES, REMOVE_INVOICE} from "../types";
const url = process.env.REACT_APP_DB_URL; //'http://localhost:3333'//
export const ServerState  = ({children}) => {
    const initialState = {
        invoices: []
    };
    const [state, dispatch] = useReducer(serverReducer, initialState);

    const loadInvoices = async () => {
        const res = await axios.get(`${url}/invoices`);
        console.log(res.data);
        console.log('data');
        if(res.data){
            const payload = res.data;
            dispatch({
                type: LOAD_INVOICES, payload
            })}
        console.log(`loaded data`, res.data)
    }
    const addInvoice = async invoice => {
        ;
        try {
            const res = await axios.post(`${url}/invoices`, invoice);
            const payload = {
                ...invoice
            }
            dispatch({
                type: ADD_INVOICE,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }

    }
    const removeInvoice =  id => {
        console.log('id',id)
         axios.delete(`${url}/invoices/${id}`);
        dispatch({
            type: REMOVE_INVOICE,
            payload: id
        })
    }
    return( <ServerContext.Provider value={{loadInvoices, addInvoice, removeInvoice, invoices: state.invoices}}>
        {children}
    </ServerContext.Provider>)
}