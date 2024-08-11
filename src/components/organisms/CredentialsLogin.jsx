"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { doCredentialLogin } from "@/app/actions"

const CredentialsLogin = () => {
  const router = useRouter();
  const [error, setError] = useState("")

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try { 
      const formData = new FormData(event.currentTarget)
      const response = await doCredentialLogin(formData)

      if (!!response.error) {
        setError(response.error.message)
      } else {
        router.push("/home")
      }
    } catch (error) {
      setError("Check credentials")
    }
  }

  return (
    <>
      <div>{error}</div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default CredentialsLogin