import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Loader, Menu } from "lucide-react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";

export const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="bg-blue-600 text-white flex justify-between p-4 px-6 backdrop-blur-lg items-center">
      <Link href={"/"}>
        <p className="font-bold text-2xl">Formsify</p>
      </Link>
      <div className="sm:flex hidden">
        <Link href={"/forms"}>
          <p className="hover:underline mx-2">Forms</p>
        </Link>
        <Link href={"/templates"}>
          <p className="hover:underline mx-2">Templates</p>
        </Link>
        <Link href={"/about"}>
          <p className="hover:underline mx-2">About</p>
        </Link>
      </div>
      <div className="sm:flex hidden items-center">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-white animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant={"secondary"}
                className="border-b-[4px] border-slate-300 active:border-0"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
      <div className="sm:hidden flex">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-[230px]">
            <Separator className="mt-4"/>

            <div className="flex flex-col gap-4 p-4">
              <Link href={"/forms"}>
                <p className="hover:underline">Forms</p>
              </Link>
              <Link href={"/templates"}>
                <p className="hover:underline">Templates</p>
              </Link>
              <Link href={"/about"}>
                <p className="hover:underline">About</p>
              </Link>
              <Separator />
              <ClerkLoading>
                <Loader className="h-5 w-5 text-white animate-spin" />
              </ClerkLoading>
              <ClerkLoaded>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant={"secondary"}
                      className="border-b-[4px] border-slate-300 active:border-0"
                    >
                      Login
                    </Button>
                  </SignInButton>
                </SignedOut>
              </ClerkLoaded>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
