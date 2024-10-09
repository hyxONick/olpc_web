import Link from "next/link";
import NavLinks from "./nav-links";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 shadow">
      <Link
        className="mb-2 flex items-start justify-center rounded-md bg-accent flex-col gap-3 pl-4"
        href="/"
      >
        <Logo className="h-1/2" />
        <p className="text-2xl font-bold">Skoolens</p>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <Button className="flex justify-start w-full">Sign Out</Button>
      </div>
    </div>
  );
}
