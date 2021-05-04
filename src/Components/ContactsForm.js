import React, { Component } from 'react'

export default class ContactsForm extends Component {
    constructor(props){
        super(props);

        this.state = {  name: '',
                        number: '',
                        location: '',
                        };

        

}

 handleonChange = (event)=>{
    this.setState({...this.state, [event.target.name]:event.target.value})
}

 handleonSubmit=()=>{
    // e.preventDefault(e);
    // let newContact={name: this.state.name, number: this.state.number, location: this.state.location};
    // // this.setState({ contacts: [...this.state.users, newContact]})
    let contactId = 10000 + Math.random()*10000000;
    let contact = {...this.state, id: contactId}
    this.props.handleAddContact(contact)

}

    render() {
        return (
            <div>
                <div>
                <label className="">Name</label><br></br>
                <input type="text" value={this.state.name} name="name" onChange={this.handleonChange}></input>
            </div>

            <div>
                <label>Number</label><br></br>
                <input type="text" value={this.state.number}  name="number" onChange={this.handleonChange}></input>
            </div>

            <div>
                <label>Location</label><br></br>
                <input type="text" value={this.state.location} name="location" onChange={this.handleonChange}></input>
            </div>

            <button type="button" onClick={this.handleonSubmit}>Create User</button>
                
            </div>
        )
    }
}
