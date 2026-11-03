"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/restaurants", label: "맛집 목록" },
  { href: "/about", label: "소개" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 font-medium">
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? "font-bold text-orange-500 underline underline-offset-8"
                : "text-gray-600 hover:text-orange-500"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
