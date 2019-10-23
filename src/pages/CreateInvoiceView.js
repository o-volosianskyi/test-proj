import React, {useState,useContext ,Fragment} from 'react';
import {AddInvoiceForm} from '../components/AddInvoiceForm'

export const  CreateInvoiceView=()=> {

    return (
        <Fragment>
            <div className="page--title-container">
                <h3 className="page--title">Create Invoice</h3>
            </div>

            <AddInvoiceForm/>
        </Fragment>
    )
}