import { useEffect, useState } from "react"

const useCars =()=>{

    const [cars,setCars]=useState([]);
    
    useEffect(()=>{

        fetch("http://localhost:5002/cars")
        .then(Response=>Response.json())
        .then(data=>setCars(data))

    },[])


    return  [cars,setCars];

}

export default useCars;