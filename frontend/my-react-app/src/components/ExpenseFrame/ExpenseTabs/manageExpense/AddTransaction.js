import React, { useEffect, useState } from 'react';
import '../../../../assets/ExpenseFrame/manageExpenses.css';
import '../../../../assets/ExpenseFrame/addTransaction.css'
import axios from 'axios';


function AddTransaction({ setTrigger }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <button onClick={openModal} className="add-button">
                Add Transaction
            </button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <TransactionForm closeModal={closeModal} setTrigger={setTrigger} />
                    </div>
                </div>
            )}
        </div>
    );
}

function TransactionForm({ setTrigger, closeModal }) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        //load the categores from the database
        const fetchCategories = async () => {
            const categories = await axios.get('http://localhost:4000/expense/getExpCategory', {
                headers: {
                    'authorization': localStorage.getItem('authToken')
                }
            });
            setCategories(categories?.data?.categories);
        }
        fetchCategories();
    }, [])
    const handleSubmitTransaction = async (e) => {
        e.preventDefault();
        const description = document.getElementById("description").value;
        const amount = document.getElementById("amount").value;
        const category = document.getElementById("category").value;
        const date = document.getElementById("date").value;
        const transaction = {
            desc: description,
            amount: amount,
            category: category,
            date: date
        }
        const response = await axios.post('http://localhost:4000/expense/postExpense', transaction, {
            headers: {
                'authorization': localStorage.getItem('authToken')
            }
        });
        closeModal()
        setTrigger(true);
    }
    return (
        <form onSubmit={handleSubmitTransaction}>
            <div className="form-group">
                <div className='addTransactionInput'>
                    <input type="text" id="description" placeholder="Description" />
                </div>
                <div className='addTransactionInput'>
                    <input type="number" id="amount" placeholder="Amount" />
                </div>
                <div className='addTransactionInput'>
                    <select id="category" name="category">
                        {categories.map((category) => {
                            return (<option value={category}>{category}</option>)
                        })}
                    </select>
                </div>
                <div className='addTransactionInput'>
                    <input type="date" id="date" placeholder="Date" />
                </div>
                <button type="submit" className="add-button">
                    Add
                </button>
            </div>
        </form>
    );
}

export default AddTransaction;
