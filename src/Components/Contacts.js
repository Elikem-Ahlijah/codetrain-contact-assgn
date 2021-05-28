import React from 'react';
import ContactItem from './ContactItem';

import {connect} from 'react-redux';

function Contacts(props) {
    return (
        <div>
            <div>
                {props.contactsData.map((contact, index)=>(
              <ContactItem handleUpdateContact={props.handleUpdateContact} contact={contact} delete={props.delete}/>))}
            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {contactsData: state.contacts}
}

export default connect(mapStateToProps)(Contacts);
