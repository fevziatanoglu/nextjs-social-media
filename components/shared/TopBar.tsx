import { SignedIn, SignedOut, SignIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function TopBar() {
  return (
    <nav className="flex flex-row justify-between items-center p-2 fixed top-0 z-30 bg-black w-full">
      <Link href="/">
        <h1 className="text-white font-bold md:text-4xl  ">NEXT SOCIAL</h1>
      </Link>

        {/* div hidden bigger screen then md */}
      <div className="block md:hidden">
        {/* clerk check is user signed in */}
        <SignedIn>
          <SignOutButton>
            <div className="bg-red-500 text-white rounded p-1 font-bold">
              Logout
            </div>
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <Link href="/sign-in">
            <div className="bg-blue-500 text-white rounded p-1 font-bold">
              Sign In
            </div>
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
}
