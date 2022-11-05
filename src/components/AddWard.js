import React, {useState, useEffect} from 'react'

import {useNavigate, Link, useParams} from 'react-router-dom'

import WardService from '../services/WardService'

const AddWard = () => {

    const [name, setname] = useState('')
    const [ward_type, setward_type] = useState('')
    const [nurse, setnurse] = useState('')
    const [bed, setbed] = useState('')
    const [incharge, setincharge] = useState('')

    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateWard = (e) =>{
        e.preventDefault();

        const ward = {name, ward_type, nurse, bed, incharge}

        if(id){

            if(!ward_type || !nurse || !name || !bed || !incharge){
                alert("Fill All the fields");
               
            }else{
           
            WardService.updateWard(id, ward).then((Response) => {
                 
           
                history('/ward');
 
            }).catch(error => {
                console.log(error);
            })
        }
        }else{

            if(!ward_type || !nurse || !name || !bed || !incharge){
                alert("Fill All the fields");
               
            }else{
            WardService.createWard(ward).then((Response) => {

                console.log(Response.data)
                
                    history('/ward');
                
                
    
            }).catch(error => {
                console.log(error)
            })
        }
        }

        

    }

    useEffect(() => {
      WardService.getWardById(id).then((Response) => {
        setname(Response.data.name)
        setnurse(Response.data.nurse)
        setward_type(Response.data.ward_type)
        setincharge(Response.data.incharge)
        setbed(Response.data.bed)

      }).catch(error => {
        console.log(error)
      })
    }, [])

    const title = () => {
        if(id){
            return <h2 className='text-center'>Update Ward</h2>
        }else{
            return <h2 className='text-center'>Add Ward</h2>
        }
    }
    


  return (
    <div>
        
        <br /> <br />

        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    
                    {
                        title()
                    }

                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Ward Number :</label>
                                <input
                                 type= "text"
                                 placeholder='Enter Ward number'
                                 name='name'
                                 className='form-control'
                                 value={name}
                                 onChange = {(e) => setname(e.target.value)}
                                 
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Ward Type :</label>
                                <input
                                 type= "text"
                                 placeholder='Enter Ward Type'
                                 name='ward_type'
                                 className='form-control'
                                 value={ward_type}
                                 onChange = {(e) => setward_type(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Incharge Doctor :</label>
                                <input
                                 type= "text"
                                 placeholder='Enter Incharge Doctor'
                                 name='incharge'
                                 className='form-control'
                                 value={incharge}
                                 onChange = {(e) => setincharge(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Number of Nurse :</label>
                                <input
                                 type= "text"
                                 placeholder='Enter Number of Nurse'
                                 name='nurse'
                                 className='form-control'
                                 value={nurse}
                                 onChange = {(e) => setnurse(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Number of Beds :</label>
                                <input
                                 type= "text"
                                 placeholder='Enter Number of Beds'
                                 name='bed'
                                 className='form-control'
                                 value={bed}
                                 onChange = {(e) => setbed(e.target.value)}
                                >
                                </input>
                            </div>

                            

                            <button className='btn btn-success' onClick={(e) => saveOrUpdateWard(e)}>Submit</button>
                            <Link to={'/'} className="btn btn-danger">Cancel</Link>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddWard