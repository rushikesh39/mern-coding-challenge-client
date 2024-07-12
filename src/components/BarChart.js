import React, { useEffect, useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { getBarChartData } from '../services/api';

const BarChartComponent = ({ month }) => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetchBarChartData();
    }, [month]);

    const fetchBarChartData = async () => {
        const params = { month };
        const { data } = await getBarChartData(params);
        console.log("Barchat data", data);
        setData(data);
    };

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month - 1];

    return (
        <div>
            <h2>Bar Chart Stats - {monthName} </h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="#00cfcf" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartComponent;
