import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';                                    

function Productdetailspage() {
    const {id} = useParams();

    const [pro, setpro] = useState({});

    const singleitme = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
            console.log(d.data)
            setpro(d.data);
        })
    }

    useEffect(() => {
        singleitme();
    }, []);




  return (
    <div className='container cmt'>
        <div className='row'>
            <div className='col-12 bg-dark text-white'>
                <p className='float-start'>Product Details Page</p>
                <Link to="/cus_dashbaord/apidata" className='float-end btn btn-danger'>Back</Link>
            </div>
            <div className='col-md-5 border'>
                <img src={pro.thumbnail} alt='sdf' className='img-fluid'/>
            </div>
            <div className='col-md-7 border p-3'>
                <h4>Product Id: {pro.id}</h4>
                <h5>Title: {pro.title}</h5>
                <p className='h3'>{pro.warrantyInformation}</p>
                <hr/>
                <p><span className='text-success detls'>Product Description: </span>{pro.description}</p>
            </div>

        </div>
    </div>
  )
}

export default Productdetailspage