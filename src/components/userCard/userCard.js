import React from 'react'

const UserCard = ({ key, name, email }) => {
  return (
    <div key={key}>
        <h1>{ name }</h1>
        <h2>{ email }</h2>
    </div>
  )
}

export default UserCard