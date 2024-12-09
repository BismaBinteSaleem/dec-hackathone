import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div>
    <div className="HeroImage" >
      <div className="herotext1">
      <h1 className="text-[15px]  text-center"><strong>Hello Nike APP</strong></h1>
      <h2 className="text-[11px]  text-center"> Download the app to access everything Nike.Get your Great</h2>
      </div>
      <Image src={"/images/heroShoes.jpg"} alt="logo" width={1344} height={700}></Image>
      
    </div>

    <div>
     <h1 className="text-[15px]  text-center pt-58px" >First Look </h1>
     <h3 className="text-[56px]  text-center pt-28pz"><strong>Nike Air Max Pulse</strong></h3>
     <h1 className="text-[15px]  text-center pt-112px w-511px h-48px">Extreme comfort. Hyper durable. Max volume. Introducing the   Air Max Pulse —designed to push you past your limits and help you go to the max.</h1>
    </div>
    <div className="flex justify-center items-center min-p-7.5px ">
     <button className="w-[110.58px] h-[39px] bg-[#111111] text-white rounded-[30px] border border-solid border-black p-2">
       Notify Me
     </button>
     <button className="w-[138.16px] h-[39px] bg-[#111111] text-white rounded-[30px] p-2">
       Shop Air Max
     </button>
    </div>
    <Image src={"/images/BestofAirMax.png"} alt="logo" width={1344} height={700}></Image>
      

     <div>
       <h1 className="text-[15px] font-bold pt-84px">Featured</h1>
       <Image src={"/images/features.png"} alt="logo" width={1344} height={700}></Image>
       </div>
       <div>
        <h1 className="pt-96px text-[54px] text-center pt-24px" ><strong>STEP INTO WHAT FEELS GOOD</strong></h1>
        <h3 className="text-[15px] text-center pt-84px">Cause everyone should know the feeling of running in that perfect pair.</h3>
        <div className="flex justify-center items-center ">
           <button className="w-[152.42px] h-[39px] bg-[#111111] text-white rounded-[30px] p-[7.5px_23.92px_7.5px_22.5px] flex items-center text-[15px]">
                   Find Your Shoe
            </button>
        </div>
        </div>
        </div>
         <div>
             <h1 className="text-[15px] w-90.9px h- 27px"><strong>Gear UP</strong></h1>
           <div className="flex space-x-2">
            <Image src={"/images/gearup1.png"} alt="logo" width={666} height={447}></Image>
        
           <Image src={"/images/gearup2.png"} alt="logo" width={666} height={447}></Image>
          </div>

        </div>
       
       <div>
           <h1 className="text-[22px] w-90.9px h- 27px"><strong>Don't Miss</strong></h1>
         <div className=" pt-[52px]">
           <Image src={"/images/Dontmiss.jpg"} alt="logo" width={1344} height={700}></Image>
          </div>
        </div>
       <div>
        <h1 className="text-[52px] w-512px h- 60px pt-48px text-center"><strong>FLIGHT ESSENTIALS</strong></h1>
        <h1 className="text-[15px] w-512px h- 24px pt-24px text-center">Your built-to-last, all-week wears—but with style only      Jordan Brand can deliver.</h1>
        <button className="pt-30px w-[80.38px] h-[39px] bg-[#111111] text-white rounded-[30px] p-[7.5px_23.92px_7.5px_22.5px] flex  items-center">Shop</button>
       </div>

       <div>
       <h1 className="text-[52px] w-157.61px h- 27px pt-96px">The Essential</h1>
       <Image src={"/images/Thessential.png"} alt="logo" width={1356} height={540}></Image>

       </div>
       </div>


    
  );
}
