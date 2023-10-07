import React from "react";

function Footer() {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center">
      <p className="text-[#1DD300] font-bold text-28 mt-12">
        Let’s get you connected
      </p>
      <p className="text-[#D5D5D5] text-28 font-semibold max-w-5xl text-center mt-4">
        Grow your transportation company with TrackUp and discover new tools to
        manage your vehicles!
      </p>
      <div className=" flex gap-4 my-8">
        <div className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="49"
            viewBox="0 0 42 33"
            fill="none"
          >
            <path
              d="M37.125 0H4.125C1.85625 0 0.020625 1.85625 0.020625 4.125L0 28.875C0 31.1437 1.85625 33 4.125 33H37.125C39.3937 33 41.25 31.1437 41.25 28.875V4.125C41.25 1.85625 39.3937 0 37.125 0ZM36.3 8.76562L21.7181 17.8819C21.0581 18.2944 20.1919 18.2944 19.5319 17.8819L4.95 8.76562C4.74319 8.64953 4.56208 8.49268 4.41765 8.30456C4.27321 8.11645 4.16844 7.90098 4.10969 7.6712C4.05093 7.44143 4.03941 7.20212 4.07582 6.96776C4.11223 6.7334 4.19582 6.50887 4.32152 6.30775C4.44722 6.10663 4.61242 5.9331 4.80712 5.79768C5.00183 5.66225 5.22198 5.56774 5.45427 5.51987C5.68656 5.47199 5.92615 5.47174 6.15853 5.51914C6.39092 5.56654 6.61127 5.6606 6.80625 5.79562L20.625 14.4375L34.4438 5.79562C34.6387 5.6606 34.8591 5.56654 35.0915 5.51914C35.3239 5.47174 35.5634 5.47199 35.7957 5.51987C36.028 5.56774 36.2482 5.66225 36.4429 5.79768C36.6376 5.9331 36.8028 6.10663 36.9285 6.30775C37.0542 6.50887 37.1378 6.7334 37.1742 6.96776C37.2106 7.20212 37.1991 7.44143 37.1403 7.6712C37.0816 7.90098 36.9768 8.11645 36.8324 8.30456C36.6879 8.49268 36.5068 8.64953 36.3 8.76562Z"
              fill="#1DD300"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M21 0C32.5983 0 42 9.40169 42 21C42 32.5983 32.5983 42 21 42C17.2889 42.006 13.643 41.0238 10.437 39.1545L0.00842954 42L2.84763 31.5672C0.976724 28.3602 -0.00617059 24.7128 2.91485e-05 21C2.91485e-05 9.40169 9.40172 0 21 0ZM13.8432 11.13L13.4232 11.1468C13.1513 11.1634 12.8856 11.2348 12.642 11.3568C12.4142 11.4858 12.2063 11.6471 12.0246 11.8356C11.7726 12.0729 11.6298 12.2787 11.4765 12.4782C10.6998 13.4881 10.2816 14.7279 10.2879 16.002C10.2921 17.031 10.5609 18.0327 10.9809 18.9693C11.8398 20.8635 13.2531 22.869 15.1179 24.7275C15.5673 25.1748 16.0083 25.6242 16.4829 26.0421C18.8 28.0822 21.5612 29.5534 24.5469 30.3387L25.7397 30.5214C26.1282 30.5424 26.5167 30.513 26.9073 30.4941C27.5189 30.4625 28.1161 30.2969 28.6566 30.009C28.9316 29.8673 29.2 29.7132 29.4609 29.547C29.4609 29.547 29.5512 29.4882 29.7234 29.358C30.0069 29.148 30.1812 28.9989 30.4164 28.7532C30.5907 28.5726 30.7419 28.3605 30.8574 28.119C31.0212 27.7767 31.185 27.1236 31.2522 26.5797C31.3026 26.1639 31.2879 25.9371 31.2816 25.7964C31.2732 25.5717 31.0863 25.3386 30.8826 25.2399L29.6604 24.6918C29.6604 24.6918 27.8334 23.8959 26.7162 23.3877C26.5993 23.3366 26.474 23.3075 26.3466 23.3016C26.2029 23.2868 26.0578 23.303 25.9208 23.349C25.7839 23.395 25.6584 23.4698 25.5528 23.5683C25.5423 23.5641 25.4016 23.6838 23.8833 25.5234C23.7962 25.6405 23.6761 25.729 23.5385 25.7776C23.4009 25.8262 23.2519 25.8328 23.1105 25.7964C22.9737 25.7597 22.8397 25.7134 22.7094 25.6578C22.449 25.5486 22.3587 25.5066 22.1802 25.431C20.975 24.905 19.8591 24.1944 18.8727 23.3247C18.6081 23.0937 18.3624 22.8417 18.1104 22.5981C17.2843 21.8069 16.5642 20.9118 15.9684 19.9353L15.8445 19.7358C15.7555 19.6017 15.6836 19.4571 15.6303 19.3053C15.5505 18.9966 15.7584 18.7488 15.7584 18.7488C15.7584 18.7488 16.2687 18.1902 16.506 17.8878C16.737 17.5938 16.9323 17.3082 17.0583 17.1045C17.3061 16.7055 17.3838 16.296 17.2536 15.9789C16.6656 14.5425 16.0566 13.1124 15.4308 11.6928C15.3069 11.4114 14.9394 11.2098 14.6055 11.1699C14.4921 11.1573 14.3787 11.1447 14.2653 11.1363C13.9833 11.1223 13.7007 11.1251 13.419 11.1447L13.8411 11.1279L13.8432 11.13Z"
              fill="#1DD300"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
          >
            <path
              d="M24.5 3.0625C20.0344 3.06777 15.7532 4.84406 12.5955 8.00174C9.43783 11.1594 7.66154 15.4406 7.65627 19.9062C7.65092 23.5556 8.84296 27.1059 11.0495 30.0125C11.0495 30.0125 11.5089 30.6173 11.5839 30.7046L24.5 45.9375L37.4222 30.697C37.4896 30.6158 37.9505 30.0125 37.9505 30.0125L37.952 30.0079C40.1575 27.1025 41.349 23.5539 41.3438 19.9062C41.3385 15.4406 39.5622 11.1594 36.4045 8.00174C33.2468 4.84406 28.9656 3.06777 24.5 3.0625ZM24.5 26.0312C23.2886 26.0312 22.1044 25.672 21.0971 24.999C20.0899 24.326 19.3048 23.3694 18.8413 22.2502C18.3777 21.131 18.2564 19.8995 18.4927 18.7113C18.729 17.5232 19.3124 16.4318 20.169 15.5752C21.0256 14.7186 22.117 14.1353 23.3051 13.8989C24.4932 13.6626 25.7247 13.7839 26.8439 14.2475C27.9631 14.7111 28.9197 15.4961 29.5928 16.5034C30.2658 17.5106 30.625 18.6948 30.625 19.9062C30.623 21.5301 29.977 23.0868 28.8288 24.235C27.6806 25.3833 26.1238 26.0292 24.5 26.0312Z"
              fill="#1DD300"
            />
          </svg>
        </div>
      </div>
      <p className="text-[#D5D5D5] text-14 mb-10">
        All copyrights are reserved
      </p>
    </div>
  );
}

export default Footer;
