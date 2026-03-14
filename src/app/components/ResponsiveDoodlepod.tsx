import svgPathsHero from "../../imports/svg-qazy51ffzi";
import svgPathsSection3 from "../../imports/svg-wiqy6cvf72";
import svgPathsSection2 from "../../imports/svg-id08y6npp7";
import svgPathsProduct from "../../imports/svg-ittlgyf0qm";
import svgPathsFAQ from "../../imports/svg-34rvizvibr";
import svgPathsFooter from "../../imports/svg-shohyi183g";
import svgPathsProductSection from "../../imports/svg-s2ox6xv3le";
import { heroPillTextPathD } from "./heroPillTextPath";
import { ScrollReveal } from "./ScrollReveal";
import { playPianoKey, playKidsPillKey, playButtonHover, playCardDrum, playBigLittleIdeasCard } from "../utils/pianoSound";
import { motion } from "motion/react";
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
                      <path d={heroPillTextPathD} fill="black"/>
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
              <ScrollReveal className="flex flex-col gap-6 md:gap-10 items-start w-full lg:flex-1" variant="text">
                <div className="flex flex-col gap-2 text-black w-full">
                  <h2 className="font-recoleta text-4xl md:text-7xl lg:text-[116px] leading-tight lg:leading-[116px]">
                    Say it, Make it
                  </h2>
                  <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Kids speak an idea and Doodlepod turns it into a sticker they can print, color, peel, and make their own.
                  </p>
                </div>
                <button
                  type="button"
                  className="bg-[#e4002b] px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-[4px_4px_0px_0px_#231f20] md:shadow-[6px_6px_0px_0px_#231f20] hover:shadow-[2px_2px_0px_0px_#231f20] transition-all"
                  onMouseEnter={playButtonHover}
                  onClick={playButtonHover}
                >
                  <p className="font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-xl lg:text-[28px] text-[#f6eedf] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                    Get Doodlepod
                  </p>
                </button>
              </ScrollReveal>
              
              {/* Image Container - hero image (10% larger) */}
              <ScrollReveal className="w-full lg:flex-1 flex justify-center min-w-0 overflow-visible" variant="image">
                <img
                  alt="Kid with Doodlepod device—voice-powered creativity for kids"
                  className="w-full max-w-md lg:max-w-full object-contain scale-110 origin-center"
                  src={imgImage22}
                  fetchPriority="high"
                  decoding="async"
                />
              </ScrollReveal>
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
          <ScrollReveal className="flex flex-col gap-2 items-center text-center" variant="text">
            <h2 className="font-recoleta text-3xl md:text-6xl lg:text-[88px] text-[#f3f3f3]">
              big little ideas,<br />made real
            </h2>
            <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px] text-[#f6eedf] text-center max-w-4xl" style={{ fontVariationSettings: "'GRAD' 0" }}>
              A simple little ritual that turns imagination into something kids can hold, keep, and proudly show off.
            </p>
          </ScrollReveal>

          {/* Feature Cards — vertical tilt on inner wrapper so Motion doesn't override; distinct sound per card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full max-w-5xl">
            {[
              { bg: '#FE9FB3', text: 'Press once and say anything from a pirate cat to your name in bubble letters.', img: imgImage14, alt: 'Pirate cat saying Speak—voice-powered creativity', rotate: false },
              { bg: '#FFE302', text: "Your idea becomes a sticker right away, ready to print in Doodlepod's signature style.", img: imgImage15, alt: 'Doodlepod device printing your idea—Watch it become a sticker', rotate: true },
              { bg: '#FE902F', text: 'Peel it, color it, label with it, trade it, or turn it into part of a bigger craft project.', img: imgImage16, alt: 'Peel, color, and play—craft with your stickers', rotate: false }
            ].map((card, idx) => (
              <ScrollReveal key={idx} variant="image" delay={idx * 0.1} className="relative w-full h-[320px] md:h-[374px] min-w-0">
                <div
                  className="relative w-full h-full cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(800px) rotateX(0deg)',
                    transition: 'transform 0.3s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'perspective(800px) rotateX(-8deg)';
                    playBigLittleIdeasCard(idx);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg)';
                  }}
                  onClick={() => playBigLittleIdeasCard(idx)}
                >
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
                      <img alt={card.alt} className="max-h-full w-auto object-contain max-w-full" src={card.img} loading="lazy" decoding="async" />
                    </div>
                    <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents/Kids Section — overflow-x-hidden only so hover scale/rotate on pills isn't clipped */}
      <section className="bg-[#f5e88c] w-full min-w-0 overflow-x-hidden">
        <div className="flex min-w-0 flex-col lg:flex-row gap-8 lg:gap-16 items-start px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[269px] py-12 md:py-16 lg:py-24 max-w-full">
          {/* For Parents — min-w-0 so column can shrink; no overflow-x-auto to avoid clipping pills */}
          <div className="flex min-w-0 flex-col gap-8 md:gap-12 lg:gap-16 w-full lg:flex-1 lg:min-w-0 lg:basis-0">
            <ScrollReveal className="flex flex-col gap-4 md:gap-6 text-[#131415] min-w-0" variant="text">
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-xl md:text-2xl lg:text-[28px] text-[#0256da]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                for parents
              </p>
              <h3 className="font-recoleta text-3xl md:text-4xl lg:text-[56px] leading-tight lg:leading-[64px]">
                built for kids. designed for parent peace of mind.
              </h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Doodlepod turns voice-powered play into a tactile, joyful activity with a cleaner setup, thoughtful controls, and a calmer creative experience.
              </p>
            </ScrollReveal>
            {/* Pills: piano-style staggered animation + key-press hover */}
            <motion.div
              className="flex flex-col gap-4 items-start w-full min-w-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.02 },
                },
              }}
            >
              {[
                'Thoughtfully moderated creative experience',
                'Thermal printing with no ink and less mess',
                'Screen-light play that encourages making',
                'Simple setup and easy repeat use',
                'Privacy-first design for voice experiences'
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#0256da] border-black border-solid flex items-center justify-start px-4 py-2.5 shrink-0 w-full max-w-full rounded-xl border-t-[3px] border-r-[6px] border-b-[7px] border-l-[4px] cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  whileHover={{
                    scale: 0.98,
                    transition: { duration: 0.08 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  onHoverStart={() => playPianoKey(idx)}
                  onTapStart={() => playPianoKey(idx)}
                >
                  <p
                    className="font-['Google_Sans:Bold',sans-serif] font-bold text-base md:text-xl lg:text-[24px] leading-snug text-[#e9e7e0] text-left"
                    style={{ fontVariationSettings: "'GRAD' 0" }}
                  >
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* For Kids — same flex constraints; no overflow-x-auto so pills aren't clipped on hover */}
          <div className="flex min-w-0 flex-col gap-8 md:gap-12 lg:gap-16 w-full lg:flex-1 lg:min-w-0 lg:basis-0">
            <ScrollReveal className="flex flex-col gap-4 md:gap-6 text-[#131415] min-w-0" variant="text" delay={0.1}>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-xl md:text-2xl lg:text-[28px] text-[#c65772]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                For kids
              </p>
              <h3 className="font-recoleta text-3xl md:text-4xl lg:text-[56px] leading-tight lg:leading-[64px]">
                a little box for big imagination
              </h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-2xl lg:text-[28px]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Kids don't just get stickers. They get a tiny creation station for animals, names, rewards, party fun, story worlds, and all kinds of silly original ideas.
              </p>
            </ScrollReveal>
            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center min-w-0 overflow-visible">
              {kidsPills.map((pill, idx) => (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  className="relative inline-flex h-12 md:h-14 flex-shrink-0 min-w-0 max-w-full transition-transform duration-200 ease-out hover:scale-105 hover:rotate-1 cursor-pointer overflow-visible"
                  onMouseEnter={() => playKidsPillKey(idx)}
                  onClick={() => playKidsPillKey(idx)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playKidsPillKey(idx); } }}
                >
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
          <ScrollReveal className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start w-full text-[#f6eedf]" variant="text">
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
          </ScrollReveal>

          {/* Play Cards */}
          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-full items-center min-w-0">
            {/* First Row - Rotated Left */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:-rotate-2 w-full max-w-full justify-center">
              <div
                role="button"
                tabIndex={0}
                className="bg-[#f6eedf] rounded-[24px] border-6 border-white p-6 md:p-8 w-full md:max-w-[280px] min-w-0 transition-all duration-200 ease-out hover:-rotate-1 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                onMouseEnter={() => playCardDrum(0)}
                onClick={() => playCardDrum(0)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playCardDrum(0); } }}
              >
                <h4 className="font-recoleta font-bold text-2xl md:text-[32px] text-black mb-2" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Everyday creativity
                </h4>
                <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Make dragons, donuts, space cats, silly monsters, and original characters on demand.
                </p>
              </div>
              <div
                role="button"
                tabIndex={0}
                className="bg-[#f6eedf] rounded-[24px] border-6 border-white p-6 md:p-8 w-full md:max-w-[280px] min-w-0 transition-all duration-200 ease-out hover:rotate-1 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                onMouseEnter={() => playCardDrum(1)}
                onClick={() => playCardDrum(1)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playCardDrum(1); } }}
              >
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
              <div
                role="button"
                tabIndex={0}
                className="bg-[#f6eedf] rounded-[24px] border-6 border-white p-6 md:p-8 w-full md:max-w-[280px] min-w-0 transition-all duration-200 ease-out hover:-rotate-1 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                onMouseEnter={() => playCardDrum(2)}
                onClick={() => playCardDrum(2)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playCardDrum(2); } }}
              >
                <h4 className="font-recoleta font-bold text-2xl md:text-[32px] text-black mb-2" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Parties and gifting
                </h4>
                <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Print custom stickers for birthday favors, games, cards, and party tables.
                </p>
              </div>
              <div
                role="button"
                tabIndex={0}
                className="bg-[#f6eedf] rounded-[24px] border-6 border-white p-6 md:p-8 w-full md:max-w-[280px] min-w-0 transition-all duration-200 ease-out hover:rotate-1 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                onMouseEnter={() => playCardDrum(3)}
                onClick={() => playCardDrum(3)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playCardDrum(3); } }}
              >
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
          <ScrollReveal className="flex flex-col gap-8 md:gap-12 lg:gap-16 w-full lg:flex-1" variant="text">
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
              <button
                type="button"
                className="bg-[#f6eedf] px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-[4px_4px_0px_0px_#231f20] md:shadow-[6px_6px_0px_0px_#231f20] hover:shadow-[2px_2px_0px_0px_#231f20] hover:scale-105 transition-all w-full max-w-[315px] -rotate-1"
                onMouseEnter={playButtonHover}
                onClick={playButtonHover}
              >
                <p className="font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-xl lg:text-[28px] text-[#231f20] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                  Get the starter set
                </p>
              </button>
            </div>
          </ScrollReveal>

          {/* Product Image */}
          <ScrollReveal className="w-full lg:flex-1 flex justify-center items-center" variant="image" delay={0.1}>
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-[544px] transition-transform duration-300 ease-out hover:scale-105 hover:rotate-2">
              <img alt="Doodlepod device with dog stickers" className="w-full h-auto object-cover" src={imgImage23} loading="lazy" decoding="async" />
            </div>
          </ScrollReveal>
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
          <ScrollReveal className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start w-full text-[#131415]" variant="text">
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
          </ScrollReveal>

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
                <img alt="Kid with magnifying glass" className="w-full max-w-md lg:max-w-[680px] object-contain" src={imgImage19} loading="lazy" decoding="async" />
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
                  <button
                    type="button"
                    className="bg-[#e4002b] px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-[4px_4px_0px_0px_#231f20] md:shadow-[6px_6px_0px_0px_#231f20] hover:shadow-[2px_2px_0px_0px_#231f20] hover:scale-105 transition-all"
                    onMouseEnter={playButtonHover}
                    onClick={playButtonHover}
                  >
                    <p className="font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-xl lg:text-[28px] text-[#f6eedf] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0" }}>
                      Subscribe
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#037f59] rounded-full p-4 flex items-center justify-center w-[91px] h-[91px] hover:scale-110 transition-transform cursor-pointer">
                  <img alt="Instagram" className="w-[59px] h-[59px] object-cover" src={imgImage17} loading="lazy" decoding="async" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#037f59] rounded-full p-4 flex items-center justify-center w-[91px] h-[91px] hover:scale-110 transition-transform cursor-pointer">
                  <img alt="YouTube" className="w-[59px] h-[59px] object-cover" src={imgImage18} loading="lazy" decoding="async" />
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