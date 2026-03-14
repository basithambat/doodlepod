import clsx from "clsx";
import svgPaths from "./svg-shohyi183g";
import imgImage15 from "figma:asset/42e3238601c20627fa3cdd412d48eff7082e72b4.png";
import imgImage16 from "figma:asset/5cbbc3dfdcf116746bb7c55daee14ad338d56d1b.png";
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

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-[190.609px]">
      <p className="flex-[1_0_0] font-['Google_Sans:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[#f6eedf] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
        {children}
      </p>
    </div>
  );
}
type ComponentTextProps = {
  text: string;
};

function ComponentText({ text }: ComponentTextProps) {
  return <Wrapper>{text}</Wrapper>;
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

export default function SectionsFooterGroup() {
  return (
    <div className="bg-[#015446] content-stretch flex flex-col isolate items-center pb-[33.01px] pt-[33px] px-[56px] relative size-full" data-name="sections: footer-group">
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
                  <Wrapper>{`Terms & Conditions`}</Wrapper>
                  <Wrapper>{`Delivery & Returns`}</Wrapper>
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
                </div>
              </div>
              <div className="bg-[#037f59] content-stretch flex items-center p-[16px] relative rounded-[120px] shrink-0">
                <div className="relative shrink-0 size-[59px]" data-name="image 16">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
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
  );
}