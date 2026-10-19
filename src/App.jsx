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
    { name: "Tailscale", url: "https://tailscale.com/", logo: "https://framerusercontent.com/images/vPS8HRn4030cWdRwXMhmPyL34.svg?width=298&height=55" },
    { name: "Arista", url: "https://www.arista.com/", logo: "https://framerusercontent.com/images/9RtFd9g0oo8PlsJ6Scew7ubcNyk.svg?width=1115&height=175" },
    { name: "Fortinet", url: "https://www.fortinet.com/", logo: "https://framerusercontent.com/images/KsIxTWeD6TwF2P8FGyBNY04Pc.svg?width=1024&height=124" },
    { name: "Peplink", url: "https://www.peplink.com/", logo: "https://framerusercontent.com/images/naMQzk01MXqPeVk6BR9sDeG5seg.svg?width=1012&height=512" },
    { name: "Cloudflare", url: "https://www.cloudflare.com/", logo: "https://framerusercontent.com/images/A8aq474bUOBd7TowD751Zh05P8U.svg?width=404&height=134" }
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
    <div className="min-h-screen bg-white font-['Inter',sans-serif] text-[#1f2328] selection:bg-[#0b5cd5] selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div 
        onClick={() => setActiveModal('assessment')}
        className="w-full bg-[#0b5cd5] text-white py-2 px-4 text-center text-[12.5px] font-medium tracking-tight cursor-pointer hover:bg-[#0952c2] transition-colors relative flex items-center justify-center gap-1 z-20 group"
      >
        <span>Speak to one of our engineers to get a free firewall assessment</span>
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#e8eaed]">
        <div className="max-w-[1140px] mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center text-[22px] leading-none tracking-[-0.03em] select-none">
            <span className="font-normal text-[#0b5cd5]">Optimus</span>
            <span className="font-semibold text-[#0b5cd5]">Networks</span>
          </a>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+443330164050"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e8eaed] bg-white hover:bg-slate-50 text-[12.5px] font-medium text-[#1f2328] transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Support
            </a>

            <button
              onClick={() => setActiveModal('contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] bg-[#0b5cd5] hover:bg-[#0952c2] text-white text-[12.5px] font-medium transition-colors cursor-pointer"
            >
              Contact Sales <span>→</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="max-w-[1140px] mx-auto px-6 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <h1 className="text-[40px] sm:text-[50px] lg:text-[56px] font-semibold tracking-[-0.035em] text-[#0a0a0a] leading-[1.12]">
              Global <span className="text-[#0b5cd5]">connectivity</span><br />
              <span className="text-[#0b5cd5]">solutions</span> designed to<br />
              be <span className="underline decoration-2 underline-offset-6">simple and secure.</span>
            </h1>

            <p className="mt-6 text-[15px] sm:text-[16px] text-[#4b5563] leading-[1.5] max-w-lg font-normal">
              Connectivity redefined through engineering discipline, a culture of continual quality, and intelligent automation.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('solutions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-[40px] px-5 rounded-[4px] bg-[#0b5cd5] hover:bg-[#0952c2] text-white font-medium text-[14px] inline-flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
              >
                Solutions <span>→</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('solutions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-[40px] px-5 rounded-[4px] border border-[#0b5cd5] bg-white text-[#0b5cd5] hover:bg-blue-50/50 font-medium text-[14px] inline-flex items-center justify-center cursor-pointer transition-colors shadow-xs"
              >
                Find out more
              </button>
            </div>
          </div>

          {/* Right Image Card with subtle badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#e8eaed] bg-white shadow-xs aspect-4/3 lg:aspect-auto lg:h-[380px]">
              <img
                src="https://framerusercontent.com/images/PmHnsCbroKk29n1lRAkBqY2oXc.jpg?width=1200"
                alt="Optimus Engineering"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle top-right watermark icon badge */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-xs text-white p-1 rounded">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARTNERS SECTION */}
      <section className="border-t border-[#e8eaed] py-12">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4b5563] mb-8">
            Partnered with leading vendors globally
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-6 sm:h-7 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES & SOLUTIONS */}
      <section id="solutions" className="border-t border-[#e8eaed] py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Section Header - Centered */}
          <div className="max-w-xl mx-auto text-center mb-14">
            <span className="text-[11.5px] font-semibold text-[#0b5cd5] tracking-[0.1em] uppercase mb-2 block">
              SOLUTIONS
            </span>
            <h2 className="text-[34px] sm:text-[40px] font-semibold tracking-[-0.03em] text-[#0a0a0a] leading-tight mb-3">
              Services & Solutions
            </h2>
            <p className="text-[15px] text-[#4b5563] leading-relaxed">
              A connectivity service partner that replaces complexity with clarity.
            </p>
          </div>

          {/* 8 Cards (4x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#e8eaed] hover:border-[#0b5cd5]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                    <img src={srv.icon} alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#0a0a0a] tracking-tight mb-2 leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-[13px] text-[#4b5563] leading-[1.55]">
                    {srv.description}
                  </p>
                </div>
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
            <span className="text-[11.5px] font-semibold text-[#0b5cd5] tracking-[0.1em] uppercase mb-2 block">
              USE CASES
            </span>
            <h2 className="text-[34px] sm:text-[40px] font-semibold tracking-[-0.03em] text-[#0a0a0a] leading-tight mb-3">
              Case Studies
            </h2>
            <p className="text-[15px] text-[#4b5563] leading-relaxed">
              How we put leading technology to work, from secure remote access to always-on connectivity.
            </p>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-[#fcfdfe] border border-[#e8eaed] rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-all"
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
                  <div className="text-[44px] sm:text-[48px] font-semibold tracking-[-0.04em] text-[#0a0a0a] leading-none mb-4">
                    {cs.metric}
                  </div>

                  <p className="text-[14px] text-[#4b5563] leading-[1.6] mb-8">
                    {cs.description}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModal(cs.id)}
                  className="text-[13px] font-medium text-[#0b5cd5] hover:underline text-left cursor-pointer"
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
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-medium text-[#0a0a0a] leading-[1.3] tracking-[-0.03em]">
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
            <span className="text-[11.5px] font-semibold text-[#0b5cd5] tracking-[0.1em] uppercase mb-2 block">
              ARTICLES
            </span>
            <h2 className="text-[34px] sm:text-[40px] font-semibold tracking-[-0.03em] text-[#0a0a0a] leading-tight mb-3">
              Engineers’ Diary
            </h2>
            <p className="text-[15px] text-[#4b5563] leading-relaxed">
              How we put leading technology to work, from secure remote access to always-on connectivity.
            </p>
          </div>

          {/* 3 Article Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {articles.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveModal(art.id)}
                className="bg-white border border-[#e8eaed] rounded-2xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#0a0a0a] tracking-tight mb-2.5 leading-snug group-hover:text-[#0b5cd5] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-[13px] text-[#4b5563] leading-[1.6] mb-6">
                      {art.description}
                    </p>
                  </div>

                  <span className="text-[13px] font-medium text-[#0b5cd5] hover:underline">
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
        <div className="max-w-[1140px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#4b5563]">
          <p className="font-semibold tracking-wider text-[#0a0a0a]">OPTIMUS NETWORKS LTD</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-[#0b5cd5] transition-colors cursor-pointer"
            >
              Terms
            </button>
          </div>
        </div>
      </footer>

      {/* 10. INTERACTIVE MODALS */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-7 max-h-[90vh] overflow-y-auto border border-[#e8eaed] shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer text-sm font-bold"
            >
              ✕
            </button>

            {/* Assessment or Contact Modal */}
            {(activeModal === 'assessment' || activeModal === 'contact') && (
              <div>
                <span className="text-[11px] font-semibold text-[#0b5cd5] uppercase tracking-wider block mb-1">
                  {activeModal === 'assessment' ? 'Free Assessment' : 'Contact Sales'}
                </span>
                <h3 className="text-[22px] font-bold text-[#0a0a0a] mb-2">
                  {activeModal === 'assessment' ? 'Get a Free Firewall Assessment' : 'Speak to an Optimus Engineer'}
                </h3>
                <p className="text-[13px] text-[#4b5563] mb-5">
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
                      <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0b5cd5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Work Email</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0b5cd5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0b5cd5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Message</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#0b5cd5]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg bg-[#0b5cd5] hover:bg-[#0952c2] text-white font-medium text-xs transition-colors cursor-pointer"
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
                  <span className="text-[11px] font-semibold text-[#0b5cd5] uppercase tracking-wider block mb-1">Case Study</span>
                  <div className="text-[36px] font-bold text-[#0a0a0a] mb-2">{cs.metric}</div>
                  <h3 className="text-[18px] font-semibold text-[#0a0a0a] mb-3 leading-snug">{cs.title}</h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed whitespace-pre-line mb-5">
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
                  <span className="text-[11px] font-semibold text-[#0b5cd5] uppercase tracking-wider block mb-1">
                    Engineers' Diary · {art.readTime}
                  </span>
                  <h3 className="text-[20px] font-bold text-[#0a0a0a] mb-2 leading-snug">{art.title}</h3>
                  <p className="text-[12px] text-slate-500 mb-4">Written by {art.author}</p>
                  <div className="rounded-xl overflow-hidden mb-4 h-48">
                    <img src={art.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[13px] text-slate-700 leading-relaxed whitespace-pre-line">
                    {art.content}
                  </p>
                </div>
              );
            })()}

            {/* Terms Modal */}
            {activeModal === 'terms' && (
              <div>
                <h3 className="text-[20px] font-bold text-[#0a0a0a] mb-3">Terms & Conditions</h3>
                <div className="space-y-3 text-[12px] text-slate-600 max-h-80 overflow-y-auto pr-2 leading-relaxed">
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
