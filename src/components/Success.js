import React, { useState } from 'react'
import Navbar from './Navbar'
import './Success.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Success = () => {
    const [fact,setFact] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://catfact.ninja/fact');
                const jsonData = await response.json();
                console.log(jsonData.fact);
                setFact(jsonData.fact);
                
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    },[])


    


    const location = useLocation();
    const data = location.state;

    return (
        <div>
            <Navbar id={3} />
            <div className='Container'>
                <p style={{fontWeight: "bold"}} >Congratulations , Your info is registered</p>
                <div className='User-Data'>
                    <p>First Name : {data.fname}</p>
                    <p>Last Name : {data.lname}</p>
                    <p>Email : {data.email}</p>

                </div>
                <div className='Container1'>
                    <p>Here's a fact for you :</p>
                    <p style={{backgroundColor:"lightgray"}} >
                       {fact ? fact : <p>Loading...</p>  }
                    </p>
                    <p>
                        
                    </p>
                </div>


            </div>
        </div>
    )
}

export default Success