import svgPaths from "./svg-0im9bjg43f";
import imgImage19 from "figma:asset/46a94b6684b74d7ec84c9472d9d3d67fca58f59f.png";

function Frame({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[127px] relative shrink-0 w-[734px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 734 127">
        {children}
      </svg>
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
          <Frame>
            <g clipPath="url(#clip0_6_2034)" id="Frame">
              <path d={svgPaths.p23e97500} fill="var(--fill-0, #EFC8AA)" id="Vector" />
              <g id="Mask group">
                <mask height="127" id="mask0_6_2034" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="734" x="0" y="0">
                  <g id="Group">
                    <path d={svgPaths.p23e97500} fill="var(--fill-0, white)" id="Vector_2" />
                  </g>
                </mask>
                <g mask="url(#mask0_6_2034)">
                  <path d={svgPaths.p17ea5400} fill="var(--fill-0, black)" id="Vector_3" />
                </g>
              </g>
              <path d={svgPaths.p1191880} fill="var(--fill-0, black)" id="Vector_4" />
              <path d={svgPaths.p1e9d4800} fill="var(--fill-0, #1E1B1A)" id="Vector_5" />
            </g>
            <defs>
              <clipPath id="clip0_6_2034">
                <rect fill="white" height="127" width="734" />
              </clipPath>
            </defs>
          </Frame>
          <div className="h-[150px] relative shrink-0 w-[735px]" data-name="Frame">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 735 150">
              <g id="Frame">
                <path d={svgPaths.p2b055f00} fill="var(--fill-0, #EFC8AA)" id="Vector" />
                <g id="Mask group">
                  <mask height="150" id="mask0_6_2025" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="734" x="0" y="0">
                    <g id="Group">
                      <path d={svgPaths.p2b055f00} fill="var(--fill-0, white)" id="Vector_2" />
                    </g>
                  </mask>
                  <g mask="url(#mask0_6_2025)">
                    <path d={svgPaths.peec6fc0} fill="var(--fill-0, black)" id="Vector_3" />
                  </g>
                </g>
                <path d={svgPaths.p36dac400} fill="var(--fill-0, black)" id="Vector_4" />
                <path d={svgPaths.p23627a00} fill="var(--fill-0, #1E1B1A)" id="Vector_5" />
              </g>
            </svg>
          </div>
          <Frame>
            <g clipPath="url(#clip0_6_2016)" id="Frame">
              <path d={svgPaths.p23e97500} fill="var(--fill-0, #EFC8AA)" id="Vector" />
              <g id="Mask group">
                <mask height="127" id="mask0_6_2016" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="734" x="0" y="0">
                  <g id="Group">
                    <path d={svgPaths.p23e97500} fill="var(--fill-0, white)" id="Vector_2" />
                  </g>
                </mask>
                <g mask="url(#mask0_6_2016)">
                  <path d={svgPaths.p17ea5400} fill="var(--fill-0, black)" id="Vector_3" />
                </g>
              </g>
              <path d={svgPaths.p18b8dc00} fill="var(--fill-0, black)" id="Vector_4" />
              <path d={svgPaths.p38e7200} fill="var(--fill-0, #1E1B1A)" id="Vector_5" />
            </g>
            <defs>
              <clipPath id="clip0_6_2016">
                <rect fill="white" height="127" width="734" />
              </clipPath>
            </defs>
          </Frame>
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