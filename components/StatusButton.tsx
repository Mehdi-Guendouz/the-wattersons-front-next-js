import { Button } from "./ui/button";

interface StatusButtonProps {
  status: string;
}

export const StatusButton: React.FC<StatusButtonProps> = ({ status }) => {
  return (
    <div className="flex items-center justify-center">
      {status === "actif" ? (
        <Button variant={"green"} className="h-9">
          Actif
        </Button>
      ) : (
        <Button variant={"red"} className="h-9">
          Banni
        </Button>
      )}
    </div>
  );
};
