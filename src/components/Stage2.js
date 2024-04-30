import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Stage2.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Success from './Success';


function Stage2() {

    const [data, setData] = useState("");


    


    const navigate = useNavigate();

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");

    const handleSubmit = async (e) => {

        let val = true;
        if (fname.length > 35 || lname.length > 35 || fname == "" || lname == "" || email == "" || email.length > 35) {
            val = false;
        }
        if (val)
            navigate("/Success", { state: { fname, lname, email } })
        else {
            navigate("/Stage2");
        }
    }


    return (
        <div>
            <Navbar id={2} />
            <br></br>
            <br></br>
            <br></br>
            <div className='Form'>
                <form >
                    <div className='contianer1'>
                        <input id='fname' placeholder='First Name' type='text' onChange={(e) => setfname(e.target.value)}  ></input>
                        <input id='lname' placeholder='Last Name' type='text' onChange={(e) => setlname(e.target.value)}  ></input>
                    </div>
                    <br></br>
                    <div className='contianer2'>
                        <input id='email' placeholder='Email' type='email' onChange={(e) => setemail(e.target.value)} ></input>
                    </div>
                    <br></br>
                    <div className='container3'>
                        <button type='submit' onClick={() => { handleSubmit() }} >
                            Next
                        </button>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default Stage2