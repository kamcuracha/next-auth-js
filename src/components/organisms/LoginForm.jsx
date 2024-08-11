import { doSocialLogin } from "@/app/actions"

const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
      <button type="submit" name="action" value="google">
        Sign in with Google
      </button>

      <button type="submit" name="action" value="github">
        Sign in with Github
      </button>
    </form>
  )
}

export default LoginForm