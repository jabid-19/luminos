import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div>
        <div className="flex items-center justify-between border-b-4 border-[#fab300] px-8 py-4 text-base">
          <div>
            <Link href="/" aria-label="Luminos">
              <Image
                width={154}
                height={28}
                src="/images/luminos-logo-pos.svg"
                alt="logo"
                priority={true}
              />
            </Link>
          </div>
          <div
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="block cursor-pointer text-[#fab300] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </div>
          <ul className="hidden items-center gap-9 text-[#1a212d] lg:flex">
            <li>
              <Link href="/luminos-erbjudande">
                <p
                  className={`${
                    router.pathname === "/luminos-erbjudande"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Luminos Erbjudande
                </p>
              </Link>
            </li>
            <li>
              <Link href="/varfor-solceller">
                <p
                  className={`${
                    router.pathname === "/varfor-solceller"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Varför Solceller
                </p>
              </Link>
            </li>
            <li>
              <Link href="/att-salja-solel">
                <p
                  className={`${
                    router.pathname === "/att-salja-solel"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Att sälja solel
                </p>
              </Link>
            </li>
            <li>
              <Link href="/om-luminos">
                <p
                  className={`${
                    router.pathname === "/om-luminos"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Om Luminos
                </p>
              </Link>
            </li>
            <li>
              <Link href="/kontakt">
                <p
                  className={`${
                    router.pathname === "/kontakt"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Kontakt
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } w-full bg-white shadow-lg lg:hidden`}
        >
          <ul className="flex flex-col gap-4 p-4 text-[#1a212d] lg:hidden">
            <li>
              <Link href="/luminos-erbjudande">
                <p
                  className={`${
                    router.pathname === "/luminos-erbjudande"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Luminos Erbjudande
                </p>
              </Link>
            </li>
            <li>
              <Link href="/varfor-solceller">
                <p
                  className={`${
                    router.pathname === "/varfor-solceller"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Varför Solceller
                </p>
              </Link>
            </li>
            <li>
              <Link href="/att-salja-solel">
                <p
                  className={`${
                    router.pathname === "/att-salja-solel"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Att sälja solel
                </p>
              </Link>
            </li>
            <li>
              <Link href="/om-luminos">
                <p
                  className={`${
                    router.pathname === "/om-luminos"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Om Luminos
                </p>
              </Link>
            </li>
            <li>
              <Link href="/kontakt">
                <p
                  className={`${
                    router.pathname === "/kontakt"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Kontakt
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
