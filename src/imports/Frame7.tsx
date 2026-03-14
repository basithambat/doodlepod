import clsx from "clsx";
import svgPaths from "./svg-qazy51ffzi";
import imgImage22 from "figma:asset/490b83c3351fe1f90c8627ad11184726f6c76288.png";
import imgImage14 from "figma:asset/fa128f1f9e55be3c12150b8e2ab81fef1b85720a.png";
import imgImage15 from "figma:asset/d58f28d818c580700af875689c47a71a596b3ea0.png";
import imgImage16 from "figma:asset/90e5ec3e480c8ef54f403e108532738ab8dd35b6.png";
import imgVector from "figma:asset/c0b6728201bed5162d6576ee467d752c8c757d2f.png";
import imgImage19 from "figma:asset/46a94b6684b74d7ec84c9472d9d3d67fca58f59f.png";
import imgImage17 from "figma:asset/42e3238601c20627fa3cdd412d48eff7082e72b4.png";
import imgImage18 from "figma:asset/5cbbc3dfdcf116746bb7c55daee14ad338d56d1b.png";
type Frame33HelperProps = {
  additionalClassNames?: string;
};

function Frame33Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame33HelperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "76" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
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

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[0.07%_9.41%_0.29%_9.41%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 441.646 645.663">
        {children}
      </svg>
    </div>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorProps>) {
  return (
    <div className={clsx("h-[325.5px] relative shrink-0 w-[1402px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1402 325.982">
        {children}
      </svg>
    </div>
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

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="bg-[#f6eedf] relative shrink-0 w-full" data-name="Desktop - 7">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center pb-[208px] px-[269px] relative w-full">
            <Vector additionalClassNames="mb-[-208px]">
              <path d={svgPaths.p2f7fdb20} id="Vector" opacity="0.5" stroke="url(#paint0_linear_6_566)" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_566" x1="0" x2="1402" y1="208.75" y2="208.75">
                  <stop stopColor="#F6EEDF" />
                  <stop offset="0.107931" stopColor="#FE9233" />
                  <stop offset="0.488084" stopColor="#FE9436" />
                  <stop offset="0.884328" stopColor="#FE9233" />
                  <stop offset="1" stopColor="#F6EEDF" />
                </linearGradient>
              </defs>
            </Vector>
            <div className="content-stretch flex flex-col isolate items-center mb-[-208px] pb-[200px] relative shrink-0">
              <div className="content-stretch flex flex-col gap-[64px] items-center mb-[-200px] relative shrink-0 z-[2]">
                <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
                  <div className="h-[84px] relative shrink-0 w-[362px]" data-name="Frame">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 84">
                      <g clipPath="url(#clip0_6_588)" id="Frame">
                        <path d={svgPaths.p62bba00} fill="var(--fill-0, white)" id="Vector" />
                        <path d={svgPaths.p2c2e5600} fill="var(--fill-0, white)" id="Vector_2" />
                        <path d={svgPaths.p260efe00} fill="var(--fill-0, white)" id="Vector_3" />
                        <path d={svgPaths.p33860300} fill="var(--fill-0, white)" id="Vector_4" />
                        <path d={svgPaths.p142bbd00} fill="var(--fill-0, white)" id="Vector_5" />
                        <path d={svgPaths.p2d075b00} fill="var(--fill-0, white)" id="Vector_6" />
                        <path d={svgPaths.p11afd5f1} fill="var(--fill-0, white)" id="Vector_7" />
                        <path d={svgPaths.p2808a580} fill="var(--fill-0, white)" id="Vector_8" />
                        <path d={svgPaths.p9629000} fill="var(--fill-0, white)" id="Vector_9" />
                        <g id="Mask group">
                          <mask height="86" id="mask0_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                            <g id="Group">
                              <path d={svgPaths.p1a405880} fill="var(--fill-0, white)" id="Vector_10" />
                              <path d={svgPaths.p62bba00} fill="var(--fill-0, black)" id="Vector_11" />
                              <path d={svgPaths.p2c2e5600} fill="var(--fill-0, black)" id="Vector_12" />
                              <path d={svgPaths.p260efe00} fill="var(--fill-0, black)" id="Vector_13" />
                              <path d={svgPaths.p33860300} fill="var(--fill-0, black)" id="Vector_14" />
                              <path d={svgPaths.p142bbd00} fill="var(--fill-0, black)" id="Vector_15" />
                              <path d={svgPaths.p2d075b00} fill="var(--fill-0, black)" id="Vector_16" />
                              <path d={svgPaths.p11afd5f1} fill="var(--fill-0, black)" id="Vector_17" />
                              <path d={svgPaths.p2808a580} fill="var(--fill-0, black)" id="Vector_18" />
                              <path d={svgPaths.p9629000} fill="var(--fill-0, black)" id="Vector_19" />
                            </g>
                          </mask>
                          <g mask="url(#mask0_6_588)">
                            <path d={svgPaths.p62bba00} id="Vector_20" stroke="var(--stroke-0, #E90003)" strokeWidth="18" />
                          </g>
                        </g>
                        <g id="Mask group_2">
                          <mask height="86" id="mask1_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                            <g id="Group_2">
                              <path d={svgPaths.p1a405880} fill="var(--fill-0, white)" id="Vector_21" />
                              <path d={svgPaths.p62bba00} fill="var(--fill-0, black)" id="Vector_22" />
                              <path d={svgPaths.p2c2e5600} fill="var(--fill-0, black)" id="Vector_23" />
                              <path d={svgPaths.p260efe00} fill="var(--fill-0, black)" id="Vector_24" />
                              <path d={svgPaths.p33860300} fill="var(--fill-0, black)" id="Vector_25" />
                              <path d={svgPaths.p142bbd00} fill="var(--fill-0, black)" id="Vector_26" />
                              <path d={svgPaths.p2d075b00} fill="var(--fill-0, black)" id="Vector_27" />
                              <path d={svgPaths.p11afd5f1} fill="var(--fill-0, black)" id="Vector_28" />
                              <path d={svgPaths.p2808a580} fill="var(--fill-0, black)" id="Vector_29" />
                              <path d={svgPaths.p9629000} fill="var(--fill-0, black)" id="Vector_30" />
                            </g>
                          </mask>
                          <g mask="url(#mask1_6_588)">
                            <path d={svgPaths.p2c2e5600} id="Vector_31" stroke="var(--stroke-0, #E90003)" strokeWidth="18" />
                          </g>
                        </g>
                        <g id="Mask group_3">
                          <mask height="86" id="mask2_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                            <g id="Group_3">
                              <path d={svgPaths.p1a405880} fill="var(--fill-0, white)" id="Vector_32" />
                              <path d={svgPaths.p62bba00} fill="var(--fill-0, black)" id="Vector_33" />
                              <path d={svgPaths.p2c2e5600} fill="var(--fill-0, black)" id="Vector_34" />
                              <path d={svgPaths.p260efe00} fill="var(--fill-0, black)" id="Vector_35" />
                              <path d={svgPaths.p33860300} fill="var(--fill-0, black)" id="Vector_36" />
                              <path d={svgPaths.p142bbd00} fill="var(--fill-0, black)" id="Vector_37" />
                              <path d={svgPaths.p2d075b00} fill="var(--fill-0, black)" id="Vector_38" />
                              <path d={svgPaths.p11afd5f1} fill="var(--fill-0, black)" id="Vector_39" />
                              <path d={svgPaths.p2808a580} fill="var(--fill-0, black)" id="Vector_40" />
                              <path d={svgPaths.p9629000} fill="var(--fill-0, black)" id="Vector_41" />
                            </g>
                          </mask>
                          <g mask="url(#mask2_6_588)">
                            <path d={svgPaths.p260efe00} id="Vector_42" stroke="var(--stroke-0, #E90003)" strokeWidth="18" />
                          </g>
                        </g>
                        <g id="Mask group_4">
                          <mask height="86" id="mask3_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                            <g id="Group_4">
                              <path d={svgPaths.p1a405880} fill="var(--fill-0, white)" id="Vector_43" />
                              <path d={svgPaths.p62bba00} fill="var(--fill-0, black)" id="Vector_44" />
                              <path d={svgPaths.p2c2e5600} fill="var(--fill-0, black)" id="Vector_45" />
                              <path d={svgPaths.p260efe00} fill="var(--fill-0, black)" id="Vector_46" />
                              <path d={svgPaths.p33860300} fill="var(--fill-0, black)" id="Vector_47" />
                              <path d={svgPaths.p142bbd00} fill="var(--fill-0, black)" id="Vector_48" />
                              <path d={svgPaths.p2d075b00} fill="var(--fill-0, black)" id="Vector_49" />
                              <path d={svgPaths.p11afd5f1} fill="var(--fill-0, black)" id="Vector_50" />
                              <path d={svgPaths.p2808a580} fill="var(--fill-0, black)" id="Vector_51" />
                              <path d={svgPaths.p9629000} fill="var(--fill-0, black)" id="Vector_52" />
                            </g>
                          </mask>
                          <g mask="url(#mask3_6_588)">
                            <path d={svgPaths.p33860300} id="Vector_53" stroke="var(--stroke-0, #E90003)" strokeWidth="18" />
                          </g>
                        </g>
                        <g id="Mask group_5">
                          <mask height="86" id="mask4_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                            <g id="Group_5">
                              <path d={svgPaths.p1a405880} fill="var(--fill-0, white)" id="Vector_54" />
                              <path d={svgPaths.p62bba00} fill="var(--fill-0, black)" id="Vector_55" />
                              <path d={svgPaths.p2c2e5600} fill="var(--fill-0, black)" id="Vector_56" />
                              <path d={svgPaths.p260efe00} fill="var(--fill-0, black)" id="Vector_57" />
                              <path d={svgPaths.p33860300} fill="var(--fill-0, black)" id="Vector_58" />
                              <path d={svgPaths.p142bbd00} fill="var(--fill-0, black)" id="Vector_59" />
                              <path d={svgPaths.p2d075b00} fill="var(--fill-0, black)" id="Vector_60" />
                              <path d={svgPaths.p11afd5f1} fill="var(--fill-0, black)" id="Vector_61" />
                              <path d={svgPaths.p2808a580} fill="var(--fill-0, black)" id="Vector_62" />
                              <path d={svgPaths.p9629000} fill="var(--fill-0, black)" id="Vector_63" />
                            </g>
                          </mask>
                          <g mask="url(#mask4_6_588)">
                            <path d={svgPaths.p142bbd00} id="Vector_64" stroke="var(--stroke-0, #E90003)" strokeWidth="18" />
                          </g>
                        </g>
                        <g id="Mask group_6">
                          <mask height="86" id="mask5_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                            <g id="Group_6">
                              <path d={svgPaths.p1a405880} fill="var(--fill-0, white)" id="Vector_65" />
                              <path d={svgPaths.p62bba00} fill="var(--fill-0, black)" id="Vector_66" />
                              <path d={svgPaths.p2c2e5600} fill="var(--fill-0, black)" id="Vector_67" />
                              <path d={svgPaths.p260efe00} fill="var(--fill-0, black)" id="Vector_68" />
                              <path d={svgPaths.p33860300} fill="var(--fill-0, black)" id="Vector_69" />
                              <path d={svgPaths.p142bbd00} fill="var(--fill-0, black)" id="Vector_70" />
                              <path d={svgPaths.p2d075b00} fill="var(--fill-0, black)" id="Vector_71" />
                              <path d={svgPaths.p11afd5f1} fill="var(--fill-0, black)" id="Vector_72" />
                              <path d={svgPaths.p2808a580} fill="var(--fill-0, black)" id="Vector_73" />
                              <path d={svgPaths.p9629000} fill="var(--fill-0, black)" id="Vector_74" />
                            </g>
                          </mask>
                          <g mask="url(#mask5_6_588)">
                            <path d={svgPaths.p2d075b00} id="Vector_75" stroke="var(--stroke-0, #E90003)" strokeWidth="18" />
                          </g>
                        </g>
                        <g id="Mask group_7">
                          <mask height="86" id="mask6_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                            <g id="Group_7">
                              <path d={svgPaths.p1a405880} fill="var(--fill-0, white)" id="Vector_76" />
                              <path d={svgPaths.p62bba00} fill="var(--fill-0, black)" id="Vector_77" />
                              <path d={svgPaths.p2c2e5600} fill="var(--fill-0, black)" id="Vector_78" />
                              <path d={svgPaths.p260efe00} fill="var(--fill-0, black)" id="Vector_79" />
                              <path d={svgPaths.p33860300} fill="var(--fill-0, black)" id="Vector_80" />
                              <path d={svgPaths.p142bbd00} fill="var(--fill-0, black)" id="Vector_81" />
                              <path d={svgPaths.p2d075b00} fill="var(--fill-0, black)" id="Vector_82" />
                              <path d={svgPaths.p11afd5f1} fill="var(--fill-0, black)" id="Vector_83" />
                              <path d={svgPaths.p2808a580} fill="var(--fill-0, black)" id="Vector_84" />
                              <path d={svgPaths.p9629000} fill="var(--fill-0, black)" id="Vector_85" />
                            </g>
                          </mask>
                          <g mask="url(#mask6_6_588)">
                            <path d={svgPaths.p11afd5f1} id="Vector_86" stroke="var(--stroke-0, #E90003)" strokeWidth="18" />
                          </g>
                        </g>
                        <g id="Mask group_8">
                          <mask height="86" id="mask7_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                            <g id="Group_8">
                              <path d={svgPaths.p1a405880} fill="var(--fill-0, white)" id="Vector_87" />
                              <path d={svgPaths.p62bba00} fill="var(--fill-0, black)" id="Vector_88" />
                              <path d={svgPaths.p2c2e5600} fill="var(--fill-0, black)" id="Vector_89" />
                              <path d={svgPaths.p260efe00} fill="var(--fill-0, black)" id="Vector_90" />
                              <path d={svgPaths.p33860300} fill="var(--fill-0, black)" id="Vector_91" />
                              <path d={svgPaths.p142bbd00} fill="var(--fill-0, black)" id="Vector_92" />
                              <path d={svgPaths.p2d075b00} fill="var(--fill-0, black)" id="Vector_93" />
                              <path d={svgPaths.p11afd5f1} fill="var(--fill-0, black)" id="Vector_94" />
                              <path d={svgPaths.p2808a580} fill="var(--fill-0, black)" id="Vector_95" />
                              <path d={svgPaths.p9629000} fill="var(--fill-0, black)" id="Vector_96" />
                            </g>
                          </mask>
                          <g mask="url(#mask7_6_588)">
                            <path d={svgPaths.p2808a580} id="Vector_97" stroke="var(--stroke-0, #E90003)" strokeWidth="18" />
                          </g>
                        </g>
                        <g id="Mask group_9">
                          <mask height="86" id="mask8_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                            <g id="Group_9">
                              <path d={svgPaths.p1a405880} fill="var(--fill-0, white)" id="Vector_98" />
                              <path d={svgPaths.p62bba00} fill="var(--fill-0, black)" id="Vector_99" />
                              <path d={svgPaths.p2c2e5600} fill="var(--fill-0, black)" id="Vector_100" />
                              <path d={svgPaths.p260efe00} fill="var(--fill-0, black)" id="Vector_101" />
                              <path d={svgPaths.p33860300} fill="var(--fill-0, black)" id="Vector_102" />
                              <path d={svgPaths.p142bbd00} fill="var(--fill-0, black)" id="Vector_103" />
                              <path d={svgPaths.p2d075b00} fill="var(--fill-0, black)" id="Vector_104" />
                              <path d={svgPaths.p11afd5f1} fill="var(--fill-0, black)" id="Vector_105" />
                              <path d={svgPaths.p2808a580} fill="var(--fill-0, black)" id="Vector_106" />
                              <path d={svgPaths.p9629000} fill="var(--fill-0, black)" id="Vector_107" />
                            </g>
                          </mask>
                          <g mask="url(#mask8_6_588)">
                            <path d={svgPaths.p9629000} id="Vector_108" stroke="var(--stroke-0, #E90003)" strokeWidth="18" />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_6_588">
                          <rect fill="white" height="84" width="362" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="h-[62px] overflow-clip relative shrink-0 w-[549px]" data-name="Frame">
                    <div className="absolute inset-[5.31%_0.6%_3.31%_0.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 543.924 56.6565">
                        <path d={svgPaths.p415ee70} fill="var(--fill-0, #FF9EB5)" id="Vector" />
                      </svg>
                    </div>
                    <div className="absolute inset-[-3.53%_-0.22%_-3.87%_-0.13%]" data-name="Mask group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 550.911 66.5901">
                        <g id="Mask group">
                          <mask height="67" id="mask0_6_1125" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="551" x="0" y="0">
                            <g id="Group">
                              <path d={svgPaths.p1455a900} fill="var(--fill-0, white)" id="Vector" />
                              <path d={svgPaths.p1a4b7080} fill="var(--fill-0, black)" id="Vector_2" />
                            </g>
                          </mask>
                          <g mask="url(#mask0_6_1125)">
                            <path d={svgPaths.p25978300} fill="var(--fill-0, black)" id="Vector_3" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="absolute flex inset-[15.48%_6.42%_9.73%_6.04%] items-center justify-center">
                      <div className="-rotate-1 flex-none h-[38px] w-[480px]">
                        <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative text-[30px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                          Voice-powered creativity for kids
                        </p>
                      </div>
                    </div>
                  </div>
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
                    <div className="h-[80px] overflow-clip relative shrink-0 w-[276px]" data-name="Frame">
                      <div className="absolute inset-[0_2.11%_7.89%_0]" data-name="Group">
                        <div className="absolute inset-[0_-2.14%_-7.86%_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.956 79.4766">
                            <g filter="url(#filter0_d_6_568)" id="Group">
                              <path d={svgPaths.p39da6000} fill="var(--fill-0, #E4002B)" id="Vector" />
                              <path d={svgPaths.p29d54500} fill="var(--fill-0, #F6EEDF)" id="Vector_2" />
                            </g>
                            <defs>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="79.2691" id="filter0_d_6_568" width="275.748" x="0.207564" y="0.207557">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dx="6" dy="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.121569 0 0 0 0 0.12549 0 0 0 1 0" />
                                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_568" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_568" mode="normal" result="shape" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[444px] left-[550.88px] top-[15.18px] w-[679px]" data-name="image 22">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage22} />
                  </div>
                </div>
              </div>
              <Vector additionalClassNames="mb-[-200px] z-[1]">
                <path d={svgPaths.p14c8ee00} id="Vector" opacity="0.5" stroke="url(#paint0_linear_6_586)" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_586" x1="0" x2="1402" y1="117.232" y2="117.232">
                    <stop stopColor="#F6EEDF" />
                    <stop offset="0.107931" stopColor="#FE9233" />
                    <stop offset="0.488084" stopColor="#FE9436" />
                    <stop offset="0.884328" stopColor="#FE9233" />
                    <stop offset="1" stopColor="#F6EEDF" />
                  </linearGradient>
                </defs>
              </Vector>
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
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
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
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
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
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
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
                <div className="h-[57px] overflow-clip relative shrink-0 w-[547px]" data-name="Frame">
                  <div className="absolute inset-[6.12%_0.79%_6.16%_0.3%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 541 50">
                      <path d="M0 0H541V50H0V0Z" fill="var(--fill-0, #0256DA)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.9%_0.06%_-0.85%_-0.06%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 547 58">
                      <g id="Mask group">
                        <mask height="58" id="mask0_6_572" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="547" x="0" y="0">
                          <g id="Group">
                            <path d="M547 0H0V58H547V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d="M2 4H543V54H2V4Z" fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_572)">
                          <path d={svgPaths.p10fdd880} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[23.6%_3.75%_23.77%_3.2%] leading-[normal] text-[#e9e7e0] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Thoughtfully moderated creative experience
                  </p>
                </div>
                <div className="h-[57px] overflow-clip relative shrink-0 w-[523px]" data-name="Frame">
                  <div className="absolute inset-[6.11%_0.83%_6.17%_0.32%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517 50">
                      <path d="M0 0H517V50H0V0Z" fill="var(--fill-0, #0256DA)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.9%_0.06%_-0.85%_-0.06%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 523 58">
                      <g id="Mask group">
                        <mask height="58" id="mask0_6_549" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="523" x="0" y="0">
                          <g id="Group">
                            <path d="M523 0H0V58H523V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d="M2 4H519V54H2V4Z" fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_549)">
                          <path d={svgPaths.p18623780} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[23.6%_3.9%_23.77%_3.36%] leading-[normal] text-[#e9e7e0] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Thermal printing with no ink and less mess
                  </p>
                </div>
                <div className="h-[57px] overflow-clip relative shrink-0 w-[517px]" data-name="Frame">
                  <div className="absolute inset-[6.11%_0.83%_6.17%_0.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 511 50">
                      <path d="M0 0H511V50H0V0Z" fill="var(--fill-0, #0256DA)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.9%_0.06%_-0.85%_-0.06%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517 58">
                      <g id="Mask group">
                        <mask height="58" id="mask0_6_531" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="517" x="0" y="0">
                          <g id="Group">
                            <path d="M517 0H0V58H517V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d="M2 4H513V54H2V4Z" fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_531)">
                          <path d={svgPaths.p32afc680} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[23.6%_4.01%_23.77%_3.34%] leading-[normal] text-[#e9e7e0] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Screen-light play that encourages making
                  </p>
                </div>
                <div className="h-[57px] overflow-clip relative shrink-0 w-[421px]" data-name="Frame">
                  <div className="absolute inset-[6.1%_1.01%_6.18%_0.42%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 415 50">
                      <path d="M0 0H415V50H0V0Z" fill="var(--fill-0, #0256DA)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.91%_0.06%_-0.84%_-0.06%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 421 58">
                      <g id="Mask group">
                        <mask height="58" id="mask0_6_537" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="421" x="0" y="0">
                          <g id="Group">
                            <path d="M421 0H0V58H421V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d="M2 4H417V54H2V4Z" fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_537)">
                          <path d={svgPaths.p32ad2d80} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[23.25%_4.82%_24.12%_4.2%] leading-[normal] text-[#e9e7e0] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Simple setup and easy repeat use
                  </p>
                </div>
                <div className="h-[57px] overflow-clip relative shrink-0 w-[515px]" data-name="Frame">
                  <div className="absolute inset-[6.11%_0.84%_6.17%_0.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 509 50">
                      <path d="M0 0H509V50H0V0Z" fill="var(--fill-0, #0256DA)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.9%_0.06%_-0.85%_-0.06%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 515 58">
                      <g id="Mask group">
                        <mask height="58" id="mask0_6_560" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="515" x="0" y="0">
                          <g id="Group">
                            <path d="M515 0H0V58H515V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d="M2 4H511V54H2V4Z" fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_560)">
                          <path d={svgPaths.p13958700} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[23.6%_3.83%_23.77%_3.55%] leading-[normal] text-[#e9e7e0] text-[24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Privacy-first design for voice experiences
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[490px]">
              <Helper text="For kids" text1="a little box for big imagination" text2="Kids don’t just get stickers. They get a tiny creation station for animals, names, rewards, party fun, story worlds, and all kinds of silly original ideas." />
              <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full">
                <div className="h-[56px] relative shrink-0 w-[182px]" data-name="Frame">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 182 56">
                    <g clipPath="url(#clip0_6_520)" id="Frame">
                      <path d={svgPaths.p222f0900} fill="var(--fill-0, #FF9EB5)" id="Vector" />
                      <g id="Mask group">
                        <mask height="58" id="mask0_6_520" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="183" x="-1" y="-1">
                          <g id="Group">
                            <path d={svgPaths.p21a54b80} fill="var(--fill-0, white)" id="Vector_2" />
                            <path d={svgPaths.p222f0900} fill="var(--fill-0, black)" id="Vector_3" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_520)">
                          <path d={svgPaths.p2815aa00} fill="var(--fill-0, black)" id="Vector_4" />
                        </g>
                      </g>
                      <path d={svgPaths.p2a58ba00} fill="var(--fill-0, black)" id="Vector_5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_520">
                        <rect fill="white" height="56" width="182" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="h-[56px] overflow-clip relative shrink-0 w-[137px]" data-name="Frame">
                  <div className="absolute inset-[8.04%_2.89%_6.25%_1.48%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 48">
                      <path d={svgPaths.p2067a100} fill="var(--fill-0, #FF9EB5)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.89%_-0.02%_-0.89%_-0.7%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138 57">
                      <g id="Mask group">
                        <mask height="57" id="mask0_6_502" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="138" x="0" y="0">
                          <g id="Group">
                            <path d="M138 0H0V57H138V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d={svgPaths.p10a20100} fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_502)">
                          <path d={svgPaths.p37b24500} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[14.82%_13.98%_13.75%_13.76%] leading-[normal] text-[32px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Labels
                  </p>
                </div>
                <div className="h-[56px] overflow-clip relative shrink-0 w-[171px]" data-name="Frame">
                  <div className="absolute inset-[8.04%_2.35%_6.25%_1.15%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165 48">
                      <path d={svgPaths.pf6671f0} fill="var(--fill-0, #FF9EB5)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.89%_0.02%_-0.89%_-0.02%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 57">
                      <g id="Mask group">
                        <mask height="57" id="mask0_6_488" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="171" x="0" y="0">
                          <g id="Group">
                            <path d="M171 0H0V57H171V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d={svgPaths.p1dbcdf80} fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_488)">
                          <path d={svgPaths.pc330692} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[14.82%_11.23%_13.75%_10.99%] leading-[normal] text-[32px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Rewards
                  </p>
                </div>
                <div className="h-[56px] overflow-clip relative shrink-0 w-[248px]" data-name="Frame">
                  <div className="absolute inset-[8.04%_1.66%_6.25%_0.76%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 48">
                      <path d={svgPaths.p1f70bf00} fill="var(--fill-0, #FF9EB5)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.89%_0.04%_-0.89%_-0.04%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 57">
                      <g id="Mask group">
                        <mask height="57" id="mask0_6_508" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="248" x="0" y="0">
                          <g id="Group">
                            <path d="M248 0H0V57H248V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d={svgPaths.p35d71200} fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_508)">
                          <path d={svgPaths.p3b32e100} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[12.85%_7.78%_15.72%_7.54%] leading-[normal] text-[32px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Party stickers
                  </p>
                </div>
                <div className="h-[56px] overflow-clip relative shrink-0 w-[292px]" data-name="Frame">
                  <div className="absolute inset-[8.04%_1.42%_6.25%_0.64%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 286 48">
                      <path d={svgPaths.p3a9fb300} fill="var(--fill-0, #FF9EB5)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.89%_0.05%_-0.89%_-0.05%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 57">
                      <g id="Mask group">
                        <mask height="57" id="mask0_6_480" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="292" x="0" y="0">
                          <g id="Group">
                            <path d="M292 0H0V57H292V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d={svgPaths.pc667880} fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_480)">
                          <path d={svgPaths.p167c4000} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[14.72%_6.89%_13.85%_6.12%] leading-[normal] text-[32px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Story characters
                  </p>
                </div>
                <div className="h-[56px] overflow-clip relative shrink-0 w-[250px]" data-name="Frame">
                  <div className="absolute inset-[8.04%_1.64%_6.25%_0.76%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 48">
                      <path d={svgPaths.p3365d600} fill="var(--fill-0, #FF9EB5)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[-0.89%_0.04%_-0.89%_-0.04%]" data-name="Mask group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 250 57">
                      <g id="Mask group">
                        <mask height="57" id="mask0_6_496" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="250" x="0" y="0">
                          <g id="Group">
                            <path d="M250 0H0V57H250V0Z" fill="var(--fill-0, white)" id="Vector" />
                            <path d={svgPaths.pad69200} fill="var(--fill-0, black)" id="Vector_2" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_6_496)">
                          <path d={svgPaths.p1eb08e00} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Google_Sans:Bold',sans-serif] font-bold inset-[14.92%_7.95%_13.65%_7.25%] leading-[normal] text-[32px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Craft projects
                  </p>
                </div>
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
          <Frame33Helper additionalClassNames="h-[264.512px] w-[600.155px]">
            <div className="-rotate-2 flex-none">
              <div className="content-stretch flex gap-[32px] items-start relative">
                <Helper2 text="Everyday creativity" text1="Make dragons, donuts, space cats, silly monsters, and original characters on demand." />
                <Helper2 text="School and learning" text1="Create labels, badges, rewards, and visual prompts for fun learning moments." />
              </div>
            </div>
          </Frame33Helper>
          <Frame33Helper additionalClassNames="h-[231.298px] w-[595.767px]">
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
          </Frame33Helper>
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
                  <div className="absolute inset-[0_1.81%_8.04%_0]" data-name="Group">
                    <div className="absolute inset-[0_-1.83%_-7.78%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321.949 80.2793">
                        <g filter="url(#filter0_d_6_578)" id="Group">
                          <path d={svgPaths.p1aa82580} fill="var(--fill-0, #F6EEDF)" id="Vector" />
                          <path d={svgPaths.p3d4aa040} fill="var(--fill-0, #231F20)" id="Vector_2" />
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="80.0719" id="filter0_d_6_578" width="321.741" x="0.207564" y="0.207465">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="6" dy="6" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.121569 0 0 0 0 0.12549 0 0 0 1 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_578" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_578" mode="normal" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[648px] overflow-clip relative shrink-0 w-[544px]" data-name="Frame">
              <Wrapper3>
                <path d={svgPaths.pc079240} fill="var(--fill-0, #EFC8AA)" id="Vector" />
              </Wrapper3>
              <Wrapper3>
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
              </Wrapper3>
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
      <div className="bg-[#015446] content-stretch flex flex-col isolate items-center pb-[33.01px] pt-[33px] px-[56px] relative shrink-0 w-[1440px]" data-name="sections: footer-group">
        <div className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-full z-[1]">
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
                  <div className="h-[79px] overflow-clip relative shrink-0 w-[207px]" data-name="Frame">
                    <div className="absolute contents inset-[0_2.81%_8.25%_0]" data-name="Group">
                      <div className="absolute flex inset-[0_2.81%_8.25%_0] items-center justify-center">
                        <div className="-rotate-1 flex-none h-[69px] w-[200px]">
                          <div className="relative size-full" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 69">
                              <path d={svgPaths.paadf300} fill="var(--fill-0, #E4002B)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex inset-[21.85%_18.9%_30.89%_16.08%] items-center justify-center">
                        <div className="-rotate-1 flex-none h-[35px] w-[134px]">
                          <p className="font-['Google_Sans:Bold',sans-serif] font-bold leading-[normal] relative text-[#f6eedf] text-[28px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                            Subscribe
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
                <div className="bg-[#037f59] content-stretch flex items-center p-[16px] relative rounded-[120px] shrink-0">
                  <div className="relative shrink-0 size-[59px]" data-name="image 15">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
                  </div>
                </div>
                <div className="bg-[#037f59] content-stretch flex items-center p-[16px] relative rounded-[120px] shrink-0">
                  <div className="relative shrink-0 size-[59px]" data-name="image 16">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#002f27] relative rounded-[14px] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[4px] py-[8px] relative w-full">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f6eedf] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[24px]">© 2025, Words and smiles, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}