import React from 'react'
import {withRouter,Link} from 'react-router-dom'

import '../../App.css'

export default function SignUpPage(props) {

    function handleSubmit(e) {
        e.preventDefault()
        const {name,email,phone } = e.target.elements
        console.log({name:name.value, email: email.value })
    
       
    }



    return (
        <div className="text-center m-5-auto">
            <h2>Assigment</h2>
            <h5>Login</h5>
            <form action="/home" onSubmit={handleSubmit}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" id='name' required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" id='email' required />
                </p>
                <p>
                    <label>Mobile number</label><br/>
                    <input type="Tel" name="phone"id='phone' requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
