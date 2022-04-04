import React, { useEffect, useState } from 'react';
import { Area,Tooltip, Bar, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, ComposedChart, BarChart, AreaChart } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='container'>
            <div className="row mt-5 gy-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <ComposedChart width={500} height={250} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Legend />
                        <Tooltip/>
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <LineChart width={500} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Legend />
                        <Tooltip/>
                        <Line type="monotone" dataKey="month" stroke="#8884d8" />
                        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <BarChart width={500} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Legend />
                        <Tooltip/>
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <AreaChart width={500} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip/>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />

                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;