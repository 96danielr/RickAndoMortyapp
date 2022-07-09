import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import "../App.css"


const ResidentItem = ({resident}) => {

    

    const [residentData,setResidentData] = useState({})
    useEffect(()=>{

        axios.get(resident)
        .then(res => setResidentData(res.data))
    },[])

    console.log(residentData)    
    return (
        <div className='container-resident'>
            <div className='card'>
                <img src={residentData.image} alt="" />

                <div className='resident-info'>
                <p>{residentData.name}</p>
                <p className='descript'>status: </p>
                <p>{residentData?.status}</p>
                <p className='descript'>origin: </p>
                <p>{residentData.origin?.name}</p>
                <p className='descript'>episodes where appear: </p> 
                <p>{ residentData.episode?.length}</p>
                </div>
            
            </div>
                      
             
            
        </div>
    );
};

export default ResidentItem;