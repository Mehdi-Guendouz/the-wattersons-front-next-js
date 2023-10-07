import React from "react";

interface HeadingProps {
  myString: string;
}

const Heading: React.FC<HeadingProps> = ({ myString }) => {
  return (
    <div className="rounded-tr-[45px] rounded-br-[45px] border-2 border-[#FDEBD2] border-l-[#000] right-4 relative text-[#FDEBD2] text-right mr-[60px]">
      <p className="mr-[70px] mt-8 mb-8 text-[27px] custom-font font-[700]">
        {myString}
      </p>
    </div>
  );
};

export default Heading;
