import React from 'react'
import ContactItem from './ContactItem'

export default function Contacts(props) {
    return (
        <div>
            <div>
                {props.allContacts.map((contact, index)=>(
              <ContactItem contact={contact}/>))}
            </div>
        </div>
    )
}
