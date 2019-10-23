import React, {useState,useContext ,Fragment} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {ServerContext} from "../context/server/serverContext";

export const  AddInvoiceForm = () => {
    const [value, setValue] = useState('');
    const server = useContext(ServerContext)
    let history = useHistory();
    let checkNumber, checkMessage;
    let buttonDisable = true;
    const invoice = {
        number: null,
        dateCreated: null,
        dateSupplied: null,
        comment: null
    };
    function disableButton() {
        checkMessage && checkNumber ? buttonDisable = false : buttonDisable = true;
        console.log(checkNumber, checkMessage)
        console.log(buttonDisable)
    }
    function validate(value, type) {
        switch (type) {
            case 'dateCreated':
                invoice.dateCreated = value;
                break;
            case 'dateSupplied':
                invoice.dateSupplied = value;
                break;
            case 'number':
                if (value > 99){
                    invoice.number = value;
                     checkNumber = false;

                } else {
                    checkNumber = true;

                }
                disableButton()
                break;
            case 'text':
                if (value.length > 0 && value.length < 160){
                    invoice.comment = value;
                     checkMessage = false;
                } else {
                     checkMessage = true;
                }
                disableButton()
                break;
            default:
                alert('Something gone wrong...')
        }

    }
    function uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    function handleSubmit(event) {
        event.preventDefault()
        history.push("/");

        const inv = {
            "id": uuid(),
            "number": invoice.number,
            "date_created": invoice.dateCreated,
            "date_supplied": invoice.dateSupplied,
            "comment": invoice.comment
        }
        server.addInvoice(inv)
        console.log(event.target.value)
        console.log(buttonDisable)
    }

    return (
            <div className="page--card">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="date" onChange={(e) => validate(e.target.value, 'dateCreated')} required/>
                        <input type="number" onChange={(e) => validate(e.target.value, 'number')} required/>
                        <input type="date" onChange={(e) => validate(e.target.value, 'dateSupplied')} required/>
                        <textarea onChange={(e) => validate(e.target.value, 'text')} required></textarea>
                        <button type="submit" className="submit--button" id={`${checkNumber && checkMessage}`}  disabled={checkMessage && checkNumber}>Add new</button>
                    </div>
                </form>
            </div>
    )
}