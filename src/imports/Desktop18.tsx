import clsx from "clsx";
import imgImage19 from "figma:asset/46a94b6684b74d7ec84c9472d9d3d67fca58f59f.png";
type WrapperProps = {
  additionalClassNames?: string;
  text: string;
  text1: string;
};

function Wrapper({ children, additionalClassNames = "", text, text1 }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0 w-full", additionalClassNames)}>
      <div className="-rotate-1 flex-none w-full">
        <div className="bg-[#efc8aa] relative rounded-[24px] w-full">
          <div aria-hidden="true" className="absolute border-10 border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] p-[24px] relative w-full">
            <p className="font-['Google_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[28px] text-black w-full" style={{ fontVariationSettings: "'GRAD' 0" }}>
              {text}
            </p>
            <p className="font-['Google_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#1e1b1a] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0" }}>
              {text1}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f6eedf] content-stretch flex flex-col gap-[64px] items-center px-[40px] py-[88px] relative size-full" data-name="Desktop - 18">
      <div className="content-stretch flex gap-[64px] items-end relative shrink-0 text-[#131415] w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[728px]">
          <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
            FAQ
          </p>
          <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[88px] min-w-full not-italic relative shrink-0 text-[72px] w-[min-content]">everything parents want to know</p>
        </div>
        <p className="flex-[1_0_0] font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
          Show parents this is not a one-time novelty purchase. Show kids it can become part of everyday creative life.
        </p>
      </div>
      <div className="content-stretch flex gap-[64px] items-start relative shrink-0">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[732px]">
          <Wrapper additionalClassNames="h-[126.758px]" text="How does Doodlepod work?" text1="Press, speak an idea, and Doodlepod turns it into a printable sticker in seconds." />
          <Wrapper additionalClassNames="h-[149.754px]" text="Does it use ink?" text1="It is designed for kid-focused creative use with parent-friendly controls and a moderated experience." />
          <Wrapper additionalClassNames="h-[126.758px]" text="Does it need Wi-Fi?" text1="Yes, for voice-powered creation and setup." />
        </div>
        <div className="h-[419px] relative shrink-0 w-[488px]">
          <div className="absolute flex h-[419px] items-center justify-center left-[-93px] top-[0.19px] w-[581px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[419px] relative w-[581px]" data-name="image 19">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-8.42%] max-w-none top-[-0.1%] w-[108.42%]" src={imgImage19} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}