import clsx from "clsx";
import svgPaths from "./svg-kyagepnit2";
import imgImage9 from "figma:asset/828ab6ce17f4956bd9e397d01cd605b8fc2b9870.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      <div className="-rotate-1 flex-none">{children}</div>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("h-[325.5px] relative w-[1113.075px]", additionalClassNames)}>
      <div className="absolute inset-[0_-12.98%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1402 325.982">
          <g id="Frame 41">
            <path d="M144.462 0.25L290.821 253.75" id="Vector 5" stroke="url(#paint0_linear_3_318)" />
            <path d="M450.701 0.25L621.06 325.75" id="Vector 6" stroke="url(#paint1_linear_3_318)" />
            <path d="M951.299 0.25L780.94 325.75" id="Vector 8" stroke="url(#paint2_linear_3_318)" />
            <path d="M1257.54 0.25L1111.18 253.75" id="Vector 4" stroke="url(#paint3_linear_3_318)" />
            <path d="M0 48.25H1402" id="Vector 9" stroke="url(#paint4_linear_3_318)" />
            <path d="M0 128.25H1402" id="Vector 10" opacity="0.8" stroke="url(#paint5_linear_3_318)" />
            <path d="M0 208.25H1402" id="Vector 11" opacity="0.5" stroke="url(#paint6_linear_3_318)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_318" x1="217.642" x2="217.642" y1="0.25" y2="253.75">
              <stop stopColor="#FE902F" />
              <stop offset="1" stopColor="#FE902F" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3_318" x1="535.881" x2="535.881" y1="0.25" y2="325.75">
              <stop stopColor="#FE902F" />
              <stop offset="1" stopColor="#FE902F" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3_318" x1="866.12" x2="866.12" y1="0.25" y2="325.75">
              <stop stopColor="#FE902F" />
              <stop offset="1" stopColor="#FE902F" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3_318" x1="1184.36" x2="1184.36" y1="0.25" y2="253.75">
              <stop stopColor="#FE902F" />
              <stop offset="1" stopColor="#FE902F" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_3_318" x1="0" x2="1402" y1="48.75" y2="48.75">
              <stop stopColor="#F6EEDF" />
              <stop offset="0.107931" stopColor="#FE9233" />
              <stop offset="0.488084" stopColor="#FE9436" />
              <stop offset="0.884328" stopColor="#FE9233" />
              <stop offset="1" stopColor="#F6EEDF" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_3_318" x1="0" x2="1402" y1="128.75" y2="128.75">
              <stop stopColor="#F6EEDF" />
              <stop offset="0.107931" stopColor="#FE9233" />
              <stop offset="0.488084" stopColor="#FE9436" />
              <stop offset="0.884328" stopColor="#FE9233" />
              <stop offset="1" stopColor="#F6EEDF" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_3_318" x1="0" x2="1402" y1="208.75" y2="208.75">
              <stop stopColor="#F6EEDF" />
              <stop offset="0.107931" stopColor="#FE9233" />
              <stop offset="0.488084" stopColor="#FE9436" />
              <stop offset="0.884328" stopColor="#FE9233" />
              <stop offset="1" stopColor="#F6EEDF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f6eedf] content-stretch flex flex-col items-center justify-center pb-[208px] px-[269px] relative size-full" data-name="Desktop - 7">
      <Helper additionalClassNames="mb-[-208px] shrink-0" />
      <div className="content-stretch flex flex-col gap-[64px] items-center mb-[-208px] relative shrink-0">
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
          <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[68px] text-center text-white whitespace-nowrap">Doodlepod</p>
          <Wrapper additionalClassNames="h-[57.487px] w-[544.755px]">
            <div className="bg-[#ff9eb5] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[40px]">
              <div aria-hidden="true" className="absolute border-9 border-black border-solid inset-[-9px] pointer-events-none rounded-[49px]" />
              <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[32px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Voice-powered creativity for kids
              </p>
            </div>
          </Wrapper>
        </div>
        <div className="content-stretch flex gap-[72px] items-center relative shrink-0 w-[1229.758px]">
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-[526.758px]">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full">
                <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[116px] not-italic relative shrink-0 text-[116px] w-full">Say it, Make it</p>
                <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] w-full" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Kids speak an idea and Doodlepod turns it into a sticker they can print, color, peel, and make their own.
                </p>
              </div>
            </div>
            <Wrapper additionalClassNames="h-[73.684px] w-[270.163px]">
              <div className="bg-[#e4002b] content-stretch flex items-center justify-center px-[33px] py-[17px] relative rounded-[12px]" data-name="Component 2">
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[6px_6px_0px_0px_#231f20]" />
                <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f6eedf] text-[28px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Get doodlepod
                </p>
              </div>
            </Wrapper>
          </div>
          <div className="absolute contents left-[550.88px] top-[26.84px]">
            <div className="absolute h-[81px] left-[550.88px] top-[358.51px] w-[206px]">
              <div className="absolute inset-[-5.15%_-0.79%_-0.45%_-2.26%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.29 85.5429">
                  <path d={svgPaths.p159c3780} fill="var(--stroke-0, black)" id="Vector 3" />
                </svg>
              </div>
            </div>
            <div className="absolute h-[421px] left-[598.76px] top-[26.84px] w-[631px]" data-name="image 9">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-[-208px] relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Helper />
        </div>
      </div>
    </div>
  );
}