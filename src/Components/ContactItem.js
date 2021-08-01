import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import EditContactForm from './EditContactForm';

import { deleteContact } from '../actions/contactActions';
import { connect } from 'react-redux';

function ContactItem(props) {
    const [isModalVisible, setShowModal]=useState(false)

    function showModal(){
        setShowModal(true)
    }

    function hideModal(){
        setShowModal(false)
    }


    return (
        
      <div className='row item'>
            <p className='col-md-3'>{props.contact.name}</p>
            <p className='col-md-3'>{props.contact.number}</p>
            <p className='col-md-2'>{props.contact.location}</p>
            <div className='col-md-4'>
            <button className='btn btn-primary button' onClick={showModal}>Update</button>
            <Modal show={isModalVisible} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContactForm hideModal={hideModal} contact={props.contact} handleUpdateContact={props.handleUpdateContact}/>
                </Modal.Body>
                </Modal>
            <button className='btn btn-danger button' onClick={()=>props.deleteContact(props.contact.id)}>Delete</button>
            </div> 
        </div>
        
    )
}

let mapDispatchToProps = { deleteContact };

let mapStateToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem)
