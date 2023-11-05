import React, { useEffect, useState } from 'react';
import '../../../../assets/ExpenseFrame/DeleteTransaction.css'
import axios from 'axios';

function DeleteTransaction({ setDeleteModal, setTrigger, transactionId }) {
    function onClickClose(){
        setDeleteModal(false);
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClickClose}>
                    &times;
                </span>
                <DeleteCaution setDeleteModal={setDeleteModal} setTrigger={setTrigger} transactionArray={transactionId}/>
            </div>
        </div>
    );
}

function DeleteCaution({ setDeleteModal, setTrigger, transactionArray }) {
    const handleSubmitTransaction = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:4000/expense/deleteTransaction', transactionArray, {
            headers: {
                'authorization': localStorage.getItem('authToken')
            }
        });
        setDeleteModal(false)
        setTrigger(true);
    }
    return (
        <>
        <div className='modalTitle'>Delete Transaction</div>
        <h4>Are you sure want to delete this transaction?</h4>
        <button className='deleteButton' onClick={handleSubmitTransaction}>Delete</button>
        </>
    );
}

export default DeleteTransaction;
