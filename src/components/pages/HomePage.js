import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
export default function HomePage() {
    return (
        <>
      <Navbar/>
        <div className="text-center">
            {<navbar />}
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
        </>
    )
}
