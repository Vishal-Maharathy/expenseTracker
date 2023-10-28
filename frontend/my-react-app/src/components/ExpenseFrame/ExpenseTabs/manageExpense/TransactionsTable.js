import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CompactTable } from '@table-library/react-table-library/compact';

const COLUMNS = [
    { label: 'desc', renderCell: (item) => item.desc },
    { label: 'amount', renderCell: (item) => item.amount },
    { label: 'category', renderCell: (item) => item.category },
    { label: 'date', renderCell: (item) => item.date, },
];

function TransactionsTable({ trigger, setTrigger }) {
    // ======STATE
    const [transactions, setTransactions] = useState([]);
    const filterTransactions = (data) => {
        let filteredTransactions = [];
        for (let i = 0; i < data.length; i++) {
            let currTrans = {}
            currTrans["id"] = data[i]._id;
            currTrans["amount"] = data[i].amount;
            currTrans["category"] = data[i].category;
            currTrans["date"] = data[i].date;
            currTrans["desc"] = data[i].desc;
            filteredTransactions.push(currTrans);
        }
        setTransactions(filteredTransactions);
    }
    // ======USE EFFECT
    //fetch transactions initally
    useEffect(() => {
        //load the transactions from the database
        const fetchTransactions = async () => {
            const transactions = await axios.get('http://localhost:4000/expense/getExpenses', {
                headers: {
                    'authorization': localStorage.getItem('authToken')
                }
            });
            filterTransactions(transactions?.data?.expenses);
        }
        fetchTransactions();
    }, [])
    //fetch transactions when trigger is true/transaction is added
    useEffect(() => {
        if (trigger) {
            console.log("trigger was triggered!")
            setTrigger(false);
        }
    }, [trigger]);

    // ======RETURN
    const nodes=transactions;//this line is necessary, else will give iterator error
    return <CompactTable columns={COLUMNS} data={{nodes}} />;


}

export default TransactionsTable;
