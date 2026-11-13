import React from 'react';

export default function NetSecHiTouchPage({ onNavigateHome, onOpenModal }) {
  const reasons = [
    {
      num: "01",
      title: "Named SME Technical Account Manager",
      tagline: "A technical relationship, not just a support contract.",
      description:
        "Every customer benefits from a named Technical Account Manager (TAM) with senior engineering expertise who understands their environment, coordinates technical priorities and provides a consistent point of contact."
    },
    {
      num: "02",
      title: "24/7/365 HiTouch Support",
      tagline: "Direct access to expertise, without unnecessary escalation layers.",
      description:
        "Round-the-clock access to experienced technical engineers for critical incidents, advanced troubleshooting and specialist escalation. An expert-first approach designed to accelerate investigations and minimise operational disruption."
    },
    {
      num: "03",
      title: "Unified Engineering & Support",
      tagline: "One partner for BAU, service requests and projects.",
      description:
        "A single engagement model covering operational support, technical service requests, approved changes and project engineering. Reduce fragmented ownership and maintain engineering continuity across your infrastructure."
    },
    {
      num: "04",
      title: "Vendor-Agnostic SME Team",
      tagline: "Your infrastructure, not the vendor, drives our approach.",
      description:
        "Independent, multi-vendor expertise across leading firewall and network security technologies. Our engineers focus on finding the right technical solution rather than working within the boundaries of a single manufacturer's support model."
    },
    {
      num: "05",
      title: "Enhanced Observability & Security Assurance",
      tagline: "Beyond availability monitoring. Greater insight into security posture.",
      description:
        "Enhanced visibility into firewall health, performance, vulnerabilities and operational risks. Combined with actionable reporting, lifecycle recommendations and security posture reviews to support informed decisions and continuous improvement."
    }
  ];

  const challenges = [
    {
      title: "Limited in-house expertise",
      description:
        "Extend your team with experienced Security and Network SMEs without the overhead of building a large specialist function."
    },
    {
      title: "Evolving security risks",
      description:
        "Improve visibility of vulnerabilities, configuration weaknesses, patching priorities and platform lifecycle risks."
    },
    {
      title: "Compliance pressures",
      description:
        "Support security governance and alignment with relevant standards, policies and regulatory requirements."
    },
    {
      title: "Complex global environments",
      description:
        "Bring greater consistency and technical ownership to distributed, multi-vendor security infrastructure."
    }
  ];

  return (
    <div className="w-full bg-white text-[#1f2328]">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1140px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24">
        {/* Back navigation */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-[14px] font-[500] text-[#4b5563] hover:text-[#0b5cd5] transition-colors mb-8 cursor-pointer group"
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
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[14px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-3 block">
              NETSEC HITOUCH
            </span>

            <h1 className="text-[36px] sm:text-[46px] lg:text-[50px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.12em]">
              Advanced <span className="text-[#0b5cd5]">Firewall</span><br />
              <span className="relative inline-block">
                Service &amp; Support
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

            <p className="mt-6 text-[18px] sm:text-[20px] font-[600] text-[#0a0a0a] tracking-[-0.02em] leading-[1.35em]">
              When your existing support is falling short, it's time for a different approach.
            </p>

            <p className="mt-4 text-[15px] sm:text-[16px] text-[#4b5563] font-[400] tracking-[-0.005em] leading-[1.6em] max-w-[580px]">
              Traditional support models can be restrictive, with multiple escalation layers, vendor-specific boundaries and limited access to specialist expertise.
            </p>

            <p className="mt-3 text-[15px] sm:text-[16px] text-[#4b5563] font-[400] tracking-[-0.005em] leading-[1.6em] max-w-[580px]">
              Optimus NetSec HiTouch takes a different approach. We combine experienced Network and Security Engineers, vendor-agnostic expertise and proactive security assurance into a single, flexible support model.
            </p>

            <p className="mt-3 text-[15px] sm:text-[16px] text-[#4b5563] font-[400] tracking-[-0.005em] leading-[1.6em] max-w-[580px]">
              Whether managing day-to-day operations, resolving complex incidents or improving your security infrastructure, our focus is simple: <strong className="text-[#0a0a0a] font-[600]">the right expertise, when you need it.</strong>
            </p>
          </div>

          {/* Right Highlight Card in our clean Framer card style */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[480px] bg-[#fafafa] border border-[#e8eaed] rounded-[16px] p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[13px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-4 block">
                  SERVICE OVERVIEW
                </span>
                <h3 className="text-[24px] font-[600] text-[#0a0a0a] tracking-[-0.02em] leading-[1.25em] mb-4">
                  NetSec HiTouch
                </h3>
                <p className="text-[15px] font-[400] text-[#4b5563] leading-[1.6em] mb-6">
                  Advanced Firewall Service &amp; Support delivered by experienced Network and Security Engineers.
                </p>
              </div>

              <div className="border-t border-[#e8eaed] pt-6 flex flex-col gap-3">
                <div className="text-[14px] text-[#4b5563] flex items-center justify-between">
                  <span>Support Model</span>
                  <span className="font-[600] text-[#0a0a0a]">Flexible &amp; Vendor-Agnostic</span>
                </div>
                <div className="text-[14px] text-[#4b5563] flex items-center justify-between">
                  <span>Engineering Level</span>
                  <span className="font-[600] text-[#0b5cd5]">SME Technical Account Manager</span>
                </div>
                <div className="text-[14px] text-[#4b5563] flex items-center justify-between">
                  <span>Availability</span>
                  <span className="font-[600] text-[#0a0a0a]">24/7/365 HiTouch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FIVE REASONS TO CHOOSE NETSEC HITOUCH */}
      <section className="py-20 sm:py-24 bg-[#fafafa] border-t border-b border-[#e8eaed]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-[14px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-3 block">
              FIVE REASONS
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.15em] mb-3">
              Five Reasons to Choose NetSec HiTouch
            </h2>
          </div>

          {/* Unified Grid Container with 1px dividers and 16px rounded outer border */}
          <div className="bg-[#e8eaed] border border-[#e8eaed] rounded-[16px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] w-full shadow-xs">
            {reasons.map((r, idx) => (
              <div
                key={idx}
                className={`bg-white p-[36px_28px_40px] sm:p-[40px_32px_44px] flex flex-col justify-start ${
                  idx === 3 || idx === 4 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="text-[28px] sm:text-[32px] font-[500] tracking-[-0.04em] text-[#0b5cd5] leading-none mb-5">
                  {r.num}
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-[600] text-[#0a0a0a] tracking-[-0.02em] leading-[1.3em] mb-2">
                  {r.title}
                </h3>
                <p className="text-[14px] font-[600] text-[#0a0a0a] leading-[1.45em] mb-3">
                  {r.tagline}
                </p>
                <p className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em]">
                  {r.description}
                </p>
              </div>
            ))}

            {/* Sixth Cell: Philosophy Highlight to complete the 3x2 grid */}
            <div className="bg-white p-[36px_28px_40px] sm:p-[40px_32px_44px] flex flex-col justify-between">
              <div>
                <span className="text-[13px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-4 block">
                  OUR COMMITMENT
                </span>
                <h3 className="text-[18px] sm:text-[19px] font-[600] text-[#0a0a0a] tracking-[-0.02em] leading-[1.3em] mb-3">
                  Quality First. Engineering Without Compromise.
                </h3>
                <p className="text-[15px] font-[400] text-[#4b5563] leading-[1.6em]">
                  Direct access to senior engineering expertise, without unnecessary escalation layers or vendor boundaries.
                </p>
              </div>

              <div className="pt-6">
                <span className="text-[15px] font-[600] text-[#0b5cd5]">
                  Talk to Optimus about NetSec HiTouch.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ADDRESSING YOUR SECURITY CHALLENGES */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-[14px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-3 block">
              CHALLENGES
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.15em] mb-3">
              Addressing Your Security Challenges
            </h2>
          </div>

          {/* Unified 4-Column Grid Container with 1px dividers and 16px rounded outer border */}
          <div className="bg-[#e8eaed] border border-[#e8eaed] rounded-[16px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] w-full shadow-xs">
            {challenges.map((c, idx) => (
              <div
                key={idx}
                className="bg-white p-[36px_24px_42px_26px] sm:p-[40px_24px_44px_28px] flex flex-col items-start justify-start"
              >
                <div className="w-[30px] h-[30px] mb-[22px] flex items-center justify-start text-[#0b5cd5]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0b5cd5]"></span>
                </div>
                <h3 className="text-[16px] font-[600] text-[#0a0a0a] tracking-[-0.01em] leading-[1.3em] mb-[12px]">
                  {c.title}
                </h3>
                <p className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em]">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIGH IMPACT BRAND STATEMENT (CENTERED) */}
      <section className="bg-[#fafafa] border-t border-b border-[#e8eaed] py-[100px] sm:py-[140px] lg:py-[165px] px-6">
        <div className="max-w-[1026px] mx-auto text-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[43px] font-[500] text-[#0a0a0a] leading-[1.25em] tracking-[-0.03em] mb-6">
            More Than Support.{" "}
            <span className="text-[#0b5cd5] font-[600]">
              A Trusted Engineering Partner.
            </span>
          </h2>

          <p className="text-[16px] sm:text-[18px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em] max-w-[820px] mx-auto mb-8">
            NetSec HiTouch is built around the principle that effective security support requires more than responding to incidents. It requires technical understanding, accountability and a commitment to improving the environment over time.
          </p>

          <p className="text-[18px] sm:text-[22px] font-[600] text-[#0a0a0a] tracking-[-0.02em] mb-3">
            Quality First. Engineering Without Compromise.
          </p>

          <p className="text-[18px] sm:text-[20px] font-[600] text-[#0b5cd5] tracking-[-0.02em]">
            Talk to Optimus about NetSec HiTouch.
          </p>
        </div>
      </section>
    </div>
  );
}
