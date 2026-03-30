import { useState, useEffect, useRef, useCallback } from "react";

interface ProofImage {
  src: string;
  caption: string;
}

interface PdfDoc {
  name: string;
  label: string;
  url: string;
}

interface CaseStudy {
  id: string;
  accent: string;
  accentColor: string;
  tag: string;
  company: string;
  role: string;
  desc: string;
  metrics: { value: string; label: string }[];
  expandedTitle: string;
  startingPoint: string;
  whatIBuilt: string[];
  metricsGrid?: { value: string; label: string }[];
  whyItMatters: string;
  images?: ProofImage[];
  pdfs?: PdfDoc[];
}

const BASE = import.meta.env.BASE_URL;

function assetUrl(path: string) {
  return `${BASE}assets/${path}`;
}

const CASES: CaseStudy[] = [
  {
    id: "defigo",
    accent: "green",
    accentColor: "#34D399",
    tag: "Proptech · US Market Entry",
    company: "Defigo",
    role: "RVP Sales → GM → CEO",
    desc: "Built Defigo's entire US business from zero. No brand, no pipeline, no channel, no product-market fit for the US. Designed the full GTM stack and signed national distribution with Wesco/Anixter.",
    metrics: [
      { value: "16", label: "Buildings Deployed" },
      { value: "20+", label: "Integrator Partners" },
      { value: "$96K", label: "Recurring ARR" },
      { value: "18mo", label: "Zero to Revenue" },
    ],
    expandedTitle: "Defigo: Building a US Business from Nothing",
    startingPoint:
      "Zero revenue. No active pipeline. No channel partners, no distributor relationships, no integrator network. A European product not adapted to US buying behavior, technical standards, or security market structure. Minimal brand awareness in a category dominated by 30-year incumbents.",
    whatIBuilt: [
      "Designed the full ICP, positioning, messaging, sales, channel, enablement, pricing, and onboarding system",
      "Signed national distribution with Wesco/Anixter: 8,000+ integrators, 100+ branch locations",
      "Activated 20+ dealers including Everon (ADT's commercial division)",
      "Built pipeline across NY, Massachusetts, Florida, and New Mexico",
      "Operated as CEO with full P&L, pricing, supply chain, support, and board reporting",
    ],
    metricsGrid: [
      { value: "16", label: "Buildings Live" },
      { value: "$80K", label: "Hardware Revenue" },
      { value: "$96K", label: "ARR Generated" },
      { value: "20+", label: "Dealer Partners" },
    ],
    whyItMatters:
      "Cross-border market entry with hardware-enabled SaaS is one of the hardest GTM problems. You're selling a physical product through a fragmented channel to skeptical buyers who've used the same vendor for decades. This is the work of building from absolute zero into a functioning revenue engine.",
    images: [
      { src: assetUrl("defigo/slack-1.png"), caption: "Recognition from Defigo leadership — Jan & Oct 2024" },
      { src: assetUrl("defigo/slack-2.png"), caption: "Hildur Smaradottir: 'Amazing, so impressive Umair'" },
      { src: assetUrl("defigo/slack-3.png"), caption: "Defigo CEO: 'You are a man of many talents'" },
      { src: assetUrl("defigo/slack-4.png"), caption: "Hildur Smaradottir: 'Wow Umair! Well done'" },
      { src: assetUrl("defigo/slack-5.png"), caption: "Joachim in #defigo: 'Awesome Umair. Great job'" },
    ],
  },
  {
    id: "percy",
    accent: "blue",
    accentColor: "#4DA3FF",
    tag: "Foodtech · Co-founder",
    company: "Percy",
    role: "Co-Founder & Head of Sales",
    desc: "Co-founded a virtual cashier SaaS during peak QSR labor crisis. No category existed. Bootstrapped. Engineered every GTM system the company used. Featured on NPR's Planet Money as the #1 business podcast episode.",
    metrics: [
      { value: "$331K", label: "Live ARR" },
      { value: "$878K", label: "Booked ARR" },
      { value: "38", label: "Logos Signed" },
      { value: "32%", label: "Win Rate (from 20%)" },
    ],
    expandedTitle: "Percy: Category Creation, Bootstrapped",
    startingPoint:
      "A category that did not exist. Virtual cashiers for QSR operators. No references, no case studies, no competitive benchmarks. Bootstrapped, capital-constrained, founder-led selling. Friction from franchisees, labor groups, and press. Featured on NPR Planet Money, hitting #1 on the business podcast charts.",
    whatIBuilt: [
      "Defined ICP, segmentation, offer, and value prop for multi-location QSR operators",
      "Built the entire outbound engine: targeting, messaging, cadences, demo flow, objection handling",
      "Sourced 100% of all pipeline and revenue through the system I engineered",
      "$0 to $50K in 3 months. $100K ARR by month 9. $331K live ARR across 17 locations by exit",
      "Doubled Freshii locations 17 to 34 in 30 days. Added 30 new opportunities in the same window",
      "Increased win rate from 20% to 32% in one month via qualification and pipeline hygiene",
      "Built the SDR org, playbook, and partner referral program from scratch",
    ],
    metricsGrid: [
      { value: "$331K", label: "Live ARR" },
      { value: "$878K", label: "Total Booked ARR" },
      { value: "38", label: "Logos Signed" },
      { value: "17", label: "Active Locations" },
    ],
    whyItMatters:
      "Percy is proof that a repeatable GTM engine can be engineered from first principles, even in markets most people consider impossible. No brand. No case studies. No money. No category. And still closed real ARR with real customers.",
    images: [
      { src: assetUrl("percy/linkedin-1.png"), caption: "Crazy Pita CEO Mehdi Zarhloul announcing Percy as their first-ever virtual cashier on LinkedIn" },
      { src: assetUrl("percy/linkedin-2.png"), caption: "CTV News coverage of Percy at an Ontario Freshii location — national media pickup" },
      { src: assetUrl("percy/linkedin-5.png"), caption: "Percy on NPR's Planet Money — #1 business podcast in the country the week of release" },
      { src: assetUrl("percy/linkedin-3.png"), caption: "Percy at the 2022 International Pool Group Summit in Quebec City — channel expansion" },
      { src: assetUrl("percy/linkedin-4.png"), caption: "Percy at the Gordon Food Service Back of House show — 58 reactions, top trade show presence" },
      { src: assetUrl("percy/arr-dashboard.png"), caption: "Live + Booked ARR snapshot: 38 logos, $878,260 total booked ARR across 457 total locations in pipeline" },
    ],
    pdfs: [
      {
        name: "Percy_Investment_Deck.pdf",
        label: "Percy Investor Deck",
        url: assetUrl("percy/investment-deck.pdf"),
      },
    ],
  },
  {
    id: "lane",
    accent: "orange",
    accentColor: "#FF8A4C",
    tag: "Enterprise SaaS · Acquired by VTS",
    company: "Lane",
    role: "Director of Enterprise Sales",
    desc: "Built Lane's first enterprise GTM motion from nothing. Zero ICP, zero outreach strategy, zero enterprise playbook. Advanced Adidas and American Express to contract stage before VTS acquired the company.",
    metrics: [
      { value: "~$500K", label: "Late-stage Pipeline" },
      { value: "F500", label: "Target Accounts" },
      { value: "6-12mo", label: "Enterprise Cycles" },
      { value: "Acquired", label: "Outcome → VTS" },
    ],
    expandedTitle: "Lane: Enterprise Motion, Built from Scratch",
    startingPoint:
      "Lane had strong traction with landlords but zero structure for selling into global tenants. No enterprise ICP, no segmentation, no outreach strategy. No case studies in the occupier segment. Deals required alignment between landlord customers and global tenant buying committees. Long cycles with no existing playbook.",
    whatIBuilt: [
      "Defined the enterprise ICP targeting global tenants inside commercial real estate portfolios",
      "Created outbound sequences targeting workplace, facilities, CRE, HR, and digital transformation",
      "Built multi-phase enterprise process: discovery, pilot, success criteria, rollout, portfolio expansion",
      "Advanced Adidas (~$250K ARR) and American Express (~$250K ARR) to proposal/contract stage",
      "Created the first Enterprise Deal Desk framework Lane ever used",
      "Navigated 5-10 stakeholders per account across IT, security, legal, workplace, and CRE",
    ],
    whyItMatters:
      "When VTS acquired Lane, they paused all tenant/occupier initiatives and later scrapped the vertical entirely. But the work proved Lane could sell enterprise, expanded the TAM story, and directly contributed to the acquisition narrative. The GTM architecture I built was working.",
  },
  {
    id: "clearco",
    accent: "pink",
    accentColor: "#FF6B9D",
    tag: "Fintech · Hyper-growth",
    company: "Clearco",
    role: "Sales Manager",
    desc: "Led the #1 performing sales pod at one of Canada's highest-profile fintechs. Flipped contribution margin from negative to 57%. Closed $5.7M in a single month. Recognized directly by co-founder Michele Romanow.",
    metrics: [
      { value: "$5.7M", label: "Monthly GP (Record)" },
      { value: "57.3%", label: "Contribution Margin" },
      { value: "2.6%", label: "CV Rate (vs 1.3% avg)" },
      { value: "#1", label: "Pod Rank (Company)" },
    ],
    expandedTitle: "Clearco: #1 Pod in Hyper-Growth Fintech",
    startingPoint:
      "Clearco was in hyper-scale mode. Hiring fast, setting aggressive monthly GP targets. The sales org was large and chaotic. Execution quality varied heavily across pods. Pipeline hygiene was inconsistent. Every manager and every pod was ranked in real time on public dashboards.",
    whatIBuilt: [
      "Consistently ranked #1 across critical metrics: GP, contribution margin, conversion rate",
      "Closed $5.7M in a single month (67 opportunities). One of the highest in Clearco history",
      "Flipped contribution margin from 25.5% to 57.3%. The most profitable team in the org",
      "Highest conversion rate among hybrid teams: 2.6% vs 1.3-2.1% company-wide",
      "Built weekly performance reviews, script refinement loops, pipeline deep dives, daily micro-coaching",
      "Highest talk time and daily activity discipline across all pods",
    ],
    metricsGrid: [
      { value: "$5.7M", label: "Monthly GP" },
      { value: "57.3%", label: "Contribution Margin" },
      { value: "2.6%", label: "CV Rate" },
      { value: "67", label: "Opps Closed (1 month)" },
    ],
    whyItMatters:
      "Hyper-growth fintech is the harshest GTM environment: high volume, fast cycles, ruthless metrics. This proves I can build systems that scale, turn average reps into high performers, and produce revenue with strong unit economics simultaneously. Recognized directly by Michele Romanow (Dragon's Den) and awarded Manager of the Quarter.",
    images: [
      { src: assetUrl("clearco/manager-award.png"), caption: "Q3 2020 Manager Award — presented by Andrew D'Souza (CEO) and Michele Romanow (President), Clearco" },
      { src: assetUrl("clearco/performance-data.png"), caption: "Email from Michele Romanow congratulating on Q3 Manager Award" },
      { src: assetUrl("clearco/slack-1.png"), caption: "Team chat: 'That was sick, thanks Umair' — post-presentation feedback" },
      { src: assetUrl("clearco/slack-2.png"), caption: "Vasiliki Belegrinis: 'Massive shoutout to @Umair on being an absolute LEGEND... making Clearbanc history and #1'" },
      { src: assetUrl("clearco/slack-3.png"), caption: "Michele Romanow: 'What incredible leadership. I'm so proud of what you are doing'" },
      { src: assetUrl("clearco/slack-4.png"), caption: "Team-level MTD data: Team Umair leading with 2.6% CV rate (highest in org)" },
      { src: assetUrl("clearco/dashboard-1.png"), caption: "Manager Contribution Margin dashboard — Team Umair at 57.35%, highest by a significant margin" },
      { src: assetUrl("clearco/dashboard-2.png"), caption: "April Stack Rankings: Team Umair ranked #1 in GP at $93,620" },
      { src: assetUrl("clearco/recognition-1.png"), caption: "Caroline Baker + Max on Manager Award: 'No surprise there' / 'One word: visionary'" },
      { src: assetUrl("clearco/slack-5.png"), caption: "Nicole Nelson: '#1 in CM and GP, lowest tenure and fixed costs — outstanding'" },
      { src: assetUrl("clearco/recognition-2.png"), caption: "#moneyteam Closed Won: 67 records, $5,736,815.97 total amount — record month" },
    ],
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: ProofImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  const img = images[index];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.2)",
          background: "transparent",
          color: "#F0EDE6",
          fontSize: "1.4rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1001,
        }}
      >
        ×
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            style={{
              position: "absolute",
              left: 24,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              color: "#F0EDE6",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
            }}
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            style={{
              position: "absolute",
              right: 24,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              color: "#F0EDE6",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
            }}
          >
            ›
          </button>
        </>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "90vw",
          maxHeight: "85vh",
          padding: "0 72px",
        }}
      >
        <img
          src={img.src}
          alt={img.caption}
          style={{
            maxWidth: "100%",
            maxHeight: "75vh",
            objectFit: "contain",
            borderRadius: 8,
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          }}
        />
        {img.caption && (
          <p
            style={{
              marginTop: 16,
              fontSize: "0.8rem",
              color: "#BEA7B7",
              fontFamily: "'DM Sans', sans-serif",
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            {img.caption}
          </p>
        )}
        {images.length > 1 && (
          <p style={{ marginTop: 8, fontSize: "0.7rem", color: "#84627A", fontFamily: "'JetBrains Mono', monospace" }}>
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}

function ImageGallery({ images }: { images: ProofImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 16,
        }}
        className="proof-gallery"
      >
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => openLightbox(i)}
            style={{
              cursor: "pointer",
              borderRadius: 8,
              overflow: "hidden",
              border: "1px solid rgba(255,200,230,0.12)",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
            className="gallery-item"
          >
            <img
              src={img.src}
              alt={img.caption}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
            {img.caption && (
              <div
                style={{
                  padding: "10px 14px",
                  fontSize: "0.75rem",
                  color: "#BEA7B7",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.5,
                  background: "#16161A",
                }}
              >
                {img.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}

function PdfCard({ doc }: { doc: PdfDoc }) {
  return (
    <a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,200,230,0.12)",
        borderRadius: 12,
        padding: "20px 24px",
        textDecoration: "none",
        transition: "border-color 0.2s, background 0.2s",
      }}
      className="pdf-card"
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background: "rgba(245,170,26,0.08)",
          border: "1px solid rgba(245,170,26,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: "1.1rem",
        }}
      >
        📄
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            color: "#F0EDE6",
            fontWeight: 500,
            marginBottom: 2,
          }}
        >
          {doc.label}
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#84627A",
            letterSpacing: "0.05em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {doc.name}
        </div>
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          color: "#F5AA1A",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        View PDF →
      </div>
    </a>
  );
}

function CaseCard({ cs, isOpen, onToggle }: { cs: CaseStudy; isOpen: boolean; onToggle: () => void }) {
  const expandedRef = useRef<HTMLDivElement>(null);

  const accentStyle: Record<string, React.CSSProperties> = {
    green: { background: "#34D399" },
    blue: { background: "#4DA3FF" },
    orange: { background: "#FF8A4C" },
    pink: { background: "#FF6B9D" },
  };

  return (
    <Reveal>
      <div
        style={{
          background: isOpen ? "#1C1C21" : "#16161A",
          border: `1px solid ${isOpen ? "rgba(255,255,255,0.12)" : "rgba(255,200,230,0.10)"}`,
          borderRadius: 20,
          padding: 48,
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.4s ease",
        }}
        onClick={onToggle}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            borderRadius: "20px 20px 0 0",
            ...accentStyle[cs.accent],
          }}
        />

        <div
          style={{
            display: "inline-block",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: 100,
            border: "1px solid rgba(255,200,230,0.10)",
            color: "#BEA7B7",
            marginBottom: 24,
          }}
        >
          {cs.tag}
        </div>
        <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "2rem", letterSpacing: "-0.02em", marginBottom: 4 }}>
          {cs.company}
        </div>
        <div style={{ fontSize: "0.85rem", color: "#84627A", marginBottom: 20 }}>{cs.role}</div>
        <div style={{ fontSize: "0.95rem", color: "#BEA7B7", lineHeight: 1.65, marginBottom: 32 }}>{cs.desc}</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {cs.metrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,200,230,0.10)",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.6rem", lineHeight: 1.1 }}>{m.value}</div>
              <div style={{ fontSize: "0.72rem", color: "#84627A", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 6 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#F5AA1A",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {isOpen ? "Close case study ↑" : "Read case study ↓"}
        </div>
      </div>

      {isOpen && (
        <div
          ref={expandedRef}
          style={{
            marginTop: 2,
            background: "#360928",
            border: "1px solid rgba(255,200,230,0.10)",
            borderRadius: "0 0 20px 20px",
            padding: "48px 48px 56px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
            <h3
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {cs.expandedTitle}
            </h3>
            <button
              onClick={onToggle}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1px solid rgba(255,200,230,0.10)",
                background: "transparent",
                color: "#BEA7B7",
                fontSize: "1.2rem",
                cursor: "pointer",
                flexShrink: 0,
                marginLeft: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>

          <div>
            <SectionLabel>The Starting Point</SectionLabel>
            <p style={{ fontSize: "1rem", color: "#BEA7B7", lineHeight: 1.75, marginBottom: 16, maxWidth: 680 }}>
              {cs.startingPoint}
            </p>

            <SectionLabel>What I Built</SectionLabel>
            <ul style={{ listStyle: "none", marginBottom: 24 }}>
              {cs.whatIBuilt.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.95rem",
                    color: "#BEA7B7",
                    lineHeight: 1.7,
                    paddingLeft: 20,
                    position: "relative",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 10,
                      width: 6,
                      height: 6,
                      background: "#F5AA1A",
                      borderRadius: "50%",
                      display: "block",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {cs.metricsGrid && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 16,
                  margin: "32px 0",
                }}
                className="metrics-grid-full"
              >
                {cs.metricsGrid.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,200,230,0.10)",
                      borderRadius: 12,
                      padding: 20,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.6rem", lineHeight: 1.1 }}>{m.value}</div>
                    <div style={{ fontSize: "0.72rem", color: "#84627A", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 6 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {(cs.images && cs.images.length > 0) || (cs.pdfs && cs.pdfs.length > 0) ? (
              <>
                <SectionLabel>Proof Points</SectionLabel>
                {cs.images && cs.images.length > 0 && <ImageGallery images={cs.images} />}
                {cs.pdfs && cs.pdfs.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: cs.images && cs.images.length > 0 ? 16 : 0 }}>
                    {cs.pdfs.map((pdf, i) => (
                      <PdfCard key={i} doc={pdf} />
                    ))}
                  </div>
                )}
              </>
            ) : null}

            <SectionLabel>Why This Matters</SectionLabel>
            <p style={{ fontSize: "1rem", color: "#BEA7B7", lineHeight: 1.75, maxWidth: 680 }}>{cs.whyItMatters}</p>
          </div>
        </div>
      )}
    </Reveal>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#F5AA1A",
        marginBottom: 20,
        marginTop: 48,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [openCase, setOpenCase] = useState<string | null>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const expandedRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    function onScroll() {
      setNavScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleCase(id: string) {
    if (openCase === id) {
      setOpenCase(null);
    } else {
      setOpenCase(id);
      setTimeout(() => {
        const el = expandedRefs.current[id];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #420b31; color: #F0EDE6; font-family: 'DM Sans', -apple-system, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; line-height: 1.6; }
        .hero-gradient { background: linear-gradient(135deg, #420b31 0%, #5a1646 50%, #6b244d 100%); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #420b31; }
        ::-webkit-scrollbar-thumb { background: #7a3060; border-radius: 3px; }
        ::selection { background: #F5AA1A; color: #0A0A0C; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .gallery-item:hover { transform: scale(1.02); border-color: rgba(255,255,255,0.18) !important; }
        .pdf-card:hover { border-color: rgba(245,170,26,0.2) !important; background: rgba(245,170,26,0.03) !important; }

        @media (max-width: 768px) {
          .proof-gallery { grid-template-columns: 1fr !important; }
          .metrics-grid-full { grid-template-columns: 1fr 1fr !important; }
          .nav-links-wrap { display: none !important; }
          .hero-stats-wrap { flex-direction: column !important; gap: 32px !important; }
          .cases-grid-wrap { grid-template-columns: 1fr !important; }
          .quotes-grid-wrap { grid-template-columns: 1fr !important; }
          .comp-grid-wrap { grid-template-columns: 1fr !important; }
          .section-pad { padding: 80px 24px !important; }
          .hero-pad { padding: 120px 24px 60px !important; }
          .hero-columns { flex-direction: column-reverse !important; }
          .hero-photo-wrap { width: 180px !important; height: 180px !important; }
          .hero-photo-wrap > div { width: 180px !important; height: 180px !important; }
          .case-card-pad { padding: 32px !important; }
          .expanded-pad { padding: 32px 24px 40px !important; }
        }
        @media (max-width: 1024px) {
          .cases-grid-wrap { grid-template-columns: 1fr !important; }
          .quotes-grid-wrap { grid-template-columns: 1fr !important; }
          .comp-grid-wrap { grid-template-columns: 1fr 1fr !important; }
          .metrics-grid-full { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: navScrolled ? "12px 48px" : "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(66,11,49,0.85)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,200,230,0.12)",
          transition: "padding 0.3s ease",
        }}
      >
        <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
          Umair Ahmed
        </div>
        <div className="nav-links-wrap" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="#work" style={{ color: "#BEA7B7", textDecoration: "none", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Case Studies
          </a>
          <a href="#approach" style={{ color: "#BEA7B7", textDecoration: "none", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Approach
          </a>
          <a href="#timeline" style={{ color: "#BEA7B7", textDecoration: "none", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Timeline
          </a>
          <a
            href={assetUrl("resume/Umair_Ahmed_Resume_2026.pdf")}
            download
            style={{
              color: "#BEA7B7",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Resume
          </a>
          <a
            href="mailto:umairadilahmed@gmail.com"
            style={{
              background: "#F5AA1A",
              color: "#0A0A0C",
              padding: "8px 20px",
              borderRadius: 100,
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero-pad hero-gradient"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "140px 48px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 800,
            height: 800,
            background: "radial-gradient(circle, rgba(245,170,26,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Two-column hero layout */}
        <div
          className="hero-columns"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
            width: "100%",
          }}
        >
          {/* Left: text */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#F5AA1A",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 32,
                opacity: 0,
                animation: "fadeUp 0.8s ease 0.2s forwards",
              }}
            >
              GTM Operator · Builder · Revenue Architect
            </div>
            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(3.5rem, 7vw, 7rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "#F0EDE6",
                maxWidth: 900,
                opacity: 0,
                animation: "fadeUp 0.8s ease 0.4s forwards",
              }}
            >
              I build revenue<br />engines from{" "}
              <em style={{ fontStyle: "italic", color: "#F5AA1A" }}>zero.</em>
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#BEA7B7",
                maxWidth: 580,
                marginTop: 32,
                lineHeight: 1.7,
                fontWeight: 300,
                opacity: 0,
                animation: "fadeUp 0.8s ease 0.6s forwards",
              }}
            >
              Senior go-to-market operator. I take companies from no revenue to scalable,
              predictable growth. Four times over. Across fintech, proptech, foodtech, and
              enterprise SaaS.
            </p>
          </div>
          {/* Right: profile photo */}
          <div
            className="hero-photo-wrap"
            style={{
              flex: "0 0 auto",
              opacity: 0,
              animation: "fadeUp 0.8s ease 0.5s forwards",
            }}
          >
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(245,170,26,0.25)",
                boxShadow: "0 0 60px rgba(245,170,26,0.08), 0 24px 64px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={assetUrl("profile.jpg")}
                alt="Umair Ahmed"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="hero-stats-wrap"
          style={{
            display: "flex",
            gap: 64,
            marginTop: 64,
            opacity: 0,
            animation: "fadeUp 0.8s ease 0.8s forwards",
          }}
        >
          {[
            { value: "$5.7M", label: "Single Month Deploy" },
            { value: "$878K", label: "Booked ARR (Co-founder)" },
            { value: "2", label: "Portfolio Acquisitions" },
            { value: "57%", label: "Peak Contribution Margin" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "3rem", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "0.8rem", color: "#84627A", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 8 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TICKER */}
      <div
        style={{
          overflow: "hidden",
          padding: "40px 0",
          borderTop: "1px solid rgba(255,200,230,0.10)",
          borderBottom: "1px solid rgba(255,200,230,0.10)",
          background: "#360928",
        }}
      >
        <div style={{ display: "flex", animation: "scroll 30s linear infinite", width: "max-content" }}>
          {[
            "0-to-1 GTM Build", "Pipeline Architecture", "Outbound Engine Design", "Channel & Partner GTM",
            "Enterprise Sales Cycles", "Revenue Forecasting", "ICP Discovery", "Pricing & Packaging",
            "Sales Hiring & Enablement", "Cross-Border Market Entry",
            "0-to-1 GTM Build", "Pipeline Architecture", "Outbound Engine Design", "Channel & Partner GTM",
            "Enterprise Sales Cycles", "Revenue Forecasting", "ICP Discovery", "Pricing & Packaging",
            "Sales Hiring & Enablement", "Cross-Border Market Entry",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "1.4rem",
                color: "#84627A",
                whiteSpace: "nowrap",
                padding: "0 24px",
                display: "flex",
                alignItems: "center",
                gap: 24,
              }}
            >
              <span style={{ width: 6, height: 6, background: "#F5AA1A", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDIES */}
      <section className="section-pad" id="work" style={{ padding: "120px 48px" }}>
        <Reveal>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#F5AA1A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Selected Work
          </div>
        </Reveal>
        <Reveal>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 700, marginBottom: 24 }}>
            Four companies. Four GTM builds. Real numbers.
          </h2>
        </Reveal>
        <Reveal>
          <p style={{ fontSize: "1.1rem", color: "#BEA7B7", maxWidth: 560, lineHeight: 1.7, fontWeight: 300, marginBottom: 64 }}>
            Each case study represents a distinct GTM challenge. New market entry. Category creation.
            Enterprise motion from scratch. Hyper-growth sales management. All with receipts.
          </p>
        </Reveal>

        <div
          className="cases-grid-wrap"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          {CASES.map((cs) => (
            <div key={cs.id} ref={(el) => { expandedRefs.current[cs.id] = el; }}>
              <CaseCard
                cs={cs}
                isOpen={openCase === cs.id}
                onToggle={() => toggleCase(cs.id)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* QUOTES */}
      <section
        className="section-pad"
        id="quotes"
        style={{
          padding: "120px 48px",
          background: "#360928",
          borderTop: "1px solid rgba(255,200,230,0.10)",
          borderBottom: "1px solid rgba(255,200,230,0.10)",
        }}
      >
        <Reveal>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#F5AA1A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            What People Say
          </div>
        </Reveal>
        <Reveal>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 700, marginBottom: 48 }}>
            Direct from founders, execs, and teammates.
          </h2>
        </Reveal>

        <div
          className="quotes-grid-wrap"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}
        >
          {[
            { text: "What incredible leadership. I'm so proud of what you are doing. You have SUCH a bright future here.", attr: "Michele Romanow", sub: "Co-Founder, Clearco (Dragon's Den)" },
            { text: "Your constant dedication to coaching and improving your reps is truly the sign of a great leader.", attr: "Michele Romanow", sub: "Manager Award Presentation" },
            { text: "One word for you Umair: visionary. You led the team with a clear vision and undeniable belief in our abilities.", attr: "Max", sub: "Senior Rep, Clearco" },
            { text: "Umair, holy shit dude, not just #1 in CM but ALSO IN GP, all while having the lowest tenure and fixed costs.", attr: "Nicole Nelson", sub: "Sales Leadership, Clearco" },
            { text: "Massive shoutout to Umair on being an absolute LEGEND. Now we are making Clearbanc history and #1.", attr: "Vasiliki Belegrinis", sub: "Team Member, Clearco" },
            { text: "This is an important milestone in Defigo's success story in North America.", attr: "Hildur Smaradottir", sub: "Leadership, Defigo" },
          ].map((q, i) => (
            <Reveal key={i}>
              <div
                style={{
                  background: "#16161A",
                  border: "1px solid rgba(255,200,230,0.10)",
                  borderRadius: 20,
                  padding: 36,
                }}
              >
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "4rem", color: "#F5AA1A", lineHeight: 1, marginBottom: 8, opacity: 0.5 }}>
                  &ldquo;
                </div>
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.1rem", fontStyle: "italic", color: "#F0EDE6", lineHeight: 1.6, marginBottom: 20 }}>
                  {q.text}
                </p>
                <div style={{ fontSize: "0.8rem", color: "#84627A" }}>
                  <strong style={{ color: "#BEA7B7", fontWeight: 500 }}>{q.attr}</strong>
                  <br />
                  {q.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-pad" id="approach" style={{ padding: "120px 48px" }}>
        <Reveal>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#F5AA1A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            How I Operate
          </div>
        </Reveal>
        <Reveal>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 700, marginBottom: 24 }}>
            Systems over heroics. Process over luck.
          </h2>
        </Reveal>
        <Reveal>
          <p style={{ fontSize: "1.1rem", color: "#BEA7B7", maxWidth: 560, lineHeight: 1.7, fontWeight: 300, marginBottom: 48 }}>
            I don't just "do sales." I architect the entire revenue machine. From ICP definition
            through closed-won, every step is designed to be repeatable and measurable.
          </p>
        </Reveal>

        <div className="comp-grid-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { icon: "■", title: "0-to-1 GTM Build", desc: "ICP discovery, positioning, messaging, sales process, pipeline architecture. I've done this four times from a blank page." },
            { icon: "▲", title: "Outbound Engine Design", desc: "Targeting, sequencing, cadences, scripts, enrichment, SDR hiring and enablement. The full stack for predictable pipeline generation." },
            { icon: "●", title: "Channel & Partner GTM", desc: "Distribution agreements, integrator ecosystems, partner enablement, co-selling motions. Built from scratch at Defigo with Wesco and Everon." },
            { icon: "◆", title: "Enterprise Deal Execution", desc: "Multi-stakeholder choreography, procurement navigation, pilot frameworks, ROI narratives. 6-12 month cycles with Fortune 500 accounts." },
            { icon: "▬", title: "Sales Team Build & Coaching", desc: "Hiring profiles, onboarding, enablement, performance systems, coaching cadences. Turned average reps into top performers at Clearco." },
            { icon: "★", title: "Revenue Operations", desc: "CRM architecture, pipeline standards, forecasting, unit economics, board reporting. The operating system behind every revenue engine I've built." },
          ].map((c, i) => (
            <Reveal key={i}>
              <div
                style={{
                  background: "#16161A",
                  border: "1px solid rgba(255,200,230,0.10)",
                  borderRadius: 12,
                  padding: 32,
                  transition: "border-color 0.3s, background 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#F5AA1A";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(245,170,26,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,200,230,0.10)";
                  (e.currentTarget as HTMLDivElement).style.background = "#16161A";
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: 16 }}>{c.icon}</div>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.15rem", marginBottom: 8 }}>{c.title}</div>
                <div style={{ fontSize: "0.85rem", color: "#84627A", lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "rgba(255,200,230,0.10)", margin: "0 48px" }} />

      {/* TIMELINE */}
      <section className="section-pad" id="timeline" style={{ padding: "120px 48px" }}>
        <Reveal>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#F5AA1A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Career Arc
          </div>
        </Reveal>
        <Reveal>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: 700, marginBottom: 48 }}>
            A pattern of building, scaling, and outcomes.
          </h2>
        </Reveal>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "rgba(255,200,230,0.10)" }} />
          {[
            { date: "Nov 2023 - Mar 2026", company: "Defigo", role: "RVP Sales → GM Americas → CEO", desc: "Built the US business from zero. Full P&L ownership. National distribution, 16 buildings, 20+ dealer partners.", badge: { label: "3x Promoted", style: { background: "rgba(245,170,26,0.08)", color: "#F5AA1A", border: "1px solid rgba(245,170,26,0.2)" } } },
            { date: "Jun 2022 - Jul 2023", company: "Percy", role: "Co-Founder & Head of Sales", desc: "Co-founded and built GTM for a category-creating QSR automation startup. $0 to $331K live ARR.", badge: { label: "Co-founded", style: { background: "rgba(255,138,76,0.1)", color: "#FF8A4C", border: "1px solid rgba(255,138,76,0.2)" } } },
            { date: "Jun 2021 - Jun 2022", company: "Lane Technologies", role: "Director of Enterprise Sales", desc: "Created first enterprise motion. Advanced Adidas + AmEx to proposal. GTM informed acquisition by VTS.", badge: { label: "Acquired by VTS", style: { background: "rgba(77,163,255,0.1)", color: "#4DA3FF", border: "1px solid rgba(77,163,255,0.2)" } } },
            { date: "Nov 2020 - May 2021", company: "Relay Financial", role: "Head of Sales", desc: "Built foundational sales infrastructure, playbook, onboarding, enablement, and outbound engine during high-growth phase." },
            { date: "Aug 2019 - Oct 2020", company: "Clearco", role: "Sales Manager", desc: "#1 pod company-wide. $5.7M single month. 57.3% contribution margin. Manager Award from Michele Romanow." },
            { date: "Jul 2017 - Aug 2019", company: "Hubdoc", role: "AE → Sales Manager", desc: "Top-performing AE. $750K+ ARR generated. Built and managed 12-person team. Acquired by Xero.", badge: { label: "Acquired by Xero", style: { background: "rgba(77,163,255,0.1)", color: "#4DA3FF", border: "1px solid rgba(77,163,255,0.2)" } } },
          ].map((item, i) => (
            <Reveal key={i}>
              <div style={{ paddingLeft: 48, paddingBottom: 48, position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: -5,
                    top: 4,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#F5AA1A",
                    border: "2px solid #420b31",
                  }}
                />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#84627A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                  {item.date}
                </div>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.4rem", marginBottom: 4 }}>{item.company}</div>
                <div style={{ fontSize: "0.85rem", color: "#BEA7B7", marginBottom: 8 }}>{item.role}</div>
                <div style={{ fontSize: "0.85rem", color: "#84627A", lineHeight: 1.6, maxWidth: 500 }}>{item.desc}</div>
                {item.badge && (
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 100,
                      marginTop: 8,
                      ...item.badge.style,
                    }}
                  >
                    {item.badge.label}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "160px 48px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 800,
            background: "radial-gradient(circle, rgba(245,170,26,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <Reveal>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#F5AA1A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Next Chapter
          </div>
        </Reveal>
        <Reveal>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em", marginBottom: 20 }}>
            Let's build your revenue engine.
          </h2>
        </Reveal>
        <Reveal>
          <p style={{ fontSize: "1.1rem", color: "#BEA7B7", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
            I'm looking for my next operating role. Head of Sales, VP Revenue, CRO.
            If you need someone who can take you from zero to ten, or ten to a hundred,
            let's talk.
          </p>
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:umairadilahmed@gmail.com"
              style={{
                background: "#F5AA1A",
                color: "#0A0A0C",
                padding: "16px 36px",
                borderRadius: 100,
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "inline-block",
              }}
            >
              umairadilahmed@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/umairadilahmed/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "#F0EDE6",
                padding: "16px 36px",
                borderRadius: 100,
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.02em",
                border: "1px solid rgba(255,200,230,0.10)",
                transition: "border-color 0.2s",
                display: "inline-block",
              }}
            >
              LinkedIn
            </a>
            <a
              href={assetUrl("resume/Umair_Ahmed_Resume_2026.pdf")}
              download
              style={{
                background: "transparent",
                color: "#F5AA1A",
                padding: "16px 36px",
                borderRadius: 100,
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.02em",
                border: "1px solid rgba(245,170,26,0.3)",
                transition: "border-color 0.2s",
                display: "inline-block",
              }}
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: 48,
          borderTop: "1px solid rgba(255,200,230,0.10)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ fontSize: "0.8rem", color: "#84627A" }}>
          Umair Ahmed · Toronto, ON · Open to relocation · (647) 389-7773
        </div>
        <div style={{ fontSize: "0.8rem", color: "#84627A" }}>Built with intent.</div>
      </footer>
    </>
  );
}
