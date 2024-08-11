import LoginForm from "@/components/organisms/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <LoginForm />
      <Link href="/register">Register</Link>
    </main>
  );
}
