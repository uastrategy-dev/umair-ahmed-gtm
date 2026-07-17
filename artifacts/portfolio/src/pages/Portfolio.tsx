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
  mode: string;
  company: string;
  role: string;
  desc: string;
  metrics: { value: string; label: string }[];
  expandedTitle: string;
  startingPoint: string;
  whatIBuilt: string[];
  metricsGrid?: { value: string; label: string }[];
  realStoryOnNumbers?: string;
  whyItMatters: string;
  whatILearned?: string;
  honestAssessment?: string;
  images?: ProofImage[];
  pdfs?: PdfDoc[];
}

const BASE = import.meta.env.BASE_URL;

function assetUrl(path: string) {
  return `${BASE}assets/${path}`;
}

const CASES: CaseStudy[] = [
  {
    id: "clearco",
    accent: "pink",
    accentColor: "#E27C55",
    tag: "Fintech · Hyper-growth",
    mode: "SCALE & OPTIMIZE",
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
  {
    id: "defigo",
    accent: "green",
    accentColor: "#E27C55",
    tag: "Proptech · US Market Entry",
    mode: "ZERO TO ONE",
    company: "Defigo",
    role: "Vice President of Sales",
    desc: "Built Defigo's entire US business from zero. No brand, no pipeline, no channel, no product-market fit for the US. Designed the full GTM stack and signed national distribution with Wesco/Anixter.",
    metrics: [
      { value: "16", label: "Buildings Deployed" },
      { value: "15+", label: "Integrator Partners" },
      { value: "$96K", label: "Recurring ARR" },
      { value: "28mo", label: "Tenure" },
    ],
    expandedTitle: "Defigo: Building a US Business from Nothing",
    startingPoint:
      "Zero revenue. No active pipeline. No channel partners, no distributor relationships, no integrator network. A European product not adapted to US buying behavior, technical standards, or security market structure. Minimal brand awareness in a category dominated by 30-year incumbents.",
    whatIBuilt: [
      "Designed the full ICP, positioning, messaging, sales, channel, enablement, pricing, and onboarding system",
      "Signed national distribution with Wesco/Anixter: 8,000+ integrators, 100+ branch locations",
      "Activated 20+ dealers including Everon (ADT's commercial division)",
      "Built pipeline across NY, Massachusetts, Florida, and New Mexico",
      "Owned full P&L for the US business unit. Managed pricing, supply chain, support, and board reporting",
    ],
    metricsGrid: [
      { value: "16", label: "Buildings Live" },
      { value: "$80K", label: "Hardware Revenue" },
      { value: "$96K", label: "ARR Generated" },
      { value: "20+", label: "Dealer Partners" },
    ],
    realStoryOnNumbers:
      "$80K hardware revenue and $96K ARR in 18 months is early traction, not a scaled outcome. I am direct about that. The value of this case study is not the revenue number. It is the system: national distribution through Wesco/Anixter, 20+ activated dealers, pipeline across four US states, and a repeatable channel motion in a market dominated by 30-year incumbents. The machine was built and working. Revenue was beginning to compound through the channel. The output was early. The architecture was not.",
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
    accentColor: "#E27C55",
    tag: "Foodtech · Co-founder",
    mode: "ZERO TO ONE",
    company: "Percy",
    role: "Co-Founder & Head of Sales",
    desc: "Co-founded a virtual cashier SaaS during peak QSR labor crisis. No category existed. Bootstrapped. Engineered every GTM system the company used. Featured on NPR's Planet Money.",
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
    whatILearned:
      "Percy validated the GTM system but exposed the limits of the business model. Offshore labor arbitrage at $9.99/hour worked at pilot scale. It broke down at the unit economics needed to fund growth. The product worked. The channel worked. The pricing architecture did not survive contact with the cost structure required to scale. That is the honest read. What I took from it: the GTM engine I built generated real revenue in a market that did not exist 12 months earlier. The system was sound. The business model needed a different foundation.",
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
    accentColor: "#E27C55",
    tag: "Enterprise SaaS · Acquired by VTS",
    mode: "ZERO TO ONE",
    company: "Lane",
    role: "Director of Enterprise Sales",
    desc: "Built Lane's first enterprise GTM motion from nothing. Zero ICP, zero outreach strategy, zero enterprise playbook. Advanced Adidas and American Express to proposal before VTS acquired the company.",
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
    honestAssessment:
      "Zero closed enterprise revenue. That is the fact. Two Fortune 500 accounts at proposal stage, then the acquirer killed the vertical. What this case study proves is not revenue. It proves I can build an enterprise sales motion from scratch, navigate 6-12 month cycles with 10 stakeholders, and create a repeatable outbound pipeline in a segment the company had never sold into. The GTM architecture I built was working. VTS confirmed that by acquiring the company. They just chose a different strategic direction afterward.",
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
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
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
        background: "rgba(27,44,74,0.95)",
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
          borderRadius: 0,
          border: "1px solid rgba(244,232,207,0.14)",
          background: "transparent",
          color: "#F4E8CF",
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
              borderRadius: 0,
              border: "1px solid rgba(244,232,207,0.14)",
              background: "rgba(244,232,207,0.05)",
              color: "#F4E8CF",
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
              borderRadius: 0,
              border: "1px solid rgba(244,232,207,0.14)",
              background: "rgba(244,232,207,0.05)",
              color: "#F4E8CF",
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
          }}
        />
        {img.caption && (
          <p
            style={{
              marginTop: 16,
              fontSize: "0.85rem",
              color: "#F4E8CF",
              fontFamily: "'DM Sans', sans-serif",
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            {img.caption}
          </p>
        )}
        {images.length > 1 && (
          <p style={{ marginTop: 8, fontSize: "0.7rem", color: "rgba(244,232,207,0.4)", fontFamily: "'IBM Plex Mono', monospace" }}>
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
              borderRadius: 0,
              overflow: "hidden",
              border: "1px solid rgba(27,44,74,0.15)",
              transition: "border-color 0.2s ease",
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
                  color: "#F4E8CF",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.5,
                  background: "#1b2c4a",
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
        background: "#F4E8CF",
        border: "1px solid rgba(27,44,74,0.15)",
        borderRadius: 0,
        padding: "20px 24px",
        textDecoration: "none",
        transition: "background 0.2s",
      }}
      className="pdf-card"
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 0,
          background: "transparent",
          border: "1px solid rgba(27,44,74,0.15)",
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
            color: "#1b2c4a",
            fontWeight: 500,
            marginBottom: 2,
          }}
        >
          {doc.label}
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            color: "#1b2c4a",
            letterSpacing: "0.05em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            opacity: 0.7,
          }}
        >
          {doc.name}
        </div>
      </div>
      <div
        className="link-hover"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.65rem",
          color: "#E27C55",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          flexShrink: 0,
          position: "relative",
          display: "inline-block",
        }}
      >
        View PDF →
      </div>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="section-label-pad"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#E6A85C",
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Instrument+Serif:ital@0;1&display=swap');
        
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #F4E8CF; color: #1b2c4a; font-family: 'DM Sans', -apple-system, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; line-height: 1.6; }
        
        .hero-gradient { background: linear-gradient(180deg, #1b2c4a 0%, #1b2c4a 70%, #503a3c 88%, #E27C55 120%); }
        .paper-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .dark-section { background: #1b2c4a; color: #F4E8CF; position: relative; }
        .dark-section .hairline { background: rgba(244,232,207,0.14); }
        .dark-section .paper-noise { opacity: 0.05; }
        
        .light-section { background: #F4E8CF; color: #1b2c4a; position: relative; }
        .light-section .hairline { background: rgba(27,44,74,0.15); }
        .light-section .paper-noise { opacity: 0.12; }

        .hairline { height: 1px; width: 100%; display: block; }
        .hairline-v { width: 1px; height: 100%; display: block; }

        ::selection { background: #E27C55; color: #F4E8CF; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .ticker-inner { will-change: transform; }

        .quote-stagger { margin-top: var(--stagger-mt, 0px); }
        @media (max-width: 1024px) {
          .quote-stagger { margin-top: 0 !important; }
        }
        @media (max-width: 768px) {
          .approach-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .proof-gallery { grid-template-columns: 1fr !important; }
        }

        .link-hover { position: relative; display: inline-block; text-decoration: none; }
        .link-hover::after { content: ''; position: absolute; width: 100%; transform: scaleX(0); height: 1px; bottom: 0; left: 0; background-color: #E27C55; transform-origin: bottom right; transition: transform 0.25s ease-out; }
        .link-hover:hover::after { transform: scaleX(1); transform-origin: bottom left; }

        button, a { touch-action: manipulation; }
        
        .pdf-card:hover { background: #e0d0b0 !important; }
        .gallery-item:hover { border-color: rgba(27,44,74,0.3) !important; }

        .halftone-portrait {
          filter: grayscale(100%) contrast(1.2) sepia(100%) hue-rotate(180deg) saturate(200%) brightness(0.8);
          mix-blend-mode: hard-light;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
        }

        @media (max-width: 768px) {
          .nav-links-wrap { display: none !important; }
          .nav-wrap { padding-left: 20px !important; padding-right: 20px !important; background: #1b2c4a !important; }
          .nav-cta-mobile { display: flex !important; }

          .hero-pad { padding: 120px 20px 60px !important; }
          .hero-columns { flex-direction: column !important; align-items: flex-start !important; gap: 40px !important; }
          .hero-photo-wrap { width: 100% !important; max-width: 400px; position: relative !important; align-self: flex-start !important; right: auto !important; top: auto !important; height: auto !important; margin-bottom: 20px; }
          
          .section-pad { padding: 80px 20px !important; }
          .cta-pad { padding: 100px 20px !important; }
          
          .cta-buttons-wrap { flex-direction: column !important; align-items: stretch !important; gap: 12px !important; }
          .cta-buttons-wrap a { text-align: center !important; display: block !important; }

          .quotes-grid-wrap, .two-modes-grid { grid-template-columns: 1fr !important; }
          .metrics-row { flex-direction: column !important; gap: 24px !important; align-items: flex-start !important; }
          .metrics-col { border-right: none !important; border-bottom: 1px solid rgba(27,44,74,0.15) !important; width: 100% !important; padding-bottom: 16px !important; }
          .metrics-col:last-child { border-bottom: none !important; }
          .case-row-header { flex-direction: column !important; gap: 16px !important; }
        }

        @media (max-width: 1024px) {
          .quotes-grid-wrap { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav
        className="nav-wrap"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: navScrolled ? "16px 48px" : "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: navScrolled ? "#1b2c4a" : "transparent",
          transition: "padding 0.3s ease, background 0.3s ease",
        }}
      >
        <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "1.5rem", letterSpacing: "-0.01em", color: "#F4E8CF" }}>
          Umair Ahmed
        </div>
        <div className="nav-cta-mobile" style={{ display: "none" }}>
          <a
            href="mailto:umairadilahmed@gmail.com"
            style={{
              color: "#E27C55",
              fontWeight: 500,
              fontSize: "0.85rem",
              textDecoration: "none",
            }}
          >
            Get in Touch
          </a>
        </div>
        <div className="nav-links-wrap" style={{ display: "flex", gap: 40, alignItems: "center" }}>
          <a href="#work" className="link-hover" style={{ color: "#F4E8CF", textDecoration: "none", fontSize: "0.85rem", fontWeight: 400 }}>
            Case Studies
          </a>
          <a href="#approach" className="link-hover" style={{ color: "#F4E8CF", textDecoration: "none", fontSize: "0.85rem", fontWeight: 400 }}>
            Approach
          </a>
          <a href="#timeline" className="link-hover" style={{ color: "#F4E8CF", textDecoration: "none", fontSize: "0.85rem", fontWeight: 400 }}>
            Timeline
          </a>
          <a
            href="https://gtmarabia.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
            style={{ color: "#F4E8CF", textDecoration: "none", fontSize: "0.85rem", fontWeight: 400 }}
          >
            Writing
          </a>
          <a
            href={assetUrl("resume/Umair_Ahmed_Resume_2026.pdf")}
            download
            className="link-hover"
            style={{
              color: "#F4E8CF",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 400,
            }}
          >
            Resume
          </a>
          <a
            href="mailto:umairadilahmed@gmail.com"
            style={{
              color: "#E27C55",
              fontWeight: 500,
              fontSize: "0.85rem",
              textDecoration: "none",
            }}
            className="link-hover"
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
          padding: "160px 48px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="paper-noise" />
        
        <div
          className="hero-columns"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: 1600,
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Left: text */}
          <div style={{ flex: "1 1 auto", minWidth: 0, maxWidth: 800, position: "relative", zIndex: 2 }}>
            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(4rem, 10vw, 120px)",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                color: "#F4E8CF",
                fontWeight: 400,
                opacity: 0,
                animation: "fadeUp 0.8s ease 0.2s forwards",
              }}
            >
              I build revenue engines <em style={{ fontStyle: "italic", color: "#E27C55" }}>from zero.</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.2rem",
                color: "rgba(244,232,207,0.8)",
                maxWidth: "55ch",
                marginTop: 40,
                lineHeight: 1.6,
                fontWeight: 400,
                opacity: 0,
                animation: "fadeUp 0.8s ease 0.4s forwards",
              }}
            >
              Senior GTM operator. I build revenue engines for venture-backed B2B.
              Zero-to-one twice. Scale-and-professionalize four times. Across fintech,
              proptech, foodtech, and enterprise SaaS.
            </p>
          </div>

          {/* Right: profile photo bleeding off edge */}
          <div
            className="hero-photo-wrap"
            style={{
              position: "absolute",
              right: "-5%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42vw",
              maxWidth: 640,
              aspectRatio: "1 / 1",
              zIndex: 1,
              opacity: 0,
              animation: "fadeUp 1s ease 0.3s forwards",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              {/* Fake halftone dot effect layered under */}
              <div style={{
                position: "absolute", inset: 0, 
                backgroundImage: "radial-gradient(#1b2c4a 15%, transparent 20%), radial-gradient(#1b2c4a 15%, transparent 20%)",
                backgroundSize: "8px 8px",
                backgroundPosition: "0 0, 4px 4px",
                opacity: 0.4,
                mixBlendMode: "multiply",
                zIndex: 2
              }} />
              <img
                src={assetUrl("profile.jpg")}
                alt="Umair Ahmed"
                className="halftone-portrait"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  position: "relative",
                  zIndex: 1
                }}
              />
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            padding: "16px 0",
            borderTop: "1px solid rgba(244,232,207,0.14)",
            zIndex: 10,
          }}
        >
          <div className="ticker-inner" style={{ display: "flex", animation: "scroll 40s linear infinite", width: "max-content" }}>
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
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.8rem",
                  color: "rgba(244,232,207,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  whiteSpace: "nowrap",
                  padding: "0 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                }}
              >
                <span style={{ width: 4, height: 4, background: "#E27C55", borderRadius: "0", flexShrink: 0, display: "inline-block" }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THROUGHLINE */}
      <section className="light-section section-pad" id="throughline" style={{ padding: "120px 48px" }}>
        <div className="paper-noise" />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem", color: "#E27C55" }}>01</span>
              <div className="hairline" style={{ width: 40, background: "#E27C55" }} />
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#E6A85C", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                The Throughline
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.01em", lineHeight: 1.0, marginBottom: 48, maxWidth: 800 }}>
              Two modes. <em style={{ fontStyle: "italic", color: "#E27C55" }}>One system.</em>
            </h2>
          </Reveal>

          <Reveal>
            <div style={{ maxWidth: 640, marginBottom: 80 }}>
              <p style={{ fontSize: "1.15rem", color: "#1b2c4a", lineHeight: 1.6, fontWeight: 400, marginBottom: 24 }}>
                Nine years across six B2B companies in SaaS, fintech, and proptech. Two of them (Hubdoc, Lane) were acquired during my time. The work splits into two modes.
              </p>
              <p style={{ fontSize: "1.15rem", color: "#1b2c4a", lineHeight: 1.6, fontWeight: 400 }}>
                Mode one: build the GTM engine from nothing. No team, no pipeline, no brand in market. ICP, pricing, outbound, channel, hiring, forecasting. All from a blank page. Mode two: walk into an existing revenue org and install the systems that make it perform. Redesign the sales process, tighten unit economics, build the coaching frameworks. The throughline is the same: repeatable revenue architecture that survives after I build it.
              </p>
            </div>
          </Reveal>

          {/* Two Modes visual */}
          <Reveal>
            <div
              className="two-modes-grid"
              style={{ display: "grid", gridTemplateColumns: "6fr 4fr", gap: 0, borderTop: "1px solid rgba(27,44,74,0.15)", borderBottom: "1px solid rgba(27,44,74,0.15)" }}
            >
              {/* Zero to One */}
              <div style={{ padding: "48px 48px 48px 0", borderRight: "1px solid rgba(27,44,74,0.15)" }}>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "2rem", marginBottom: 16 }}>
                  Build from Zero
                </div>
                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: 1.6, marginBottom: 40, maxWidth: 400 }}>
                  No team. No pipeline. No playbook. Create the entire GTM stack.
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {[
                    { name: "Defigo", label: "US market, $0 start" },
                    { name: "Percy", label: "New category, bootstrapped" },
                    { name: "Lane", label: "Enterprise motion, greenfield" },
                  ].map((item) => (
                    <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid rgba(27,44,74,0.15)" }}>
                      <span style={{ fontSize: "1.1rem", fontWeight: 500 }}>{item.name}</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scale and Optimize */}
              <div style={{ padding: "48px 0 48px 48px" }}>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "2rem", marginBottom: 16 }}>
                  Scale What Exists
                </div>
                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: 1.6, marginBottom: 40, maxWidth: 400 }}>
                  Walk into a live org. Install systems. Fix unit economics. Produce results.
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {[
                    { name: "Clearco", label: "#1 pod, 57% CM" },
                    { name: "Hubdoc", label: "$750K ARR, 12-person team" },
                    { name: "Relay", label: "Sales infrastructure build" },
                  ].map((item) => (
                    <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid rgba(27,44,74,0.15)" }}>
                      <span style={{ fontSize: "1.1rem", fontWeight: 500 }}>{item.name}</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHERE GTM IS GOING */}
      <section className="dark-section section-pad" id="future" style={{ padding: "160px 48px" }}>
        <div className="paper-noise" />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem", color: "#E27C55" }}>02</span>
              <div className="hairline" style={{ width: 40, background: "#E27C55" }} />
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#E6A85C", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                The Future
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 32, maxWidth: 1000, color: "#F4E8CF" }}>
              Where GTM is Going
            </h2>
          </Reveal>

          <Reveal>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.25, marginBottom: 64, maxWidth: 800, color: "#F4E8CF" }}>
              <em style={{ fontStyle: "italic", color: "#E27C55" }}>Signals are splitting into two kinds.</em>
            </p>
          </Reveal>

          <Reveal>
            <div style={{ maxWidth: 640, marginLeft: "auto" }}>
              <p style={{ fontSize: "1.15rem", color: "rgba(244,232,207,0.9)", lineHeight: 1.6, fontWeight: 400, marginBottom: 24 }}>
                Every sales team can now buy the same intent data, the same alerts, the same AI-written emails. When everyone gets the same signal the same morning, everyone sends the same email, and the signal stops working. Bought signals decay. The edge is moving to the signals only you can see. Your product usage, your community, your ecosystem, the pattern hiding in your own closed deals.
              </p>
              <p style={{ fontSize: "1.15rem", color: "rgba(244,232,207,0.9)", lineHeight: 1.6, fontWeight: 400 }}>
                That changes what a GTM leader is for. The tooling is plumbing. The scarce skill is the aim. Which accounts to watch, what actually predicts a buyer, and what to say when a signal fires. Lean teams with good aim beat big teams with good tools, and it isn't close. I build that function.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="light-section section-pad" id="work" style={{ padding: "160px 48px" }}>
        <div className="paper-noise" />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem", color: "#E27C55" }}>03</span>
              <div className="hairline" style={{ width: 40, background: "#E27C55" }} />
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#E6A85C", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Selected Work
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.01em", lineHeight: 1.0, maxWidth: 800, marginBottom: 32 }}>
              Four companies. Four GTM builds. <em style={{ fontStyle: "italic", color: "#E27C55" }}>Real numbers.</em>
            </h2>
          </Reveal>

          <Reveal>
            <p style={{ fontSize: "1.15rem", color: "#1b2c4a", maxWidth: 640, lineHeight: 1.6, fontWeight: 400, marginBottom: 80 }}>
              Each case study represents a distinct GTM challenge. New market entry. Category creation.
              Enterprise motion from scratch. Hyper-growth sales management. All with receipts.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
            {CASES.map((cs, index) => {
              return (
                <Reveal key={cs.id}>
                  <div style={{ 
                    borderTop: "1px solid rgba(27,44,74,0.15)", 
                    paddingTop: 48,
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    {/* Header */}
                    <div className="case-row-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem", color: "#E27C55" }}>0{index + 1}</span>
                          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid rgba(27,44,74,0.15)", padding: "4px 10px", color: "#1b2c4a" }}>
                            {cs.tag}
                          </span>
                          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#E27C55" }}>
                            {cs.mode}
                          </span>
                        </div>
                        <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "3.5rem", lineHeight: 1, letterSpacing: "-0.01em" }}>
                          {cs.company}
                        </h3>
                      </div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 400, opacity: 0.8 }}>
                        {cs.role}
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: "1.15rem", lineHeight: 1.6, maxWidth: 700, marginBottom: 48, opacity: 0.9 }}>
                      {cs.desc}
                    </p>

                    {/* Metrics Table Row */}
                    <div className="metrics-row" style={{ 
                      display: "flex", 
                      borderTop: "1px solid rgba(27,44,74,0.15)",
                      borderBottom: "1px solid rgba(27,44,74,0.15)",
                    }}>
                      {cs.metrics.map((m, i) => (
                        <div className="metrics-col" key={i} style={{ 
                          flex: 1, 
                          padding: "24px 24px 24px 0",
                          borderRight: i !== cs.metrics.length - 1 ? "1px solid rgba(27,44,74,0.15)" : "none",
                          paddingLeft: i !== 0 ? 24 : 0
                        }}>
                          <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "2.5rem", color: "#1b2c4a", lineHeight: 1, marginBottom: 8 }}>
                            {m.value}
                          </div>
                          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#E27C55" }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Content */}
                    <div style={{ marginTop: 24, alignSelf: "flex-end" }}>
                      <button
                        onClick={() => toggleCase(cs.id)}
                        className="link-hover"
                        style={{
                          background: "none",
                          border: "none",
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: "0.75rem",
                          color: "#1b2c4a",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          cursor: "pointer",
                          padding: "8px 0"
                        }}
                      >
                        {openCase === cs.id ? "Close case study ↑" : "Read case study ↓"}
                      </button>
                    </div>

                    {openCase === cs.id && (
                      <div ref={(el) => { expandedRefs.current[cs.id] = el; }} style={{ marginTop: 48 }}>
                        <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 48, maxWidth: 800 }}>
                          {cs.expandedTitle}
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, maxWidth: 800 }}>
                          <div>
                            <SectionLabel>The Starting Point</SectionLabel>
                            <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>{cs.startingPoint}</p>
                          </div>

                          <div>
                            <SectionLabel>What I Built</SectionLabel>
                            <ul style={{ listStyle: "none" }}>
                              {cs.whatIBuilt.map((item, i) => (
                                <li key={i} style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: 12, paddingLeft: 24, position: "relative" }}>
                                  <span style={{ position: "absolute", left: 0, top: 12, width: 6, height: 1, background: "#E27C55" }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {(cs.images && cs.images.length > 0) || (cs.pdfs && cs.pdfs.length > 0) ? (
                            <div>
                              <SectionLabel>Proof Points</SectionLabel>
                              {cs.images && cs.images.length > 0 && <ImageGallery images={cs.images} />}
                              {cs.pdfs && cs.pdfs.length > 0 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: cs.images && cs.images.length > 0 ? 24 : 0 }}>
                                  {cs.pdfs.map((pdf, i) => (
                                    <PdfCard key={i} doc={pdf} />
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : null}

                          {cs.realStoryOnNumbers && (
                            <div>
                              <SectionLabel>The Real Story on the Numbers</SectionLabel>
                              <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>{cs.realStoryOnNumbers}</p>
                            </div>
                          )}

                          <div>
                            <SectionLabel>Why This Matters</SectionLabel>
                            <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>{cs.whyItMatters}</p>
                          </div>

                          {cs.whatILearned && (
                            <div>
                              <SectionLabel>What I Learned</SectionLabel>
                              <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>{cs.whatILearned}</p>
                            </div>
                          )}

                          {cs.honestAssessment && (
                            <div>
                              <SectionLabel>The Honest Assessment</SectionLabel>
                              <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>{cs.honestAssessment}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="dark-section section-pad" id="quotes" style={{ padding: "160px 48px" }}>
        <div className="paper-noise" />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem", color: "#E27C55" }}>04</span>
              <div className="hairline" style={{ width: 40, background: "#E27C55" }} />
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#E6A85C", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                What People Say
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.01em", lineHeight: 1.0, maxWidth: 800, marginBottom: 80, color: "#F4E8CF" }}>
              Direct from founders, execs, and teammates.
            </h2>
          </Reveal>

          <div
            className="quotes-grid-wrap"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, alignItems: "start" }}
          >
            {[
              { text: "What incredible leadership. I'm so proud of what you are doing. You have SUCH a bright future here.", attr: "Michele Romanow", sub: "Co-Founder, Clearco (Dragon's Den)", mt: 0 },
              { text: "Your constant dedication to coaching and improving your reps is truly the sign of a great leader.", attr: "Michele Romanow", sub: "Manager Award Presentation", mt: 60 },
              { text: "One word for you Umair: visionary. You led the team with a clear vision and undeniable belief in our abilities.", attr: "Max", sub: "Senior Rep, Clearco", mt: 20 },
              { text: "Umair, holy shit dude, not just #1 in CM but ALSO IN GP, all while having the lowest tenure and fixed costs.", attr: "Nicole Nelson", sub: "Sales Leadership, Clearco", mt: 0 },
              { text: "Massive shoutout to Umair on being an absolute LEGEND. Now we are making Clearbanc history and #1.", attr: "Vasiliki Belegrinis", sub: "Team Member, Clearco", mt: 40 },
              { text: "This is an important milestone in Defigo's success story in North America.", attr: "Hildur Smaradottir", sub: "Leadership, Defigo", mt: 0 },
            ].map((q, i) => (
              <Reveal key={i}>
                <div className="quote-stagger" style={{ "--stagger-mt": `${q.mt}px` } as React.CSSProperties}>
                  <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "6rem", color: "#E27C55", lineHeight: 0.6, marginBottom: 16 }}>
                    &ldquo;
                  </div>
                  <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "1.8rem", fontStyle: "italic", color: "#F4E8CF", lineHeight: 1.2, marginBottom: 24, letterSpacing: "-0.01em" }}>
                    {q.text}
                  </p>
                  <div>
                    <strong style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#E6A85C", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 4 }}>{q.attr}</strong>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(244,232,207,0.6)" }}>{q.sub}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="light-section section-pad" id="approach" style={{ padding: "160px 48px" }}>
        <div className="paper-noise" />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem", color: "#E27C55" }}>05</span>
              <div className="hairline" style={{ width: 40, background: "#E27C55" }} />
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#E6A85C", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                How I Operate
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.01em", lineHeight: 1.0, maxWidth: 800, marginBottom: 32 }}>
              Systems over heroics. <em style={{ fontStyle: "italic", color: "#E27C55" }}>Process over luck.</em>
            </h2>
          </Reveal>

          <Reveal>
            <p style={{ fontSize: "1.15rem", color: "#1b2c4a", maxWidth: 640, lineHeight: 1.6, fontWeight: 400, marginBottom: 80 }}>
              I architect the entire revenue machine. From ICP definition
              through closed-won, every step is designed to be repeatable and measurable.
            </p>
          </Reveal>

          <div style={{ borderTop: "1px solid rgba(27,44,74,0.15)" }}>
            {[
              { num: "01", title: "0-to-1 GTM Build", desc: "ICP discovery, positioning, messaging, sales process, pipeline architecture. I've done this four times from a blank page." },
              { num: "02", title: "Outbound Engine Design", desc: "Targeting, sequencing, cadences, scripts, enrichment, SDR hiring and enablement. The full stack for predictable pipeline generation." },
              { num: "03", title: "Channel & Partner GTM", desc: "Distribution agreements, integrator ecosystems, partner enablement, co-selling motions. Built from scratch at Defigo with Wesco and Everon." },
              { num: "04", title: "Enterprise Deal Execution", desc: "Multi-stakeholder choreography, procurement navigation, pilot frameworks, ROI narratives. 6-12 month cycles with Fortune 500 accounts." },
              { num: "05", title: "Sales Team Build & Coaching", desc: "Hiring profiles, onboarding, enablement, performance systems, coaching cadences. Turned average reps into top performers at Clearco." },
              { num: "06", title: "Revenue Operations", desc: "CRM architecture, pipeline standards, forecasting, unit economics, board reporting. The operating system behind every revenue engine I've built." },
            ].map((c, i) => (
              <Reveal key={i}>
                <div className="approach-row" style={{ 
                  display: "grid", 
                  gridTemplateColumns: "100px 300px 1fr", 
                  gap: 40,
                  padding: "40px 0",
                  borderBottom: "1px solid rgba(27,44,74,0.15)",
                  alignItems: "start"
                }}>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "1rem", color: "#E27C55" }}>
                    {c.num}
                  </div>
                  <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "2rem", color: "#1b2c4a", lineHeight: 1.1 }}>
                    {c.title}
                  </div>
                  <div style={{ fontSize: "1.05rem", color: "rgba(27,44,74,0.8)", lineHeight: 1.6, maxWidth: 500 }}>
                    {c.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="light-section section-pad" id="timeline" style={{ padding: "160px 48px" }}>
        <div className="paper-noise" />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.85rem", color: "#E27C55" }}>06</span>
              <div className="hairline" style={{ width: 40, background: "#E27C55" }} />
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#E6A85C", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Career Arc
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.01em", lineHeight: 1.0, maxWidth: 800, marginBottom: 80 }}>
              A pattern of building, scaling, and <em style={{ fontStyle: "italic", color: "#E27C55" }}>outcomes.</em>
            </h2>
          </Reveal>

          <div style={{ position: "relative", maxWidth: 800 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "rgba(27,44,74,0.15)" }} />
            {[
              { date: "Nov 2023 - Mar 2026", company: "Defigo", role: "Vice President of Sales", desc: "Built the US business from zero. Full P&L ownership. National distribution, 16 buildings, 15+ dealer partners." },
              { date: "Jun 2022 - Jul 2023", company: "Percy", role: "Co-Founder & Head of Sales", desc: "Co-founded and built GTM for a category-creating QSR automation startup. $0 to $331K live ARR." },
              { date: "Jun 2021 - Jun 2022", company: "Lane Technologies", role: "Director of Enterprise Sales", desc: "Created first enterprise motion. Advanced Adidas + AmEx to proposal. Company acquired by VTS.", badge: { label: "Acquired by VTS", style: { border: "1px solid #E6A85C", color: "#E6A85C" } } },
              { date: "Nov 2020 - May 2021", company: "Relay Financial", role: "Head of Sales", desc: "Built foundational sales infrastructure, playbook, onboarding, enablement, and outbound engine during high-growth phase." },
              { date: "Aug 2019 - Oct 2020", company: "Clearco", role: "Sales Manager", desc: "#1 pod company-wide. $5.7M single month. 57.3% contribution margin. Manager Award from Michele Romanow." },
              { date: "Jul 2017 - Aug 2019", company: "Hubdoc", role: "AE → Sales Manager", desc: "Top-performing AE. $750K+ ARR generated. Built and managed 12-person team. Acquired by Xero.", badge: { label: "Acquired by Xero", style: { border: "1px solid #E6A85C", color: "#E6A85C" } } },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="timeline-content" style={{ paddingLeft: 48, paddingBottom: 64, position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: -3,
                      top: 6,
                      width: 7,
                      height: 7,
                      background: "#E27C55",
                    }}
                  />
                  <div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#E27C55", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>
                      {item.date}
                    </div>
                    <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "2rem", marginBottom: 8, color: "#1b2c4a", lineHeight: 1 }}>{item.company}</div>
                    <div style={{ fontSize: "1rem", color: "#1b2c4a", fontWeight: 500, marginBottom: 12 }}>{item.role}</div>
                    <div style={{ fontSize: "1.05rem", color: "rgba(27,44,74,0.8)", lineHeight: 1.6, maxWidth: 500 }}>{item.desc}</div>
                    {item.badge && (
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "6px 12px",
                          marginTop: 16,
                          ...item.badge.style,
                        }}
                      >
                        {item.badge.label}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="dark-section section-pad cta-pad"
        style={{
          padding: "160px 48px",
        }}
      >
        <div className="paper-noise" />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#E6A85C", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 24 }}>
              Next Chapter
            </div>
          </Reveal>
          <Reveal>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(4rem, 8vw, 6rem)", letterSpacing: "-0.02em", marginBottom: 32, color: "#F4E8CF", lineHeight: 1 }}>
              The next <em style={{ fontStyle: "italic", color: "#E27C55" }}>build.</em>
            </h2>
          </Reveal>
          <Reveal>
            <p style={{ fontSize: "1.15rem", color: "rgba(244,232,207,0.8)", maxWidth: 500, margin: "0 auto 56px", lineHeight: 1.6 }}>
              I'm looking for my next operating role. VP Sales at a venture-backed B2B company.
              If you need someone who can take you from zero to ten, or ten to a hundred,
              let's talk.
            </p>
          </Reveal>
          <Reveal>
            <div className="cta-buttons-wrap" style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:umairadilahmed@gmail.com"
                style={{
                  background: "#E27C55",
                  color: "#F4E8CF",
                  padding: "18px 40px",
                  borderRadius: 0,
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d16842")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#E27C55")}
              >
                umairadilahmed@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/umairadilahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover"
                style={{
                  color: "#F4E8CF",
                  padding: "18px 0",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                LinkedIn
              </a>
              <a
                href={assetUrl("resume/Umair_Ahmed_Resume_2026.pdf")}
                download
                className="link-hover"
                style={{
                  color: "#F4E8CF",
                  padding: "18px 0",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="dark-section footer-pad"
        style={{
          padding: "48px 48px",
          borderTop: "1px solid rgba(244,232,207,0.14)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "rgba(244,232,207,0.5)" }}>
          Umair Ahmed · Toronto, ON · Open to relocation
        </div>
      </footer>
    </>
  );
}
