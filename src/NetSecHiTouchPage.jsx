import React from 'react';

export default function NetSecHiTouchPage({ onNavigate, onOpenModal }) {
  const reasons = [
    {
      num: "01",
      title: "Named SME Technical Account Manager",
      tagline: "A technical relationship, not just a support contract.",
      description:
        "Every customer benefits from a named Technical Account Manager (TAM) with senior engineering expertise who understands their environment, coordinates technical priorities and provides a consistent point of contact.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b5cd5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      num: "02",
      title: "24/7/365 HiTouch Support",
      tagline: "Direct access to expertise, without unnecessary escalation layers.",
      description:
        "Round-the-clock access to experienced technical engineers for critical incidents, advanced troubleshooting and specialist escalation. An expert-first approach designed to accelerate investigations and minimise operational disruption.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b5cd5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Unified Engineering & Support",
      tagline: "One partner for BAU, service requests and projects.",
      description:
        "A single engagement model covering operational support, technical service requests, approved changes and project engineering. Reduce fragmented ownership and maintain engineering continuity across your infrastructure.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b5cd5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
          <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4" />
          <circle cx="8" cy="12" r="2" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Vendor-Agnostic SME Team",
      tagline: "Your infrastructure, not the vendor, drives our approach.",
      description:
        "Independent, multi-vendor expertise across leading firewall and network security technologies. Our engineers focus on finding the right technical solution rather than working within the boundaries of a single manufacturer's support model.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b5cd5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Enhanced Observability & Security Assurance",
      tagline: "Beyond availability monitoring. Greater insight into security posture.",
      description:
        "Enhanced visibility into firewall health, performance, vulnerabilities and operational risks. Combined with actionable reporting, lifecycle recommendations and security posture reviews to support informed decisions and continuous improvement.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b5cd5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ];

  const challenges = [
    {
      title: "Limited in-house expertise",
      description:
        "Extend your team with experienced Security and Network SMEs without the overhead of building a large specialist function.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b5cd5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Evolving security risks",
      description:
        "Improve visibility of vulnerabilities, configuration weaknesses, patching priorities and platform lifecycle risks.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b5cd5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    },
    {
      title: "Compliance pressures",
      description:
        "Support security governance and alignment with relevant standards, policies and regulatory requirements.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b5cd5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      title: "Complex global environments",
      description:
        "Bring greater consistency and technical ownership to distributed, multi-vendor security infrastructure.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b5cd5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-white text-[#1f2328]">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">
        {/* Breadcrumb Navigation */}
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-[14px] font-[500] text-[#4b5563] hover:text-[#0b5cd5] transition-colors mb-6 sm:mb-8 cursor-pointer group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="group-hover:-translate-x-0.5 transition-transform"
          >
            <path
              d="M10 12.5L5.5 8 10 3.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to Home</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[14px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-3 block">
              NETSEC HITOUCH
            </span>

            <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.12em]">
              Advanced <span className="text-[#0b5cd5]">Firewall</span><br />
              <span className="relative inline-block">
                Service &amp; Support.
                <svg
                  className="absolute left-0 -bottom-2 sm:-bottom-2.5 w-full h-[10px] sm:h-[14px] pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 16"
                >
                  <path
                    fill="none"
                    stroke="#0A0A0A"
                    strokeDasharray="60 34 400"
                    strokeLinecap="round"
                    strokeWidth="5"
                    d="M4 10c86-3 206-4 392-2"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[18px] text-[#0a0a0a] font-[500] tracking-[-0.015em] leading-[1.45em]">
              When your existing support is falling short, it's time for a different approach.
            </p>

            <p className="mt-3 text-[15px] sm:text-[16px] text-[#4b5563] font-[400] tracking-[-0.005em] leading-[1.6em] max-w-[580px]">
              Traditional support models can be restrictive, with multiple escalation layers, vendor-specific boundaries and limited access to specialist expertise.
            </p>

            <p className="mt-3 text-[15px] sm:text-[16px] text-[#4b5563] font-[400] tracking-[-0.005em] leading-[1.6em] max-w-[580px]">
              Optimus NetSec HiTouch takes a different approach. We combine experienced Network and Security Engineers, vendor-agnostic expertise and proactive security assurance into a single, flexible support model.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-[12px] w-full max-w-[460px]">
              <button
                onClick={() => onOpenModal('contact')}
                className="flex-1 min-h-[44px] h-[48px] px-[18px] gap-[10px] rounded-[4px] bg-[#0b5cd5] hover:bg-[#0952c2] text-white font-[600] text-[15px] sm:text-[16px] tracking-[-0.02em] whitespace-nowrap flex items-center justify-center cursor-pointer transition-colors shadow-xs active:scale-[0.99]"
              >
                <span>Talk to an Engineer</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3.5L10.5 8 6 12.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={() => onOpenModal('assessment')}
                className="flex-1 min-h-[44px] h-[48px] px-[16px] rounded-[4px] border border-[#0b5cd5] bg-white text-[#0b5cd5] hover:bg-blue-50/50 font-[500] text-[15px] sm:text-[16px] tracking-[-0.02em] whitespace-nowrap flex items-center justify-center cursor-pointer transition-colors shadow-xs active:scale-[0.99]"
              >
                <span>Free Assessment</span>
              </button>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[480px] bg-[#fafafa] border border-[#e8eaed] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#e8eaed]">
                <div className="w-10 h-10 rounded-[8px] bg-blue-50 flex items-center justify-center text-[#0b5cd5]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[12px] font-[600] text-[#0b5cd5] uppercase tracking-wider block">
                    Our Focus
                  </span>
                  <p className="text-[15px] font-[600] text-[#0a0a0a]">
                    The right expertise, when you need it.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <p className="text-[14px] text-[#4b5563] leading-[1.55em]">
                    <strong className="text-[#0a0a0a]">Day-to-day operations:</strong> Proactive configuration hygiene and scheduled changes handled seamlessly.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <p className="text-[14px] text-[#4b5563] leading-[1.55em]">
                    <strong className="text-[#0a0a0a]">Complex incident resolution:</strong> Direct line to senior engineers for rapid triage without tiers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <p className="text-[14px] text-[#4b5563] leading-[1.55em]">
                    <strong className="text-[#0a0a0a]">Posture improvement:</strong> Ongoing policy reviews, vulnerability auditing and lifecycle roadmaps.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#e8eaed] flex items-center justify-between text-[13px] text-[#4b5563]">
                <span>Senior Engineers Embedded</span>
                <span className="font-[600] text-[#0b5cd5]">Zero Tiered Triage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FIVE REASONS TO CHOOSE NETSEC HITOUCH */}
      <section className="py-16 sm:py-24 bg-[#fafafa] border-t border-b border-[#e8eaed]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
            <span className="text-[14px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-3 block">
              DIFFERENTIATORS
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.15em] mb-3">
              Five Reasons to Choose NetSec HiTouch
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em] max-w-[480px] mx-auto">
              A modern engineering-led partnership designed to replace ticketing black holes with direct specialist accountability.
            </p>
          </div>

          {/* Unified Grid Container with 1px dividers and 16px rounded outer border */}
          <div className="bg-[#e8eaed] border border-[#e8eaed] rounded-[16px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] w-full shadow-xs">
            {reasons.slice(0, 3).map((r) => (
              <div
                key={r.num}
                className="bg-white p-[32px_24px_36px] sm:p-[38px_28px_42px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[13px] font-[600] text-[#0b5cd5] tracking-[0.08em]">
                      {r.num}
                    </span>
                    <div className="w-[36px] h-[36px] rounded-[6px] bg-blue-50/70 flex items-center justify-center">
                      {r.icon}
                    </div>
                  </div>

                  <h3 className="text-[20px] font-[600] text-[#0a0a0a] tracking-[-0.02em] leading-[1.3em] mb-2">
                    {r.title}
                  </h3>

                  <p className="text-[14px] font-[500] text-[#0a0a0a] leading-[1.45em] mb-3">
                    {r.tagline}
                  </p>

                  <p className="text-[14px] sm:text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em]">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom 2 Reasons split evenly across the remaining 2 columns or 3 on lg */}
            {reasons.slice(3).map((r) => (
              <div
                key={r.num}
                className="bg-white p-[32px_24px_36px] sm:p-[38px_28px_42px] flex flex-col justify-between lg:col-span-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[13px] font-[600] text-[#0b5cd5] tracking-[0.08em]">
                      {r.num}
                    </span>
                    <div className="w-[36px] h-[36px] rounded-[6px] bg-blue-50/70 flex items-center justify-center">
                      {r.icon}
                    </div>
                  </div>

                  <h3 className="text-[20px] font-[600] text-[#0a0a0a] tracking-[-0.02em] leading-[1.3em] mb-2">
                    {r.title}
                  </h3>

                  <p className="text-[14px] font-[500] text-[#0a0a0a] leading-[1.45em] mb-3">
                    {r.tagline}
                  </p>

                  <p className="text-[14px] sm:text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em]">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Sixth Cell: Direct Callout CTA for balance in a 3-column grid */}
            <div className="bg-white p-[32px_24px_36px] sm:p-[38px_28px_42px] flex flex-col justify-between">
              <div>
                <span className="text-[13px] font-[600] text-[#0b5cd5] tracking-[0.08em] block mb-6">
                  GET STARTED
                </span>
                <h3 className="text-[20px] font-[600] text-[#0a0a0a] tracking-[-0.02em] leading-[1.3em] mb-2">
                  Ready to upgrade your support model?
                </h3>
                <p className="text-[14px] font-[400] text-[#4b5563] leading-[1.6em] mb-6">
                  Book a direct 30-minute scoping session with one of our senior security engineers today.
                </p>
              </div>

              <button
                onClick={() => onOpenModal('contact')}
                className="min-h-[44px] px-4 rounded-[4px] bg-[#0b5cd5] hover:bg-[#0952c2] text-white font-[600] text-[15px] tracking-[-0.02em] flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
              >
                <span>Talk to an Engineer</span>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3.5L10.5 8 6 12.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ADDRESSING YOUR SECURITY CHALLENGES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
            <span className="text-[14px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-3 block">
              PAIN POINTS RESOLVED
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.15em] mb-3">
              Addressing Your Security Challenges
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em] max-w-[460px] mx-auto">
              How NetSec HiTouch overcomes the most common obstacles modern IT teams face.
            </p>
          </div>

          {/* Unified 4-Column Grid Container with 1px dividers */}
          <div className="bg-[#e8eaed] border border-[#e8eaed] rounded-[16px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] w-full shadow-xs">
            {challenges.map((c, idx) => (
              <div
                key={idx}
                className="bg-white p-[32px_22px_36px] sm:p-[36px_26px_40px] flex flex-col justify-start items-start"
              >
                <div className="w-[38px] h-[38px] rounded-[6px] bg-blue-50/70 flex items-center justify-center mb-5">
                  {c.icon}
                </div>
                <h3 className="text-[17px] font-[600] text-[#0a0a0a] tracking-[-0.015em] leading-[1.3em] mb-2.5">
                  {c.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em]">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIGH IMPACT BRAND STATEMENT (CENTERED) */}
      <section className="bg-[#fafafa] border-t border-b border-[#e8eaed] py-[80px] sm:py-[120px] lg:py-[150px] px-4 sm:px-6">
        <div className="max-w-[1026px] mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-[13px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase">
            OUR PHILOSOPHY
          </span>

          <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-[500] text-[#0a0a0a] leading-[1.25em] tracking-[-0.03em] max-w-[940px]">
            More Than Support. A Trusted Engineering Partner.
          </h2>

          <p className="text-[16px] sm:text-[18px] font-[400] text-[#4b5563] leading-[1.65em] max-w-[820px] tracking-[-0.01em]">
            NetSec HiTouch is built around the principle that effective security support requires more than responding to incidents. It requires technical understanding, accountability and a commitment to improving the environment over time.
          </p>

          <div className="pt-4">
            <span className="text-[18px] sm:text-[22px] font-[600] text-[#0b5cd5] tracking-[-0.02em]">
              Quality First. Engineering Without Compromise.
            </span>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CALL TO ACTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="rounded-[16px] bg-gradient-to-br from-[#0a0a0a] to-[#1a1f2c] text-white p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[12px] font-[600] text-[#60a5fa] tracking-[0.08em] uppercase mb-2 block">
                NEXT STEPS
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-[600] tracking-[-0.03em] leading-[1.2em] mb-3 text-white">
                Talk to Optimus about NetSec HiTouch.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-300 font-[400] leading-[1.6em]">
                Discover how our proactive, senior-led engineering team can elevate your firewall reliability and security posture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={() => onOpenModal('contact')}
                className="w-full sm:w-auto min-h-[44px] h-[48px] px-6 rounded-[4px] bg-[#0b5cd5] hover:bg-[#0952c2] text-white font-[600] text-[15px] sm:text-[16px] tracking-[-0.02em] whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md active:scale-[0.99]"
              >
                <span>Speak to an Engineer</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3.5L10.5 8 6 12.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={() => onOpenModal('assessment')}
                className="w-full sm:w-auto min-h-[44px] h-[48px] px-6 rounded-[4px] border border-white/20 bg-white/10 hover:bg-white/15 text-white font-[500] text-[15px] sm:text-[16px] tracking-[-0.02em] whitespace-nowrap flex items-center justify-center cursor-pointer transition-colors"
              >
                <span>Free Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
