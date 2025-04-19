import React,{useEffect, useState} from 'react'
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


const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function Mydyngraph() {
    const [mydata, setdata] = useState([]);
    const [disp, setdisp]= useState([]);
    const [org, setori]=useState([]);

    const myapi = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            // console.log(d.data.products)
            setdata(d.data.products);
            setori(d.data.products);
            const a = d.data.products;
                const  b = a.map((x)=>{return x.category});
                const c = [...new Set(b)];
               
            setdisp(c)
        })
    }

useEffect(()=>{
    myapi();
},[]);


const changeopt = (e)=>{
    console.log(e.target.value);
    setdata(org.filter((d)=>{
        return d.category===e.target.value
    }))

}




  return (
   <div className='container-fluid text-white bg-dark'>
    <div className='row'>
        <div className='col-md-3'>
        <select className='form-select' onChange={changeopt}>
            {disp.map((d)=>{
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
           </div>
  )
}

export default Mydyngraph