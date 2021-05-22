const initalState = {
    contacts:[{name:'Elikem', contactId:'hfjfi464647', gender:'male'}]
}



const contactReducer = (state=initalState, action) => {
    switch (action.type) {
        case 'ADD-CONTACT':
            
            break;
    
        default:
            return state;
    }
}

export default contactReducer;