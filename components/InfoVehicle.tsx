"use client";

import * as React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "./ui/button";
import UserCard from "./cards/UserCard";
import { BsPlayFill } from "react-icons/bs";

export function InfoVehicle() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full bg-primary space-y-2 rounded-l-sm rounded-r-sm"
    >
      <div className="flex flex-col items-center  space-x-4 px-4 py-4 bg-primary text-white rounded-[20px] w-[800px] ">
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <UserCard name="mahdi" status="active" />
            <span className="text-[#1DD300] text-[25px] font-bold ">
              trackUp
            </span>
          </div>
          <div className="flex gap-4 py-6 items-center justify-between px-20 ">
            <div>
              <span className="flex items-center gap-1">
                <FaMapPin className="text-gray-icon" />
                <span>20</span>
              </span>
            </div>
            <div>
              <span className="flex items-center gap-1">
                <FaMapPin className="text-gray-icon" />
                <span>20</span>
              </span>
            </div>
            <div>
              <span className="flex items-center gap-1">
                <FaMapPin className="text-gray-icon" />
                <span>20</span>
              </span>
            </div>
            <div>
              <span className="flex items-center gap-1">
                <FaMapPin className="text-gray-icon" />
                <span>20</span>
              </span>
            </div>
            <div>
              <span className="flex items-center gap-1">
                <FaMapPin className="text-gray-icon" />
                <span>20</span>
              </span>
            </div>
          </div>
        </div>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className=" text-black flex gap-1 items-center bg-gray-icon"
          >
            <span className="">show less</span>
            <AiOutlineLeft className="h-4 w-4 rotate-[270deg]" />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-2">
        <div className="flex items-start justify-between ">
          <div className="text-[#FDEBD2] text-lg font-semibold flex gap-1 flex-col items-start capitalize px-10 py-16">
            <span>
              battery Id: <span className="font-light">1223566</span>
            </span>
            <span>
              power status: <span className="font-light">not pluged</span>
            </span>
            <span>
              battery Id: <span className="font-light">On ground</span>
            </span>
            <span>
              flight state: <span className="font-light">On ground</span>
            </span>
          </div>
          <div className="text-[#FDEBD2] text-lg font-semibold flex gap-1 flex-col items-start capitalize px-10 py-16">
            <span>
              battery Id: <span className="font-light">1223566</span>
            </span>
            <span>
              power status: <span className="font-light">not pluged</span>
            </span>
            <span>
              battery Id: <span className="font-light">On ground</span>
            </span>
            <span>
              flight state: <span className="font-light">On ground</span>
            </span>
            <div>
              <Button
                className="border border-solid border-[#1DD300] text-[#1dd300]  flex items-center px-4 mt-4 py-2 gap-2"
                size="sm"
              >
                <BsPlayFill />
                <span>live video stream</span>
              </Button>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
