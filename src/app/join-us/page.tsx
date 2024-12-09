

import Image from "next/image";


export default function Join() { 
  return (
    <div className="flex justify-end item-center  min-h-screen bg-white ">
    <div className="w-full bg-white text-center text-sm text-gray-500 font-inter" style={{ height: "833px" }}>
      {/* Nike Member Section */}
      <div className="absolute top-7 left-7 w-[324px] h-[182px] text-gray-900">
        <Image
          className="absolute top-0 left-[50%] transform -translate-x-[50%] w-[324px] h-[17px] object-cover"
          width={324}
          height={17}
          alt=""
          src="/images/Frame.jpg"
        />
        <b className="absolute top-[46px] left-[46.48px] text-lg leading-6 w-[231.2px] h-[31px] flex items-center justify-center">
          BECOME A NIKE MEMBER
        </b>
        <div className="absolute top-[104px] left-[21.06px] text-xs leading-5 text-gray-400 w-[282.1px] h-[60px] flex items-center justify-center">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </div>
      </div>

      {/* Form Fields Section */}
      <div className="absolute top-[210px] left-7 w-[324px] h-[561px] overflow-hidden text-left">
        {/* Privacy & Terms Section */}
        <div className="absolute top-[452px] left-0 w-[324px] h-[59px] text-center text-xs">
          <div className="absolute top-[4px] left-[7.44px] flex items-center w-[309.3px] h-[30px]">
            <span className="w-full">
              By creating an account, you agree to Nike&apos;s
              <span className="underline font-medium">Privacy Policy</span> and
              <span className="underline font-medium">Terms of Use</span>.
            </span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="absolute w-full top-[5px] border rounded-sm bg-white border-[#e5e5e5] h-[40px]">
          <div className="absolute top-[12px] left-[17px] text-sm leading-4">Email address</div>
        </div>
        <div className="absolute w-full top-[58px] border rounded-sm bg-white border-[#e5e5e5] h-[40px]">
          <div className="absolute top-[12px] left-[17px] text-sm leading-4">Password</div>
        </div>
        <div className="absolute w-full top-[111px] border rounded-sm bg-white border-[#e5e5e5] h-[40px]">
          <div className="absolute top-[12px] left-[17px] text-sm leading-4">First Name</div>
        </div>
        <div className="absolute w-full top-[164px] border rounded-sm bg-white border-[#e5e5e5] h-[40px]">
          <div className="absolute top-[12px] left-[17px] text-sm leading-4">Last Name</div>
        </div>

        {/* Date of Birth Section */}
        <div className="absolute w-full top-[217px] h-[69px] text-xs font-light">
          <div className="absolute top-[47px] left-[11.38px] text-center w-[301.5px] h-[14px]">
            Get a Nike Member Reward every year on your Birthday.
          </div>
          <div className="absolute top-[12px] left-[16px] text-sm w-[78px] h-[16px]">
            Date of Birth
          </div>
          <div className="absolute w-full top-0 border rounded-sm bg-white border-[#e5e5e5] h-[40px] text-transparent text-sm flex items-center justify-start">
            <div className="absolute top-[10.5px] left-[17px] text-xs leading-[17px]">dd/mm/yyyy</div>
          </div>
        </div>

        {/* Country & Gender Fields */}
        <div className="absolute w-full top-[296px] border rounded-sm bg-white border-[#e5e5e5] h-[40px]">
          {/* <Image className="absolute top-[17px] right-[7px] w-[10px] h-[7.1px]" width={10} height={7} alt="" src="Frame.svg" /> */}
          <div className="absolute top-[11.5px] left-[17px] text-sm leading-[17px]">India</div>
        </div>

        {/* Gender Selection */}
        <div className="absolute w-full top-[346px] h-[40px] text-center text-sm">
          <div className="absolute top-0 left-[calc(50%-76.95px)] w-[153.9px] h-[40px] bg-white border border-[#e5e5e5] rounded-sm">
            <div className="absolute top-[12px] left-[61.77px] flex items-center justify-center w-[30.6px] h-[16px]">Male</div>
          </div>
          <div className="absolute top-0 right-[calc(50%-76.95px)] w-[153.9px] h-[40px] bg-white border border-[#e5e5e5] rounded-sm">
            <div className="absolute top-[12px] left-[53.59px] flex items-center justify-center w-[46.9px] h-[16px]">Female</div>
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="absolute top-[calc(50%+125.84px)] left-[calc(50%-162px)] flex flex-row items-start justify-start px-[34px] py-0 text-xs">
          <div className="w-[20px] border border-[#bcbcbc] rounded-sm h-[20px]"></div>
          <div className="w-[247px] pl-[17px] flex items-center justify-start">Sign up for emails to get updates from Nike on products, offers, and your Member benefits</div>
        </div>
      
        {/* Submit Button */}
        <div className="absolute top-[calc(50%+235.5px)] left-[calc(50%-162px)] bg-black text-white text-sm text-center h-[40px] flex items-center justify-center rounded-sm border border-black">
          JOIN US
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-[28px] left-[28px] w-[calc(100%-56px)] h-[24px] text-xs">
        <div className="absolute top-[10px] left-[87.63px] text-xs flex items-center w-[148.9px] h-[14px]">
          <span>
            Already a Member?{" "}
            <span className="underline font-medium text-gray-900">Sign In.</span>
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

