import React, {useContext, useEffect, Fragment} from 'react';
import {Invoices} from '../components/Invoices';
import {AddNewInvoiceMain} from '../components/AddNewInvoiceMain';
import {ServerContext} from '../context/server/serverContext'
export const MainView=()=> {
    const {invoices, loadInvoices, removeInvoice} = useContext(ServerContext);
    useEffect(() => {
        loadInvoices()
    }, []);
    return (
        <Fragment>
        <div>
            <div className="page--title-container">
                <h3 className="page--title">Invoices</h3>
            </div>
            <AddNewInvoiceMain/>
            <div className="page--card">
                {console.log('inv',invoices)}
                <Invoices invoices={invoices} onRemove={removeInvoice}/>
            </div>
        </div>
        </Fragment>
    )

};