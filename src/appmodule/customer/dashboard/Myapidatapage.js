import React, { useEffect, useState } from 'react'
import { PiCurrencyInr } from "react-icons/pi";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Myapidatapage() {
    const count = useSelector((state) => state.counter.age)

    const [pro, setpro] = useState([]);

    const myapi = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            console.log(d)
            setpro(d.data.products);
        })
    }



    // const myapi = () => {
    //     fetch("https://dummyjson.com/products").then((d) => {
    //         return d.json()
    //     }).then((d) => {
    //         console.log(d.products);
    //         setpro(d.products);
    //     })
    // }

    useEffect(() => {
        myapi();
    }, []);


    return (
        <div className='container cmt'>
            <div className="row">
                <div className='col-12'>
                    <h1>{count}</h1>
                </div>
            </div>
            <div className='row'>
                {pro.map((c) => {
                    if (c.id === 6 || c.id === 9) {
                        return (
                            <div className='col-md-3 mt-3'>
                                <Link to={`details/${c.id}`}>
                                    <div className="card bg-info">
                                        <img src={c.images[0]} className="card-img-top cimage" alt="..." />
                                        <div className="card-body">
                                            <h1>{c.id}</h1>
                                            <h5 className="card-title">{c.brand}</h5>
                                            <p className="card-text">Price:<PiCurrencyInr /> {c.price}</p>
                                            <h5 className="card-title text-danger">Avail stock Items: {c.stock}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className='col-md-3 mt-3'>
                                <Link to={`details/${c.id}`}>
                                    <div className="card">
                                        <img src={c.images[0]} className="card-img-top " alt="..." />
                                        <div className="card-body">
                                            <h1>{c.id}</h1>
                                            <h5 className="card-title">{c.brand}</h5>
                                            <p className="card-text">Price:<PiCurrencyInr /> {c.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Myapidatapage