import svgPaths from "./svg-s2ox6xv3le";
import imgVector from "figma:asset/c0b6728201bed5162d6576ee467d752c8c757d2f.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[0.07%_9.41%_0.29%_9.41%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 441.646 645.663">
        {children}
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="feather, writing">
        <div className="absolute inset-[8.33%_16.66%_8.33%_16.67%]" data-name="vector (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0019 19.9998">
            <path clipRule="evenodd" d={svgPaths.p29e2ae00} fill="var(--fill-0, #F6EEDF)" fillRule="evenodd" id="vector (Stroke)" />
          </svg>
        </div>
      </div>
      <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f6eedf] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {text}
      </p>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#eb5636] gap-[64px] items-center px-[40px] relative size-full to-[#85311f]" data-name="Desktop - 15">
      <div className="h-[144px] relative shrink-0 w-[1734px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1734 144">
          <path d={svgPaths.p28175a80} fill="var(--fill-0, #037F59)" id="Vector 2" />
        </svg>
      </div>
      <div className="content-stretch flex gap-[64px] items-start relative shrink-0">
        <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[24px] items-start justify-end relative shrink-0 w-[600px]">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f6eedf] w-full">
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Starter set
              </p>
              <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[88px] min-w-full not-italic relative shrink-0 text-[72px] w-[min-content]">meet Doodlepod</p>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <Text text="1 Doodlepod device" />
              <Text text="Sticker paper rolls" />
              <Text text="Coloring essentials" />
              <Text text="Quick start guide" />
            </div>
          </div>
          <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#f6eedf]">
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Quick start guide
              </p>
              <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[88px] min-w-full not-italic relative shrink-0 text-[72px] w-[min-content]">$129</p>
            </div>
            <div className="h-[81px] overflow-clip relative shrink-0 w-[322px]" data-name="Frame">
              <div className="absolute contents inset-[0_1.81%_8.04%_0]" data-name="Group">
                <div className="absolute flex inset-[0_1.81%_8.04%_0] items-center justify-center">
                  <div className="-rotate-1 flex-none h-[69px] w-[315px]">
                    <div className="relative size-full" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 315 69">
                        <path d={svgPaths.p101fb700} fill="var(--fill-0, #F6EEDF)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute flex inset-[21.31%_12.15%_30.12%_10.34%] items-center justify-center">
                  <div className="-rotate-1 flex-none h-[35px] w-[249px]">
                    <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative text-[#231f20] text-[28px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      Get the starter set
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[648px] overflow-clip relative shrink-0 w-[544px]" data-name="Frame">
          <Wrapper>
            <path d={svgPaths.pc079240} fill="var(--fill-0, #EFC8AA)" id="Vector" />
          </Wrapper>
          <Wrapper>
            <g id="Mask group">
              <mask height="646" id="mask0_6_555" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="442" x="0" y="0">
                <g id="Group">
                  <path d={svgPaths.p35bdb800} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </mask>
              <g mask="url(#mask0_6_555)">
                <path d={svgPaths.p1e885300} fill="var(--fill-0, black)" id="Vector_2" />
              </g>
            </g>
          </Wrapper>
          <div className="absolute inset-[2.67%_-6.25%_2.89%_-6.25%]" data-name="Vector">
            <img alt="" className="absolute block max-w-none size-full" height="612" src={imgVector} width="612" />
          </div>
        </div>
      </div>
      <div className="h-[144px] relative shrink-0 w-[1594px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1594 144">
          <path d={svgPaths.p1c36800} fill="var(--fill-0, #F6EEDF)" id="Vector 1" />
        </svg>
      </div>
    </div>
  );
}