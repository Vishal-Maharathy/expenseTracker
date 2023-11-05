import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

//Date-Range-Picker
import DateRange from '../../../miscComponents/dateTimePicker';
import "../../../../assets/ExpenseFrame/filter.css";
function Filter({ setFilter: setFilterMain }) {
    const [categories, setCategories] = useState(['Rent', 'Utilities', 'Marketing', 'Education', 'Medicine', 'Food', 'Travel', 'Entertainment']);
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
        categories: [],
    });
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        if (filters.categories.includes(selectedCategory)) {
            // Category already selected, remove it
            setFilters({
                ...filters,
                categories: filters.categories.filter((category) => category !== selectedCategory),
            });
        } else {
            // Category not selected, add it
            setFilters({
                ...filters,
                categories: [...filters.categories, selectedCategory],
            });
        }
    };
    const handleStartDateChange = (date) => {
        setFilters({ ...filters, startDate: date });
    };
    const handleEndDateChange = (date) => {
        setFilters({ ...filters, endDate: date })
    };
    const applyFilters = () => {
        setFilterMain(filters);
    };
    useEffect(() => {
        //load the categories from the database
        const fetchCategories = async () => {
            const fetchedCategories = await axios.get('http://localhost:4000/expense/getExpCategory', {
                headers: {
                    'authorization': localStorage.getItem('authToken')
                }
            });

            setCategories([...(fetchedCategories?.data?.categories), ...categories]);
        }
        fetchCategories();
    }, [])
    return (
        <div className="filter-section">
            <div className='filterTitle'>Filters</div>
            <div className='addTransactionInput'>
                <>
                    <DateRange setStartDate={handleStartDateChange} setEndDate={handleEndDateChange} />
                </>
            </div>
            <div className='addTransactionInput selectCategories'>
                <select
                    id="category"
                    name="category"
                    multiple
                    value={filters.categories}
                    onChange={handleCategoryChange}
                >
                    {/* load these from an array */}
                    {categories?.map((category) => {
                        return (<option value={category}>{category}</option>)
                    })}
                    {/* Add other category options */}
                </select>
            </div>
            <button onClick={applyFilters} className="filter-button">
                Apply Filters
            </button>
        </div>
    );
}

export default Filter;
