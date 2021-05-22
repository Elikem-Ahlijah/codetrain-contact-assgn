import React from 'react'
import ContactItem from './ContactItem'

export default function Contacts(props) {
    return (
        <div>
            <div>
                {props.allContacts.map((contact, index)=>(
              <ContactItem handleUpdateContact={props.handleUpdateContact} contact={contact} delete={props.delete}/>))}
            </div>
        </div>
    )
}
