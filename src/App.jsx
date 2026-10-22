import React, { useState } from 'react';

export default function App() {
  const [activeModal, setActiveModal] = useState(null); // 'assessment' | 'contact' | 'terms' | 'case-1' | 'case-2' | 'case-3' | 'article-1' | 'article-2' | 'article-3'
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActiveModal(null);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 2200);
  };

  const services = [
    {
      title: "Dedicated internet access",
      description: "Guaranteed, uncontended bandwidth from sub-1G to 40G, with diverse last-mile options.",
      icon: "https://framerusercontent.com/images/1LWY6biDs2QPTWuBPTuhnR2T7s.svg"
    },
    {
      title: "Private network solutions",
      description: "Private transit, point-to-point and Ethernet services up to 400GE+, on any platform.",
      icon: "https://framerusercontent.com/images/qmvIj0YVVrE0fE6ENoN2ZqRbPY.svg"
    },
    {
      title: "NetConnect+",
      description: "Our in-house engineered connectivity, designed, delivered and supported end to end.",
      icon: "https://framerusercontent.com/images/tIMROzaGrINqTgDFZkslUqJFTqI.svg"
    },
    {
      title: "Secure remote access",
      description: "Encrypted, identity-based access to your network from anywhere, built on Tailscale.",
      icon: "https://framerusercontent.com/images/qLeFowkbsxa8tGmV2ZVyvpilIs.svg"
    },
    {
      title: "TAM-led service & support",
      description: "A named Technical Account Manager who knows your estate and owns every escalation.",
      icon: "https://framerusercontent.com/images/4yiwdJMdoCvaWDOLKcgrQmU0.svg"
    },
    {
      title: "NOC as a Service (NOCaaS)",
      description: "Firewalls designed, deployed and managed by our engineers, with changes handled for you.",
      icon: "https://framerusercontent.com/images/KXuAVTRVxg5KD6txzc52b2sYcw.svg"
    },
    {
      title: "24/7 network monitoring",
      description: "Circuits and devices watched around the clock, with engineers ready to respond.",
      icon: "https://framerusercontent.com/images/uGTXBtpbeg6dfPHwVuyqisQqhg.svg"
    },
    {
      title: "Technical staff secondment",
      description: "Experienced network engineers embedded in your team, for one project or as long as you need.",
      icon: "https://framerusercontent.com/images/1OkgF6EL4g5neiwxXndTOjU3s.svg"
    }
  ];

  const partners = [
    {
      name: "Tailscale",
      url: "https://tailscale.com/",
      logo: "https://framerusercontent.com/images/vPS8HRn4030cWdRwXMhmPyL34.svg?width=298&height=55",
      width: 141,
      height: 26
    },
    {
      name: "Arista",
      url: "https://www.arista.com/",
      logo: "https://framerusercontent.com/images/9RtFd9g0oo8PlsJ6Scew7ubcNyk.svg?width=1115&height=175",
      width: 126,
      height: 20
    },
    {
      name: "Fortinet",
      url: "https://www.fortinet.com/",
      logo: "https://framerusercontent.com/images/KsIxTWeD6TwF2P8FGyBNY04Pc.svg?width=1024&height=124",
      width: 150,
      height: 18
    },
    {
      name: "Peplink",
      url: "https://www.peplink.com/",
      logo: "https://framerusercontent.com/images/naMQzk01MXqPeVk6BR9sDeG5seg.svg?width=1012&height=512",
      width: 79,
      height: 40
    },
    {
      name: "Cloudflare",
      url: "https://www.cloudflare.com/",
      logo: "https://framerusercontent.com/images/A8aq474bUOBd7TowD751Zh05P8U.svg?width=404&height=134",
      width: 106,
      height: 35
    }
  ];

  const caseStudies = [
    {
      id: 'case-1',
      brand: "tailscale",
      metric: "442 users",
      description: "to roll out Tailscale, with zero impact on firewalls, site-to-site VPNs or customer VPNs.",
      title: "Bringing Tailscale to an existing network without replacing a single firewall.",
      fullText: "The client needed secure remote access for its users, but its FortiGate estate, site-to-site tunnels and customer VPNs were carrying production traffic and couldn't be replaced. We deployed Tailscale in front of the existing infrastructure, with no change to anything already in service. Joiner, mover and leaver changes are now handled in the directory rather than in firewall policy."
    },
    {
      id: 'case-2',
      brand: "peplink",
      metric: "6 global DC",
      description: "fibre, 4G and 5G bonded into one connection, with WAN smoothing keeping calls steady.",
      title: "Resilient Multi-cloud & Multi-link Connectivity",
      fullText: "Combining multiple diverse paths into a unified SpeedFusion mesh architecture. Traffic is actively smoothed and prioritised packet-by-packet so that mission critical services and VoIP remain crystal clear even during major transit line outages."
    },
    {
      id: 'case-3',
      brand: "peplink",
      metric: "2 paths",
      description: "Fibre and Starlink bonded on a Peplink with WAN smoothing, so a remote trader never drops.",
      title: "Bonding fibre and Starlink so a remote trader never drops a trade.",
      fullText: "The client, an independent trader working from a rural home office, needed a connection that could keep up with live markets. A single FTTC line couldn't be relied on, and full fibre wasn't available. We bonded FTTC and Starlink on a Peplink router, with WAN smoothing protecting every order and price feed."
    }
  ];

  const articles = [
    {
      id: 'article-1',
      title: "AIOps is here to stay. Will it take our jobs?",
      description: "Most NOCs and SOCs already have the tools to improve efficiency by up to 80%. Here's where to start.",
      image: "https://framerusercontent.com/images/BG013WyWBxPSBLCgzW1zEhL4.jpg?width=1200&height=800",
      readTime: "5 min read",
      author: "Jan Khodabaksh",
      content: "Even if all automation, development, and AI innovation stopped today, most organisations already have the tools and capability to improve operational efficiency, potentially by up to 80%. The opportunity to make meaningful changes exists today. If you're running a NOC, SOC, or Offshore Service Centre, examine repetitive manual tasks and integrate intelligent pipeline automations."
    },
    {
      id: 'article-2',
      title: "Striving for quality: a cultural principle",
      description: "The day the network breaks has already been written. Why continual testing should be a core engineering value.",
      image: "https://framerusercontent.com/images/HRu0pqEFDVst2ifryRdvvZdWD6I.jpg?width=1200&height=800",
      readTime: "4 min read",
      author: "Jan Khodabaksh",
      content: "“The day the network breaks has been written. We just don't know when it is, so let's make sure we're preparing.” Our industry has established design principles that guide us, yet one essential aspect remains strangely absent: ensuring post-delivery testing and qualifying is a fundamental pillar of any design process."
    },
    {
      id: 'article-3',
      title: "How Arista leads with almost zero marketing budget",
      description: "No billboards, no gimmicks. What really sets Arista apart, from SysDB to automated 24/7 testing.",
      image: "https://framerusercontent.com/images/wYipT027rlY8MBIbusOrexuG5Y.jpg?width=1200&height=800",
      readTime: "2 min read",
      author: "Jan Khodabaksh",
      content: "Almost zero marketing budget? You don't see many billboards or magazine ads for Arista. Yet it's right up there competing with the best, if not leading. Take SysDB: think of it as a dynamic, distributed data lake on every Arista platform. It keeps internal systems in sync, while allowing them to operate independently and respond intelligently in real time."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1f2328] selection:bg-[#0b5cd5] selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div 
        onClick={() => setActiveModal('assessment')}
        className="w-full bg-[#0b5cd5] text-white py-3.5 px-4 text-center cursor-pointer hover:bg-[#0952c2] transition-colors relative flex items-center justify-center gap-1.5 z-20 group"
      >
        <span className="text-[15px] font-[500] tracking-[-0.02em] leading-[1.4em]">
          Speak to one of our engineers to get a free firewall assessment →
        </span>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#e8eaed]">
        <div className="max-w-[1140px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center text-[25px] leading-none tracking-[-0.03em] select-none text-[#0b5cd5]">
            <span className="font-[400]">Optimus</span>
            <span className="font-[600]">Networks</span>
          </a>

          {/* Right Navigation Actions */}
          <div className="flex items-center gap-[24px]">
            {/* Support Link */}
            <a
              href="tel:+443330164050"
              className="flex items-center gap-2 text-[16px] font-[500] tracking-[-0.02em] leading-[1.4em] text-[#0a0a0a] hover:text-[#0b5cd5] transition-colors select-none"
            >
              <div className="relative w-[8px] h-[8px]">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#22c55e]"></span>
                <span className="absolute inset-0 rounded-full bg-[#22c55e] shadow-[0_0_0_2px_rgba(255,255,255,0.9)]"></span>
              </div>
              <span>Support</span>
            </a>

            {/* Contact Sales Button */}
            <button
              onClick={() => setActiveModal('contact')}
              className="min-h-[44px] px-[12px] gap-[8px] rounded-[4px] bg-[#0b5cd5] hover:bg-[#0952c2] text-white font-[600] text-[16px] tracking-[-0.02em] whitespace-nowrap flex items-center justify-center cursor-pointer transition-colors shadow-xs active:scale-[0.99]"
            >
              <span>Contact Sales</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3.5L10.5 8 6 12.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="max-w-[1140px] mx-auto px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 xl:col-span-7">
            <h1 className="text-[38px] sm:text-[46px] lg:text-[50px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.12em]">
              Global <span className="text-[#0b5cd5]">connectivity</span><br />
              <span className="text-[#0b5cd5]">solutions</span> designed to<br />
              be <span className="relative inline-block">
                simple and secure.
                <svg
                  className="absolute left-0 -bottom-2.5 w-full h-[14px] pointer-events-none"
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

            <p className="mt-6 text-[16px] text-[#1f2328] font-[400] tracking-[-0.005em] leading-[1.6em] max-w-[420px]">
              Connectivity redefined through engineering discipline, a culture of continual quality, and intelligent automation.
            </p>

            {/* Buttons Row with equal 50/50 width */}
            <div className="mt-8 flex items-center gap-[10px] max-w-[420px] w-full">
              <button
                onClick={() => {
                  const el = document.getElementById('solutions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 min-h-[44px] h-[48px] px-[12px] gap-[10px] rounded-[4px] bg-[#0b5cd5] hover:bg-[#0952c2] text-white font-[600] text-[16px] tracking-[-0.02em] whitespace-nowrap flex items-center justify-center cursor-pointer transition-colors shadow-xs active:scale-[0.99]"
              >
                <span>Solutions</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3.5L10.5 8 6 12.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('solutions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 min-h-[44px] h-[48px] px-[12px] rounded-[4px] border border-[#0b5cd5] bg-white text-[#0b5cd5] hover:bg-blue-50/50 font-[500] text-[16px] tracking-[-0.02em] whitespace-nowrap flex items-center justify-center cursor-pointer transition-colors shadow-xs active:scale-[0.99]"
              >
                <span>Find out more</span>
              </button>
            </div>
          </div>

          {/* Right Image Container - Exact 8px border-radius, 440px height, no border, no watermark */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[544px] h-[320px] sm:h-[390px] lg:h-[440px] rounded-[8px] overflow-hidden relative">
              <img
                src="https://framerusercontent.com/images/PmHnsCbroKk29n1lRAkBqY2oXc.jpg?width=1200"
                alt="Optimus Engineering"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARTNERS SECTION */}
      <section className="bg-white pt-2 pb-20 px-6">
        <div className="max-w-[1140px] mx-auto flex flex-col items-center justify-center gap-[32px]">
          <p className="text-[16px] font-[400] tracking-[-0.02em] leading-[1.4em] text-[#4b5563] text-center">
            Partnered with leading vendors globally
          </p>

          <div className="flex flex-wrap items-center justify-center gap-[56px] w-full">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:opacity-75 transition-opacity"
                style={{ width: `${p.width}px`, height: `${p.height}px` }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES & SOLUTIONS */}
      <section id="solutions" className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Section Header - Centered */}
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-[14px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-3 block">
              SOLUTIONS
            </span>
            <h2 className="text-[34px] sm:text-[40px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.12em] mb-4">
              Services & Solutions
            </h2>
            <p className="text-[16px] font-[400] text-[#1f2328] tracking-[-0.005em] leading-[1.6em] max-w-[340px] mx-auto text-balance">
              A connectivity service partner that replaces complexity with clarity.
            </p>
          </div>

          {/* Unified 4x2 Grid Container with 1px dividers and 16px rounded outer border */}
          <div className="bg-[#e8eaed] border border-[#e8eaed] rounded-[16px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] w-full shadow-none">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white p-[36px_24px_40px_26px] sm:p-[40px_24px_44px_28px] flex flex-col items-start justify-start"
              >
                {/* Clean SVG icon without background box, with bottom spacing */}
                <div className="w-[30px] h-[30px] mb-[20px] flex items-center justify-start">
                  <img src={srv.icon} alt="" className="w-[30px] h-[30px] object-contain" />
                </div>
                <h3 className="text-[16px] font-[600] text-[#0a0a0a] tracking-[-0.01em] leading-[1.3em] mb-[10px]">
                  {srv.title}
                </h3>
                <p className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em]">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES */}
      <section className="border-t border-[#e8eaed] py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Section Header - Centered */}
          <div className="max-w-xl mx-auto text-center mb-14">
            <span className="text-[14px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-2 block">
              USE CASES
            </span>
            <h2 className="text-[34px] sm:text-[40px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.12em] mb-3">
              Case Studies
            </h2>
            <p className="text-[16px] font-[400] text-[#1f2328] tracking-[-0.005em] leading-[1.6em]">
              How we put leading technology to work, from secure remote access to always-on connectivity.
            </p>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-[#fcfdfe] border border-[#e8eaed] rounded-[16px] p-[40px] flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  {/* Brand Tag at top */}
                  <div className="text-[12px] font-semibold text-slate-800 tracking-wider mb-6 flex items-center gap-1.5">
                    {cs.brand === 'tailscale' && (
                      <span className="font-bold">::: tailscale</span>
                    )}
                    {cs.brand === 'peplink' && (
                      <span className="font-bold">peplink</span>
                    )}
                  </div>

                  {/* Large Metric */}
                  <div className="text-[50px] font-[500] tracking-[-0.045em] text-[#000000] leading-[1em] mb-4">
                    {cs.metric}
                  </div>

                  <p className="text-[18px] font-[400] text-[#4b5563] tracking-[-0.01em] leading-[1.45em] mb-8">
                    {cs.description}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModal(cs.id)}
                  className="text-[16px] font-[500] tracking-[-0.01em] leading-[1.4em] text-[#1f2328] underline decoration-[#1f2328] underline-offset-[5px] decoration-[1.5px] text-left cursor-pointer hover:text-[#0b5cd5] hover:decoration-[#0b5cd5] transition-colors"
                >
                  Read case study
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HIGH IMPACT BRAND STATEMENT (CENTERED) */}
      <section className="border-t border-[#e8eaed] py-24 bg-white">
        <div className="max-w-[920px] mx-auto px-6 text-center">
          <h2 className="text-[28px] sm:text-[34px] font-[600] text-[#0a0a0a] leading-[1.2em] tracking-[-0.03em]">
            Optimus designs and delivers connectivity solutions by bringing structure, consistency, and engineering discipline to every solution,{" "}
            <span className="text-[#0b5cd5]">ensuring quality is never compromised,</span>{" "}
            even as customer needs evolve.
          </h2>
        </div>
      </section>

      {/* 8. ENGINEERS' DIARY (ARTICLES) */}
      <section className="border-t border-[#e8eaed] py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Section Header - Centered */}
          <div className="max-w-xl mx-auto text-center mb-14">
            <span className="text-[14px] font-[600] text-[#0b5cd5] tracking-[0.08em] uppercase mb-2 block">
              ARTICLES
            </span>
            <h2 className="text-[34px] sm:text-[40px] font-[600] tracking-[-0.035em] text-[#0a0a0a] leading-[1.12em] mb-3">
              Engineers’ Diary
            </h2>
            <p className="text-[16px] font-[400] text-[#1f2328] tracking-[-0.005em] leading-[1.6em]">
              How we put leading technology to work, from secure remote access to always-on connectivity.
            </p>
          </div>

          {/* 3 Article Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {articles.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveModal(art.id)}
                className="bg-white border border-[#e8eaed] rounded-[16px] overflow-hidden hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div className="h-[200px] overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[20px] font-[600] text-[#0a0a0a] tracking-[-0.02em] mb-3 leading-[1.3em] group-hover:text-[#0b5cd5] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-[15px] font-[400] text-[#4b5563] tracking-[-0.005em] leading-[1.6em] mb-6">
                      {art.description}
                    </p>
                  </div>

                  <span className="text-[16px] font-[600] tracking-[-0.01em] leading-[1.4em] text-[#1f2328] underline decoration-[#1f2328] underline-offset-[5px] decoration-[1.5px] group-hover:text-[#0b5cd5] group-hover:decoration-[#0b5cd5] transition-colors">
                    Read article
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-[#e8eaed] bg-white py-8">
        <div className="max-w-[1140px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#4b5563]">
          <p className="font-[600] tracking-[0.05em] text-[#0a0a0a]">OPTIMUS NETWORKS LTD</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveModal('terms')}
              className="font-[500] hover:text-[#0b5cd5] transition-colors cursor-pointer"
            >
              Terms
            </button>
          </div>
        </div>
      </footer>

      {/* 10. INTERACTIVE MODALS */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-[16px] max-w-lg w-full p-7 max-h-[90vh] overflow-y-auto border border-[#e8eaed] shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer text-sm font-bold"
            >
              ✕
            </button>

            {/* Assessment or Contact Modal */}
            {(activeModal === 'assessment' || activeModal === 'contact') && (
              <div>
                <span className="text-[11px] font-[600] text-[#0b5cd5] uppercase tracking-wider block mb-1">
                  {activeModal === 'assessment' ? 'Free Assessment' : 'Contact Sales'}
                </span>
                <h3 className="text-[22px] font-[700] text-[#0a0a0a] mb-2">
                  {activeModal === 'assessment' ? 'Get a Free Firewall Assessment' : 'Speak to an Optimus Engineer'}
                </h3>
                <p className="text-[14px] text-[#4b5563] mb-5 leading-relaxed">
                  Direct consultation with our senior connectivity and network engineers.
                </p>

                {submitted ? (
                  <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-emerald-800">
                    <div className="text-2xl mb-1">✓</div>
                    <h4 className="font-bold text-sm">Request Submitted!</h4>
                    <p className="text-xs mt-1">Our engineering team will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-[500] text-slate-700 mb-1">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0b5cd5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-[500] text-slate-700 mb-1">Work Email</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0b5cd5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-[500] text-slate-700 mb-1">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0b5cd5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-[500] text-slate-700 mb-1">Message</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0b5cd5]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full min-h-[44px] rounded-[4px] bg-[#0b5cd5] hover:bg-[#0952c2] text-white font-[600] text-[16px] tracking-[-0.02em] transition-colors cursor-pointer"
                    >
                      Send Request
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Case Studies Modals */}
            {activeModal.startsWith('case-') && (() => {
              const cs = caseStudies.find(c => c.id === activeModal);
              if (!cs) return null;
              return (
                <div>
                  <span className="text-[12px] font-[600] text-[#0b5cd5] uppercase tracking-wider block mb-1">Case Study</span>
                  <div className="text-[44px] font-[500] text-[#0a0a0a] mb-2 leading-none">{cs.metric}</div>
                  <h3 className="text-[18px] font-[600] text-[#0a0a0a] mb-3 leading-snug">{cs.title}</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed whitespace-pre-line mb-5">
                    {cs.fullText}
                  </p>
                  <div className="p-3.5 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-[#0b5cd5]">
                    📞 Need this setup? Call our team: <strong>0333 016 4050</strong>.
                  </div>
                </div>
              );
            })()}

            {/* Articles Modals */}
            {activeModal.startsWith('article-') && (() => {
              const art = articles.find(a => a.id === activeModal);
              if (!art) return null;
              return (
                <div>
                  <span className="text-[12px] font-[600] text-[#0b5cd5] uppercase tracking-wider block mb-1">
                    Engineers' Diary · {art.readTime}
                  </span>
                  <h3 className="text-[20px] font-[600] text-[#0a0a0a] mb-2 leading-snug">{art.title}</h3>
                  <p className="text-[13px] text-slate-500 mb-4">Written by {art.author}</p>
                  <div className="rounded-xl overflow-hidden mb-4 h-48">
                    <img src={art.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[14px] text-slate-700 leading-relaxed whitespace-pre-line">
                    {art.content}
                  </p>
                </div>
              );
            })()}

            {/* Terms Modal */}
            {activeModal === 'terms' && (
              <div>
                <h3 className="text-[20px] font-[600] text-[#0a0a0a] mb-3">Terms & Conditions</h3>
                <div className="space-y-3 text-[13px] text-slate-600 max-h-80 overflow-y-auto pr-2 leading-relaxed">
                  <p><strong>1. Application and entire agreement</strong><br />1.1 These Terms and Conditions apply to the provision of the goods & services detailed in our quotation by Optimus Networks Ltd (company registered in England and Wales under number 10191532).</p>
                  <p><strong>2. Services</strong><br />We warrant that we will use reasonable care and skill in our performance of the Services which will comply with the quotation.</p>
                  <p><strong>3. Payment & Fees</strong><br />Payment of Fees is due within 30 days of the date of invoice.</p>
                  <p><strong>4. Governing Law</strong><br />This Agreement shall be governed by and interpreted according to the law of England and Wales.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
