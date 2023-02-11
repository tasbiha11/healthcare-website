import React, { useState } from 'react'


const FormContact = () => {

    const [name, setname] = useState("");

    const changename = (event) => {
        setname(event.target.value)
    }

    const FormHandler = (event) => {
        event.preventDefault();
        //validation
        if (name.length == "") {
            alert('Enter name');
            return;
        }
        console.log(name);
    }
    return (
        <form onSubmit={FormHandler}>
            <div className='form-control'>
                <input type="text" placeholder='Your name' onChange={changename} />
            </div>
            <div className='form-control'>
                <input type="email" placeholder='Your email' />
            </div>
            <div className='form-control'>
                <input type="text" placeholder='Your mobile' />
            </div>
            <select>
                <option>Select Department</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
            <div className='form-control'>
                <textarea placeholder='Message'></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default FormContact