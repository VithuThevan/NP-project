import React from 'react'
import { Link } from 'react-router-dom'


const HeaderComponents = () => {
  return (
    <div className='text-center'>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    
                    <h2 className='navbar-brand text-center'>Hospital Management Application</h2>
                    {/* <Link to={'/patient'} className='btn btn-primary mb-2'>Patient Details</Link> */}
                    
                    

                   
                    
                </div>
                {/* <Link to={'/'} className='text-danger'>Home</Link> */}
            </nav>
            
            
        </header>
    </div>
  )
}

export default HeaderComponents