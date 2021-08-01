const initialState = {
    contacts:[]
}



const contactReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_ALL_CONTACTS':
            let contacts = action.payload;
            return {contacts:contacts};

        case 'ADD_CONTACT':
            console.log(action.payload)
            let newContacts = [...state.contacts, action.payload];
            return {contacts : newContacts};

        
        case 'DELETE_CONTACT':
            var id = action.payload
            let contactsAfterDelete = state.contacts.filter((contact)=>contact.id !== id);
            return {contacts: contactsAfterDelete};

        case 'UPDATE_CONTACT':
            var id = action.payload.id;
            let updatedContactInfo = action.payload.updatedContactInfo
            let contactsAfterUpdate = state.contacts.map((contact)=>{
                if(contact.id === id){
                    return updatedContactInfo
                }
                return contact;
            });

            return {contacts: contactsAfterUpdate};

    
        default:
            return state;
    }
};

export default contactReducer;