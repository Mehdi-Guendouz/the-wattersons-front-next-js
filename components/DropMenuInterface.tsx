"use client";

import { Avatar } from "./ui/avatar";
import { BiMenu } from "react-icons/bi";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface DropMenuInterfaceProps {
  userName: string;
}

const DropMenuInterface: React.FC<DropMenuInterfaceProps> = ({ userName }) => {
  return (
    <div className="flex items-center justify-between w-[370px] min-w-[370px] bg-[#1E1E1E] py-2 p-2 rounded-lg">
      <div className="flex items-center text-white gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-white-secondary text-md font-light ">
          {userName}
        </span>
      </div>
      <div>
        <BiMenu className="text-gray-icon h-5 w-5" />
      </div>
    </div>
  );
};

export default DropMenuInterface;
