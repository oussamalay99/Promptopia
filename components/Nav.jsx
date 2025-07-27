"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const {data: session} = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/new_logo.svg"}
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain rounded-full dark:bg-white"
        />
        <p className="logo_text dark:text-white">Promptopia</p>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white">
              Create Prompt
            </Link>

            <button type="button" onClick={signOut} className="outline_btn dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black ">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile Image"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="Profile Image"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown dark:bg-gray-950">
                <Link
                  href="/profile"
                  className="dropdown_link dark:text-gray-200 dark:hover:text-gray-500"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                
                <Link
                  href="/create-prompt"
                  className="dropdown_link dark:text-gray-200 dark:hover:text-gray-500"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                 type="button"
                 onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                 }}
                 className="mt-5 w-full black_btn dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
          {/* {alert(providers)} */}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
