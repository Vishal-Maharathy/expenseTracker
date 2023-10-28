import React, { useState, useEffect } from 'react';

function Filters({ trigger, setTrigger }) {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (trigger) {
            // Fetch the updated transaction data from the database
            // You can make an API call or load data from a local source here
            //   const updatedData = fetchUpdatedData(); // Replace with your data source
            //   setTransactions(updatedData);
            console.log("trigger was triggered!")

            // Reset the trigger to false to avoid continuous updates
            setTrigger(false);
        }
    }, [trigger]);

    // Render the table using the transactions data
    return (
        <div>Filter</div>
    );
}

export default Filters;
