"use client";

import Link from "next/link";
import { TableSeller } from "./columns";
import { LiaArrowRightSolid } from "react-icons/lia";

interface CellActionProps {
  data: TableSeller;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <Link
        href={`/iduser/seller/${data.id}`}
        className="flex items-center justify-center bg-main-dark rounded-full w-fit px-2 py-2"
      >
        <LiaArrowRightSolid className="text-white" />
      </Link>
    </div>
  );
};
