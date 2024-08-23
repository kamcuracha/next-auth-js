import RegistrationForm from "@/components/organisms/RegistrationForm";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <RegistrationForm />
      <Link href="/login">Login</Link>
    </>
  );
}