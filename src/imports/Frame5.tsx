import clsx from "clsx";
import svgPaths from "./svg-sxbbctt52y";
import imgImage9 from "figma:asset/828ab6ce17f4956bd9e397d01cd605b8fc2b9870.png";
import imgImage14 from "figma:asset/62e466eba7e303ca0b8c4df5a7e8d6c6cc62c60f.png";
import imgImage21 from "figma:asset/23c4451d037488ef51db3f9a787e7cd77f002d8b.png";
import imgImage19 from "figma:asset/46a94b6684b74d7ec84c9472d9d3d67fca58f59f.png";
import imgImage15 from "figma:asset/42e3238601c20627fa3cdd412d48eff7082e72b4.png";
import imgImage16 from "figma:asset/5cbbc3dfdcf116746bb7c55daee14ad338d56d1b.png";
type Frame32HelperProps = {
  additionalClassNames?: string;
};

function Frame32Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame32HelperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "76" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className="flex items-center justify-center relative shrink-0">
      {children}
    </div>
  );
}
type DivWtFooterBlockProps = {
  additionalClassNames?: string;
};

function DivWtFooterBlock({ children, additionalClassNames = "" }: React.PropsWithChildren<DivWtFooterBlockProps>) {
  return (
    <div className={clsx("relative self-stretch shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start pt-[24px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
  text: string;
  text1: string;
};

function Wrapper4({ children, additionalClassNames = "", text, text1 }: React.PropsWithChildren<Wrapper4Props>) {
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
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <Wrapper5 additionalClassNames={additionalClassNames}>
      <div className="-rotate-1 flex-none">{children}</div>
    </Wrapper5>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-[190.609px]">
      <p className="flex-[1_0_0] font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[#f6eedf] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {children}
      </p>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type DesktopProps = {
  additionalClassNames?: string;
};

function Desktop({ children, additionalClassNames = "" }: React.PropsWithChildren<DesktopProps>) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <div className="content-stretch flex flex-col gap-[64px] items-center px-[40px] py-[88px] relative w-full">{children}</div>
    </Wrapper1>
  );
}
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
type ComponentTextProps = {
  text: string;
};

function ComponentText({ text }: ComponentTextProps) {
  return <Wrapper2>{text}</Wrapper2>;
}
type DivTextProps = {
  text: string;
};

function DivText({ text }: DivTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f6eedf] text-[32px] w-full">{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
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
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="bg-[#f6eedf] content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[32px] relative rounded-[24px] shrink-0 w-[280px]">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[32px] text-black w-full" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {text}
      </p>
      <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1e1b1a] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {text1}
      </p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper1({ text, text1, additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[16px] items-start relative shrink-0", additionalClassNames)}>
      <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {text}
      </p>
      <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[88px] min-w-full not-italic relative shrink-0 text-[72px] w-[min-content]">{text1}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="bg-[#0256da] content-stretch flex items-center justify-center px-[16px] py-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-7 border-black border-solid inset-[-7px] pointer-events-none" />
      <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e9e7e0] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {text}
      </p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
};

function Helper({ text, text1, text2 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#131415] w-full">
      <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] w-full" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {text}
      </p>
      <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[64px] not-italic relative shrink-0 text-[56px] w-full">{text1}</p>
      <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] w-full" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {text2}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-[#ff9eb5] content-stretch flex items-center justify-center px-[16px] py-[4px] relative rounded-[40px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-9 border-black border-solid inset-[-9px] pointer-events-none rounded-[49px]" />
      <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[32px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {text}
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="bg-[#f6eedf] relative shrink-0 w-full" data-name="Desktop - 7">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[64px] items-center justify-center pb-[120px] pt-[88px] px-[269px] relative w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
              <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[68px] text-center text-white whitespace-nowrap">Doodlepod</p>
              <Wrapper3 additionalClassNames="h-[57.487px] w-[544.755px]">
                <Text text="Voice-powered creativity for kids" />
              </Wrapper3>
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
                <Wrapper3 additionalClassNames="h-[73.684px] w-[270.163px]">
                  <div className="bg-[#e4002b] content-stretch flex items-center justify-center px-[33px] py-[17px] relative rounded-[12px]" data-name="Component 2">
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[6px_6px_0px_0px_#231f20]" />
                    <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f6eedf] text-[28px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      Get doodlepod
                    </p>
                  </div>
                </Wrapper3>
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
        </div>
      </div>
      <Wrapper1 additionalClassNames="bg-[#015446]">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[269px] py-[88px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center leading-[normal] relative shrink-0">
            <p className="font-['Recoleta_Alt:Bold',sans-serif] not-italic relative shrink-0 text-[#f3f3f3] text-[88px] whitespace-nowrap">big little ideas, made real</p>
            <p className="font-['Google_Sans:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#f6eedf] text-[28px] text-center w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0" }}>
              A simple little ritual that turns imagination into something kids can hold, keep, and proudly show off.
            </p>
          </div>
          <div className="content-stretch flex gap-[64px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[32px] relative shrink-0 w-[280px]">
              <Wrapper additionalClassNames="absolute left-0 top-0">
                <mask fill="white" id="path-1-inside-1_1_380">
                  <path d={svgPaths.pd318280} />
                </mask>
                <path d={svgPaths.pd318280} fill="var(--fill-0, #FE9FB3)" />
                <path d={svgPaths.p33caa680} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_1_380)" />
              </Wrapper>
              <div className="h-[206px] relative shrink-0 w-[203.98px]" data-name="image 14">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[195.84%] left-[-8.91%] max-w-none top-[-46.3%] w-[298.47%]" src={imgImage14} />
                </div>
              </div>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#1e1b1a] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Press once and say anything from a pirate cat to your name in bubble letters.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[32px] relative shrink-0 w-[280px]">
              <div className="absolute flex h-[374px] items-center justify-center left-0 top-0 w-[281px]">
                <div className="-scale-y-100 flex-none rotate-180">
                  <Wrapper additionalClassNames="relative">
                    <mask fill="white" id="path-1-inside-1_1_386">
                      <path d={svgPaths.pd318280} />
                    </mask>
                    <path d={svgPaths.pd318280} fill="var(--fill-0, #FFE302)" />
                    <path d={svgPaths.p33caa680} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_1_386)" />
                  </Wrapper>
                </div>
              </div>
              <div className="relative shrink-0 size-[206px]" data-name="image 14">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[195.84%] left-[-104.37%] max-w-none top-[-46.3%] w-[295.55%]" src={imgImage14} />
                </div>
              </div>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#1e1b1a] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Your idea becomes a sticker right away, ready to print in Doodlepod’s signature style.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[32px] relative shrink-0 w-[280px]">
              <Wrapper additionalClassNames="absolute left-0 top-0">
                <mask fill="white" id="path-1-inside-1_1_382">
                  <path d={svgPaths.pd318280} />
                </mask>
                <path d={svgPaths.pd318280} fill="var(--fill-0, #FE902F)" />
                <path d={svgPaths.p33caa680} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_1_382)" />
              </Wrapper>
              <div className="relative shrink-0 size-[206px]" data-name="image 14">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[195.84%] left-[-204.43%] max-w-none top-[-46.3%] w-[295.55%]" src={imgImage14} />
                </div>
              </div>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#1e1b1a] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Peel it, color it, label with it, trade it, or turn it into part of a bigger craft project.
              </p>
            </div>
          </div>
        </div>
      </Wrapper1>
      <div className="bg-[#f5e88c] relative shrink-0 w-full" data-name="Desktop - 9">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[64px] items-start justify-center pb-[120px] pt-[88px] px-[269px] relative w-full">
            <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0">
              <Helper text="for parents" text1="built for kids. designed for parent peace of mind." text2="Doodlepod turns voice-powered play into a tactile, joyful activity with a cleaner setup, thoughtful controls, and a calmer creative experience." />
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
                <Text1 text="Thoughtfully moderated creative experience" />
                <Text1 text="Thermal printing with no ink and less mess" />
                <Text1 text="Screen-light play that encourages making" />
                <Text1 text="Simple setup and easy repeat use" />
                <Text1 text="Privacy-first design for voice experiences" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[490px]">
              <Helper text="For kids" text1="a little box for big imagination" text2="Kids don’t just get stickers. They get a tiny creation station for animals, names, rewards, party fun, story worlds, and all kinds of silly original ideas." />
              <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-full">
                <Text text="Monsters" additionalClassNames="shrink-0" />
                <Text text="Labels" additionalClassNames="shrink-0" />
                <Text text="Rewards" additionalClassNames="shrink-0" />
                <Text text="Party stickers" additionalClassNames="shrink-0" />
                <Text text="Story characters" additionalClassNames="shrink-0" />
                <Text text="Craft projects" additionalClassNames="shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Desktop additionalClassNames="bg-[#037f59]">
        <div className="content-stretch flex gap-[64px] items-end relative shrink-0 text-[#f6eedf] w-full">
          <Helper1 text="Ways to play" text1="more than stickers. a whole world of play." additionalClassNames="w-[728px]" />
          <p className="flex-[1_0_0] font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Show parents this is not a one-time novelty purchase. Show kids it can become part of everyday creative life.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
          <Frame32Helper additionalClassNames="h-[264.512px] w-[600.155px]">
            <div className="-rotate-2 flex-none">
              <div className="content-stretch flex gap-[32px] items-start relative">
                <Helper2 text="Everyday creativity" text1="Make dragons, donuts, space cats, silly monsters, and original characters on demand." />
                <Helper2 text="School and learning" text1="Create labels, badges, rewards, and visual prompts for fun learning moments." />
              </div>
            </div>
          </Frame32Helper>
          <Frame32Helper additionalClassNames="h-[231.298px] w-[595.767px]">
            <div className="flex-none rotate-1">
              <div className="content-stretch flex gap-[32px] items-start relative">
                <Helper2 text="Parties and gifting" text1="Print custom stickers for birthday favors, games, cards, and party tables." />
                <div className="bg-[#f6eedf] relative rounded-[24px] self-stretch shrink-0 w-[280px]">
                  <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
                  <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] px-[24px] py-[32px] relative size-full">
                    <p className="font-['Google_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[32px] text-black w-full" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      Family time
                    </p>
                    <p className="font-['Google_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#1e1b1a] text-[18px] w-full" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      Turn shared ideas into crafts, stories, and keepsakes everyone can join in on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Frame32Helper>
        </div>
      </Desktop>
      <Wrapper1 additionalClassNames="bg-gradient-to-b from-[#eb5636] to-[#85311f]">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[40px] relative w-full">
          <div className="h-[144px] relative shrink-0 w-[1734px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1734 144">
              <path d={svgPaths.p28175a80} fill="var(--fill-0, #037F59)" id="Vector 2" />
            </svg>
          </div>
          <div className="content-stretch flex gap-[64px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col gap-[24px] items-start justify-end relative shrink-0 w-[600px]">
                <Helper1 text="Starter set" text1="meet Doodlepod" additionalClassNames="text-[#f6eedf] w-full" />
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <Text2 text="1 Doodlepod device" />
                  <Text2 text="Sticker paper rolls" />
                  <Text2 text="Coloring essentials" />
                  <Text2 text="Quick start guide" />
                </div>
              </div>
              <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#f6eedf]">
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Quick start guide
                  </p>
                  <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[88px] min-w-full not-italic relative shrink-0 text-[72px] w-[min-content]">$129</p>
                </div>
                <Wrapper3 additionalClassNames="h-[74.487px] w-[316.156px]">
                  <div className="bg-[#f6eedf] content-stretch flex items-center justify-center px-[33px] py-[17px] relative rounded-[12px]" data-name="Component 3">
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[6px_6px_0px_0px_#231f20]" />
                    <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#231f20] text-[28px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      Get the starter set
                    </p>
                  </div>
                </Wrapper3>
              </div>
            </div>
            <Wrapper5 additionalClassNames="h-[647.309px] w-[443.291px]">
              <div className="-rotate-2 flex-none">
                <div className="bg-[#efc8aa] content-stretch flex flex-col h-[632.986px] items-center justify-center px-[24px] py-[56px] relative rounded-[24px] w-[421.456px]">
                  <div aria-hidden="true" className="absolute border-10 border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
                  <Wrapper5 additionalClassNames="size-[632.986px]">
                    <div className="flex-none rotate-2">
                      <div className="relative size-[612px]" data-name="image 21">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21} />
                      </div>
                    </div>
                  </Wrapper5>
                </div>
              </div>
            </Wrapper5>
          </div>
          <div className="h-[144px] relative shrink-0 w-[1594px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1594 144">
              <path d={svgPaths.p1c36800} fill="var(--fill-0, #F6EEDF)" id="Vector 1" />
            </svg>
          </div>
        </div>
      </Wrapper1>
      <Desktop additionalClassNames="bg-[#f6eedf]">
        <div className="content-stretch flex gap-[64px] items-end relative shrink-0 text-[#131415] w-full">
          <Helper1 text="FAQ" text1="everything parents want to know" additionalClassNames="w-[728px]" />
          <p className="flex-[1_0_0] font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Show parents this is not a one-time novelty purchase. Show kids it can become part of everyday creative life.
          </p>
        </div>
        <div className="content-stretch flex gap-[64px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[732px]">
            <Wrapper4 additionalClassNames="h-[126.758px]" text="How does Doodlepod work?" text1="Press, speak an idea, and Doodlepod turns it into a printable sticker in seconds." />
            <Wrapper4 additionalClassNames="h-[149.754px]" text="Does it use ink?" text1="It is designed for kid-focused creative use with parent-friendly controls and a moderated experience." />
            <Wrapper4 additionalClassNames="h-[126.758px]" text="Does it need Wi-Fi?" text1="Yes, for voice-powered creation and setup." />
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[352px] relative w-[487px]" data-name="image 19">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-8.42%] max-w-none top-[-0.1%] w-[108.42%]" src={imgImage19} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <div className="bg-[#015446] content-stretch flex flex-col isolate items-center pb-[33.01px] pt-[33px] relative shrink-0 w-[1440px]" data-name="sections: footer-group">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full z-[1]">
          <div className="content-stretch flex items-start justify-between max-w-[1200px] relative shrink-0 w-full" data-name="div.wt-footer__body">
            <DivWtFooterBlock additionalClassNames="w-[190.61px]">
              <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="collapsible-section">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="div.wt-footer__title">
                  <DivText text="About Us" />
                </div>
                <div className="content-stretch flex flex-col h-[180px] items-start overflow-clip relative shrink-0 w-[190.609px]" data-name="ul.wt-footer__list">
                  <ComponentText text="Our Story" />
                  <ComponentText text="Contact Us" />
                </div>
              </div>
            </DivWtFooterBlock>
            <DivWtFooterBlock additionalClassNames="w-[291.53px]">
              <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="collapsible-section">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="div.wt-footer__title">
                  <DivText text="Parent Zone" />
                </div>
                <div className="grid grid-cols-[_291.53px] grid-rows-[repeat(1,minmax(0,1fr))] h-[236px] max-h-[1800px] overflow-clip pb-[20px] relative shrink-0 w-full" data-name="div#CollapsibleTab-menu_UzMVfM">
                  <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-start shrink-0" data-name="ul.wt-footer__list">
                    <ComponentText text="Safety" />
                    <ComponentText text="Privacy Policy" />
                    <Wrapper2>{`Terms & Conditions`}</Wrapper2>
                    <Wrapper2>{`Delivery & Returns`}</Wrapper2>
                  </div>
                </div>
              </div>
            </DivWtFooterBlock>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="section.wt-newsletter">
              <div className="content-stretch flex flex-col items-start max-w-[325px] relative shrink-0 w-[325px]" data-name="div.wt-footer__title">
                <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f6eedf] text-[32px] whitespace-nowrap">Let’s be friends.</p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[600px] relative shrink-0 w-[325px]" data-name="div.wt-newsletter__fieldset">
                <div className="content-stretch flex flex-col h-[56px] items-start pb-[8px] relative shrink-0 w-full" data-name="input#NewsletterForm--sections--19531883675827__footer:margin">
                  <div className="h-[48px] relative shrink-0 w-full" data-name="input#NewsletterForm--sections--19531883675827__footer">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start pb-[12.5px] pt-[9.5px] px-[5px] relative size-full">
                        <div className="relative shrink-0 w-full" data-name="div#placeholder">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] lowercase relative shrink-0 text-[#f6eedf] text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[normal]">Email</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border-[#f6eedf] border-b-3 border-solid inset-0 pointer-events-none" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-end min-w-[170.8800048828125px] pb-[16px] pl-[154.125px] relative shrink-0 w-[325.005px]" data-name="Subscribe:margin">
                  <div className="bg-[#e4002b] relative rounded-[4.4px] shrink-0" data-name="Component 6">
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4.4px] shadow-[4px_4px_0px_0px_#231f20]" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] px-[13px] relative">
                        <div className="min-w-[144.8800048828125px] relative shrink-0" data-name="span.wt-newsletter__send__text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center min-w-[inherit] relative">
                            <div className="absolute content-stretch flex flex-col items-center left-0 right-[-0.12px] top-0" data-name="span.text-shadow">
                              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black text-center uppercase whitespace-nowrap">
                                <p className="leading-[25.3px]">Subscribe</p>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white uppercase whitespace-nowrap">
                              <p className="leading-[25.3px]">Subscribe</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
                <div className="relative shrink-0 size-[91px]" data-name="image 15">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
                </div>
                <div className="relative shrink-0 size-[91px]" data-name="image 16">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f6eedf] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">© 2025, Words and smiles, Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
}