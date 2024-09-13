import { SignedIn, SignedOut, SignIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function TopBar() {
  return (
    <nav className="topbar">
      <Link href="/">
        <h1 className="text-white font-bold">NEXT SOCIAL</h1>
      </Link>

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
          <Link href="/auth/signin">
            <div className="bg-blue-500 text-white rounded p-1 font-bold">
              Sign In
            </div>
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
}
