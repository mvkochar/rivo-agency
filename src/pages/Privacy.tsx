import React from 'react'
import './css/Privacy.css'
import { Link } from 'react-router-dom'

const Privacy = () => {
    return (
        <div className='privacy-container'>
            <div className="privacy-back d-f">
                <Link to="/" className="action-link"><img src="/images/prev.png" alt="Back" /></Link>
                <h3 className="action-name title">Back to home page</h3>
            </div>
            <div className="privacy-content">
                <h1 className="privacy-title">Website Terms and Conditions of Use</h1>
            </div>
        </div>
    )
}

export default Privacy