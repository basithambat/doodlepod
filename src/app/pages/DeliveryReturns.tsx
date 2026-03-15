/**
 * Delivery & Returns — Doodlepod. Adapted from competitor; India shipping, doodlepod.fun contact.
 */

import { useEffect } from "react";

const section = "font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a] leading-relaxed";
const heading2 = "font-recoleta text-2xl md:text-3xl text-[#015446] mt-12 mb-4";
const heading3 = "font-recoleta text-xl text-[#015446] mt-8 mb-2";

export default function DeliveryReturns() {
  useEffect(() => {
    document.title = "Delivery & Returns — Doodlepod";
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
            <a href="/safety" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
              Safety
            </a>
            <a href="/privacy" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
              Privacy Policy
            </a>
            <a href="/delivery-returns" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity underline underline-offset-2">
              Delivery & Returns
            </a>
            <a href="/terms" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">
              Terms of Use
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <h1 className="font-recoleta text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1e1b1a] mb-4">
          Delivery & returns
        </h1>
        <p className={`${section} mb-10 max-w-2xl`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We want your Doodlepod experience to be as fun and frustration-free as possible, from checkout to creation. Here’s everything you need to know about placing, tracking, and (if needed) returning your order.
        </p>

        <h2 className={heading2} id="placing-order">Placing an order</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We operate on a batch shipping schedule. Your order will ship on the specific batch date shown on the product page when you added the item to your cart. Once your batch date arrives and your order ships, you’ll receive a confirmation email with a tracking link.
        </p>
        <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We currently ship within India only.
        </p>

        <h3 className={heading3}>Shipping options</h3>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We ship all orders from India on your designated batch date. Choose the delivery speed that fits your needs:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-6 font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
          <li><strong>Express:</strong> 2–4 business days</li>
          <li><strong>Standard:</strong> 5–7 business days</li>
        </ul>
        <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Orders are fulfilled Monday–Friday (excluding public holidays).
        </p>

        <h3 className={heading3}>What’s in the box</h3>
        <p className={`${section} mb-2`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Each Doodlepod order includes:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-6 font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
          <li>Your Doodlepod device</li>
          <li>Colored pencils</li>
          <li>Paper rolls (BPA/BPS-free thermal paper)</li>
          <li>1 power adapter (India plug)</li>
        </ul>
        <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Refill packs are sold separately and include additional paper rolls.
        </p>

        <h2 className={heading2} id="returns">Returns & exchanges</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We hope you’ll love your Doodlepod — but if something’s not right, we’re here to help.
        </p>
        <p className={`${section} mb-2`} style={{ fontVariationSettings: "'GRAD' 0" }}><strong>Unopened boxes:</strong></p>
        <p className={`${section} mb-4 pl-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Return within 30 days of delivery for a refund to your original payment method.
        </p>
        <p className={`${section} mb-2`} style={{ fontVariationSettings: "'GRAD' 0" }}><strong>Opened boxes:</strong></p>
        <p className={`${section} mb-4 pl-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Not eligible for refund, but we will replace any item that arrives defective or damaged.
        </p>
        <p className={`${section} mb-2`} style={{ fontVariationSettings: "'GRAD' 0" }}><strong>Paper rolls:</strong></p>
        <p className={`${section} mb-4 pl-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Returnable only if unopened, within 30 days of delivery.
        </p>
        <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Refunds are processed within 5–10 business days after your return passes inspection. Original shipping fees are non-refundable. We are unable to offer refunds without proof of purchase.
        </p>

        <h2 className={heading2} id="defective">Defective or damaged products</h2>
        <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          If your Doodlepod arrives damaged or doesn’t power on, contact us within 7 days of delivery at <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a>.
        </p>

        <h2 className={heading2} id="warranty">Warranty</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Your Doodlepod comes with a 6-month limited warranty covering defects in materials or workmanship under normal use.
        </p>
        <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We will repair or replace your unit at our discretion. Contact <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a> for next steps. Damage caused by misuse, modification, or liquid exposure isn’t covered, but we’ll always do our best to help troubleshoot.
        </p>

        <h2 className={heading2} id="marketplace">Marketplace orders</h2>
        <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          If you bought your Doodlepod on a third-party marketplace (e.g. Instagram Shop, Flipkart, Amazon), please start your return directly in that platform’s order center. Their timelines and policies apply, and we can’t override marketplace returns.
        </p>

        <h2 className={heading2} id="help">Need help?</h2>
        <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Questions about your order? Need to start a return or replacement? Email us anytime at <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a>. We reply within 1–2 business days.
        </p>

        <h2 className={heading2} id="more">What else do I need to know?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          For full legal terms, see our Terms & Conditions:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-8 font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
          <li><a href="/terms" className="text-[#015446] hover:underline">Limited warranty</a></li>
          <li><a href="/terms" className="text-[#015446] hover:underline">Warranty disclaimer</a></li>
          <li><a href="/terms" className="text-[#015446] hover:underline">Limitation of liability</a></li>
          <li><a href="/terms" className="text-[#015446] hover:underline">Indemnity</a></li>
          <li><a href="/terms" className="text-[#015446] hover:underline">Assignment</a></li>
          <li><a href="/terms" className="text-[#015446] hover:underline">Choice of law</a></li>
          <li><a href="/terms" className="text-[#015446] hover:underline">Arbitration agreement</a></li>
          <li><a href="/terms" className="text-[#015446] hover:underline">Miscellaneous</a></li>
        </ul>
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
