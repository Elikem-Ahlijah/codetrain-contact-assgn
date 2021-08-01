import { getFirestore } from "redux-firestore";


export function addContact(newContact){
     return async (dispatch, state, {getFirestore} ) =>{
         console.log(newContact)
         const db = getFirestore();
         try {
             await db.collection("contacts").add(newContact)
         } catch (error) {
             console.log(error);
         }

     }
    //  {type:'ADD_CONTACT', payload: newContact}
}

export function getAllContacts () {
    return (dispatch, state, {getFirestore})=>{
        const db = getFirestore();
        db.collection("contacts").onSnapshot(
            (results)=>{
                let contacts = [];
                results.forEach((doc) => {
                    contacts.push({...doc.data(), id: doc.id});
                });
                dispatch({type: "ADD_ALL_CONTACTS", payload: contacts})
            },
            (err)=>{
                console.log(err);
            }
        );
    };
}

export function updateContact(id, updatedContact){
    return async (dispatch, state, {getFirestore})=>{
        const db = getFirestore();
       try {
           await  db.collection("contacts").doc(id).update(updatedContact);
       } catch (error) {
           console.log(error)
       }
    }
    // {type:'UPDATE_CONTACT', payload: {id:id, updatedContactInfo:updatedContact}}
}

export function deleteContact(id){
    return async (dispatch, state, {getFirestore})=>{
        const db = getFirestore();
        try {
            await db.collection("contacts").doc(id).delete()
        } catch (error) {
            console.log(error)
        }
    }
    // {type: 'DELETE_CONTACT', payload: newContact}
}