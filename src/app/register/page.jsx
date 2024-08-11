import RegistrationForm from "@/components/organisms/RegistrationForm";
import Link from "next/link";

export default async function Register() {
  return (
    <main>
      <RegistrationForm />
      <Link href="/">Login</Link>
    </main>
  );
}