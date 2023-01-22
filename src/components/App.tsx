import Search from "./Search"
import { useState } from "react"
import { UserProps } from "../types/user"
import User from "./User"
import Error from "./Error"

export default function App() {

  const [user, setUser] = useState<UserProps|null>(null)

  const[error, setError] = useState(false)

  const loadUser = async(userName:string) =>{
    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()

    const { avatar_url, login, location, followers, following} = data

    const userData: UserProps = {avatar_url, login, location, followers, following}

    setError(false)
    setUser(null)
    
    if (res.status === 404){
      setError(true)
      return
  }
    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User{...user}/>}
      {error && <Error />}
    </div>
  )
}

