import React from 'react';

export const Invoices=(props)=> {

    function parseChildren() {

        const children = [];
        console.log('dawdaw',props.invoices);

        if(props.invoices.length > 0){
            console.log('asdqwqw.invoices',props.invoices);
            props.invoices.map((invoice, index) => (
                    children.push(<tr key={index}>
                        <td>{invoice.date_created}</td>
                        <td>INV-{invoice.number}</td>
                        <td>{invoice.date_supplied}</td>
                        <td>{invoice.comment}</td>
                        <td><button onClick={() => props.onRemove(invoice.id)}>Remove</button></td>
                    </tr>)
                )
            )}
        console.log('children',children)
        return children
    }

    return (
        <table className="invoices-table">
            <tbody >
                <tr>
                    <th>Create</th>
                    <th>No</th>
                    <th>Supply</th>
                    <th>Comment</th>
                    <th>Options</th>
                </tr>
                {parseChildren()}
            </tbody>
        </table>
    )
}