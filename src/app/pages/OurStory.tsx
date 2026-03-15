/**
 * Our Story page — Doodlepod. Psychologist-mother narrative: mission + origin.
 * Inspired by competitor structure; voice and content our own.
 */

import { useEffect } from "react";

const section = "font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a] leading-relaxed";
const heading2 = "font-recoleta text-2xl md:text-3xl lg:text-4xl text-[#015446] mt-12 mb-4 first:mt-0";

export default function OurStory() {
  useEffect(() => {
    document.title = "Our Story — Doodlepod";
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
            <a href="/our-story" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity underline underline-offset-2">
              Our Story
            </a>
            <a href="/faq" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">FAQ</a>
            <a href="/contact" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Contact Us</a>
            <a href="/safety" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Safety</a>
            <a href="/privacy" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Privacy Policy</a>
            <a href="/delivery-returns" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Delivery & Returns</a>
            <a href="/terms" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Terms of Use</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        {/* Hero */}
        <section className="mb-12 md:mb-16">
          <h1 className="font-recoleta text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1e1b1a] mb-4">
            Our Story
          </h1>
          <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-xl lg:text-2xl text-[#1e1b1a] max-w-2xl" style={{ fontVariationSettings: "'GRAD' 0" }}>
            Why we built Doodlepod — and why we believe in voice, creativity, and a little less screen time.
          </p>
        </section>

        {/* Our Mission */}
        <section className="max-w-3xl">
          <h2 className={heading2}>Our Mission</h2>
          <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
            There’s nothing like a child’s imagination — the way it turns the everyday into magic, and a simple idea into a whole world.
          </p>
          <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
            As a psychologist and a mother, I’ve seen how important it is for kids to have tools that support their development without taking over. Technology shouldn’t distract or dictate; it should empower children to dream bigger, create freely, and see their own ideas come to life in the real world — with their hands, their voice, and their curiosity in charge.
          </p>
          <p className={`${section}`} style={{ fontVariationSettings: "'GRAD' 0" }}>
            At Doodlepod, we build springboards for that imagination: playfully, safely, and without limits. So kids can stay kids — and parents can breathe a little easier.
          </p>
        </section>

        {/* Our Story */}
        <section className="max-w-3xl mt-16 md:mt-20">
          <h2 className={heading2}>Our Story</h2>
          <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
            Doodlepod was born at the intersection of two things I care deeply about: how children learn and create, and how families actually live with tech at home. I kept seeing the same pattern — kids glued to screens, and parents torn between “it’s educational” and “I wish there was another way.” I wanted something that didn’t replace imagination with algorithms, but used technology to amplify it.
          </p>
          <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
            So we built Doodlepod: a first-of-its-kind creative tool that turns a child’s voice into something real they can hold — color, share, and stick wherever their imagination takes them. No endless scrolling, no passive consumption. Just speak, create, and play. We designed it so kids take charge of their creativity, hands-on, scroll-free, and full of possibility.
          </p>
          <p className={`${section}`} style={{ fontVariationSettings: "'GRAD' 0" }}>
            Because when imagination meets empowerment, incredible things happen. And as a mum, that’s the kind of magic I want in our home.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-16 md:mt-20 pt-8 border-t border-[#015446]/20">
          <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
            Curious how it works? See Doodlepod in action or get in touch — we’d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-block bg-[#e4002b] px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-[4px_4px_0px_0px_#231f20] hover:shadow-[2px_2px_0px_#231f20] transition-all font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-xl text-[#f6eedf]"
              style={{ fontVariationSettings: "'GRAD' 0" }}
            >
              Explore Doodlepod
            </a>
            <a
              href="/contact"
              className="inline-block bg-[#015446] px-6 md:px-8 py-3 md:py-4 rounded-xl font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-xl text-[#f6eedf] hover:opacity-90 transition-opacity"
              style={{ fontVariationSettings: "'GRAD' 0" }}
            >
              Contact Us
            </a>
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
