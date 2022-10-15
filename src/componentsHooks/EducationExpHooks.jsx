import React, { useEffect, useState } from "react";

// const EducationExpHooks = () => {
//     const [school, setSchool] = useState("")
//     const [lname, setLname] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone, setPhone] = useState("")

//     useEffect(() => {
//         const handleChange = (event) => {
//             if (event.target.id === 'school') {
//                 setSchool(event.target.value);
//             }
//         }

//         return () => {
//             handleChange()
//         }
//     })

//     return(
//         <div>  
//             <form className="educationForm" onSubmit={e => this.handleSubmit(e)}>
//                 <div>
//                     <label htmlFor="firstname">School name: </label>
//                     <input type="text" name="firstname" id="school" onChange={e => this.handleChange(e)}></input>
//                 </div>
//                 <div>
//                     <label htmlFor="lastname">Field of study: </label>
//                     <input type="text" name="lastname" id="lname" onChange={e => this.handleChange(e)}></input>
//                 </div>
//                 <div>
//                     <label htmlFor="phone">Graduation year: </label>
//                     <input type="tel" name="phone" id="phone" onChange={e => this.handleChange(e)}></input>
//                 </div>

//                 <input type="submit" value="Save"></input>
//             </form>
//             <form className="educationContent" style={{display: "none"}} onSubmit={e => this.edit(e)}>
//                 <div>
//                     <label>School name: </label>
//                     <span>{this.state.school}</span>
//                 </div>
//                 <div>
//                     <label>Field of study: </label>
//                     <span>{this.state.lname}</span>
//                 </div>
//                 <div>
//                     <label>Graduation year: </label>
//                     <span>{this.state.phone}</span>
//                 </div>
//                 <input type="submit" value="Edit"></input>
//             </form>
//         </div>
//     )
// 
// }

class EducationExp extends React.Component {
    constructor(){
        super();
        this.state = {
            school: "",
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
            school: this.state.school,
            lname: this.state.lname,
            email: this.state.email,
            phone: this.state.phone,
        })
        event.target.style.display = "none";
        this.showContent(document.getElementsByClassName("educationContent"))
    }
    
    edit = (event) => {
        event.preventDefault();
        event.target.style.display = "none";
        this.showContent(document.getElementsByClassName("educationForm"))
    }

    showContent = (i) => {
        i[0].style.display = "inline"
    }
    
    render() 
    {
        return(
            <div>  
                <form className="educationForm" onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <label htmlFor="firstname">School name: </label>
                        <input type="text" name="firstname" id="school" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label htmlFor="lastname">Field of study: </label>
                        <input type="text" name="lastname" id="lname" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label htmlFor="phone">Graduation year: </label>
                        <input type="tel" name="phone" id="phone" onChange={e => this.handleChange(e)}></input>
                    </div>

                    <input type="submit" value="Save"></input>
                </form>
                <form className="educationContent" style={{display: "none"}} onSubmit={e => this.edit(e)}>
                    <div>
                        <label>School name: </label>
                        <span>{this.state.school}</span>
                    </div>
                    <div>
                        <label>Field of study: </label>
                        <span>{this.state.lname}</span>
                    </div>
                    <div>
                        <label>Graduation year: </label>
                        <span>{this.state.phone}</span>
                    </div>
                    <input type="submit" value="Edit"></input>
                </form>
            </div>
        )
    }
}

export default EducationExp