import svgPathsHero from "../../imports/svg-qazy51ffzi";
import svgPathsSection3 from "../../imports/svg-wiqy6cvf72";
import svgPathsSection2 from "../../imports/svg-id08y6npp7";
import svgPathsProduct from "../../imports/svg-ittlgyf0qm";
import svgPathsFAQ from "../../imports/svg-34rvizvibr";
import svgPathsFooter from "../../imports/svg-shohyi183g";
import svgPathsProductSection from "../../imports/svg-s2ox6xv3le";
// Image assets (from repo: public/images/ — synced from src/assets)
const imgImage22 = "/images/hero-device.png";
const imgImage23 = "/images/product.png";
const imgImage14 = "/images/feature-1.png";
const imgImage15 = "/images/feature-2.png";
const imgImage16 = "/images/feature-3.png";
const imgVector = "/images/vector.png";
const imgImage19 = "/images/faq-kid.png";
const imgImage17 = "/images/insta.png";
const imgImage18 = "/images/youtube.png";

export default function ResponsiveDoodlepod() {
  const kidsPills = [
    { text: 'Monsters', path: svgPathsSection3.p22b338f0, maskPath: svgPathsSection3.p1208ba00, strokePath: svgPathsSection3.p3e0dba80, width: 182 },
    { text: 'Labels', path: svgPathsSection3.p2067a100, maskPath: svgPathsSection3.p10a20100, strokePath: svgPathsSection3.p37b24500, width: 137 },
    { text: 'Rewards', path: svgPathsSection3.pf6671f0, maskPath: svgPathsSection3.p1dbcdf80, strokePath: svgPathsSection3.pc330692, width: 171 },
    { text: 'Party stickers', path: svgPathsSection3.p1f70bf00, maskPath: svgPathsSection3.p35d71200, strokePath: svgPathsSection3.p3b32e100, width: 248 },
    { text: 'Story characters', path: svgPathsSection3.p3a9fb300, maskPath: svgPathsSection3.pc667880, strokePath: svgPathsSection3.p167c4000, width: 292 },
    { text: 'Craft projects', path: svgPathsSection3.p3365d600, maskPath: svgPathsSection3.pad69200, strokePath: svgPathsSection3.p1eb08e00, width: 250 }
  ];

  return (
    <div className="flex min-w-0 flex-col items-stretch w-full overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section className="bg-[#f6eedf] w-full min-w-0 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[269px] py-12 md:py-16 lg:py-24 relative max-w-full">
          {/* Decorative lines - top */}
          <div className="absolute top-0 left-0 right-0 h-1/3 flex items-center justify-center pointer-events-none opacity-50">
            <svg className="w-full max-w-7xl h-auto" viewBox="0 0 1402 325.982" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d={svgPathsHero.p2f7fdb20} opacity="0.5" stroke="url(#paint0_linear_top)" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_top" x1="0" x2="1402" y1="208.75" y2="208.75">
                  <stop stopColor="#F6EEDF" />
                  <stop offset="0.107931" stopColor="#FE9233" />
                  <stop offset="0.488084" stopColor="#FE9436" />
                  <stop offset="0.884328" stopColor="#FE9233" />
                  <stop offset="1" stopColor="#F6EEDF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex min-w-0 flex-col gap-8 md:gap-12 lg:gap-16 items-center relative z-10 w-full max-w-7xl">
            {/* Header */}
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center">
              {/* Doodlepod SVG Title */}
              <div className="w-56 md:w-72 lg:w-[362px] h-auto">
                <svg className="w-full h-auto" viewBox="0 0 362 84" fill="none">
                  <g clipPath="url(#clip0_6_588)">
                    <path d={svgPathsHero.p62bba00} fill="white" />
                    <path d={svgPathsHero.p2c2e5600} fill="white" />
                    <path d={svgPathsHero.p260efe00} fill="white" />
                    <path d={svgPathsHero.p33860300} fill="white" />
                    <path d={svgPathsHero.p142bbd00} fill="white" />
                    <path d={svgPathsHero.p2d075b00} fill="white" />
                    <path d={svgPathsHero.p11afd5f1} fill="white" />
                    <path d={svgPathsHero.p2808a580} fill="white" />
                    <path d={svgPathsHero.p9629000} fill="white" />
                    <g>
                      <mask height="86" id="mask0_6_588" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="362" x="0" y="-1">
                        <g>
                          <path d={svgPathsHero.p1a405880} fill="white" />
                          <path d={svgPathsHero.p62bba00} fill="black" />
                          <path d={svgPathsHero.p2c2e5600} fill="black" />
                          <path d={svgPathsHero.p260efe00} fill="black" />
                          <path d={svgPathsHero.p33860300} fill="black" />
                          <path d={svgPathsHero.p142bbd00} fill="black" />
                          <path d={svgPathsHero.p2d075b00} fill="black" />
                          <path d={svgPathsHero.p11afd5f1} fill="black" />
                          <path d={svgPathsHero.p2808a580} fill="black" />
                          <path d={svgPathsHero.p9629000} fill="black" />
                        </g>
                      </mask>
                      <g mask="url(#mask0_6_588)">
                        <path d={svgPathsHero.p62bba00} stroke="#E90003" strokeWidth="18" />
                        <path d={svgPathsHero.p2c2e5600} stroke="#E90003" strokeWidth="18" />
                        <path d={svgPathsHero.p260efe00} stroke="#E90003" strokeWidth="18" />
                        <path d={svgPathsHero.p33860300} stroke="#E90003" strokeWidth="18" />
                        <path d={svgPathsHero.p142bbd00} stroke="#E90003" strokeWidth="18" />
                        <path d={svgPathsHero.p2d075b00} stroke="#E90003" strokeWidth="18" />
                        <path d={svgPathsHero.p11afd5f1} stroke="#E90003" strokeWidth="18" />
                        <path d={svgPathsHero.p2808a580} stroke="#E90003" strokeWidth="18" />
                        <path d={svgPathsHero.p9629000} stroke="#E90003" strokeWidth="18" />
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
              
              {/* Voice-powered pill - SVG from Figma (549×62) */}
              <div className="flex flex-col items-center w-full min-w-0">
                <div className="relative inline-flex flex-col items-stretch max-w-full min-w-0">
                  <svg className="w-full max-w-[min(100%,549px)] h-auto" width="549" height="62" viewBox="0 0 549 62" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Voice-powered creativity for kids">
                    <g clipPath="url(#clip0_hero_pill_155)">
                      <path d="M1.79731 36.3684C1.56598 23.1156 12.1219 12.1845 25.3748 11.9532L521.299 3.29682C534.552 3.06549 545.483 13.6215 545.714 26.8743C545.946 40.1271 535.39 51.0582 522.137 51.2895L26.2125 59.9459C12.9597 60.1772 2.02863 49.6212 1.79731 36.3684Z" fill="#FF9EB5"/>
                      <mask id="mask0_hero_pill_155" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={-1} y={-3} width={552} height={68}>
                        <path d="M550.202 -2.19104H-0.708557V64.3991H550.202V-2.19104Z" fill="white"/>
                        <path d="M1.79725 36.3684C1.56592 23.1156 12.1219 12.1845 25.3748 11.9532L521.299 3.29682C534.552 3.06549 545.483 13.6215 545.714 26.8743C545.946 40.1271 535.39 51.0582 522.137 51.2895L26.2125 59.9459C12.9597 60.1772 2.02857 49.6212 1.79725 36.3684Z" fill="black"/>
                      </mask>
                      <g mask="url(#mask0_hero_pill_155)">
                        <path d="M25.2961 7.45408C25.3485 10.4536 25.4008 13.4532 25.4532 16.4527C44.4962 16.0734 63.5392 15.6942 82.5822 15.3149C228.84 12.4019 375.098 9.48883 521.356 6.57582C532.381 6.07732 542.575 15.842 542.528 26.9301C543.029 38.0037 533.221 48.2434 522.083 48.1964C356.782 51.4887 191.481 54.781 26.1797 58.0733C20.5534 58.2118 14.933 56.0899 10.788 52.2724C6.34479 48.241 3.66615 42.3525 3.57719 36.3375C3.04724 24.5138 13.5157 13.5904 25.4041 13.6407C25.3845 12.5158 25.3648 11.391 25.3452 10.2662C11.6589 10.141 -0.520687 22.6704 0.017168 36.3997C0.0831618 43.3652 3.16747 50.253 8.31306 54.9636C13.1083 59.4289 19.6799 61.9503 26.2451 61.8189C191.56 59.3403 356.876 56.8616 522.191 54.383C536.628 54.5114 549.468 41.2983 548.9 26.8189C549.029 12.3324 535.771 -0.551122 521.242 0.018183C374.971 2.21127 228.701 4.40436 82.43 6.59745C63.3854 6.88299 44.3408 7.16853 25.2961 7.45408ZM25.4532 16.4527L25.2961 7.45408L25.3452 10.2662L25.4041 13.6407L25.4532 16.4527Z" fill="black"/>
                      </g>
                      <path d="M41.9492 46.8265L33.9854 25.4822L38.3648 25.4058L43.0303 38.2863L43.8578 41.0023L44.0978 40.9981L44.89 38.2539L49.2831 25.2152L53.6624 25.1388L46.2085 46.7522L41.9492 46.8265ZM61.9038 46.9583C60.304 46.9862 58.8781 46.661 57.6261 45.9828C56.3937 45.2842 55.417 44.3311 54.6958 43.1235C53.9942 41.8955 53.63 40.5117 53.6031 38.9719C53.5763 37.4322 53.8921 36.0464 54.5507 34.8147C55.229 33.5627 56.1719 32.5761 57.3795 31.8549C58.6068 31.1134 60.0203 30.7287 61.62 30.7007C63.2198 30.6728 64.6358 31.0082 65.8682 31.7068C67.1006 32.4054 68.0674 33.3586 68.7686 34.5666C69.4898 35.7742 69.8638 37.1479 69.8907 38.6876C69.9175 40.2274 69.5919 41.6233 68.9136 42.8753C68.255 44.107 67.3221 45.0934 66.1148 45.8346C64.9072 46.5558 63.5035 46.9303 61.9038 46.9583ZM61.8399 43.2988C62.5998 43.2856 63.2867 43.1035 63.9007 42.7528C64.5343 42.3817 65.0353 41.8628 65.4038 41.1963C65.7918 40.5094 65.9777 39.6961 65.9613 38.7562C65.9449 37.8164 65.7309 37.02 65.3195 36.367C64.928 35.7138 64.4092 35.2128 63.763 34.864C63.1368 34.5149 62.4438 34.3469 61.6839 34.3602C60.944 34.3731 60.2473 34.5653 59.5936 34.9368C58.96 35.3079 58.449 35.8269 58.0606 36.4937C57.6922 37.1603 57.5161 37.9635 57.5325 38.9033C57.549 39.8432 57.7531 40.6497 58.1449 41.323C58.5563 41.9759 59.0851 42.4768 59.7313 42.8256C60.3972 43.154 61.1 43.3117 61.8399 43.2988ZM72.9722 46.285L72.7051 30.9873L76.6345 30.9187L76.9016 46.2164L72.9722 46.285ZM74.6555 29.273C73.9556 29.2852 73.3514 29.0458 72.8427 28.5546C72.3341 28.0634 72.0736 27.4678 72.0614 26.7679C72.0492 26.068 72.2889 25.4738 72.7804 24.9851C73.2716 24.4764 73.8671 24.216 74.567 24.2038C75.2669 24.1916 75.8612 24.4312 76.3499 24.9228C76.8582 25.394 77.1184 25.9795 77.1306 26.6794C77.1428 27.3793 76.9034 27.9836 76.4122 28.4923C75.941 29.0006 75.3554 29.2608 74.6555 29.273ZM87.8833 46.5048C86.3236 46.532 84.9279 46.2163 83.6962 45.5577C82.4841 44.8788 81.5175 43.9355 80.7964 42.7279C80.0948 41.5 79.7303 40.0961 79.7027 38.5163C79.6751 36.9366 79.9906 35.5309 80.6492 34.2992C81.3278 33.0672 82.2609 32.0907 83.4485 31.3699C84.6561 30.6487 86.0398 30.2745 87.5996 30.2473C89.2993 30.2176 90.7654 30.5521 91.9978 31.2507C93.2301 31.9493 94.1282 32.9737 94.6918 34.3241L91.1185 35.8867C90.7864 35.1924 90.3275 34.6903 89.742 34.3805C89.1562 34.0507 88.4633 33.8928 87.6634 33.9067C86.8836 33.9203 86.187 34.1225 85.5737 34.5133C84.9601 34.884 84.4791 35.4025 84.1306 36.0687C83.7822 36.7349 83.616 37.5279 83.6321 38.4478C83.6481 39.3676 83.8421 40.1644 84.2139 40.838C84.5854 41.4916 85.0844 42.003 85.7109 42.3721C86.3371 42.7212 87.0401 42.889 87.82 42.8753C88.6999 42.86 89.4264 42.6573 89.9997 42.2672C90.5726 41.8572 91.0332 41.309 91.3812 40.6229L94.9179 42.1214C94.3404 43.4116 93.4485 44.4574 92.2423 45.2585C91.0361 46.0597 89.5831 46.4751 87.8833 46.5048Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_hero_pill_155">
                        <rect width="549" height="62" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">
              <div className="flex flex-col gap-6 md:gap-10 items-start w-full lg:flex-1">
                <div className="flex flex-col gap-2 text-black w-full">
                  <h2 className="font-recoleta text-4xl md:text-7xl lg:text-[116px] leading-tight lg:leading-[116px]">
                    Say it, Make it
                  </h2>
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Kids speak an idea and Doodlepod turns it into a sticker they can print, color, peel, and make their own.
                  </p>
                </div>
                <button className="bg-[#e4002b] px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-[4px_4px_0px_0px_#231f20] md:shadow-[6px_6px_0px_0px_#231f20] hover:shadow-[2px_2px_0px_0px_#231f20] transition-all">
                  <p className="font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-xl lg:text-[28px] text-[#f6eedf] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Get doodlepod
                  </p>
                </button>
              </div>
              
              {/* Image Container - hero image (10% larger) */}
              <div className="w-full lg:flex-1 flex justify-center min-w-0 overflow-visible">
                <img
                  alt="Kid with Doodlepod device—voice-powered creativity for kids"
                  className="w-full max-w-md lg:max-w-full object-contain scale-110 origin-center"
                  src={imgImage22}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Decorative lines - bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 flex items-center justify-center pointer-events-none opacity-50">
            <svg className="w-full max-w-7xl h-auto" viewBox="0 0 1402 325.982" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d={svgPathsHero.p14c8ee00} opacity="0.5" stroke="url(#paint0_linear_bottom)" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_bottom" x1="0" x2="1402" y1="117.232" y2="117.232">
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
      </section>

      {/* Big Little Ideas Section */}
      <section className="bg-[#015446] w-full min-w-0 overflow-hidden">
        <div className="flex min-w-0 flex-col gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[269px] py-12 md:py-16 lg:py-24 max-w-full">
          <div className="flex flex-col gap-2 items-center text-center">
            <h2 className="font-recoleta text-3xl md:text-6xl lg:text-[88px] text-[#f3f3f3]">
              big little ideas,<br />made real
            </h2>
            <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px] text-[#f6eedf] text-center max-w-4xl" style={{ fontVariationSettings: "'GRAD' 0" }}>
              A simple little ritual that turns imagination into something kids can hold, keep, and proudly show off.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full max-w-5xl">
            {[
              { bg: '#FE9FB3', text: 'Press once and say anything from a pirate cat to your name in bubble letters.', img: imgImage14, alt: 'Pirate cat saying Speak—voice-powered creativity', rotate: false },
              { bg: '#FFE302', text: "Your idea becomes a sticker right away, ready to print in Doodlepod's signature style.", img: imgImage15, alt: 'Doodlepod device printing your idea—Watch it become a sticker', rotate: true },
              { bg: '#FE902F', text: 'Peel it, color it, label with it, trade it, or turn it into part of a bigger craft project.', img: imgImage16, alt: 'Peel, color, and play—craft with your stickers', rotate: false }
            ].map((card, idx) => (
              <div key={idx} className="relative w-full h-[320px] md:h-[374px] min-w-0">
                {/* SVG Background */}
                <div className={`absolute inset-0 ${card.rotate ? 'flex items-center justify-center' : ''}`}>
                  <div className={card.rotate ? '-scale-y-100 rotate-180 w-full h-full' : 'w-full h-full'}>
                    <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 281 373.441">
                      <g>
                        <mask fill="white" id={`mask_section2_${idx}`}>
                          <path d={svgPathsSection2.pd318280} />
                        </mask>
                        <path d={svgPathsSection2.pd318280} fill={card.bg} />
                        <path d={svgPathsSection2.p33caa680} fill="white" mask={`url(#mask_section2_${idx})`} />
                      </g>
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col p-6 md:p-8">
                  <div className="h-48 md:h-52 mb-4 flex items-center justify-center min-w-0">
                    <img alt={card.alt} className="max-h-full w-auto object-contain max-w-full" src={card.img} decoding="async" />
                  </div>
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents/Kids Section */}
      <section className="bg-[#f5e88c] w-full min-w-0 overflow-hidden">
        <div className="flex min-w-0 flex-col lg:flex-row gap-8 lg:gap-16 items-start px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[269px] py-12 md:py-16 lg:py-24 max-w-full">
          {/* For Parents — min-w-0 + overflow-hidden so column can shrink and never overlap */}
          <div className="flex min-w-0 flex-col gap-8 md:gap-12 lg:gap-16 w-full lg:flex-1 lg:min-w-0 lg:overflow-x-auto lg:basis-0">
            <div className="flex flex-col gap-4 md:gap-6 text-[#131415] min-w-0">
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-xl md:text-2xl lg:text-[28px] text-[#0256da]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                for parents
              </p>
              <h3 className="font-recoleta text-3xl md:text-4xl lg:text-[56px] leading-tight lg:leading-[64px]">
                built for kids. designed for parent peace of mind.
              </h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Doodlepod turns voice-powered play into a tactile, joyful activity with a cleaner setup, thoughtful controls, and a calmer creative experience.
              </p>
            </div>
            {/* Pills: vertical stack per Figma (node 9-490) — blue fill, 7px black border, staggered widths */}
            <div className="flex flex-col gap-4 items-start w-full min-w-0">
              {[
                'Thoughtfully moderated creative experience',
                'Thermal printing with no ink and less mess',
                'Screen-light play that encourages making',
                'Simple setup and easy repeat use',
                'Privacy-first design for voice experiences'
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="bg-[#0256da] border-black border-solid flex items-center justify-start px-4 py-2.5 shrink-0 w-full max-w-full rounded-xl border-t-[3px] border-r-[6px] border-b-[7px] border-l-[4px]"
                >
                  <p
                    className="font-['Google_Sans:Bold',sans-serif] font-bold text-base md:text-xl lg:text-[24px] leading-snug text-[#e9e7e0] text-left"
                    style={{ fontVariationSettings: "'GRAD' 0" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* For Kids — same flex constraints so columns share space and never overlap */}
          <div className="flex min-w-0 flex-col gap-8 md:gap-12 lg:gap-16 w-full lg:flex-1 lg:min-w-0 lg:overflow-x-auto lg:basis-0">
            <div className="flex flex-col gap-4 md:gap-6 text-[#131415] min-w-0">
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-xl md:text-2xl lg:text-[28px] text-[#c65772]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                For kids
              </p>
              <h3 className="font-recoleta text-3xl md:text-4xl lg:text-[56px] leading-tight lg:leading-[64px]">
                a little box for big imagination
              </h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Kids don't just get stickers. They get a tiny creation station for animals, names, rewards, party fun, story worlds, and all kinds of silly original ideas.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center min-w-0">
              {kidsPills.map((pill, idx) => (
                <div key={idx} className="relative inline-flex h-12 md:h-14 overflow-hidden flex-shrink-0 min-w-0 max-w-full">
                  <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox={`0 0 ${pill.width} 56`}>
                    <path d={pill.path} fill="#FF9EB5" />
                    <g>
                      <mask height="57" id={`mask_kid_${idx}`} maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width={pill.width} x="0" y="0">
                        <rect fill="white" height="57" width={pill.width} />
                        <path d={pill.maskPath} fill="black" />
                      </mask>
                      <g mask={`url(#mask_kid_${idx})`}>
                        <path d={pill.strokePath} fill="black" />
                      </g>
                    </g>
                  </svg>
                  <div className="relative flex items-center px-6 md:px-8 lg:px-10">
                    <p className="font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-2xl lg:text-[32px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      {pill.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Play Section */}
      <section className="bg-[#037f59] w-full min-w-0 overflow-hidden">
        <div className="flex min-w-0 flex-col gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[269px] py-12 md:py-16 lg:py-24 max-w-full">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start w-full text-[#f6eedf]">
            <div className="flex flex-col gap-4 w-full lg:flex-[2]">
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-xl md:text-2xl lg:text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Ways to play
              </p>
              <h2 className="font-recoleta text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[88px]">
                more than stickers. a whole world of play.
              </h2>
            </div>
            <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px] w-full lg:flex-1" style={{ fontVariationSettings: "'GRAD' 0" }}>
              Show parents this is not a one-time novelty purchase. Show kids it can become part of everyday creative life.
            </p>
          </div>

          {/* Play Cards */}
          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-full items-center min-w-0">
            {/* First Row - Rotated Left */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:-rotate-2 w-full max-w-full justify-center">
              <div className="bg-[#f6eedf] rounded-[24px] border-6 border-white p-6 md:p-8 w-full md:max-w-[280px] min-w-0">
                <h4 className="font-recoleta font-bold text-2xl md:text-[32px] text-black mb-2" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Everyday creativity
                </h4>
                <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Make dragons, donuts, space cats, silly monsters, and original characters on demand.
                </p>
              </div>
              <div className="bg-[#f6eedf] rounded-[24px] border-6 border-white p-6 md:p-8 w-full md:max-w-[280px] min-w-0">
                <h4 className="font-recoleta font-bold text-2xl md:text-[32px] text-black mb-2" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  School and learning
                </h4>
                <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Create labels, badges, rewards, and visual prompts for fun learning moments.
                </p>
              </div>
            </div>

            {/* Second Row - Rotated Right */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:rotate-1 w-full max-w-full justify-center">
              <div className="bg-[#f6eedf] rounded-[24px] border-6 border-white p-6 md:p-8 w-full md:max-w-[280px] min-w-0">
                <h4 className="font-recoleta font-bold text-2xl md:text-[32px] text-black mb-2" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Parties and gifting
                </h4>
                <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Print custom stickers for birthday favors, games, cards, and party tables.
                </p>
              </div>
              <div className="bg-[#f6eedf] rounded-[24px] border-6 border-white p-6 md:p-8 w-full md:max-w-[280px] min-w-0">
                <h4 className="font-recoleta font-bold text-2xl md:text-[32px] text-black mb-2" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Family time
                </h4>
                <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Turn shared ideas into crafts, stories, and keepsakes everyone can join in on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product/Pricing Section */}
      <section className="bg-gradient-to-b from-[#eb5636] to-[#85311f] w-full min-w-0 overflow-hidden relative">
        {/* Wave decoration - top - edge to edge */}
        <div className="w-full h-24 md:h-32 lg:h-36 min-w-0">
          <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1734 144">
            <path d={svgPathsProductSection.p28175a80} fill="#037F59" />
          </svg>
        </div>

        <div className="flex min-w-0 flex-col lg:flex-row gap-8 lg:gap-16 items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[269px] py-8 md:py-12 lg:py-16 max-w-full">
          {/* Product Info */}
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 w-full lg:flex-1">
            <div className="flex flex-col gap-4 md:gap-6 text-[#f6eedf]">
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-xl md:text-2xl lg:text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Starter set
              </p>
              <h2 className="font-recoleta text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[88px]">
                meet Doodlepod
              </h2>
              <div className="flex flex-col gap-4 md:gap-6">
                {[
                  '1 Doodlepod device',
                  'Sticker paper rolls',
                  'Coloring essentials',
                  'Quick start guide'
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-6 h-6 flex-shrink-0">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 16.0019 19.9998">
                        <path clipRule="evenodd" d={svgPathsProductSection.p29e2ae00} fill="#F6EEDF" fillRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-xl md:text-2xl lg:text-[28px] text-[#f6eedf]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start sm:items-center">
              <div className="flex flex-col gap-2 text-[#f6eedf]">
                <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-xl lg:text-2xl" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Get at
                </p>
                <p className="font-['Inter',sans-serif] font-bold text-4xl md:text-6xl lg:text-[72px] leading-tight lg:leading-[88px]">
                  ₹6,500
                </p>
              </div>
              <button className="bg-[#f6eedf] px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-[4px_4px_0px_0px_#231f20] md:shadow-[6px_6px_0px_0px_#231f20] hover:shadow-[2px_2px_0px_0px_#231f20] hover:scale-105 transition-all w-full max-w-[315px] -rotate-1">
                <p className="font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-xl lg:text-[28px] text-[#231f20] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Get the starter set
                </p>
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="w-full lg:flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-[544px]">
              <img alt="Doodlepod device with dog stickers" className="w-full h-auto object-cover" src={imgImage23} />
            </div>
          </div>
        </div>

        {/* Wave decoration - bottom - edge to edge */}
        <div className="w-full h-24 md:h-32 lg:h-36">
          <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1594 144">
            <path d={svgPathsProductSection.p1c36800} fill="#F6EEDF" />
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f6eedf] w-full min-w-0 overflow-hidden">
        <div className="flex min-w-0 flex-col gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[269px] py-12 md:py-16 lg:py-24 max-w-full">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start w-full text-[#131415]">
            <div className="flex flex-col gap-4 w-full lg:flex-[2]">
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-xl md:text-2xl lg:text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                FAQ
              </p>
              <h2 className="font-recoleta text-3xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[88px]">
                everything parents want to know
              </h2>
            </div>
            <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px] w-full lg:flex-1" style={{ fontVariationSettings: "'GRAD' 0" }}>
              Show parents this is not a one-time novelty purchase. Show kids it can become part of everyday creative life.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full">
            <div className="flex flex-col gap-2 w-full lg:flex-[2]">
              {/* FAQ Card 1 - Height 127 with embedded text */}
              <div className="w-full h-auto relative">
                <svg className="w-full h-auto" fill="none" preserveAspectRatio="none" viewBox="0 0 734 127">
                  <g clipPath="url(#clip0_faq_1)">
                    <path d={svgPathsFAQ.p23e97500} fill="#EFC8AA" />
                    <g>
                      <mask height="127" id="mask0_faq_1" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="734" x="0" y="0">
                        <g>
                          <path d={svgPathsFAQ.p23e97500} fill="white" />
                        </g>
                      </mask>
                      <g mask="url(#mask0_faq_1)">
                        <path d={svgPathsFAQ.p17ea5400} fill="black" />
                      </g>
                    </g>
                    <path d={svgPathsFAQ.p1191880} fill="black" />
                    <path d={svgPathsFAQ.p1e9d4800} fill="#1E1B1A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_faq_1">
                      <rect fill="white" height="127" width="734" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* FAQ Card 2 - Height 150 with embedded text */}
              <div className="w-full h-auto relative">
                <svg className="w-full h-auto" fill="none" preserveAspectRatio="none" viewBox="0 0 735 150">
                  <g>
                    <path d={svgPathsFAQ.p2b055f00} fill="#EFC8AA" />
                    <g>
                      <mask height="150" id="mask0_faq_2" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="734" x="0" y="0">
                        <g>
                          <path d={svgPathsFAQ.p2b055f00} fill="white" />
                        </g>
                      </mask>
                      <g mask="url(#mask0_faq_2)">
                        <path d={svgPathsFAQ.peec6fc0} fill="black" />
                      </g>
                    </g>
                    <path d={svgPathsFAQ.p36dac400} fill="black" />
                    <path d={svgPathsFAQ.p23627a00} fill="#1E1B1A" />
                  </g>
                </svg>
              </div>

              {/* FAQ Card 3 - Height 127 with embedded text */}
              <div className="w-full h-auto relative">
                <svg className="w-full h-auto" fill="none" preserveAspectRatio="none" viewBox="0 0 734 127">
                  <g clipPath="url(#clip0_faq_3)">
                    <path d={svgPathsFAQ.p23e97500} fill="#EFC8AA" />
                    <g>
                      <mask height="127" id="mask0_faq_3" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="734" x="0" y="0">
                        <g>
                          <path d={svgPathsFAQ.p23e97500} fill="white" />
                        </g>
                      </mask>
                      <g mask="url(#mask0_faq_3)">
                        <path d={svgPathsFAQ.p17ea5400} fill="black" />
                      </g>
                    </g>
                    <path d={svgPathsFAQ.p18b8dc00} fill="black" />
                    <path d={svgPathsFAQ.p38e7200} fill="#1E1B1A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_faq_3">
                      <rect fill="white" height="127" width="734" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="w-full lg:flex-1 flex justify-center lg:justify-end relative">
              <div className="-scale-y-100 rotate-180 lg:absolute lg:left-[-120px] lg:top-[-40px]">
                <img alt="Kid with magnifying glass" className="w-full max-w-md lg:max-w-[680px] object-contain" src={imgImage19} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#015446] w-full min-w-0 overflow-hidden">
        <div className="flex min-w-0 flex-col gap-8 md:gap-12 lg:gap-14 items-center px-4 sm:px-6 md:px-12 lg:px-14 py-8 md:py-12 max-w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-between w-full max-w-[1200px]">
            {/* About Us */}
            <div className="flex flex-col gap-6 pt-6">
              <h3 className="font-recoleta text-[32px] text-[#f6eedf]">
                About Us
              </h3>
              <div className="flex flex-col gap-0">
                <a href="/our-story" className="h-9 flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Our Story
                  </p>
                </a>
                <a href="/contact" className="h-9 flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Contact Us
                  </p>
                </a>
              </div>
            </div>

            {/* Parent Zone */}
            <div className="flex flex-col gap-6 pt-6">
              <h3 className="font-recoleta text-[32px] text-[#f6eedf]">
                Parent Zone
              </h3>
              <div className="flex flex-col gap-0">
                <a href="/safety" className="h-9 flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Safety
                  </p>
                </a>
                <a href="/privacy" className="h-9 flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Privacy Policy
                  </p>
                </a>
                <a href="/terms" className="h-9 flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Terms & Conditions
                  </p>
                </a>
                <a href="/delivery-returns" className="h-9 flex items-center hover:opacity-80 transition-opacity cursor-pointer">
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Delivery & Returns
                  </p>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4 max-w-[325px]">
              <h3 className="font-recoleta text-[32px] text-[#f6eedf]">
                Let's be friends.
              </h3>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col pb-2">
                  <input
                    type="email"
                    placeholder="email"
                    className="bg-transparent border-b-3 border-[#f6eedf] pb-3 px-1 font-['DM_Sans:Regular',sans-serif] text-xl text-[#f6eedf] placeholder-[#f6eedf] lowercase outline-none"
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  />
                </div>
                <div className="flex justify-end pb-4">
                  <button className="bg-[#e4002b] px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-[4px_4px_0px_0px_#231f20] md:shadow-[6px_6px_0px_0px_#231f20] hover:shadow-[2px_2px_0px_0px_#231f20] hover:scale-105 transition-all">
                    <p className="font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-xl lg:text-[28px] text-[#f6eedf] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      Subscribe
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#037f59] rounded-full p-4 flex items-center justify-center w-[91px] h-[91px] hover:scale-110 transition-transform cursor-pointer">
                  <img alt="Instagram" className="w-[59px] h-[59px] object-cover" src={imgImage17} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#037f59] rounded-full p-4 flex items-center justify-center w-[91px] h-[91px] hover:scale-110 transition-transform cursor-pointer">
                  <img alt="YouTube" className="w-[59px] h-[59px] object-cover" src={imgImage18} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="bg-[#002f27] rounded-[14px] w-full max-w-[1200px]">
            <div className="flex items-center justify-center px-1 py-2">
              <p className="font-['DM_Sans:Regular',sans-serif] text-base text-[#f6eedf] leading-6 text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
                © 2025, Words and smiles, Bangalore
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}