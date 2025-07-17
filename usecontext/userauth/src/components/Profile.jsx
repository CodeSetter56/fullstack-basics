import React from 'react'
import { useUser } from '../context/AuthContext'

function Profile() {
    const { user } = useUser()
    return (
        <div>
            <h1>Profile</h1>
            {user ? (<div>welcome {user.name}</div>) : (<div>welcome user</div>)}
        </div>
    )
}

export default Profile