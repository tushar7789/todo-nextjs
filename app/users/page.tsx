import React from 'react'
import Link from 'next/link'

const Users = () => {
  return (
    <div>
        <p>Hi there, you are on user's page.</p>
        <Link href="/">Homepage</Link>
    </div>
  )
}

export default Users