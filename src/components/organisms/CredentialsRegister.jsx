"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const CredentialsRegister = () => {
  const router = useRouter();
  const [error, setError] = useState("")

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try { 
      const formData = new FormData(event.currentTarget)
      const name = formData.get('name')
      const email = formData.get('email')
      const password = formData.get('password')

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        })
      })

      response.status === 201 && router.push('/')
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <div>{error}</div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default CredentialsRegister