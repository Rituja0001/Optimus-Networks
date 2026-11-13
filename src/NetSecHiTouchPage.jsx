import React from 'react';

export default function NetSecHiTouchPage() {
  const reasons = [
    {
      num: "01 | Named SME Technical Account Manager",
      tagline: "A technical relationship, not just a support contract.",
      body: "Every customer benefits from a named Technical Account Manager (TAM) with senior engineering expertise who understands their environment, coordinates technical priorities and provides a consistent point of contact."
    },
    {
      num: "02 | 24/7/365 HiTouch Support",
      tagline: "Direct access to expertise, without unnecessary escalation layers.",
      body: "Round-the-clock access to experienced technical engineers for critical incidents, advanced troubleshooting and specialist escalation. An expert-first approach designed to accelerate investigations and minimise operational disruption."
    },
    {
      num: "03 | Unified Engineering & Support",
      tagline: "One partner for BAU, service requests and projects.",
      body: "A single engagement model covering operational support, technical service requests, approved changes and project engineering. Reduce fragmented ownership and maintain engineering continuity across your infrastructure."
    },
    {
      num: "04 | Vendor-Agnostic SME Team",
      tagline: "Your infrastructure, not the vendor, drives our approach.",
      body: "Independent, multi-vendor expertise across leading firewall and network security technologies. Our engineers focus on finding the right technical solution rather than working within the boundaries of a single manufacturer's support model."
    },
    {
      num: "05 | Enhanced Observability & Security Assurance",
      tagline: "Beyond availability monitoring. Greater insight into security posture.",
      body: "Enhanced visibility into firewall health, performance, vulnerabilities and operational risks. Combined with actionable reporting, lifecycle recommendations and security posture reviews to support informed decisions and continuous improvement."
    }
  ];

  const challenges = [
    {
      bold: "Limited in-house expertise:",
      text: "Extend your team with experienced Security and Network SMEs without the overhead of building a large specialist function."
    },
    {
      bold: "Evolving security risks:",
      text: "Improve visibility of vulnerabilities, configuration weaknesses, patching priorities and platform lifecycle risks."
    },
    {
      bold: "Compliance pressures:",
      text: "Support security governance and alignment with relevant standards, policies and regulatory requirements."
    },
    {
      bold: "Complex global environments:",
      text: "Bring greater consistency and technical ownership to distributed, multi-vendor security infrastructure."
    }
  ];

  return (
    <div className="w-full bg-white flex flex-col items-center pt-[48px] sm:pt-[72px] lg:pt-[96px] pb-[64px] sm:pb-[88px] lg:pb-[112px] px-5 sm:px-[30px] gap-[36px] sm:gap-[44px]">
      {/* Container - max-w-[720px] matching document width and typography */}
      <div className="w-full max-w-[720px] flex flex-col items-start gap-[36px] sm:gap-[40px]">
        {/* Section 1: Intro */}
        <section className="w-full flex flex-col items-start gap-[14px]">
          <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.1em] m-0 text-left">
            NetSec HiTouch
          </h1>

          <h2 className="text-[20px] sm:text-[24px] font-[600] tracking-[-0.02em] text-[#0a0a0a] leading-[1.25em] m-0 text-left">
            Advanced Firewall Service &amp; Support
          </h2>

          <p className="text-[16px] sm:text-[17px] font-[600] text-[#0a0a0a] tracking-[-0.01em] leading-[1.5em] m-0 text-left mt-1">
            When your existing support is falling short, it's time for a different approach.
          </p>

          <p className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em] m-0 text-left">
            Traditional support models can be restrictive, with multiple escalation layers, vendor-specific boundaries and limited access to specialist expertise.
          </p>

          <p className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em] m-0 text-left">
            Optimus NetSec HiTouch takes a different approach. We combine experienced Network and Security Engineers, vendor-agnostic expertise and proactive security assurance into a single, flexible support model.
          </p>

          <p className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em] m-0 text-left">
            Whether managing day-to-day operations, resolving complex incidents or improving your security infrastructure, our focus is simple: <strong className="text-[#0a0a0a] font-[600]">the right expertise, when you need it.</strong>
          </p>
        </section>

        {/* Divider */}
        <hr className="w-full border-t border-[#e8eaed] m-0" />

        {/* Section 2: Five Reasons to Choose NetSec HiTouch */}
        <section className="w-full flex flex-col items-start gap-[28px]">
          <h2 className="text-[24px] sm:text-[28px] font-[600] tracking-[-0.025em] text-[#0a0a0a] leading-[1.25em] m-0 text-left">
            Five Reasons to Choose NetSec HiTouch
          </h2>

          <div className="w-full flex flex-col items-start gap-[24px]">
            {reasons.map((r, idx) => (
              <div key={idx} className="w-full flex flex-col items-start gap-[6px]">
                <h3 className="text-[17px] sm:text-[18px] font-[600] text-[#0a0a0a] tracking-[-0.015em] leading-[1.35em] m-0 text-left">
                  {r.num}
                </h3>
                <p className="text-[15px] font-[600] text-[#0a0a0a] tracking-[-0.01em] leading-[1.5em] m-0 text-left">
                  {r.tagline}
                </p>
                <p className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em] m-0 text-left">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="w-full border-t border-[#e8eaed] m-0" />

        {/* Section 3: Addressing Your Security Challenges */}
        <section className="w-full flex flex-col items-start gap-[18px]">
          <h2 className="text-[24px] sm:text-[28px] font-[600] tracking-[-0.025em] text-[#0a0a0a] leading-[1.25em] m-0 text-left">
            Addressing Your Security Challenges
          </h2>

          <ul className="w-full list-disc list-outside pl-5 flex flex-col items-start gap-[10px] m-0">
            {challenges.map((c, idx) => (
              <li key={idx} className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em]">
                <strong className="text-[#0a0a0a] font-[600]">{c.bold}</strong> {c.text}
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <hr className="w-full border-t border-[#e8eaed] m-0" />

        {/* Section 4: More Than Support. A Trusted Engineering Partner. */}
        <section className="w-full flex flex-col items-start gap-[14px]">
          <h2 className="text-[24px] sm:text-[28px] font-[600] tracking-[-0.025em] text-[#0a0a0a] leading-[1.25em] m-0 text-left">
            More Than Support. A Trusted Engineering Partner.
          </h2>

          <p className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em] m-0 text-left">
            NetSec HiTouch is built around the principle that effective security support requires more than responding to incidents. It requires technical understanding, accountability and a commitment to improving the environment over time.
          </p>

          <p className="text-[16px] sm:text-[17px] font-[600] text-[#0a0a0a] tracking-[-0.01em] leading-[1.5em] m-0 text-left mt-2">
            Quality First. Engineering Without Compromise.
          </p>

          <p className="text-[16px] sm:text-[17px] font-[600] text-[#0b5cd5] tracking-[-0.01em] leading-[1.5em] m-0 text-left">
            Talk to Optimus about NetSec HiTouch.
          </p>
        </section>
      </div>
    </div>
  );
}
