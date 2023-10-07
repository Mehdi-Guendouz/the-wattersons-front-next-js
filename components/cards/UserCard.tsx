import React from "react";
import { Icons } from "../ui/icons";

interface Props {
  status: string;
  name: string;
}

const UserCard: React.FC<Props> = ({ status, name }) => {
  let color = "#1DD300";

  if (status === "inactive") {
    color = "#FF0000";
  }

  return (
    <div className="hover:text-black  text-gray-icon flex flex-col justify-center cursor-pointer px-3 py-2 capitalize hover:bg-gray-icon duration-200 transition-all target:bg-gray-icon rounded-sm">
      <span className="text-lg font-medium">{name}</span>
      <div className="flex items-center justify-start gap-1 ml-2">
        <span className="">
          <Icons.status fill={`${color}`} />{" "}
        </span>
        <span className="text-xs font-normal capitalize">{status}</span>
      </div>
    </div>
  );
};

export default UserCard;
