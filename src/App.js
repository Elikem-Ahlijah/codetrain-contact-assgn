import './App.css';
import React, { useState } from 'react';
import Contacts from './Components/Contacts';
import ContactsForm from './Components/ContactsForm';

function App() {
  const [contacts, setContacts] = useState([])

    function handleAddContact  (contact){
      setContacts([...contacts, contact])
  }

  return (
    <div className='container-flex'>
      <div className='row form'>
        <div className='col-md-6'>
          <ContactsForm handleAddContact={handleAddContact}/>
        </div>
        <div className='col-md-6'>
          <Contacts allContacts={contacts}/>
        </div>
      </div>
    </div>
  )
}













// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state =[{name: 'Kojo',
//     number: 24247,
//     location: 'Accra'},
//     {name: 'Ama',
//     number: 22457,
//     location: 'Alajo'},
//     {name: 'Johnson',
//     number: 23447,
//     location: 'Abeka'}]
    
    
//     // this.state={contacts}
//   }
//   render() {
//     return (
//       <div>
//         {this.state.map((contact, index)=>(<p>{contact.name}</p>))}
//       </div>
//     )
//   }
// }




export default App;
