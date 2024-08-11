import { doLogout } from "@/app/actions"

const LogoutForm = () => {
  return (
    <form action={doLogout}>
      <button type="submit">
        Logout
      </button>
    </form>
  )
}

export default LogoutForm