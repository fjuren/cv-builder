import React, { useState } from "react";

// company name, position title, 
// main tasks of your jobs, date from and until when you worked for that company

const WorkExpHooks = () => {
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [from, setfrom] = useState("")
    const [to, setTo] = useState("")

    const handleChange = (event) => {
        if (event.target.id === 'company') {
            setCompany(event.target.value)
        }
        if (event.target.id === 'position') {
            setPosition(event.target.value)
        }   
        if (event.target.id === 'from') {
            setfrom(event.target.value)
        }
        if (event.target.id === 'to') {
            setTo(event.target.value)
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.style.display = "none";
        showContent(document.getElementsByClassName("workContent"))
    }
    
    const edit = (event) => {
        event.preventDefault();
        event.target.style.display = "none";
        showContent(document.getElementsByClassName("workForm"))
    }

    const showContent = (i) => {
        i[0].style.display = "inline"
    }


    return(
        <div>  
            <form className="workForm" onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="company">Company name: </label>
                    <input type="text" name="company" id="company" onChange={e => handleChange(e)}></input>
                </div>
                <div>
                    <label htmlFor="position">Position title: </label>
                    <input type="text" name="position" id="position" onChange={e => handleChange(e)}></input>
                </div>
                <div>
                    <label htmlFor="from">From: </label>
                    <input type="date" name="from" id="from" onChange={e => handleChange(e)}></input>
                </div>
                <div>
                    <label htmlFor="to">To: </label>
                    <input type="date" name="to" id="to" onChange={e => handleChange(e)}></input>
                </div>

                <input type="submit" value="Save"></input>
            </form>
            <form className="workContent" style={{display: "none"}} onSubmit={e => edit(e)}>
                <div>
                    <label>Company name: </label>
                    <span>{company}</span>
                </div>
                <div>
                    <label>Position title: </label>
                    <span>{position}</span>
                </div>
                <div>
                    <label>From: </label>
                    <span>{from}</span>
                </div>
                <div>
                    <label>To: </label>
                    <span>{to}</span>
                </div>
                <input type="submit" value="Edit"></input>
            </form>
        </div>
    )

}


export default WorkExpHooks