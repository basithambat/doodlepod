/**
 * Contact Us page — Doodlepod brand. India shipping, doodlepod.fun domain.
 * Structure inspired by competitor; copy and layout scaled to our voice.
 */

import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us — Doodlepod";
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
            <a href="/contact" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity underline underline-offset-2">
              Contact Us
            </a>
            <a href="/safety" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
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
        <section className="mb-12 md:mb-16">
          <h1 className="font-recoleta text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1e1b1a] mb-4">
            Get in touch
          </h1>
          <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-xl lg:text-2xl text-[#1e1b1a] max-w-2xl" style={{ fontVariationSettings: "'GRAD' 0" }}>
            We’re here for your questions, ideas, and everything Doodlepod. Shipping across India.
          </p>
        </section>

        {/* Contact channels + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Get support / Say hello */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <h2 className="font-recoleta text-2xl md:text-[32px] text-[#015446] mb-2">Get support</h2>
              <a href="mailto:help@doodlepod.fun" className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-xl text-[#1e1b1a] hover:text-[#037f59] transition-colors break-all" style={{ fontVariationSettings: "'GRAD' 0" }}>
                help@doodlepod.fun
              </a>
            </div>
            <div>
              <h2 className="font-recoleta text-2xl md:text-[32px] text-[#015446] mb-2">Say hello</h2>
              <a href="mailto:hello@doodlepod.fun" className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg md:text-xl text-[#1e1b1a] hover:text-[#037f59] transition-colors break-all" style={{ fontVariationSettings: "'GRAD' 0" }}>
                hello@doodlepod.fun
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <h2 className="font-recoleta text-2xl md:text-[32px] text-[#1e1b1a] mb-4">
              Contact form
            </h2>
            <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#1e1b1a] mb-6" style={{ fontVariationSettings: "'GRAD' 0" }}>
              Drop us a note — we’re all ears.
            </p>
            <form
              action="#"
              method="post"
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-name" className="font-['Google_Sans:Medium',sans-serif] font-medium text-sm text-[#1e1b1a] sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-white/80 border-2 border-[#1e1b1a]/20 rounded-xl px-4 py-3 font-['Google_Sans:Medium',sans-serif] text-base text-[#1e1b1a] placeholder-[#1e1b1a]/50 outline-none focus:border-[#037f59] focus:ring-2 focus:ring-[#037f59]/20 transition-all"
                  style={{ fontVariationSettings: "'GRAD' 0" }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-phone" className="font-['Google_Sans:Medium',sans-serif] font-medium text-sm text-[#1e1b1a] sr-only">
                  Phone number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full bg-white/80 border-2 border-[#1e1b1a]/20 rounded-xl px-4 py-3 font-['Google_Sans:Medium',sans-serif] text-base text-[#1e1b1a] placeholder-[#1e1b1a]/50 outline-none focus:border-[#037f59] focus:ring-2 focus:ring-[#037f59]/20 transition-all"
                  style={{ fontVariationSettings: "'GRAD' 0" }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-email" className="font-['Google_Sans:Medium',sans-serif] font-medium text-sm text-[#1e1b1a]">
                  Email <span className="text-[#e4002b]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-white/80 border-2 border-[#1e1b1a]/20 rounded-xl px-4 py-3 font-['Google_Sans:Medium',sans-serif] text-base text-[#1e1b1a] placeholder-[#1e1b1a]/50 outline-none focus:border-[#037f59] focus:ring-2 focus:ring-[#037f59]/20 transition-all"
                  style={{ fontVariationSettings: "'GRAD' 0" }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-comment" className="font-['Google_Sans:Medium',sans-serif] font-medium text-sm text-[#1e1b1a] sr-only">
                  Comment
                </label>
                <textarea
                  id="contact-comment"
                  name="comment"
                  placeholder="Comment"
                  rows={4}
                  className="w-full bg-white/80 border-2 border-[#1e1b1a]/20 rounded-xl px-4 py-3 font-['Google_Sans:Medium',sans-serif] text-base text-[#1e1b1a] placeholder-[#1e1b1a]/50 outline-none focus:border-[#037f59] focus:ring-2 focus:ring-[#037f59]/20 transition-all resize-y min-h-[120px]"
                  style={{ fontVariationSettings: "'GRAD' 0" }}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#e4002b] px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-[4px_4px_0px_0px_#231f20] hover:shadow-[2px_2px_0px_0px_#231f20] transition-all font-['Google_Sans:Bold',sans-serif] font-bold text-lg md:text-xl text-[#f6eedf]"
                  style={{ fontVariationSettings: "'GRAD' 0" }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer — aligned with main site */}
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
