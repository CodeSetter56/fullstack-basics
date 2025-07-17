import React from 'react'
import { useUser } from '../context/AuthContext'

function Login() {

  const [name, setName] = React.useState("")
  const [age, setAge] = React.useState("")

  //use the useUser hook to access the user context
  //this will give us access to the user object and the setUser and logout functions
  const { user,setUser,logout } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!user) setUser({ name, age });
    else logout();
  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="number" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)} />
        <button type="submit">{user?(<>logout</>):(<>login</>)}</button>
      </form>
    </div>
  )
}

export default Login