import clsx from "clsx";
import svgPaths from "./svg-id08y6npp7";
import imgImage14 from "figma:asset/fa128f1f9e55be3c12150b8e2ab81fef1b85720a.png";
import imgImage15 from "figma:asset/d58f28d818c580700af875689c47a71a596b3ea0.png";
import imgImage16 from "figma:asset/90e5ec3e480c8ef54f403e108532738ab8dd35b6.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[374px] w-[281px]", additionalClassNames)}>
      <div className="absolute inset-[0.15%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 281 373.441">
          <g id="Rectangle 2924">{children}</g>
        </svg>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#015446] content-stretch flex flex-col gap-[64px] items-center px-[269px] py-[88px] relative size-full" data-name="Desktop - 8">
      <div className="content-stretch flex flex-col gap-[8px] items-center leading-[normal] relative shrink-0">
        <p className="font-['Recoleta_Alt:Bold',sans-serif] not-italic relative shrink-0 text-[#f3f3f3] text-[88px] whitespace-nowrap">big little ideas, made real</p>
        <p className="font-['Google_Sans:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#f6eedf] text-[28px] text-center w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0" }}>
          A simple little ritual that turns imagination into something kids can hold, keep, and proudly show off.
        </p>
      </div>
      <div className="content-stretch flex gap-[64px] items-start relative shrink-0">
        <div className="h-[374px] relative shrink-0 w-[280px]">
          <Wrapper additionalClassNames="absolute left-0 top-0">
            <mask fill="white" id="path-1-inside-1_6_1293">
              <path d={svgPaths.pd318280} />
            </mask>
            <path d={svgPaths.pd318280} fill="var(--fill-0, #FE9FB3)" />
            <path d={svgPaths.p33caa680} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_6_1293)" />
          </Wrapper>
          <div className="absolute h-[206px] left-[24px] top-[32px] w-[203.98px]" data-name="image 14">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
          </div>
          <p className="absolute font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] left-[24px] text-[#1e1b1a] text-[18px] top-[246px] w-[232px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Press once and say anything from a pirate cat to your name in bubble letters.
          </p>
        </div>
        <div className="h-[374px] relative shrink-0 w-[280px]">
          <div className="absolute flex h-[374px] items-center justify-center left-0 top-0 w-[281px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <Wrapper additionalClassNames="relative">
                <mask fill="white" id="path-1-inside-1_6_1291">
                  <path d={svgPaths.pd318280} />
                </mask>
                <path d={svgPaths.pd318280} fill="var(--fill-0, #FFE302)" />
                <path d={svgPaths.p33caa680} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_6_1291)" />
              </Wrapper>
            </div>
          </div>
          <div className="absolute left-[24px] size-[206px] top-[32px]" data-name="image 14">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
          </div>
          <p className="absolute font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] left-[24px] text-[#1e1b1a] text-[18px] top-[246px] w-[232px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Your idea becomes a sticker right away, ready to print in Doodlepod’s signature style.
          </p>
        </div>
        <div className="h-[374px] relative shrink-0 w-[280px]">
          <Wrapper additionalClassNames="absolute left-0 top-0">
            <mask fill="white" id="path-1-inside-1_6_1289">
              <path d={svgPaths.pd318280} />
            </mask>
            <path d={svgPaths.pd318280} fill="var(--fill-0, #FE902F)" />
            <path d={svgPaths.p33caa680} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_6_1289)" />
          </Wrapper>
          <div className="absolute left-[24px] size-[206px] top-[32px]" data-name="image 14">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
          </div>
          <p className="absolute font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] left-[24px] text-[#1e1b1a] text-[18px] top-[246px] w-[232px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Peel it, color it, label with it, trade it, or turn it into part of a bigger craft project.
          </p>
        </div>
      </div>
    </div>
  );
}