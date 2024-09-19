"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import NavLink from "./ui/NavLink";
import ThemeSwitcher from "./ThemeSwitcher";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages
  const { theme } = useTheme();

  return (
    <header className={clsx("relative top-0 z-20 bg-primary md:sticky")}>
      <nav className="lg mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            viewBox="0 0 375 375"
            height="36"
            version="1.2"
          >
            <defs>
              <g />
            </defs>
            <g fill="currentColor" fill-opacity="1">
              <g transform="translate(0, 272.860608)">
                <g>
                  <path d="M 166.683594 -8.703125 L 128.34375 -64.445312 C 145.203125 -70.15625 166.140625 -90.003906 166.140625 -118.554688 C 166.140625 -135.957031 160.429688 -151.457031 150.371094 -161.246094 C 138.949219 -172.667969 125.898438 -178.648438 96.257812 -178.648438 L 27.734375 -178.648438 C 21.480469 -178.648438 20.121094 -175.660156 20.121094 -170.765625 L 20.121094 -7.886719 C 20.121094 -1.632812 22.839844 0 27.734375 0 L 54.65625 0 C 59.550781 0 62.539062 -1.632812 62.539062 -7.886719 L 62.539062 -140.582031 L 98.707031 -140.582031 C 112.84375 -140.582031 123.722656 -131.609375 123.722656 -117.46875 C 123.722656 -104.6875 111.214844 -95.441406 97.890625 -95.441406 L 92.453125 -95.441406 C 86.199219 -95.441406 84.566406 -92.453125 84.566406 -87.558594 L 84.566406 -65.804688 C 84.566406 -58.191406 85.109375 -55.199219 87.558594 -51.9375 L 116.925781 -8.15625 C 120.730469 -2.445312 123.996094 0 130.519531 0 L 162.605469 0 C 167.773438 0 169.132812 -4.894531 166.683594 -8.703125 Z M 166.683594 -8.703125 " />
                </g>
              </g>
            </g>
          </svg>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <Popover className="relative ml-auto md:hidden">
          <Popover.Button className="flex items-center gap-1 rounded-lg p-1 text-secondary focus:ring-0 focus-visible:outline-none">
            Menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base shadow-lg focus:outline-none dark:bg-black sm:text-sm"
              style={theme === "terminal" ? { background: "#040605" } : {}}
            >
              <div className="grid">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-md px-4 py-2 transition-colors hover:text-primary",
                      pathname === link.href
                        ? "bg-tertiary font-medium"
                        : "font-normal",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
