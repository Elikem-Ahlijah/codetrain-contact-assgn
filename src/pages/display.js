import React from 'react';

import '../App.css';
import ContactsForm from '../Components/ContactsForm';
import Contacts from '../Components/Contacts';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../actions/authActions';


function display(props) {
  function handleLogout(){
    props.logout()
}
    return (
        <div className="container-flex App">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      <div className="row form">
        <div className="col-md-6">
        <button type="button" style={{ backgroundColor: 'red', color: 'white' }} onClick={handleLogout}>
            Logout
        </button>
          <ContactsForm />
        </div>
        <div className="col-md-6">
          <Contacts />
        </div>
      </div>
        </div>
    )
}

const mapDispatchToProps = {logout}

export default connect(null, mapDispatchToProps) (display);
