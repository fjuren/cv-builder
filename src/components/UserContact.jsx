import React, { Component } from "react"

class UserContact extends React.Component {
    constructor(){
        super();
        this.state = {
            fname: "",
            lname: "",
            email: "",
            phone: "",
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        }
        )   
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            phone: this.state.phone,
        })
        event.target.style.display = "none";
        this.showContent(document.getElementsByClassName("content"))
    }
    
    edit = (event) => {
        event.preventDefault();
        event.target.style.display = "none";
        this.showContent(document.getElementsByClassName("form"))
    }

    showContent = (i) => {
        i[0].style.display = "inline"
    }
    
    render() 
    {
        return(
            <div>  
                <form className="form" onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <label htmlFor="firstname">First name: </label>
                        <input type="text" name="firstname" id="fname" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label htmlFor="lastname">Last name: </label>
                        <input type="text" name="lastname" id="lname" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone number: </label>
                        <input type="tel" name="phone" id="phone" onChange={e => this.handleChange(e)}></input>
                    </div>

                    <input type="submit" value="Save"></input>
                </form>
                <form className="content" style={{display: "none"}} onSubmit={e => this.edit(e)}>
                    <div>
                        <label>First name: </label>
                        <span>{this.state.fname}</span>
                    </div>
                    <div>
                        <label>Last name: </label>
                        <span>{this.state.lname}</span>
                    </div>
                    <div>
                        <label>Email: </label>
                        <span>{this.state.email}</span>
                    </div>
                    <div>
                        <label>Phone number: </label>
                        <span>{this.state.phone}</span>
                    </div>
                    <input type="submit" value="Edit"></input>
                </form>
            </div>
        )
    }
}

export default UserContact