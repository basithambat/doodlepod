/**
 * Safety page — Doodlepod brand. Same structure as competitor (Say it! / Print it! / Stick it!)
 * with our voice: privacy-first, kid-friendly creation, parent control, offline play.
 */

import { useEffect } from "react";

export default function Safety() {
  useEffect(() => {
    document.title = "Safety — Doodlepod";
    return () => { document.title = "Doodlepod — Voice-powered creativity for kids"; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#f6eedf]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#015446] w-full shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 md:px-12 lg:px-16 py-4 md:py-5 max-w-[1200px] mx-auto">
          <a href="/" className="font-recoleta text-2xl md:text-3xl text-[#f6eedf] hover:opacity-90 transition-opacity">
            Doodlepod
          </a>
          <nav className="flex flex-wrap items-center gap-6 md:gap-8">
            <a href="/our-story" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
              Our Story
            </a>
            <a href="/faq" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
              FAQ
            </a>
            <a href="/contact" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
              Contact Us
            </a>
            <a href="/safety" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity underline underline-offset-2">
              Safety
            </a>
            <a href="/privacy" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
              Privacy Policy
            </a>
            <a href="/delivery-returns" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
              Delivery & Returns
            </a>
            <a href="/terms" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
              Terms of Use
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        {/* Hero */}
        <section className="mb-16 md:mb-20">
          <h1 className="font-recoleta text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1e1b1a] mb-4">
            Safe play, every day
          </h1>
          <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-xl lg:text-2xl text-[#1e1b1a] max-w-2xl" style={{ fontVariationSettings: "'GRAD' 0" }}>
            From the first “Hey Doodlepod” to the moment they stick their creation, we keep creativity safe, private, and age-appropriate.
          </p>
        </section>

        {/* Say it! */}
        <section className="mb-16 md:mb-20">
          <h2 className="font-recoleta text-3xl md:text-4xl lg:text-[44px] text-[#015446] mb-10">
            Say it!
          </h2>
          <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a] mb-8 max-w-2xl" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Built around kids, from the first word
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white/60 rounded-2xl border-2 border-[#015446]/10 p-6 md:p-8">
              <h3 className="font-recoleta text-xl md:text-2xl text-[#015446] mb-3">Privacy first</h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Doodlepod is designed with privacy at the core. We only listen when your child presses the button — no eavesdropping, no surprise recording. We don’t store voice data, sell it, or use it for ads.
              </p>
            </div>
            <div className="bg-white/60 rounded-2xl border-2 border-[#015446]/10 p-6 md:p-8">
              <h3 className="font-recoleta text-xl md:text-2xl text-[#015446] mb-3">Unsafe ideas blocked</h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Built-in safety systems block adult or inappropriate language before anything is created. If a prompt doesn’t pass, kids get a gentle nudge to try another idea — so creativity keeps flowing, safely.
              </p>
            </div>
          </div>
        </section>

        {/* Print it! */}
        <section className="mb-16 md:mb-20">
          <h2 className="font-recoleta text-3xl md:text-4xl lg:text-[44px] text-[#015446] mb-10">
            Print it!
          </h2>
          <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a] mb-8 max-w-2xl" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Safe images. Seriously fun stickers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white/60 rounded-2xl border-2 border-[#015446]/10 p-6 md:p-8">
              <h3 className="font-recoleta text-xl md:text-2xl text-[#015446] mb-3">Kid-friendly creation</h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0" }}>
                When a prompt passes our checks, Doodlepod creates artwork made for young creators — with kid-specific styles and content filters built in.
              </p>
            </div>
            <div className="bg-white/60 rounded-2xl border-2 border-[#015446]/10 p-6 md:p-8">
              <h3 className="font-recoleta text-xl md:text-2xl text-[#015446] mb-3">Safe to hold</h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Stickers print on BPA/BPS-free thermal paper, made for little hands and big imaginations.
              </p>
            </div>
          </div>
        </section>

        {/* Stick it! */}
        <section className="mb-16 md:mb-20">
          <h2 className="font-recoleta text-3xl md:text-4xl lg:text-[44px] text-[#015446] mb-10">
            Stick it!
          </h2>
          <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a] mb-8 max-w-2xl" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Creativity unplugged
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white/60 rounded-2xl border-2 border-[#015446]/10 p-6 md:p-8">
              <h3 className="font-recoleta text-xl md:text-2xl text-[#015446] mb-3">Parents stay in control</h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0" }}>
                In the companion app, parents can review their child’s creation history and decide how Doodlepod fits into family life.
              </p>
            </div>
            <div className="bg-white/60 rounded-2xl border-2 border-[#015446]/10 p-6 md:p-8">
              <h3 className="font-recoleta text-xl md:text-2xl text-[#015446] mb-3">Made for the real world</h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a] leading-relaxed" style={{ fontVariationSettings: "'GRAD' 0" }}>
                Once it prints, creativity goes offline — into coloring, storytelling, and hands-on play. No screens. No feeds. No online risks.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#015446] w-full mt-auto shrink-0">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-14 items-center px-4 sm:px-6 md:px-12 lg:px-14 py-8 md:py-12 max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-between w-full">
            <div className="flex flex-col gap-6 pt-6">
              <h3 className="font-recoleta text-[32px] text-[#f6eedf]">About Us</h3>
              <div className="flex flex-col gap-0">
                <a href="/our-story" className="h-9 flex items-center hover:opacity-80 transition-opacity">
                  <span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Our Story</span>
                </a>
                <a href="/contact" className="h-9 flex items-center hover:opacity-80 transition-opacity">
                  <span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Contact Us</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-6">
              <h3 className="font-recoleta text-[32px] text-[#f6eedf]">Parent Zone</h3>
              <div className="flex flex-col gap-0">
                <a href="/safety" className="h-9 flex items-center hover:opacity-80 transition-opacity">
                  <span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Safety</span>
                </a>
                <a href="/privacy" className="h-9 flex items-center hover:opacity-80 transition-opacity">
                  <span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Privacy Policy</span>
                </a>
                <a href="/terms" className="h-9 flex items-center hover:opacity-80 transition-opacity">
                  <span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Terms & Conditions</span>
                </a>
                <a href="/delivery-returns" className="h-9 flex items-center hover:opacity-80 transition-opacity">
                  <span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Delivery & Returns</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 max-w-[325px]">
              <h3 className="font-recoleta text-[32px] text-[#f6eedf]">Let’s be friends.</h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]/90">
                We ship across India. www.doodlepod.fun
              </p>
            </div>
          </div>
          <div className="bg-[#002f27] rounded-[14px] w-full">
            <p className="font-['DM_Sans:Regular',sans-serif] text-base text-[#f6eedf] leading-6 text-center px-4 py-3">
              © 2025, Words and smiles, Bangalore
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
