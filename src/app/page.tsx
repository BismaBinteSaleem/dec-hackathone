import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <div className="HeroImage">
          <div className="herotext1">
            <h1 className="text-[15px] text-center"><strong>Hello Nike APP</strong></h1>
            <h2 className="text-[11px] text-center">Download the app to access everything Nike. Get your Great</h2>
          </div>
          <Image src="/images/heroShoes.jpg" alt="logo"layout="responsive" width={1344} height={700} />
        </div>

        <div>
          <h1 className="text-[15px] text-center pt-14 md:pt-58px">First Look</h1>
          <h3 className="text-[56px] text-center pt-7 md:pt-28px"><strong>Nike Air Max Pulse</strong></h3>
          <h1 className="text-[15px] text-center pt-28 md:pt-112px w-11/12 md:w-[511px] h-auto">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.</h1>
        </div>

        <div className="flex justify-center items-center space-x-4 py-6">
          <button className="w-[110.58px] h-[39px] bg-[#111111] text-white rounded-[30px] border border-solid border-black p-2">Notify Me</button>
          <button className="w-[138.16px] h-[39px] bg-[#111111] text-white rounded-[30px] p-2">Shop Air Max</button>
        </div>

        <Image src="/images/BestofAirMax.png" alt="logo" layout="responsive"width={1344} height={700} />

        <div>
          <h1 className="text-[15px] font-bold pt-24 md:pt-84px">Featured</h1>
          <Image src="/images/features.png" alt="logo" layout="responsive"width={1344} height={700} />
        </div>

        <div>
          <h1 className="text-[52px] w-11/12 text-center pt-24 md:pt-96px"><strong>STEP INTO WHAT FEELS GOOD</strong></h1>
          <h3 className="text-[15px] text-center pt-6 md:pt-84px">Cause everyone should know the feeling of running in that perfect pair.</h3>
          <div className="flex justify-center items-center py-6">
            <button className="w-[152.42px] h-[39px] bg-[#111111] text-white rounded-[30px] p-[7.5px_23.92px_7.5px_22.5px] flex items-center text-[15px]">
              Find Your Shoe
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-[15px] w-[90.9px] h-[27px] md:w-[512px] md:h-[60px] pt-12 md:pt-96px"><strong>Gear UP</strong></h1>
        <div className="flex space-x-4">
          <Image src="/images/gearup1.png" alt="logo" layout="responsive"width={666} height={447} />
          <Image src="/images/gearup2.png" alt="logo" layout="responsive"width={666} height={447} />
        </div>
      </div>

      <div>
        <h1 className="text-[22px] w-[90.9px] h-[27px] md:w-[512px] md:h-[60px] pt-12 md:pt-52px"><strong>Don&apos;t Miss</strong></h1>
        <div className="pt-[52px]">
          <Image src="/images/Dontmiss.jpg" alt="logo"layout="responsive" width={1344} height={700} />
        </div>
      </div>

      <div>
        <h1 className="text-[52px] w-11/12 md:w-[512px] h-[60px] pt-12 md:pt-48px text-center"><strong>FLIGHT ESSENTIALS</strong></h1>
        <h1 className="text-[15px] w-11/12 md:w-[512px] h-[24px] pt-6 md:pt-24px text-center">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</h1>
        <button className="pt-6 md:pt-30px w-[80.38px] h-[39px] bg-[#111111] text-white rounded-[30px] p-[7.5px_23.92px_7.5px_22.5px] flex items-center">Shop</button>
      </div>

      <div>
        <h1 className="text-[52px] w-11/12 md:w-[512px] h-[27px] pt-12 md:pt-96px pb-20px" >The Essential</h1>
        </div>
        <div>
        <Image src="/images/Thessential.png" alt="logo"layout="responsive" width={1356} height={540} />
      </div>
    </div>
  );
}
