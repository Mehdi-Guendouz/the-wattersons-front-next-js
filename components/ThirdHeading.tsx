import React from "react";

interface HeadingProps {
  myString: string;
}

const ThirdHeading: React.FC<HeadingProps> = (props) => {
  return (
    <div className="rounded-tr-[45px] rounded-br-[45px] border-2 border-[#FDEBD2] border-l-[#000] text-[#FDEBD2] text-right mr-96">
      <p className="mr-[70px] mt-8 mb-8 text-[27px] custom-font font-[700]">
        {props.myString}
      </p>
    </div>
  );
};

export default ThirdHeading;
