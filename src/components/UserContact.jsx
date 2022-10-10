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
        console.log(this.state.fname)
        this.setState({
            fname: event.target.value
        }
        )   
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            // fname: ????
        })
        event.target.style.display = "none";
        this.showContent(document.getElementsByClassName("content"))
    }

    showContent = (i) => {
        i[0].style.display = "inline"
        // console.log(i)
    }

    edit = (event) => {
        event.preventDefault();
        this.showContent(document.getElementsByClassName("form"))
        event.target.style.display = "none";
    }
    
    render() 
    {
        return(
            <div>  
                <form className="form" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" name="firstname" onChange={e => this.handleChange(e)}></input>

                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" name="lastname"></input>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email"></input>

                    <label>Phone number (prefered):</label>
                    <input type="tel"></input>

                    <input type="submit" value="Add"></input>
                </form>
                <form className="content" style={{display: "none"}} onSubmit={e => this.edit(e)}>
                    <div>First name</div>
                    <div>Last name</div>
                    <div>Email</div>
                    <div>Phone number</div>

                    <input type="submit" value="Edit"></input>
                </form>
            </div>
        )
    }
}

export default UserContact