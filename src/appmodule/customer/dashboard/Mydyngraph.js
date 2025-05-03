import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Rectangle,
    ResponsiveContainer,
} from "recharts";
import { Mycontexttext } from '../shares/Mycontext';


function Mydyngraph() {
    const myimportdata = useContext(Mycontexttext);
    const [mydata, setdata] = useState([]);
    const [disp, setdisp] = useState([]);
    const [org, setori] = useState([]);

    const myapi = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            // console.log(d.data.products)
            setdata(d.data.products);
            setori(d.data.products);
            const a = d.data.products;
            const b = a.map((x) => { return x.category });
            const c = [...new Set(b)];

            setdisp(c)
        })
    }

    useEffect(() => {
        myapi();
    }, []);


    const changeopt = (e) => {
        console.log(e.target.value);
        setdata(org.filter((d) => {
            return d.category === e.target.value
        }))

    }




    return (
        <div className='container-fluid text-white bg-dark'>
            <div className='row'>
                <div className='col-md-3'>
                    <select className='form-select' onChange={changeopt}>
                        {disp.map((d) => {
                            return <option key={d}> {d}</option>
                        })}
                    </select>
                </div>
                <div className='col-md-4'>
                    <h1>Dyn graphic</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>

                    <ResponsiveContainer width={"100%"} height={300}>
                        <BarChart
                            data={mydata}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Bar
                                dataKey="stock"
                                fill="red"
                            />
                            <Bar
                                dataKey="price"
                                fill="green"
                            />

                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    {/* {myimportdata.name} */}
                    <select>
                       {myimportdata.map((d)=>{
                        return <option>{d.name}</option>
                       })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Mydyngraph