import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (progress) => {

    let data = progress.id;
    let StateHover = true;
    if(data == 1)
    {
        data = 33;
        StateHover = false;
    }
    else if(data == 2)
    {
        data = 66;
        
    }
    else
    {
        data = 100;
    }
    let Ldata = 100 - data; 


    
  return (
    <div>
        <div className='StepSection'>
            <div className='Box'>
                <div className='large-container'>
                <Link to='/' ><a>Step 1</a></Link>
                </div>
                <div className='small-container'>

                </div>
            </div>
            <div className='Box'>
                <div className='large-container'>
                {
                    StateHover?
                    (<Link to='/Stage2'><a>Step 2</a></Link>)
                    :
                    <a style={{cursor:"pointer"}} >Step 2</a>
                }
                
                </div>
                <div className='small-container'>

                </div>
            </div>
            <div className='Box'>
                <div className='large-container'>
                    <Link ><a>Success</a></Link> 
                </div>
                <div className='small-container'>

                </div>
            </div>
            
        </div>
        <br></br>
        <div className='ProgressBar'>
            <div className='Bar1'
            style={{
                backgroundColor:"green",
                width: `${data}%`,
                height : "0.9rem"  }}
            >
            </div>
            <div className='Bar2'
            style={{
                backgroundColor:"gray",
                width: `${Ldata}%`,
                height : "0.9rem"  }}
            >
            </div>
        </div>
        <br></br>
    </div>
  )
}

export default Navbar