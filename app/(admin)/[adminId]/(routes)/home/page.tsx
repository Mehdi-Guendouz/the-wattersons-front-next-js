import { InfoVehicle } from "@/components/InfoVehicle";
import Map from "@/components/Map";
import SideBarRight from "@/components/SideBarRight";
import DropdownNavigationMenu from "@/components/shared/dropdownNavigationMenu";

const page = () => {
  return (
    <>
      <div className="flex items-center relative h-[100vh] w-[100vw]">
        <div className="absolute left-4 top-4 z-20">
          <DropdownNavigationMenu />
        </div>
        <div className="flex h-full w-full z-10">
          <Map />
        </div>
        <div className="absolute top-4 right-4 z-20">
          <SideBarRight />
        </div>
        <div className="absolute bottom-0 z-20 left-[20%] right-[20%] ">
          <InfoVehicle />
        </div>
      </div>
    </>
  );
};

export default page;
