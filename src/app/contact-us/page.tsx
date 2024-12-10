



import Image from 'next/image';
import Link from 'next/link';
export default function Contact(){
    return(
        <div>
       <div>
        <h1 className="text-center pb-20px text-[32px] "><strong>GET HELP</strong></h1>
    <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
    <input type="email" placeholder="What can we help you with?"
      className="w-full outline-none bg-transparent text-gray-600 text-sm" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600">
      <path
        d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
      </path>
    </svg>
  </div>
  </div>



  <div className="w-full relative bg-white h-[1098px] text-left text-[28px] text-[#111] font-[Helvetica Neue]">
  <div className="absolute top-[28px] left-[28px] w-[1253px] h-[1042px]">
    <div className="absolute w-[calc(100%-313.2px)] top-0 right-[313.2px] left-0 h-[1042px]">
      <div className="absolute top-0 left-0 leading-[32px] font-medium flex items-center w-[766.2px] h-[31px]">
        WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
      </div>
      <div className="absolute top-[64px] left-0 w-[923.8px] h-[958px] text-sm">
        <div className="absolute top-[5px] left-0 leading-[28px] flex items-center w-[905px] h-[17px]">
          We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
        </div>
        <div className="absolute top-[48px] left-[16px] w-[907.8px] h-[108px] text-base">
          <div className="absolute top-[5px] left-[16px] leading-[28px] flex items-center w-[590.1px] h-[17px]">
            Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
          </div>
          <div className="absolute top-[45px] left-[16px] text-sm leading-[28px] flex items-center w-[870.9px] h-[17px]">
            If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
          </div>
          <div className="absolute top-[85px] left-[16px] leading-[28px] flex items-center w-[73.1px] h-[17px]">
            Apple Pay
          </div>
        </div>
        <div className="absolute top-[176px] left-0 w-[923.8px] h-[115px] text-center text-base text-white">
          <div className="absolute top-0 left-0 w-[923.8px] h-[56px] text-left text-[#111]">
            <div className="absolute top-[5px] left-0 leading-[28px] flex items-center w-[894.3px] h-[45px]">
              <span className="w-full">
                <span className="underline font-medium">Nike Members</span>
                <span>{` can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, `}</span>
                <span className="underline font-medium">join us</span>
                <span> today.</span>
              </span>
            </div>
          </div>
          <div className="absolute top-[72px] left-0 rounded-[30px] bg-[#111] flex flex-row items-start justify-start py-[7.5px] px-[21.6px]">
            <Link href={"/join-us"}>
            <div className="relative leading-[24px] font-medium">JOIN US</div></Link>
          </div>
          <div className="absolute top-[72px] left-[122.13px] rounded-[30px] bg-[#111] flex flex-row items-start justify-start py-[7.5px] px-[21.3px]">
            <Link href={"/allproduct"}>
            <div className="relative leading-[24px] font-medium">SHOP NIKE</div></Link>
          </div>
        </div>
        <div className="absolute top-[311px] left-0 w-[923.8px] h-[168px] text-xl">
          <div className="absolute top-[1px] left-0 leading-[24px] font-medium flex items-center w-[50.2px] h-[22px]">
            FAQs
          </div>
          <div className="absolute top-[40px] left-0 w-[923.8px] h-[128px] text-base">
            <div className="absolute top-0 left-0 w-[923.8px] h-[84px]">
              <div className="absolute top-0 left-0 flex flex-row items-start justify-start px-[0.3px]">
                <b className="relative leading-[28px]">Does my card need international purchases enabled?</b>
              </div>
              <div className="absolute top-[33px] left-0 leading-[28px] flex items-center w-[842.8px] h-[45px]">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
              </div>
            </div>
            <div className="absolute top-[100px] left-0 w-[923.8px] h-[28px] text-sm">
              <div className="absolute top-[5px] left-0 leading-[28px] flex items-center w-[601.4px] h-[17px]">
                <span className="w-full">
                  <span>{`Please note, some banks may charge `}</span>
                  <span className="underline font-medium">a small transaction fee</span>
                  <span> for international orders.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[499px] left-0 w-[923.8px] h-[56px]">
          <div className="absolute top-[5px] left-0 leading-[28px] flex items-center w-[553.7px] h-[45px]">
            <span className="w-full">
              <p className="m-0">
                <b>Can I pay for my order with multiple methods?</b>
              </p>
              <p className="m-0">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
            </span>
          </div>
        </div>
        <div className="absolute top-[575px] left-0 w-[923.8px] h-[56px]">
          <div className="absolute top-0 left-0 flex flex-row items-start justify-start px-[24.4px]">
            <b className="relative leading-[28px]">What payment method is accepted for SNKRS orders?</b>
          </div>
          <div className="absolute top-[33px] left-0 leading-[28px] flex items-center w-[478.1px] h-[17px]">
            You can use any accepted credit card to pay for your SNKRS order.
          </div>
        </div>
        <div className="absolute top-[651px] left-0 w-[923.8px] h-[112px] text-sm">
          <div className="absolute top-0 left-0 flex flex-row items-start justify-start px-[0.4px]">
            <b className="relative leading-[28px]">Why don&apos;t I see Apple Pay as an option?</b>
          </div>
          <div className="absolute top-[33px] left-0 leading-[28px] flex items-center w-[922px] h-[73px]">
            To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
          </div>
        </div>
        <div className="absolute top-[783px] left-0 w-[923.8px] h-[175px]">
          <div className="absolute top-0 left-0 w-[923.8px] h-[67px]">
            <div className="absolute top-[5px] left-0 leading-[28px] flex items-center w-[177.5px] h-[17px]">
              Was this answer helpful?
            </div>
            <div className="absolute top-[28px] left-0 w-[30px] h-[30px] overflow-hidden">
              <Image className="w-full h-full object-cover" width={30} height={30} alt="" src="/images/like1.png" />
            </div>
            <div className="absolute top-[28px] left-[30px] w-[30px] h-[30px] overflow-hidden">
              <Image className="w-full h-full object-cover" width={30} height={30} alt="" src="/images/like2.png" />
            </div>
          </div>
          <div className="absolute top-[67px] left-0 w-[923.8px] h-[108px] text-sm text-[#757575]">
            <div className="absolute top-[3px] left-0 leading-[24px] font-medium flex items-center w-[72.8px] h-[17px]">
              RELATED
            </div>
            <div className="absolute top-[40px] left-[16px] w-[907.8px] h-[68px] text-[#111]">
              <div className="absolute top-[5px] left-[16px] underline leading-[28px] font-medium flex items-center w-[306.2px] h-[17px]">
                WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
              </div>
              <div className="absolute top-[45px] left-[16px] underline leading-[28px] font-medium flex items-center w-[395.8px] h-[17px]">
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute w-[calc(100%-939.7px)] top-0 right-[-0.05px] left-[939.75px] shadow-[1px_0px_0px_#ccc_inset] bg-[rgba(255,255,255,0)] h-[1042px] text-center">
    <div className="absolute top-0 left-[90.91px] leading-[32px] font-medium flex items-center justify-center w-[179.6px] h-[31px]">
      CONTACT US
    </div>
    <div className="absolute top-[52px] left-[48px] w-[265.3px] h-[836px] text-base">
      <div className="absolute top-0 left-0 w-[265.3px] h-[242px]">
        <Image className="absolute top-[calc(50%-108px)] left-[calc(50%-32.03px)] w-[64px] h-[64px] object-cover" width={64} height={64} alt="" src="/images/Mobile.png" />
        <div className="absolute top-[106px] left-[calc(50%-132.65px)] flex flex-col items-center justify-start px-[1px]">
          <div className="relative leading-[24px] font-medium">000 800 919 0566</div>
          <div className="flex flex-row items-start justify-start">
            <div className="w-[263.2px] relative leading-[28px] flex items-center flex-shrink-0">
              <span className="w-full">
                <p className="m-0">Products & Orders: 24 hours a day, 7 days a week</p>
                <p className="m-0">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[282px] left-0 w-[265.3px] h-[158px] text-sm">
        <Image className="absolute top-[calc(50%-66px)] left-[calc(50%-32.03px)] w-[64px] h-[64px] object-cover" width={64} height={64} alt="" src="/images/mesg.png" />
        <div className="absolute top-[106px] left-[calc(50%-52.96px)] flex flex-col items-center justify-start px-[1.9px]">
          <div className="relative leading-[24px] font-medium">24 hours a day</div>
          <div className="relative leading-[28px]">7 days a week</div>
        </div>
      </div>
      <div className="absolute top-[480px] left-0 w-[265.3px] h-[158px] text-sm">
        <Image className="absolute top-[calc(50%-66px)] left-[calc(50%-32.03px)] w-[64px] h-[64px] object-cover" width={64} height={64} alt="" src="/images/comment.png" />
        <div className="absolute top-[106px] left-[calc(50%-52.96px)] flex flex-col items-center justify-start px-[1.9px]">
          <div className="relative leading-[24px] font-medium">Product or Service?</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

);
};


  




