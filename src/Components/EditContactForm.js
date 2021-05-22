import React, { Component } from 'react'

export default class EditContactForm extends Component {
    constructor(props){
        super(props);

        this.state = {  name: this.props.contact.name,
                        number: this.props.contact.number,
                        location: this.props.contact.location,
                        };
                    }


    handleonChange = (event)=>{
        this.setState({...this.state, [event.target.name]:event.target.value})
        }
                    
    handleonSubmit=()=>{
        let contact = {...this.state, id: this.props.contactId}
        this.props.handleUpdateContact(this.props.contact.id, contact)
        this.props.hideModal()
                    
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

                <button type="button" onClick={this.handleonSubmit}>Update Contact</button>
                
                
            </div>
        )
    }
}
