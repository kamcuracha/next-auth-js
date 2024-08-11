import SocialLogin from "./SocialLogin"
import CredentialsLogin from "./CredentialsLogin"

const LoginForm = () => {
  return (
    <>
      <CredentialsLogin />
      <SocialLogin />
    </>
  )
}

export default LoginForm