import Link from "next/link";
import NavLinks from "./nav-links";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 shadow">
      <Link
        className="mb-2 flex h-20 items-center justify-start rounded-md bg-accent p-4 md:h-40"
        href="/"
      >
        <Logo className="h-full" />
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <Button className="flex justify-start w-full">Sign Out</Button>
      </div>
    </div>
  );
}
