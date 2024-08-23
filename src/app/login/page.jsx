import LoginForm from "@/components/organisms/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <LoginForm />
      <Link href="/register">Register</Link>
    </>
  );
}
