import {React, useState} from 'react';
import '../../../assets/ExpenseFrame/manageExpenses.css';
import TransactionsTable from './manageExpense/TransactionsTable'
import Filters from './manageExpense/Filters'
const ManageExpense = () => {
  //wil contain three components: TransactionsTable, Add Transaction and Filter Transactions
  const [trigger, setTrigger] = useState(false);
  const [filter, setFilter] = useState([]);
  const [transactions, addTransactions] = useState({});
  
  return (
    <div className="manageExpenses">
      <div className='LeftPane'>
        <div className='addTransaction'>
          <button>Add Transaction</button>
        </div>
        <div className='transactionTable'>
          <TransactionsTable />
        </div>
      </div>
      <div className='RightPane'>
        <Filters />
      </div>
    </div>
  );
};

export default ManageExpense;


// import React, { useState } from 'react';
// import TableComponent from './TableComponent';
// import ModalComponent from './ModalComponent';

// function ParentComponent() {
//   const [trigger, setTrigger] = useState(false);

//   const addTransaction = () => {
//     // Add your code to add a new transaction to the database here

//     // After adding the transaction to the database, set the trigger to true to initiate data fetching
//     setTrigger(true);
//   };

//   return (
//     <div>
//       <TableComponent trigger={trigger} />
//       <ModalComponent onTransactionAdded={addTransaction} />
//     </div>
//   );
// }

// export default ParentComponent;
