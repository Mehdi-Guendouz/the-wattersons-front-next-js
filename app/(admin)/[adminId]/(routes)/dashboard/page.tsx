import { DataTable } from "@/components/Table/Table";
import React from "react";
import { TableSeller, columns } from "./columns";
import CardStats from "@/components/cards/CardStats";

const page = () => {
  const data = [
    {
      id: "1",
      status: "banni",
      name: "John Doe",
      type: "particulier",
      numberCommand: "50",
      numberProduct: "10",
    },
    {
      id: "2",
      status: "actif",
      name: "mahdi ben",
      type: "entreprise",
      numberCommand: "200",
      numberProduct: "90",
    },
    {
      id: "2",
      status: "actif",
      name: "mahdi ben",
      type: "entreprise",
      numberCommand: "200",
      numberProduct: "90",
    },
    {
      id: "2",
      status: "actif",
      name: "mahdi ben",
      type: "entreprise",
      numberCommand: "200",
      numberProduct: "90",
    },
  ];

  const formatClientTable: TableSeller[] = data.map((client) => ({
    id: client.id,
    status: client.status,
    name: client.name,
    type: client.type,
    numberCommand: client.numberCommand,
    numberProduct: client.numberProduct,
  }));
  return (
    <div className="flex py-6 px-4">
      <div>
        <span>cars Statics</span>
        <CardStats />
      </div>
      <div>
        <span>cars list</span>

        <DataTable columns={columns} data={formatClientTable} filter />
      </div>
    </div>
  );
};

export default page;
