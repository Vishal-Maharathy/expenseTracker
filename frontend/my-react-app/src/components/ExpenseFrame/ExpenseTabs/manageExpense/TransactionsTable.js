import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CompactTable } from '@table-library/react-table-library/compact';
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTheme } from "@table-library/react-table-library/theme";
import { useRowSelect } from "@table-library/react-table-library/select";
import { usePagination } from "@table-library/react-table-library/pagination";

const COLUMNS = [
    { label: 'Description', renderCell: (item) => item.desc, select: true, resize: true },
    { label: 'Amount', renderCell: (item) => item.amount, resize: true },
    { label: 'Category', renderCell: (item) => item.category, resize: true },
    { label: 'Date', renderCell: (item) => item.date, resize: true },
];

function TransactionsTable({ trigger, setTrigger }) {
    // ======STATE
    const [transactions, setTransactions] = useState([]);
    const fetchTransactions = async () => {
        const transactions = await axios.get('http://localhost:4000/expense/getExpenses', {
            headers: {
                'authorization': localStorage.getItem('authToken')
            }
        });
        let data = transactions?.data?.expenses;
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
        fetchTransactions();
    }, [])
    //fetch transactions when trigger is true/transaction is added
    useEffect(() => {
        if (trigger) {
            console.log("trigger was triggered!")
            fetchTransactions()
            setTrigger(false);
        }
    }, [trigger]);
    // ======TABLE FUNCTIONS
    const theme = useTheme([
        getTheme(),
        {
            HeaderRow: `background-color: #f1f1f1;`,
            Cell: `text-align: left;`
        },
    ]);
    const nodes = transactions;//this line is necessary, else will give iterator error
    const select = useRowSelect({ nodes }, {
        onChange: onSelectChange,
    });
    function onSelectChange(action, state) {
        console.log(action, state);
    }
    const pagination = usePagination(nodes, {
        state: {
            page: 0,
            size: 12,
        },
        onChange: onPaginationChange,
    });

    function onPaginationChange(action, state) {
        console.log(action, state);
    }

    // ======RETURN
    return(
    <>
        <CompactTable
            columns={COLUMNS}
            data={{ nodes }}
            theme={theme}
            select={select}
            pagination={pagination}
            />
            <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Total Pages: {pagination.state.getTotalPages(nodes)}</span>

            <span className='pageButton'>
                Page:{" "}
                {pagination.state.getPages(nodes).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        style={{
                            fontWeight: pagination.state.page === index ? "bold" : "normal",
                        }}
                        onClick={() => pagination.fns.onSetPage(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </span>
        </div>
        <br />
    </>
)}

export default TransactionsTable;
