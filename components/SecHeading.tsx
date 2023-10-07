import React from "react";

interface HeadingProps {
  myString: string;
}

const SecHeading: React.FC<HeadingProps> = (props) => {
  return (
    <div className="rounded-tl-[45px] rounded-bl-[45px] border-2 border-[#FDEBD2] border-r-[#000] left-4 text-[#FDEBD2] text-left ml-[700px] mb-[700]">
      <p className="ml-[70px] mt-8 mb-8 text-[27px] custom-font font-[700]">
        {props.myString}
      </p>
    </div>
  );
};

export default SecHeading;
