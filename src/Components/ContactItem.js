import React from 'react'

export default function ContactItem(props) {
    return (
        
      <div className='row item'>
            <p className='col-md-3'>{props.contact.name}</p>
            <p className='col-md-3'>{props.contact.number}</p>
            <p className='col-md-2'>{props.contact.location}</p>
            <div className='col-md-4'>
            <button className='btn btn-primary button'>Update</button>
            <button className='btn btn-danger button'>Update</button>
            </div> 
        </div>
        
    )
}
