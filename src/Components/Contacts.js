import React, {useEffect} from 'react';
import ContactItem from './ContactItem';

import {connect} from 'react-redux';
import {getAllContacts} from '../actions/contactActions'

function Contacts(props) {
    useEffect(() => {
        props.getAllContacts()
    }, [])
    return (
        <div>
            
                {props.contactsData.map((contact)=>(
              <ContactItem  contact={contact} />))}
            
        </div>
    );
}

function mapStateToProps (state) {
    return {contactsData: state.contactState.contacts}
}

const mapDispatchToProps = {
    getAllContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
