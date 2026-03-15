/**
 * Privacy Policy — Doodlepod. Adapted from competitor structure; our domain, contact, and India context.
 */

import { useEffect } from "react";

const section = "font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a] leading-relaxed";
const heading2 = "font-recoleta text-2xl md:text-3xl text-[#015446] mt-12 mb-4";
const heading3 = "font-recoleta text-xl text-[#015446] mt-8 mb-2";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy — Doodlepod";
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
            <a href="/privacy" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity underline underline-offset-2">
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
        <h1 className="font-recoleta text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1e1b1a] mb-2">
          Privacy Policy
        </h1>
        <p className={`${section} mb-8`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Effective date: 24 December 2025
        </p>

        <div className={section} style={{ fontVariationSettings: "'GRAD' 0" }}>
          <p className="mb-4">
            At Doodlepod, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data. By using or accessing our services in any manner, you acknowledge that you accept the practices and policies outlined below, and you consent to our collection, use and disclosure of your information as described in this Privacy Policy.
          </p>
          <p className="mb-4">
            Your use of Doodlepod’s services is at all times subject to our Terms of Use (doodlepod.fun/terms), which incorporate this Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms of Use.
          </p>
          <p className="mb-4">
            We may change this Privacy Policy from time to time. We will alert you to material changes by placing a notice on the Doodlepod website, by email and/or by other means. If you use our services after changes have been posted, that means you agree to the updated policy.
          </p>
        </div>

        <h2 className={heading2} id="toc">Privacy Policy table of contents</h2>
        <ul className="list-disc pl-6 space-y-2 mb-10 font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
          <li><a href="#what-this-covers" className="text-[#015446] hover:underline">What this Privacy Policy covers</a></li>
          <li><a href="#personal-data" className="text-[#015446] hover:underline">Personal data we collect</a></li>
          <li><a href="#purposes" className="text-[#015446] hover:underline">Purposes for collecting personal data</a></li>
          <li><a href="#sources" className="text-[#015446] hover:underline">Sources of personal data</a></li>
          <li><a href="#disclosure" className="text-[#015446] hover:underline">How we disclose your personal data</a></li>
          <li><a href="#tracking" className="text-[#015446] hover:underline">Tracking tools and opt-out</a></li>
          <li><a href="#security" className="text-[#015446] hover:underline">Data security</a></li>
          <li><a href="#retention" className="text-[#015446] hover:underline">Data retention</a></li>
          <li><a href="#children" className="text-[#015446] hover:underline">Personal information of children</a></li>
          <li><a href="#rights" className="text-[#015446] hover:underline">Your rights</a></li>
          <li><a href="#contact" className="text-[#015446] hover:underline">Contact information</a></li>
        </ul>

        <h2 className={heading2} id="what-this-covers">What this Privacy Policy covers</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          This Privacy Policy covers how we treat Personal Data that we gather when you access or use our services. “Personal Data” means any information that identifies or relates to a particular individual, including “personally identifiable information” or “personal information” under applicable data privacy laws. This Privacy Policy does not cover the practices of companies we don’t own or control or people we don’t manage.
        </p>

        <h2 className={heading2} id="personal-data">Personal data we collect</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We may collect the following categories of Personal Data, as relevant to the services you use:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a]" style={{ fontVariationSettings: "'GRAD' 0" }}>
          <li><strong>Profile or contact data</strong> — name, email, phone number, mailing address (e.g. for account, orders, support).</li>
          <li><strong>Identifiers and preferences</strong> — information you choose to provide (e.g. preferences, survey responses).</li>
          <li><strong>Payment data</strong> — payment card type, last 4 digits, billing details, as needed to process payments (e.g. via our payment processor).</li>
          <li><strong>Commercial data</strong> — purchase history and account activity related to providing and improving our services.</li>
          <li><strong>Device and usage data</strong> — IP address, device type, browser, and how you use our website and apps (e.g. to improve services and security).</li>
          <li><strong>Voice and creation data (children)</strong> — as described in the “Personal information of children” section below, we handle voice and creation-related data in a limited, privacy-first way.</li>
        </ul>

        <h2 className={heading2} id="purposes">Purposes for collecting personal data</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We use Personal Data to: provide, customize and improve our services; create and manage your account; process orders and billing; respond to your requests and support; improve our products (e.g. testing, analytics); personalize content and communications; protect against fraud and abuse; and comply with legal obligations. We may also send you information about Doodlepod and our services in accordance with your preferences. We do not use personal information collected from children under 13 for advertising directed at children.
        </p>

        <h2 className={heading2} id="sources">Sources of personal data</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We collect Personal Data from: (1) you, when you provide it (e.g. account, forms, emails, use of our services and device); (2) cookies and similar technologies on our website; and (3) service providers who assist us (e.g. hosting, analytics, payment processing). We may receive information from third-party sign-in or account linking if you choose to connect such accounts.
        </p>

        <h2 className={heading2} id="disclosure">How we disclose your personal data</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We may disclose Personal Data to: service providers that help us operate our services (hosting, analytics, support, fulfillment, payment processors); parties you authorize or authenticate (e.g. third-party accounts you link); and as required by law (e.g. legal process, safety, enforcing our terms). In the event of a merger, acquisition or sale of assets, your data may be transferred to the successor. We do not sell personal information of children under 13 for advertising purposes.
        </p>

        <h2 className={heading2} id="tracking">Tracking tools and opt-out</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We use cookies and similar technologies (e.g. pixel tags, scripts) to recognize your browser, understand how you use our services, and improve them. We may use essential cookies (required for features you request), functional cookies (preferences, recognition), and analytics cookies (usage, performance). You can control cookies through your browser settings; disabling some cookies may affect certain features. We do not use interest-based or behavioral advertising directed at children.
        </p>

        <h2 className={heading2} id="security">Data security</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We use appropriate technical and organizational measures to protect your Personal Data against unauthorized access, use and disclosure. No method of transmission or storage over the internet is completely secure; you can help by keeping your password and device access secure.
        </p>

        <h2 className={heading2} id="retention">Data retention</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We retain Personal Data for as long as necessary to provide our services and fulfill the purposes described in this policy, or as required by law. For example: we retain account and profile information while your account is active; payment data as needed for processing and legal obligations; and device/usage data as needed for operations. For personal information collected from children under 13, we retain it only as long as reasonably necessary and as described in the “Personal information of children” section.
        </p>

        <h2 className={heading2} id="children">Personal information of children</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          We are committed to protecting the privacy of children. In line with principles similar to the Children’s Online Privacy Protection Act (COPPA) and applicable laws, we do not knowingly collect personal information from children under 13 without verifiable parental consent, except the limited information needed to obtain that consent. We do not condition a child’s participation on disclosing more personal information than is reasonably necessary. We do not use personal information from children under 13 for targeted or behavioral advertising, and we do not retain it longer than reasonably necessary to provide our services. Parents and guardians can contact us to ask us to stop collecting or to delete their child’s personal information; you can also review and delete creation-related data (e.g. transcripts, images) through the companion app or by contacting us at help@doodlepod.fun.
        </p>

        <h2 className={heading2} id="rights">Your rights</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Depending on where you live, you may have rights to access, correct, delete, or restrict use of your Personal Data, or to data portability. You may also have the right to object to certain processing or to withdraw consent. To exercise these rights or ask questions, contact us at help@doodlepod.fun. We will respond in accordance with applicable law.
        </p>

        <h2 className={heading2} id="contact">Contact information</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          If you have questions or comments about this Privacy Policy, or about how we collect and use your Personal Data, please contact us at:
        </p>
        <p className={`${section} mb-2`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          <a href="https://www.doodlepod.fun" className="text-[#015446] hover:underline">www.doodlepod.fun</a><br />
          <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a>
        </p>
        <p className={section} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Words and smiles, Bangalore, India
        </p>
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
