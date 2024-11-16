"use client";
import { barLinks } from "@/constants/index";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftBar() {
  const pathname = usePathname();
  return (
    <section className="hidden md:block flex-1 pt-20">
      <div className="flex flex-col justify-between h-full py-10 ">
        <div className=" flex flex-col gap-5 p-5">
          {barLinks.map((link) => {
            return (
              <Link href={link.href} key={link.href}>
                <div className={`flex flex-row gap-1 ${pathname==link.href && "text-blue-500"}`}>
                  <img src={link.img} alt={link.label} />
                  {link.label}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="px-5">
          <SignedIn>
            <SignOutButton>
              <div className="bg-red-500 text-white rounded p-1 font-bold text-center">
                Logout
              </div>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <Link href="/sign-in">
              <div className="bg-blue-500 text-white rounded p-1 font-bold text-center">
                Sign In
              </div>
            </Link>
          </SignedOut>
        </div>
      </div>
    </section>
  );
}
