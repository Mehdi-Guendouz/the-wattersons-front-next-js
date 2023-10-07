"use client";
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BiSolidDashboard } from "react-icons/bi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import DropMenuInterface from "../DropMenuInterface";
import Link from "next/link";

interface dropDownNavigationProps {}

const DropdownNavigationMenu: React.FC<dropDownNavigationProps> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <DropMenuInterface userName="mahdi" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[360px] m-0 bg-primary text-white py-2">
        <DropdownMenuItem className="flex items-center gap-2">
          <Link href="/id/home">
            <IoHome className="h-5 w-5" /> Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <Link href="/id/dashboard">
            <BiSolidDashboard className="h-5 w-5" /> Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <Link href="/id/profile">
            <FaUserAlt className="h-5 w-5" /> profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <FiLogOut className="h-5 w-5" /> Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavigationMenu;
