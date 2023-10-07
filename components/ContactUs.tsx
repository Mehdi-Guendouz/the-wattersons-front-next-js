import contactusimage from "../assets/satellite-orbite-planete-terre-arriere-plan 1.png";
import Image from "next/image";
import ThirdHeading from "./ThirdHeading";
import Form from "./FormLogin";

function Contactus() {
  return (
    <div className="overflow-hidden " id="Contactus">
      <div className="flex items-center gap-10">
        <Image
          src={contactusimage}
          alt="contact us image"
          width={700}
          height={400}
        />
        <div className="text-[#A0A0A0] text-[28px] w-[50%]   ">
          <div className="flex items-center justify-center ">
            <div className="  flex flex-col items-center">
              <p className="mb-12 font-semibold">Enter your tracking space</p>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ThirdHeading myString="Contact us" />
      </div>
    </div>
  );
}

export default Contactus;
