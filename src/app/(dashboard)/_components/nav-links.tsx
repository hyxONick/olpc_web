"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  {
    name: "App Usage (School)",
    href: "/app-usage-school",
  },
  {
    name: "App Usage (Location)",
    href: "/app-usage-location",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <Fragment>
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <Button
            variant={pathname === link.href ? "secondary" : "ghost"}
            className="w-full flex justify-start"
          >
            {link.name}
          </Button>
        </Link>
      ))}
    </Fragment>
  );
}
