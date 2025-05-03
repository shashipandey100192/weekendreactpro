import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'category', headerName: 'Category', width: 200 },
    { field: 'brand', headerName: 'Brand Name', width: 130 },
    {
      field: 'price',
      headerName: 'Price List',
      type: 'number',
      width: 90,
    },
    { field: 'stock', headerName: 'Stock Item', width: 130 },
    
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const paginationModel = { page: 0, pageSize: 5 };

function Tablepagination() {
    const [pro, setpro] = useState([]);
    
        const myapi = () => {
            axios.get('https://dummyjson.com/products').then((d) => {
                console.log(d)
                setpro(d.data.products);
            })
        }

useEffect(()=>{
    myapi();
})
    



    return (
        <div className='container cmt'>
            <div className='row'>
                <div className='col-12'>
                    <h1>pagination page layout </h1>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={pro}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{ border: 0 }}
                        />
                    </Paper>


                </div>
            </div>
        </div>
    )
}

export default Tablepagination