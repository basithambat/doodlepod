/**
 * Terms of Use — Doodlepod. Adapted from competitor structure; India, doodlepod.fun, Words and smiles.
 */

import { useEffect, useState } from "react";

const section = "font-['Google_Sans:Medium',sans-serif] font-medium text-base text-[#1e1b1a] leading-relaxed";
const heading2 = "font-recoleta text-2xl md:text-3xl text-[#015446] mt-12 mb-4";
const heading3 = "font-recoleta text-xl text-[#015446] mt-8 mb-2";

const WHAT_ELSE_ITEMS: { title: string; content: React.ReactNode }[] = [
  {
    title: "Limited warranty",
    content: (
      <>
        Any Product purchased from Doodlepod will be free of defects in materials and workmanship for six (6) months from the date of sale. If the Product fails to conform during that period, we will at our sole discretion repair or replace the Product (or component) or accept return and refund the amount paid. Repair or replacement may be with new or refurbished product. If the Product is no longer available we may replace with a similar product. This is your sole and exclusive remedy for breach of this warranty. To make a claim you must contact us at <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a> during the warranty period and comply with our return instructions. This warranty does not cover: modifications, improper use or maintenance, abuse, events outside our control, or Acts of God. It does not apply to Services or non-Product items. Some jurisdictions do not allow certain limitations; in such cases our liability is limited to the maximum permitted by law.
      </>
    ),
  },
  {
    title: "Warranty disclaimer",
    content: "Except as explicitly set forth in the Limited Warranty above, Doodlepod and its licensors, suppliers and affiliates make no representations or warranties concerning the Services, Content, Products or outputs you create, and will not be responsible for the accuracy, legality or decency of material or for claims arising from use of the Services. Except as set forth above, Products and services are provided \"AS-IS\" without warranty of any kind. THE SERVICES AND CONTENT ARE PROVIDED \"AS-IS\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. Some jurisdictions do not allow disclaimer of implied warranties; the above may not apply to you.",
  },
  {
    title: "Limitation of liability",
    content: "TO THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, Doodlepod AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS SHALL NOT BE LIABLE FOR (A) INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS, LOSS OF DATA, GOODWILL OR BUSINESS INTERRUPTION), (B) ANY SUBSTITUTE GOODS OR SERVICES, (C) ANY AMOUNT IN EXCESS OF THE GREATER OF (I) INR 5,000 OR (II) THE AMOUNTS PAID BY YOU TO DOODLEPOD IN CONNECTION WITH THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (D) ANY MATTER BEYOND OUR REASONABLE CONTROL. Some jurisdictions do not allow exclusion or limitation of certain damages; the above may not apply to you.",
  },
  {
    title: "Indemnity",
    content: "You agree to indemnify and hold Doodlepod and its affiliates, officers, directors, employees and agents harmless from and against any claims, liabilities, damages, losses and expenses (including reasonable attorneys' fees) arising from (a) your use of the Services and Products (including actions by a third party using your account) and (b) your violation of these Terms. We will attempt to provide notice of any claim to your account contact information; failure to do so does not reduce your indemnification obligations.",
  },
  {
    title: "Assignment",
    content: "You may not assign, delegate or transfer these Terms or your account without our prior written consent. We may transfer, assign or delegate these Terms and our rights and obligations without consent.",
  },
  {
    title: "Choice of law",
    content: "These Terms are governed by the laws of India, without regard to conflict of laws principles. The courts at Bangalore shall have exclusive jurisdiction over any disputes (subject to the Arbitration section below where applicable).",
  },
  {
    title: "Arbitration agreement",
    content: "You and Doodlepod agree that disputes arising out of or relating to these Terms or the Services shall first be addressed through good-faith negotiations. If negotiations do not resolve the dispute, it shall be finally settled by binding arbitration in Bangalore, in accordance with the Arbitration and Conciliation Act, 1996 (India) or such other rules as we agree. The arbitration shall be in English, by a single arbitrator with experience in commercial and intellectual property disputes. Judgment on the award may be entered in any court of competent jurisdiction. Each party waives the right to a jury trial and to participate in a class or consolidated action. If the class-action waiver is deemed unenforceable, then the arbitration agreement does not apply and disputes shall be resolved in the courts at Bangalore. This arbitration agreement survives termination of your relationship with Doodlepod.",
  },
  {
    title: "Miscellaneous",
    content: "You are responsible for paying all taxes associated with your activity in connection with the Services, unless we agree otherwise. Our failure to exercise any right shall not be deemed a waiver. If any provision is found unenforceable, it shall be limited to the minimum extent necessary so that these Terms remain in full force. These Terms are the complete and exclusive statement of the agreement between you and Doodlepod and supersede all prior written and oral agreements. You are not an employee, agent, partner or joint venture of Doodlepod and have no authority to bind Doodlepod. Except as set forth regarding the Apple Application and arbitration, there are no third-party beneficiaries under these Terms.",
  },
];

export default function Terms() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Terms of Use — Doodlepod";
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
            <a href="/our-story" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Our Story</a>
            <a href="/faq" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">FAQ</a>
            <a href="/contact" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Contact Us</a>
            <a href="/safety" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Safety</a>
            <a href="/privacy" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Privacy Policy</a>
            <a href="/delivery-returns" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity">Delivery & Returns</a>
            <a href="/terms" className="font-['Google_Sans:Medium',sans-serif] font-medium text-base md:text-lg text-[#f6eedf] hover:opacity-80 transition-opacity underline underline-offset-2">Terms of Use</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <h1 className="font-recoleta text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1e1b1a] mb-2">
          Terms of Use
        </h1>
        <p className={`${section} mb-6`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Effective date: 15 November 2025
        </p>

        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>Welcome to Doodlepod. Please read these terms to learn the rules and restrictions that govern your use of our website(s), products, services and applications (the &quot;Services&quot;), including any request to receive information about or to purchase any products made available through our website (each, a &quot;Product&quot;). Your purchase of any Products is also governed by any other terms we make available during the sales process. Questions? Contact us at:</p>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>Email: <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a><br />Address: Words and smiles, Bangalore, India</p>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>These Terms of Use (&quot;Terms&quot;) are a binding contract between you and Words and smiles (&quot;Doodlepod,&quot; &quot;we,&quot; &quot;us&quot;). Your use of the Services in any way means you agree to all of these Terms, and they remain in effect while you use the Services. These Terms include the provisions in this document, our <a href="/privacy" className="text-[#015446] hover:underline">Privacy Policy</a>, and any other terms and conditions of sale for Products. Certain Services may be subject to additional policies (&quot;Additional Terms&quot;), which are incorporated by reference.</p>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>Please read these Terms carefully. They cover important information about the Services, charges, taxes and fees, future changes to the Terms, limitations of liability, and resolution of disputes.</p>
        <p className={`${section} mb-4 font-bold`} style={{ fontVariationSettings: "'GRAD' 0" }}>YOUR USE OF AND ACCESS TO OUR SERVICES ARE SUBJECT TO THE FOLLOWING TERMS; IF YOU DO NOT AGREE TO ALL OF THE FOLLOWING, YOU MAY NOT USE OR ACCESS THE SERVICES IN ANY MANNER.</p>
        <p className={`${section} mb-6 font-bold`} style={{ fontVariationSettings: "'GRAD' 0" }}>ARBITRATION NOTICE AND CLASS ACTION WAIVER: EXCEPT FOR CERTAIN TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION SECTION BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</p>

        <h2 className={heading2}>Will these Terms ever change?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>We may change the Terms from time to time. We will place a notice on our site at https://www.doodlepod.fun, send you an email, and/or notify you by other means. If you do not agree with the new Terms, you may reject them and discontinue use of the Services. If you use the Services after a change is effective, you agree to all changes. Except for changes by us as described here, no other amendment or modification will be effective unless in writing and signed by both you and us.</p>

        <h2 className={heading2}>What about my privacy?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>Doodlepod takes privacy seriously. For our current Privacy Policy, please see <a href="/privacy" className="text-[#015446] hover:underline">Privacy Policy</a>.</p>

        <h2 className={heading2}>Children&apos;s Online Privacy Protection</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>We do not knowingly collect or solicit personally identifiable information from children under 13 without verifiable parental consent, except the limited information needed to obtain that consent. If you are under 13, please do not attempt to create an account, register for or use the Services or Products, or send personal information to us before we obtain parental consent. If we learn we have collected personal information from a child under 13 without consent, we will delete it as quickly as possible. If you believe a child under 13 has provided us personal information without parental consent, please contact us at <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a>.</p>

        <h2 className={heading2}>What are the basics of using Doodlepod?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>You may be required to sign up for an account, select a password and user name, and provide contact or other information. You promise to provide accurate, complete and updated registration information. You may not use a name you do not have the right to use or impersonate another person. You may not transfer your account without our prior written permission.</p>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>You may access certain parts of the Services using credentials from third-party accounts (e.g. Google, Apple). By doing so, you permit us to access certain information from that account as needed for the Services. You control how much information is accessible via your privacy settings on that third-party account.</p>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>You represent that you are of legal age to form a binding contract (or you have your parent&apos;s or guardian&apos;s permission and they agree to these Terms on your behalf). You will use the Services and Products only for your own internal, personal, non-commercial use, in compliance with all applicable laws. You will not share your account or password with anyone and you are responsible for all activity associated with your account.</p>

        <h2 className={heading2}>What about messaging?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>As part of the Services you may receive communications from us (e.g. email or SMS). By signing up and providing your wireless number, you agree to receive account- and transaction-related communications from Doodlepod, which may include automated texts. You agree to indemnify Doodlepod from claims arising from your breach of the foregoing (e.g. providing a number without the user&apos;s consent).</p>

        <h2 className={heading2}>Are there restrictions on how I can use the Services?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>You agree not to use the Services or Products in a manner that: (a) infringes or violates the intellectual property or other rights of anyone (including Doodlepod); (b) violates any law or regulation; (c) is dangerous, harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene or otherwise objectionable; (d) jeopardizes the security of your or anyone else&apos;s account; (e) attempts to obtain passwords or security information from other users; (f) violates the security of any network or system; (g) runs automated processes that interfere with the Services; (h) crawls, scrapes or spiders the Services or content; (i) copies or stores a significant portion of content; or (j) reverse engineers or attempts to obtain source code of the Products or Services. A violation is grounds for termination of your access. We do not recommend use of the Services during activities (e.g. operating machinery) where there is any risk of accident.</p>

        <h2 className={heading2}>What are my rights in the Services?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>The materials displayed or available through the Products and Services (&quot;Content&quot;) are protected by copyright and/or other intellectual property laws. You will not use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell or exploit any Content not owned by you without the owner&apos;s prior consent or in a way that violates another&apos;s rights (including Doodlepod&apos;s). Subject to these Terms, we grant you a limited, non-exclusive, non-sublicensable, non-transferable license to use Content solely for using the Services. You will not modify, publish, transmit, participate in the transfer or sale of, or create derivative works based on, the Services. Doodlepod owns the Services.</p>

        <h2 className={heading2}>What about anything I contribute – do I grant licenses to Doodlepod?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}><strong>User Submissions.</strong> Anything you post, upload, share, store or provide through the Products and Services is your &quot;User Submission.&quot; You are solely responsible for your User Submissions and represent that they are accurate, complete and compliant with applicable laws. You will not post or create User Submissions that infringe third-party rights; contain sexually explicit, hateful, defamatory or discriminatory content; exploit minors; depict unlawful acts or extreme violence; promote fraud, MLM or similar schemes; or violate any law.</p>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}><strong>Licenses.</strong> To display your User Submissions through the Services, you grant Doodlepod a worldwide, non-exclusive, perpetual, royalty-free, fully paid, sublicensable, irrevocable, transferable license to use, edit, modify, aggregate, reproduce, distribute, prepare derivative works of, display, perform and otherwise exploit the User Submissions in connection with the site, Products, Services and our business (including promoting the site or Services), including after termination of your account. These licenses are subject to our Privacy Policy where User Submissions contain Personal Data. You represent that you have all rights to grant such licenses without infringing third-party rights. We may need to make technical changes to your User Submissions to provide the Services; the license includes the right to do so.</p>

        <h2 className={heading2}>Who is responsible for what I see and do on the Services?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>Content posted or transmitted through the Services is the sole responsibility of the person from whom it originated. You access it at your own risk and we are not liable for errors, omissions or damages in connection with it. We are not responsible for how you interpret or use Content or for the identity of other users. You are responsible for all Content you contribute and represent you have all rights necessary to do so.</p>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>The Services may contain links to third-party websites or services not owned or controlled by Doodlepod. We are not responsible for the content, accuracy, privacy policies or practices of third parties. By using the Services you release and hold us harmless from liability arising from your use of any third-party site or service. Disputes between users or between users and third parties are not our obligation; you release Doodlepod from claims, demands and damages arising out of such disputes.</p>

        <h2 className={heading2}>What if I see something that infringes my copyright?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>We may block or remove material we believe in good faith to be infringing and discontinue service to repeat offenders. To report copyright infringement, send a notice to our Designated Agent with: (a) your physical or electronic signature; (b) identification of the work(s) infringed; (c) identification of the infringing material and its location; (d) your contact information; (e) a statement of good faith belief that the material is not authorized; and (f) a statement under penalty of perjury that the information is accurate and you are authorized to act. Upon receipt of a proper notice we may remove or disable access to the material, notify the content provider, and terminate repeat offenders. Content providers may submit a counter-notice; we may replace or restore material in accordance with applicable law. Contact our Designated Agent: Words and smiles, Attn: Copyright Agent, Bangalore, India; <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a>.</p>

        <h2 className={heading2}>Will Doodlepod ever change the Services?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>We may change, suspend, discontinue or limit any part of the Services at any time. We will try to give notice of material adverse changes when practical. We reserve the right to remove any Content from the Services at any time, for any reason, in our sole discretion.</p>

        <h2 className={heading2}>Do the Services cost anything?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>Some Services are free; we reserve the right to charge for certain or all Services in the future and will notify you before any then-used Services begin carrying a fee. Products are offered at the prices on our website. We may limit or cancel quantities and refuse any order. Prices are quoted in INR and valid in India; they are subject to change. Applicable taxes may be added. Shipping and return policy: see our <a href="/delivery-returns" className="text-[#015446] hover:underline">Delivery & Returns</a> page. Payment terms presented during purchase are part of these Terms. If you receive text messages, carrier rates may apply.</p>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}><strong>Billing.</strong> We use a third-party payment processor to bill you. Processing is subject to the processor&apos;s terms and privacy policy in addition to these Terms. We are not responsible for errors or omissions by the processor. By purchasing Products you agree to pay all charges at then-in-effect prices and authorize us (through the processor) to charge your chosen payment method. We may correct processor errors. If we do not receive payment, you agree to pay all amounts due upon demand. You must provide current, complete and accurate billing information and promptly update it. Recurring subscriptions (if any) may auto-renew unless you cancel; see account settings. Free trials must be used within the specified time; cancel before the trial ends to avoid charges. For billing questions contact <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a>.</p>

        <h2 className={heading2}>What if I want to stop using the Services?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>You may stop at any time by contacting us at <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a>; see our Privacy Policy for how we treat your information after you stop. Doodlepod may terminate or suspend your access for any reason, including breach of these Terms. Termination may result in destruction of Content associated with your account. Obligations that by their nature should survive (e.g. payment, indemnity, limitations of liability, ownership, dispute resolution) will survive. If you deleted your account by mistake, contact us immediately; we will try to help but cannot promise recovery.</p>

        <h2 className={heading2}>What about mobile applications?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>Availability of our mobile application depends on the third-party store (e.g. Apple App Store, Google Play). You must comply with that store&apos;s terms. To the extent those terms conflict with these Terms, the more restrictive terms apply. If you use our iOS app via the Apple App Store: (a) these Terms are between you and Doodlepod only, not Apple; (b) the app is licensed to you on a limited, non-exclusive, non-transferable basis for private, personal, non-commercial use; (c) Apple has no obligation to furnish maintenance or support; (d) for warranty failures you may notify Apple; (e) Doodlepod (not Apple) is responsible for addressing claims relating to the app; (f) Doodlepod (not Apple) is responsible for investigating and defending infringement claims; (g) you represent you are not in a country subject to a U.S. Government embargo or on a prohibited parties list; (h) you will comply with applicable third-party terms; (i) Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.</p>

        <h2 className={heading2}>Can I refer other users?</h2>
        <p className={`${section} mb-4`} style={{ fontVariationSettings: "'GRAD' 0" }}>From time to time we may offer referral rewards or incentives. Details will be on our referral page. We may modify or terminate offers and revoke rewards at our discretion. If we determine abuse or violation of offer terms we may revoke rewards and/or charge for rewards already used or issued. All offers are subject to any other terms presented with the offer.</p>

        <h2 className={heading2}>What else do I need to know?</h2>

        <div className="flex flex-col gap-0 border border-[#015446]/20 rounded-xl overflow-hidden bg-white/50">
          {WHAT_ELSE_ITEMS.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={index} className="border-b border-[#015446]/10 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 py-4 px-5 text-left font-recoleta text-lg text-[#015446] hover:bg-[#015446]/5 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-toggle-${index}`}
                >
                  <span>{item.title}</span>
                  <span className="shrink-0 text-[#015446] transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} aria-hidden>
                    ▼
                  </span>
                </button>
                <div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-toggle-${index}`}
                  className="overflow-hidden transition-[max-height] duration-300 ease-out"
                  style={{ maxHeight: isOpen ? "2000px" : "0" }}
                >
                  <p className={`${section} px-5 pb-4 pt-0`} style={{ fontVariationSettings: "'GRAD' 0" }}>
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className={`${section} mt-12`} style={{ fontVariationSettings: "'GRAD' 0" }}>
          Contact: <a href="mailto:help@doodlepod.fun" className="text-[#015446] hover:underline">help@doodlepod.fun</a> | www.doodlepod.fun | Words and smiles, Bangalore, India
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-[#015446] w-full mt-auto shrink-0">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-14 items-center px-4 sm:px-6 md:px-12 lg:px-14 py-8 md:py-12 max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-between w-full">
            <div className="flex flex-col gap-6 pt-6">
              <h3 className="font-recoleta text-[32px] text-[#f6eedf]">About Us</h3>
              <div className="flex flex-col gap-0">
                <a href="/our-story" className="h-9 flex items-center hover:opacity-80 transition-opacity"><span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Our Story</span></a>
                <a href="/contact" className="h-9 flex items-center hover:opacity-80 transition-opacity"><span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Contact Us</span></a>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-6">
              <h3 className="font-recoleta text-[32px] text-[#f6eedf]">Parent Zone</h3>
              <div className="flex flex-col gap-0">
                <a href="/safety" className="h-9 flex items-center hover:opacity-80 transition-opacity"><span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Safety</span></a>
                <a href="/privacy" className="h-9 flex items-center hover:opacity-80 transition-opacity"><span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Privacy Policy</span></a>
                <a href="/terms" className="h-9 flex items-center hover:opacity-80 transition-opacity"><span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Terms & Conditions</span></a>
                <a href="/delivery-returns" className="h-9 flex items-center hover:opacity-80 transition-opacity"><span className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]">Delivery & Returns</span></a>
              </div>
            </div>
            <div className="flex flex-col gap-4 max-w-[325px]">
              <h3 className="font-recoleta text-[32px] text-[#f6eedf]">Let&apos;s be friends.</h3>
              <p className="font-['Google_Sans:Medium',sans-serif] font-medium text-lg text-[#f6eedf]/90">We ship across India. www.doodlepod.fun</p>
            </div>
          </div>
          <div className="bg-[#002f27] rounded-[14px] w-full">
            <p className="font-['DM_Sans:Regular',sans-serif] text-base text-[#f6eedf] leading-6 text-center px-4 py-3">© 2025, Words and smiles, Bangalore</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
