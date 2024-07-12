import React, { useState, useEffect,useCallback } from 'react';
import { getStatistics } from '../services/api';
import './StatisticBox.css'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const StatisticsBox = ({ month }) => {
    const [statistics, setStatistics] = useState({});

    const fetchStatistics = useCallback(async () => {
        const params = { month };
        const { data } = await getStatistics(params);
        console.log("statistics data", data);
        setStatistics(data);
    },[month]);
    useEffect(() => {
        fetchStatistics();
    }, [fetchStatistics]);

    

    const monthName = monthNames[month - 1]; // Get the month name from the array

    return (
        <div>
            <div className='statistics'>
                <h2>Statistics {monthName}</h2>
                <p>Total Sales: {statistics.totalSales}</p>
                <p>Total Sold Items: {statistics.totalSoldItems}</p>
                <p>Total Unsold Items: {statistics.totalUnsoldItems}</p>
            </div>
        </div>
    );
};

export default StatisticsBox;
