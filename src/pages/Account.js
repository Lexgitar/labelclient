import React from 'react'

const profile = {
    name:'Alex',
    location:'Moon'
}

const Account = () => {
  return (
    <div>
        Account:
        <div>
            <p>{profile.name}</p>
            <p>{profile.location}</p>
        </div>
    </div>
  )
}

export default Account