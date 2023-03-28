import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

type UserObj = {
  name: string
  username: string
  email: string
}

export default function User() {
  const [user, setUser] = useState<UserObj>({})
  const id = useLocation().pathname.split("/")[2]

  useEffect(() => {
    let unsubscribed:boolean = false

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if(!unsubscribed) {
          setUser(data)
        }
      } )
    return () => {
      unsubscribed = true
    }
  }, [id])
  

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>email: {user.email}</p>
      <Link to="/user/1">Fetch User</Link>
      <Link to="/user/2">Fetch User</Link>
      <Link to="/user/3">Fetch User</Link>
    </div>
  )
}
