import { SignOutButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <section className="flex-3">
      <h1>Home</h1>
      <UserButton></UserButton>
      <SignOutButton></SignOutButton>
    </section>
  )
}

