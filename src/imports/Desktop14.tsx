import clsx from "clsx";
type Frame24HelperProps = {
  additionalClassNames?: string;
};

function Frame24Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame24HelperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "76" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
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

export default function Desktop() {
  return (
    <div className="bg-[#037f59] content-stretch flex flex-col gap-[64px] items-center px-[40px] py-[88px] relative size-full" data-name="Desktop - 14">
      <div className="content-stretch flex gap-[64px] items-end relative shrink-0 text-[#f6eedf] w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[728px]">
          <p className="font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Ways to play
          </p>
          <p className="font-['Recoleta_Alt:Bold',sans-serif] leading-[88px] min-w-full not-italic relative shrink-0 text-[72px] w-[min-content]">more than stickers. a whole world of play.</p>
        </div>
        <p className="flex-[1_0_0] font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
          Show parents this is not a one-time novelty purchase. Show kids it can become part of everyday creative life.
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
        <Frame24Helper additionalClassNames="h-[264.512px] w-[600.155px]">
          <div className="-rotate-2 flex-none">
            <div className="content-stretch flex gap-[32px] items-start relative">
              <Helper text="Everyday creativity" text1="Make dragons, donuts, space cats, silly monsters, and original characters on demand." />
              <Helper text="School and learning" text1="Create labels, badges, rewards, and visual prompts for fun learning moments." />
            </div>
          </div>
        </Frame24Helper>
        <Frame24Helper additionalClassNames="h-[231.298px] w-[595.767px]">
          <div className="flex-none rotate-1">
            <div className="content-stretch flex gap-[32px] items-start relative">
              <Helper text="Parties and gifting" text1="Print custom stickers for birthday favors, games, cards, and party tables." />
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
        </Frame24Helper>
      </div>
    </div>
  );
}