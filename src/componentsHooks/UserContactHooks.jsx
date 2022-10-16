import React, { useEffect, useState} from "react"


const UserContactHooks = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    
    const handleChange = (event) => {
        if (event.target.id === 'fname') {
            setFname(event.target.value);
        } 
        if (event.target.id === 'lname') {
            setLname(event.target.value);
        }
        if (event.target.id === 'email') {
            setEmail(event.target.value);
        }
        if (event.target.id === 'phone') {
            setPhone(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.style.display = "none"
        showContent(document.getElementsByClassName("contactContent"))
    }


    const edit = (event) => {
        event.preventDefault();
        event.target.style.display = "none";
        showContent(document.getElementsByClassName("contactForm"))
    }

    const showContent = (i) => {
        i[0].style.display = "inline"
    }

    return(
        <div>  
            <form className="contactForm" onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="firstname">First name: </label>
                    <input type="text" name="firstname" id="fname" onChange={e => handleChange(e)}></input>
                </div>
                <div>
                    <label htmlFor="lastname">Last name: </label>
                    <input type="text" name="lastname" id="lname" onChange={e => handleChange(e)}></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => handleChange(e)}></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone number: </label>
                    <input type="tel" name="phone" id="phone" onChange={e => handleChange(e)}></input>
                </div>

                <input type="submit" value="Save"></input>
            </form>
            <form className="contactContent" style={{display: "none"}} onSubmit={e => edit(e)}>
                <div>
                    <label>First name: </label>
                    <span>{fname}</span>
                </div>
                <div>
                    <label>Last name: </label>
                    <span>{lname}</span>
                </div>
                <div>
                    <label>Email: </label>
                    <span>{email}</span>
                </div>
                <div>
                    <label>Phone number: </label>
                    <span>{phone}</span>
                </div>
                <input type="submit" value="Edit"></input>
            </form>
        </div>
    )
}

export default UserContactHooks