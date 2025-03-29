import React,{Fragment} from 'react'
import xyz from './pictures/img2.jpg';


function Mycontact() {
    const mypic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIizj-yKMa30aivqh1AFZ3YLdMf-VSphh8mg&s";
    const name = "rohit singh";
    const y = false;
    const first = "sdf";

    return (
        <Fragment>
            <div>Mycontact sdfsd </div>
            <h2>name is  : {name}</h2>
            <h2>operation : {5000+900}</h2>
            <h2>string : {"kumar"}</h2>
            <h2>element :  {<span>heading four</span>}</h2>
            <h2>bloolean : {y===true ? "yes" : "no"}</h2>
            <h2>bloolean : {first==="jan" ? "month of jan" : first==="feb" ? "month of feb" : "nothing"}</h2>
            <h3>this is heading third</h3>

            <h1>call image from public</h1>
            <img src='myimgs/img1.jpg' width={200} alt='sjdfhjsdghf'/>

            <h1>call image from src</h1>
            <img src={xyz} width={300} alt='sdkfhjsdf'/>

            <h1>call image from cdn</h1>
            <img src={mypic} width={300} alt='imagesdfhgshdgf'/>


        </Fragment>
    )
}

export default Mycontact