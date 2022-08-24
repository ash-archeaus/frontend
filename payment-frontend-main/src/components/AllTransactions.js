import React from 'react'
import { Link } from 'react-router-dom'

function AllTransactions() {
    return (
        <div>
            <Link to="/home" style={{textDecoration:"none"}}><h4>Back</h4></Link>
            All transactions...
        </div>
    )
}

export default AllTransactions
