"use client";
import { sidebarLinks } from "@/constants/index";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LeftSideBar() {
  const pathname = usePathname();
  return (
    <section className="leftsidebar bg-yellow-500 flex-1 ">
      <div className="flex w-full flex-col flex-1  gap-6">
        {sidebarLinks.map((link) => {
          const isLinkActive = pathname === link.href;
          return (
            <Link
              className={`${isLinkActive && "bg-blue"} leftsidebar_link`}
              href={link.href}
            >
              {link.label}
              {/* {link.img} */}
            </Link>
          );
        })}
      </div>

      <div className="">
        <SignedIn>
          <SignOutButton>
            <div className="bg-red-500 text-white rounded p-1 font-bold text-center">
              Logout
            </div>
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <Link href="/auth/signin">
            <div className="bg-blue-500 text-white rounded p-1 font-bold text-center">
              Sign In
            </div>
          </Link>
        </SignedOut>
      </div>

    </section>
  );
}
