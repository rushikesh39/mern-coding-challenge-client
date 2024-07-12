import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { getPieChartData } from '../services/api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const PieChartComponent = ({ month }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchPieChartData();
    }, [month]);

    const fetchPieChartData = async () => {
        const params = { month };
        const { data } = await getPieChartData(params);
        console.log("Piachart data", data);
        setData(data);
    };
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month - 1];
    return (
        <div>
            <h2>Pie Chart Stats - {monthName}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartComponent;
