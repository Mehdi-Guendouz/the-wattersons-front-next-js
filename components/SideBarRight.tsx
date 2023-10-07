import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { AiOutlineLeft } from "react-icons/ai";
import UserCard from "./cards/UserCard";
import { Input } from "./ui/input";
import { AiOutlineSearch } from "react-icons/ai";

const SideBarRight = () => {
  const data = [
    {
      name: "mahdi",
      status: "active",
    },
    {
      name: "madjda",
      status: "inactive",
    },
    {
      name: "zobir",
      status: "active",
    },
    {
      name: "mahdi",
      status: "active",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="bg-primary flex items-center justify-center rounded-[20px] h-12 w-12 cursor-pointer">
          <AiOutlineLeft className="h-8 w-8 text-white" />
        </span>
      </SheetTrigger>
      <SheetContent className="bg-primary text-gray-icon shadow-sidebar flex flex-col gap-10">
        <SheetHeader className="mt-10 relative">
          <SheetTitle>
            <Input
              placeholder="Search..."
              className="bg-primary ring-0 border text-[#D5D5D5] rounded-[20px] outline-none  px-4 placeholder:text-[#d5d5d5] py-5 text-[11px]"
            />
            <div className="absolute right-3 top-3 cursor-pointer">
              <AiOutlineSearch className="text-[#d5d5d5] h-5 w-5 " />
            </div>
          </SheetTitle>
        </SheetHeader>
        <div>
          <SheetTitle className="text-gray-icon text-xl">
            Vehicules list
          </SheetTitle>
          <div className="grid gap-4 py-4 mt-2 ">
            {data.map((item, index) => (
              <UserCard name={item.name} status={item.status} key={index} />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideBarRight;
