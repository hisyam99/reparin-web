/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PbDNHZg5zcO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import SignInButton from "./SignInButton";

export default function BottomNavbar() {
  return (
    <div className="bottom-navbar fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-center bg-white shadow-t dark:bg-gray-950 dark:text-gray-50">
      <nav className="flex w-full max-w-[500px] items-center justify-between px-4">
        <Link
          href="/dashboard"
          className="group flex flex-col items-center justify-center"
          prefetch={false}
        >
          <HomeIcon className="h-6 w-6 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50" />
          <span className="text-xs font-medium transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
            Dashboard
          </span>
        </Link>
        <Link
          href="#"
          className="group flex flex-col items-center justify-center"
          prefetch={false}
        >
          <SearchIcon className="h-6 w-6 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50" />
          <span className="text-xs font-medium transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
            Search
          </span>
        </Link>
        <Link
          href="/dashboard/services/create"
          className="group flex flex-col items-center justify-center"
          prefetch={false}
        >
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-gray-900 text-gray-50 shadow-md transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            <PlusIcon className="h-6 w-6" />
          </Button>
        </Link>

        <Link
          href="/dashboard/services"
          className="group flex flex-col items-center justify-center"
          prefetch={false}
        >
          <SettingsIcon className="h-6 w-6 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50" />
          <span className="text-xs font-medium transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
            Services
          </span>
        </Link>
        <SignInButton />
      </nav>
    </div>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
