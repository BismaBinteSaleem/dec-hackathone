import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
    return(
        
    <div className="w-full relative bg-gray-100 h-[36px] text-left text-xs text-gray-900 font-sans">
      <div className="absolute h-full top-0 bottom-0 left-[calc(50%-720px)] w-[1440px]">
        <Image
          className="absolute top-[calc(50%-12px)] left-[48px] w-[24px] h-[24px] overflow-hidden"
          width={24}
          height={24}
          alt=""
          src="/images/framenavbar.png"
        />
        <div className="absolute top-0 left-[1129.19px] flex flex-row items-center justify-start">
          {/* For Desktop: Large Padding, For Mobile: Smaller Padding */}
          <div className="flex flex-row items-start justify-start px-[12px] py-[10px] gap-[15.4px] md:px-[8px] md:py-[8px]">
            <Link href={"/allproduct"}>
            <div className="relative leading-[14px] font-medium">Find a Store</div></Link>
            <div className="relative text-sm leading-[14px]">|</div>
          </div>
          <div className="flex flex-row items-start justify-start px-[8px] py-[11px] gap-[12.7px] md:px-[6px] md:py-[6px]">
            <Link href={"/contact-us"}>
            <div className="relative leading-[14px] font-medium">Help</div></Link>
            <div className="relative text-sm leading-[14px]">|</div>
          </div>
          <div className="w-[122.5px] relative h-[36px]">
          <Link href={"/join-us"}>
            <div className="absolute top-[11px] left-[8px] leading-[14px] font-medium">Join Us</div></Link>
            <div className="absolute top-[11px] left-[60.02px] text-sm leading-[14px]">|</div>
            <Link href={"/login"}>
            <div className="absolute top-[11px] left-[75.14px] leading-[14px] font-medium text-center">Sign In</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};


