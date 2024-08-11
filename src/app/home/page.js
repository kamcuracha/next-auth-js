import { auth } from "@/auth"
import Image from "next/image"
import { redirect } from "next/navigation"

import LogoutForm from "@/components/organisms/LogoutForm"

export default async function Home() {
  const session = await auth()
  if (!session?.user) redirect("/")

  return (
    <main>
      <div>
        <h1>{session?.user?.name}</h1>
        <Image
          src={session?.user?.image}
          alt={session?.user?.name}
          width={72}
          height={72}
        />
        <LogoutForm />
      </div>
    </main>
  );
}