import React, { useEffect, useState } from "react";

const EducationExpHooks = () => {
    const [school, setSchool] = useState("")
    const [FOS, setFOS] = useState("")
    const [grad, setGrad] = useState("")

    const handleChange = (event) => {
        if (event.target.id === 'school') {
            setSchool(event.target.value)
        }
        if (event.target.id === 'FOS') {
            setFOS(event.target.value)
        }   
        if (event.target.id === 'grad') {
            setGrad(event.target.value)
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.style.display = "none";
        showContent(document.getElementsByClassName("educationContent"))
    }
    
    const edit = (event) => {
        event.preventDefault();
        event.target.style.display = "none";
        showContent(document.getElementsByClassName("educationForm"))
    }

    const showContent = (i) => {
        i[0].style.display = "inline"
    }


    return(
        <div>  
            <form className="educationForm" onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="school">School name: </label>
                    <input type="text" name="school" id="school" onChange={e => handleChange(e)}></input>
                </div>
                <div>
                    <label htmlFor="FOS">Field of study: </label>
                    <input type="text" name="FOS" id="FOS" onChange={e => handleChange(e)}></input>
                </div>
                <div>
                    <label htmlFor="grad">Graduation year: </label>
                    <input type="tel" name="grad" id="grad" onChange={e => handleChange(e)}></input>
                </div>

                <input type="submit" value="Save"></input>
            </form>
            <form className="educationContent" style={{display: "none"}} onSubmit={e => edit(e)}>
                <div>
                    <label>School name: </label>
                    <span>{school}</span>
                </div>
                <div>
                    <label>Field of study: </label>
                    <span>{FOS}</span>
                </div>
                <div>
                    <label>Graduation year: </label>
                    <span>{grad}</span>
                </div>
                <input type="submit" value="Edit"></input>
            </form>
        </div>
    )

}

// class EducationExp extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             school: "",
//             lname: "",
//             email: "",
//             grad: "",
//         }
//     }


//handleChange = (event) => {
//         this.setState({
//             [event.target.id]: event.target.value
//         }
//         )   
//     }
    
//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.setState({
//             school: this.state.school,
//             lname: this.state.lname,
//             email: this.state.email,
//             grad: this.state.grad,
//         })
//         event.target.style.display = "none";
//         this.showContent(document.getElementsByClassName("educationContent"))
//     }
    
//     edit = (event) => {
//         event.preventDefault();
//         event.target.style.display = "none";
//         this.showContent(document.getElementsByClassName("educationForm"))
//     }

//     showContent = (i) => {
//         i[0].style.display = "inline"
//     }
    
//     render() 
//     {
//         return(
//             <div>  
//                 <form className="educationForm" onSubmit={e => this.handleSubmit(e)}>
//                     <div>
//                         <label htmlFor="firstname">School name: </label>
//                         <input type="text" name="firstname" id="school" onChange={e => handleChange(e)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="lastname">Field of study: </label>
//                         <input type="text" name="lastname" id="lname" onChange={e => handleChange(e)}></input>
//                     </div>
//                     <div>
//                         <label htmlFor="grad">Graduation year: </label>
//                         <input type="tel" name="grad" id="grad" onChange={e => handleChange(e)}></input>
//                     </div>

//                     <input type="submit" value="Save"></input>
//                 </form>
//                 <form className="educationContent" style={{display: "none"}} onSubmit={e => this.edit(e)}>
//                     <div>
//                         <label>School name: </label>
//                         <span>{this.state.school}</span>
//                     </div>
//                     <div>
//                         <label>Field of study: </label>
//                         <span>{this.state.lname}</span>
//                     </div>
//                     <div>
//                         <label>Graduation year: </label>
//                         <span>{this.state.grad}</span>
//                     </div>
//                     <input type="submit" value="Edit"></input>
//                 </form>
//             </div>
//         )
//     }
// }

export default EducationExpHooks