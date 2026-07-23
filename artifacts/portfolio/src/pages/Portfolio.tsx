const BASE = import.meta.env.BASE_URL;
const assetUrl = (path: string) => `${BASE}assets/${path}`;

const TICKER_ITEMS = [
  "0-to-1 GTM Build",
  "Pipeline Architecture",
  "Outbound Engine Design",
  "Channel & Partner GTM",
  "Enterprise Sales Cycles",
  "Revenue Forecasting",
  "ICP Discovery",
  "Pricing & Packaging",
  "Sales Hiring & Enablement",
  "Cross-Border Market Entry",
];

function TickerSpan() {
  return (
    <span>
      {TICKER_ITEMS.map((item, i) => (
        <span key={i}>
          {item} <b>▪</b>{" "}
        </span>
      ))}
    </span>
  );
}

const CASES = [
  {
    id: "clearco",
    kick: "Fintech · Scale & Optimize",
    company: "Clearco",
    role: "Sales Manager",
    desc: "Led the #1 performing sales pod at one of Canada's highest-profile fintechs. Flipped contribution margin from negative to 57%. Deployed $5.7M in capital in a single month. Recognized directly by co-founder Michele Romanow.",
    flip: false,
    stats: [
      { v: "$5.7M", em: true, k: "Capital deployed (record mo)" },
      { v: "57.3%", em: false, k: "Contribution margin" },
      { v: "2.6%", em: false, k: "CV rate (vs 1.3% avg)" },
      { v: "#1", em: false, k: "Pod rank (company)" },
    ],
  },
  {
    id: "defigo",
    kick: "Proptech · Zero to One",
    company: "Defigo",
    role: "Vice President of Sales",
    desc: "Built Defigo's entire US business from zero. No brand, no pipeline, no channel. Designed the full GTM stack and signed national distribution with Wesco/Anixter.",
    flip: true,
    stats: [
      { v: "16", em: true, k: "Buildings deployed" },
      { v: "15+", em: false, k: "Integrator partners" },
      { v: "$96K", em: false, k: "Recurring ARR" },
      { v: "28mo", em: false, k: "Tenure" },
    ],
  },
  {
    id: "percy",
    kick: "Foodtech · Co-Founder",
    company: "Percy",
    role: "Co-Founder & Head of Sales",
    desc: "Co-founded a virtual cashier SaaS during peak QSR labor crisis. No category existed. Bootstrapped. Engineered every GTM system the company used. Featured on NPR's Planet Money.",
    flip: false,
    stats: [
      { v: "$700K", em: true, k: "Signed & live ARR" },
      { v: "$331K", em: false, k: "Live ARR" },
      { v: "13", em: false, k: "Logos (38 locations)" },
      { v: "32%", em: false, k: "Win rate (from 20%)" },
    ],
  },
  {
    id: "lane",
    kick: "Enterprise SaaS · Zero to One",
    company: "Lane",
    role: "Director of Enterprise Sales",
    desc: "Built Lane's first enterprise GTM motion from nothing. Zero ICP, zero outreach strategy, zero enterprise playbook. Advanced Adidas and American Express to proposal before VTS acquired the company.",
    flip: true,
    stats: [
      { v: "~$500K", em: true, k: "Pipeline to proposal" },
      { v: "F500", em: false, k: "Target accounts" },
      { v: "6-12mo", em: false, k: "Enterprise cycles" },
      { v: "VTS", em: false, k: "Outcome · acquired" },
    ],
  },
];

const QUOTES = [
  {
    size: "big",
    text: "What incredible leadership. I'm so proud of what you are doing. You have SUCH a bright future here.",
    attr: "Michele Romanow",
    sub: "Co-Founder, Clearco (Dragon's Den)",
  },
  {
    size: "mid",
    text: "Umair, holy shit dude, not just #1 in CM but ALSO IN GP, all while having the lowest tenure and fixed costs.",
    attr: "Nicole Nelson",
    sub: "Sales Leadership, Clearco",
  },
  {
    size: "mid",
    text: "Your constant dedication to coaching and improving your reps is truly the sign of a great leader.",
    attr: "Michele Romanow",
    sub: "Manager Award Presentation",
  },
  {
    size: "mid",
    text: "One word for you Umair: visionary. You led the team with a clear vision and undeniable belief in our abilities.",
    attr: "Max",
    sub: "Senior Rep, Clearco",
  },
  {
    size: "mid",
    text: "Massive shoutout to Umair on being an absolute LEGEND. Now we are making Clearbanc history and #1.",
    attr: "Vasiliki Belegrinis",
    sub: "Team Member, Clearco",
  },
  {
    size: "mid",
    text: "This is an important milestone in Defigo's success story in North America.",
    attr: "Hildur Smaradottir",
    sub: "Leadership, Defigo",
  },
];

const OPS = [
  {
    title: "0-to-1 GTM Build",
    desc: "ICP discovery, positioning, messaging, sales process, pipeline architecture. Four times from a blank page.",
  },
  {
    title: "Outbound Engine Design",
    desc: "Targeting, sequencing, cadences, scripts, enrichment, SDR hiring and enablement. Predictable pipeline generation.",
  },
  {
    title: "Channel & Partner GTM",
    desc: "Distribution agreements, integrator ecosystems, partner enablement, co-selling motions. Built from scratch at Defigo.",
  },
  {
    title: "Enterprise Deal Execution",
    desc: "Multi-stakeholder choreography, procurement navigation, pilot frameworks, ROI narratives. Fortune 500 cycles.",
  },
  {
    title: "Sales Team Build & Coaching",
    desc: "Hiring profiles, onboarding, enablement, performance systems, coaching cadences. Average reps into top performers.",
  },
  {
    title: "Revenue Operations",
    desc: "CRM architecture, pipeline standards, forecasting, unit economics, board reporting. The operating system underneath.",
  },
];

const ARC = [
  {
    when: "Nov 2023 – Mar 2026",
    company: "Defigo",
    tag: null,
    role: "Vice President of Sales",
    desc: "Built the US business from zero. Full P&L ownership. National distribution, 16 buildings, 15+ integrator partners.",
  },
  {
    when: "Jun 2022 – Jul 2023",
    company: "Percy",
    tag: null,
    role: "Co-Founder & Head of Sales",
    desc: "Co-founded and built GTM for a category-creating QSR automation startup. Built to $331K live ARR, over $700K signed and live, entirely on cold outbound.",
  },
  {
    when: "Jun 2021 – Jun 2022",
    company: "Lane Technologies",
    tag: "Acquired · VTS",
    role: "Director of Enterprise Sales",
    desc: "Created first enterprise motion. Advanced Adidas + AmEx to proposal. Company acquired by VTS.",
  },
  {
    when: "Nov 2020 – May 2021",
    company: "Relay Financial",
    tag: null,
    role: "Head of Sales",
    desc: "Built the sales function from zero, including the playbook, onboarding, enablement, and outbound engine. Head of Sales through the Bain Capital-led Series A and named in the investment memo. The accountant channel drove 40% of all customers.",
  },
  {
    when: "Aug 2019 – Oct 2020",
    company: "Clearco",
    tag: null,
    role: "Sales Manager",
    desc: "#1 pod company-wide. $5.7M single month. 57.3% contribution margin. Manager Award from Michele Romanow.",
  },
  {
    when: "Jul 2017 – Aug 2019",
    company: "Hubdoc",
    tag: "Acquired · Xero",
    role: "AE → Sales Manager",
    desc: "#1 rep 22 of 24 months, averaging 90+ new subscriptions per month. Built and managed a 12-person team through the Xero acquisition.",
  },
];

export default function Portfolio() {
  return (
    <div className="site">
      <style>{`
        :root{
          --dusk-950:#1F0A1E; --dusk-900:#2A0E28; --dusk-800:#361232; --plum:#4A1943; --magenta:#7E2F5E;
          --rose:#F2E3E6; --ink:#2A0E28;
          --milk:#F5EADF; --milk-60:rgba(245,234,223,.62); --milk-40:rgba(245,234,223,.4);
          --amber:#E29A46; --coral:#CE6B45;
          --hairD:rgba(245,234,223,.14); --hairL:rgba(42,14,40,.16);
          --serif:'Young Serif',Georgia,serif; --sans:'Hanken Grotesk',system-ui,sans-serif;
          --mono:'Martian Mono',ui-monospace,monospace; --pixel:'Handjet',monospace;
        }
        *,*::before,*::after{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0;font-family:var(--sans);font-size:17px;line-height:1.62;color:var(--milk);background:var(--dusk-900)}
        h1,h2,h3,p,figure,blockquote{margin:0}
        .wrap{max-width:1240px;margin:0 auto;padding:0 44px}
        .eyebrow{font-family:var(--pixel);font-weight:700;font-size:17px;letter-spacing:.32em;text-transform:uppercase;color:var(--amber)}
        h2.d{font-family:var(--serif);font-weight:400;font-size:clamp(38px,4.8vw,62px);line-height:1.05;margin:14px 0 26px}
        h2.d .px{font-family:var(--pixel);font-weight:700;color:var(--amber);font-size:1.06em}
        .dither{position:relative}
        .dither::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.14;
          background-image:radial-gradient(rgba(245,234,223,.5) .7px,transparent .8px),radial-gradient(rgba(245,234,223,.28) .7px,transparent .8px);
          background-size:6px 6px,11px 11px;background-position:0 0,3px 5px}
        .hero{position:relative;min-height:97vh;display:flex;flex-direction:column;overflow:hidden;background:
          radial-gradient(150% 95% at 88% 118%, rgba(226,154,70,.34) 0%, rgba(206,107,69,.16) 30%, rgba(206,107,69,0) 55%),
          linear-gradient(160deg,var(--dusk-950) 4%,var(--dusk-900) 38%,var(--plum) 72%,var(--magenta) 105%)}
        .hero::after{content:"";position:absolute;left:0;right:0;bottom:52px;height:180px;pointer-events:none;opacity:.20;
          background:repeating-linear-gradient(90deg,rgba(245,234,223,.55) 0 1px,transparent 1px 7px);
          -webkit-mask-image:linear-gradient(to top,black,transparent);mask-image:linear-gradient(to top,black,transparent)}
        .nav{display:flex;align-items:center;justify-content:space-between;padding:30px 46px;position:relative;z-index:3}
        .wordmark{font-family:var(--serif);font-size:22px;color:var(--milk);text-decoration:none}
        .nav-links{display:flex;align-items:center;gap:26px}
        .nav a{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--milk-60);text-decoration:none}
        .nav a:hover{color:var(--amber)}
        .nav a.wordmark{font-family:var(--serif);font-size:22px;color:var(--milk);letter-spacing:0;text-transform:none}
        .nav a.cta{color:var(--dusk-900);background:var(--amber);padding:11px 16px;border-radius:2px;font-weight:700}
        .nav a.cta:hover{color:var(--dusk-900)}
        .hero-grid{flex:1;position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,58fr) minmax(0,42fr);gap:40px;align-items:center;padding:10px 46px 60px}
        .hero h1{font-family:var(--serif);font-weight:400;font-size:clamp(54px,6.6vw,98px);line-height:1.01;margin:0 0 32px}
        .hero h1 .px{font-family:var(--pixel);font-weight:700;color:var(--amber);font-size:1.08em}
        .hero-copy .eyebrow{font-size:19px;display:block;margin-bottom:26px}
        .hero-copy p{max-width:50ch;font-size:18px;color:var(--milk-60);margin:0}
        .artifacts{position:relative;height:480px}
        .card{position:absolute;background:#20091F;border:1px solid rgba(226,154,70,.5);border-radius:3px;box-shadow:10px 10px 0 rgba(31,10,30,.55);padding:22px 24px}
        .card .t{font-family:var(--pixel);font-weight:700;font-size:15px;letter-spacing:.24em;text-transform:uppercase;color:var(--amber);margin-bottom:16px}
        .card .row{display:flex;justify-content:space-between;gap:26px;padding:8px 0;border-top:1px solid var(--hairD);font-family:var(--mono)}
        .card .row .k{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--milk-40);padding-top:3px}
        .card .row .v{font-size:14px;font-weight:700;color:var(--milk);font-variant-numeric:tabular-nums}
        .card .big{font-family:var(--serif);font-size:46px;line-height:1;color:var(--milk)}
        .card .big span{color:var(--amber)}
        .card.a{top:0;right:4%;width:min(340px,88%);transform:rotate(2.2deg)}
        .card.b{bottom:0;left:0;width:min(300px,80%);transform:rotate(-2.4deg)}
        .ticker{position:relative;z-index:2;border-top:1px solid var(--hairD);overflow:hidden;padding:13px 0}
        .tk{display:inline-block;white-space:nowrap;animation:tick 36s linear infinite}
        .tk span{font-family:var(--pixel);font-weight:500;font-size:16px;letter-spacing:.22em;text-transform:uppercase;color:var(--milk-40);padding:0 14px}
        .tk b{color:var(--coral);font-weight:500}
        @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @media(prefers-reduced-motion:reduce){.tk{animation:none}}
        section{padding:118px 0}
        .dark-800{background:var(--dusk-800)} .dark-900{background:var(--dusk-900)}
        .lede{max-width:60ch;color:var(--milk-60);font-size:18px}
        .modes{display:grid;grid-template-columns:1.08fr .92fr;gap:70px;margin-top:54px}
        .mode h3{font-family:var(--serif);font-weight:400;font-size:29px;margin:0 0 10px}
        .mode>p{margin:0 0 26px;color:var(--milk-60)}
        .ledger{border-top:1px solid var(--hairD)}
        .lrow{display:grid;grid-template-columns:1fr auto;gap:14px;align-items:baseline;padding:14px 2px;border-bottom:1px solid var(--hairD)}
        .lrow .co{font-family:var(--serif);font-size:20px;color:var(--milk)}
        .lrow .fact{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--coral);text-align:right}
        .pov-cols{columns:2;column-gap:60px;max-width:1060px;margin-top:40px}
        .pov-cols p{break-inside:avoid;margin:0 0 22px;font-size:17.5px;line-height:1.72;color:var(--milk-60)}
        .pov-cols p b{color:var(--milk);font-weight:600}
        .rose{background:var(--rose);color:var(--ink)}
        .rose .eyebrow{color:var(--coral)} .rose h2.d .px{color:var(--coral)}
        .case{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:56px;padding:62px 0;border-top:1px solid var(--hairL);align-items:start}
        .case:first-of-type{border-top:none;padding-top:44px}
        .case.flip .meta{order:2}
        .case.flip{grid-template-columns:minmax(0,7fr) minmax(0,5fr)}
        .meta .kick{font-family:var(--pixel);font-weight:700;font-size:14px;letter-spacing:.26em;text-transform:uppercase;color:var(--coral);margin-bottom:12px}
        .meta h3{font-family:var(--serif);font-weight:400;font-size:42px;margin:0 0 4px;color:var(--ink)}
        .meta .role{font-family:var(--mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:rgba(42,14,40,.55);margin-bottom:18px}
        .meta p{margin:0;color:rgba(42,14,40,.82);max-width:46ch}
        .stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-left:1px solid var(--hairL);min-width:0}
        .stat{padding:8px 14px 4px;border-right:1px solid var(--hairL);min-width:0}
        .stat .v{font-family:var(--serif);font-size:clamp(22px,2.4vw,34px);line-height:1.08;font-variant-numeric:tabular-nums;color:var(--ink);white-space:nowrap}
        .stat .v em{font-style:normal;color:var(--coral)}
        .stat .k{font-family:var(--mono);font-size:8.8px;letter-spacing:.14em;text-transform:uppercase;color:rgba(42,14,40,.58);margin-top:8px;line-height:1.6;overflow-wrap:break-word}
        .quotes{column-count:2;column-gap:60px;margin-top:44px;max-width:1100px}
        .q{break-inside:avoid;margin:0 0 52px}
        .q blockquote{margin:0;font-family:var(--serif);line-height:1.34;color:var(--milk)}
        .q.big blockquote{font-size:29px} .q.mid blockquote{font-size:21.5px}
        .q blockquote::before{content:"\\201C";color:var(--amber)}
        .q figcaption{margin-top:13px;font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--milk-40)}
        .q figcaption b{color:var(--amber);font-weight:400}
        .op-grid{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);gap:70px;align-items:center}
        .plate{position:relative;aspect-ratio:4/5;border:1px solid rgba(226,154,70,.55);border-radius:3px;box-shadow:12px 12px 0 rgba(31,10,30,.55);overflow:hidden;margin:0}
        .plate img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.12) brightness(1.02);display:block}
        .plate .tint{position:absolute;inset:0;background:linear-gradient(160deg,#B4749B 0%,#6E2A58 55%,#2A0E28 100%);mix-blend-mode:multiply}
        .plate .lift{position:absolute;inset:0;background:#F5EADF;mix-blend-mode:soft-light;opacity:.25}
        .plate .dots{position:absolute;inset:0;opacity:.5;mix-blend-mode:overlay;background-image:radial-gradient(rgba(31,10,30,.95) .9px,transparent 1px);background-size:5px 5px}
        .facts{display:flex;gap:34px;margin-top:30px;flex-wrap:wrap}
        .f .k{font-family:var(--pixel);font-weight:700;font-size:13px;letter-spacing:.2em;text-transform:uppercase;color:var(--amber)}
        .f .v{font-family:var(--mono);font-size:12.5px;color:var(--milk);margin-top:6px}
        .ops{display:grid;grid-template-columns:1fr 1fr;gap:0 70px;margin-top:44px}
        .op{display:grid;grid-template-columns:auto 1fr;gap:20px;padding:25px 0;border-top:1px solid var(--hairD)}
        .op .g{font-family:var(--pixel);font-weight:700;color:var(--coral);font-size:18px;padding-top:4px}
        .op h3{font-family:var(--serif);font-weight:400;font-size:22.5px;margin:0 0 7px;color:var(--milk)}
        .op p{margin:0;font-size:15px;color:var(--milk-60)}
        .arc{position:relative;margin-top:52px;padding-left:44px}
        .arc::before{content:"";position:absolute;left:8px;top:8px;bottom:8px;width:1px;background:var(--hairD)}
        .ai{position:relative;padding-bottom:42px}
        .ai::before{content:"";position:absolute;left:-40px;top:8px;width:9px;height:9px;background:var(--amber)}
        .ai .when{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--milk-40)}
        .ai h3{font-family:var(--serif);font-weight:400;font-size:26px;margin:7px 0 3px;color:var(--milk)}
        .ai h3 .tag{font-family:var(--pixel);font-weight:700;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--amber);border:1px solid rgba(226,154,70,.55);padding:3px 8px;margin-left:12px;vertical-align:middle}
        .ai .role{font-family:var(--mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--coral)}
        .ai p{margin:9px 0 0;max-width:58ch;color:var(--milk-60)}
        .contact{padding:150px 0 110px;background:
          radial-gradient(130% 100% at 12% 118%, rgba(226,154,70,.3) 0%, rgba(226,154,70,0) 48%),
          linear-gradient(150deg,var(--dusk-950) 0%,var(--plum) 55%,var(--magenta) 110%)}
        .contact h2{font-family:var(--serif);font-weight:400;font-size:clamp(52px,7vw,94px);margin:12px 0 28px;color:var(--milk)}
        .contact h2 .px{font-family:var(--pixel);font-weight:700;color:var(--amber);font-size:1.06em}
        .contact p{max-width:54ch;font-size:18.5px;color:var(--milk-60)}
        a.mail{font-family:var(--serif);font-size:25px;color:var(--amber);text-decoration:none;border-bottom:1px solid var(--amber)}
        a.min{font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--milk-60);text-decoration:none}
        a.min:hover{color:var(--amber)}
        .contact-links{display:flex;align-items:baseline;gap:34px;flex-wrap:wrap;margin-top:38px}
        .foot{margin-top:86px;padding-top:24px;border-top:1px solid var(--hairD);display:flex;justify-content:space-between;font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--milk-40)}
        @media(max-width:960px){
          .hero-grid{grid-template-columns:1fr}
          .artifacts{height:580px}
          .modes,.ops,.op-grid{grid-template-columns:1fr}
          .pov-cols{columns:1}
          .quotes{column-count:1}
          .case,.case.flip{grid-template-columns:1fr}
          .case.flip .meta{order:0}
          .stats{grid-template-columns:repeat(2,minmax(0,1fr))}
          section{padding:84px 0}
          .nav-links a:not(.cta){display:none}
          .wrap{padding:0 24px}
          .nav{padding:24px 24px}
          .hero-grid{padding:10px 24px 60px}
          .lrow{grid-template-columns:1fr;gap:4px}
          .lrow .fact{text-align:left}
          a.mail{font-size:19px;overflow-wrap:anywhere}
          .foot{flex-direction:column;gap:10px}
          .foot span{white-space:nowrap}
        }
      `}</style>

      {/* 1. HERO */}
      <header className="hero dither">
        <nav className="nav">
          <a className="wordmark" href="#top">Umair Ahmed</a>
          <div className="nav-links">
            <a href="#work">Case Studies</a>
            <a href="#approach">Approach</a>
            <a href="#timeline">Timeline</a>
            <a href="https://gtmarabia.substack.com/" target="_blank" rel="noopener noreferrer">Writing</a>
            <a href={assetUrl("resume/Umair_Ahmed_General_Resume.pdf")} download>Resume</a>
            <a className="cta" href="mailto:umairadilahmed@gmail.com">Get in Touch</a>
          </div>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Revenue Operator · Toronto</span>
            <h1>
              I build revenue engines <span className="px">from zero.</span>
            </h1>
            <p>
              Senior GTM operator. I build revenue engines for venture-backed B2B. Zero-to-one twice. Scale-and-professionalize four times. Across fintech, proptech, foodtech, and enterprise SaaS.
            </p>
          </div>
          <div className="artifacts">
            <div className="card a">
              <div className="t">Track Record</div>
              <div className="row"><span className="k">Rep at Hubdoc · 22 of 24 months</span><span className="v">#1</span></div>
              <div className="row"><span className="k">Pod at Clearco · company-wide</span><span className="v">#1</span></div>
              <div className="row"><span className="k">Contribution margin · from negative</span><span className="v">+57.3%</span></div>
            </div>
            <div className="card b">
              <div className="t">Track Record</div>
              <div className="big">$5.7M</div>
              <div className="row" style={{ marginTop: 4 }}><span className="k">Capital deployed · single month</span></div>
              <div className="row"><span className="k">Demo to signup · Relay</span><span className="v">80%</span></div>
              <div className="row"><span className="k">Companies acquired in my tenure</span><span className="v">2</span></div>
            </div>
          </div>
        </div>
        <div className="ticker">
          <div className="tk">
            <TickerSpan />
            <TickerSpan />
          </div>
        </div>
      </header>

      {/* 2. THE RECORD */}
      <section className="dark-800 dither">
        <div className="wrap">
          <span className="eyebrow">The Record</span>
          <h2 className="d">Two modes. <span className="px">One system.</span></h2>
          <p className="lede">
            Nine years across six B2B companies in SaaS, fintech, and proptech. Two of them (Hubdoc, Lane) were acquired during my time. The work splits into two modes.
          </p>
          <div className="modes">
            <div className="mode">
              <h3>Build from zero</h3>
              <p>No team, no pipeline, no brand in market. ICP, pricing, outbound, channel, hiring, forecasting. All from a blank page.</p>
              <div className="ledger">
                <div className="lrow"><span className="co">Defigo</span><span className="fact">US market, $0 start</span></div>
                <div className="lrow"><span className="co">Percy</span><span className="fact">New category, bootstrapped</span></div>
                <div className="lrow"><span className="co">Lane</span><span className="fact">Enterprise motion, greenfield</span></div>
              </div>
            </div>
            <div className="mode">
              <h3>Scale what exists</h3>
              <p>Walk into a live org and install the systems that make it perform. Process, unit economics, coaching frameworks.</p>
              <div className="ledger">
                <div className="lrow"><span className="co">Clearco</span><span className="fact">#1 pod, 57% CM</span></div>
                <div className="lrow"><span className="co">Hubdoc</span><span className="fact">#1 rep 22 of 24 months, 12-person team</span></div>
                <div className="lrow"><span className="co">Relay</span><span className="fact">Bain Series A, named in IC memo</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POINT OF VIEW */}
      <section className="dark-900 dither">
        <div className="wrap">
          <span className="eyebrow">Point of View</span>
          <h2 className="d">The tools changed. <span className="px">The job didn't.</span></h2>
          <div className="pov-cols">
            <p>
              The cost of running go to market just collapsed. AI now does the mechanical layer for close to nothing. The research, the lists, the first drafts, the follow ups, the forecast deck. Most teams use that to do more of what already wasn't working. Louder outreach. Bigger dashboards. Faster noise.
            </p>
            <p>
              The teams that win are doing the opposite. <b>Smaller teams, higher output per person.</b> Reps who spend their day on judgment. Which accounts, which conversations, what to say. Revenue orgs built like products. Instrumented, repeatable, better every cycle.
            </p>
            <p>
              That's the operating model I build. It holds whether I'm running the team or carrying the bag, and it holds across outbound, channel, and enterprise. <b>Know your buyer, earn the conversation, close with discipline.</b>
            </p>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES */}
      <section className="rose" id="work">
        <div className="wrap">
          <span className="eyebrow">Case Studies</span>
          <h2 className="d">Four builds. <span className="px">Real numbers.</span></h2>
          {CASES.map((cs) => (
            <article className={cs.flip ? "case flip" : "case"} key={cs.id}>
              <div className="meta">
                <div className="kick">{cs.kick}</div>
                <h3>{cs.company}</h3>
                <div className="role">{cs.role}</div>
                <p>{cs.desc}</p>
              </div>
              <div className="stats">
                {cs.stats.map((s, i) => (
                  <div className="stat" key={i}>
                    <div className="v">{s.em ? <em>{s.v}</em> : s.v}</div>
                    <div className="k">{s.k}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. RECEIPTS */}
      <section className="dark-800 dither">
        <div className="wrap">
          <span className="eyebrow">Receipts</span>
          <h2 className="d">Direct from founders, execs, <span className="px">and teammates.</span></h2>
          <div className="quotes">
            {QUOTES.map((q, i) => (
              <figure className={`q ${q.size}`} key={i}>
                <blockquote>{q.text}</blockquote>
                <figcaption>
                  <b>{q.attr}</b> · {q.sub}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE OPERATOR */}
      <section className="dark-900 dither">
        <div className="wrap">
          <div className="op-grid">
            <figure className="plate">
              <img src={assetUrl("profile.jpg")} alt="Umair Ahmed" />
              <div className="tint"></div>
              <div className="lift"></div>
              <div className="dots"></div>
            </figure>
            <div>
              <span className="eyebrow">The Operator</span>
              <h2 className="d">Behind <span className="px">the number.</span></h2>
              <p className="lede">
                Nine years in B2B go to market. Started on the phones, ended up owning a P&L. I've been the first sales hire, the co-founder, the manager, and the VP. The seat changes. The machine I build doesn't.
              </p>
              <div className="facts">
                <div className="f"><div className="k">Base</div><div className="v">Toronto, ON</div></div>
                <div className="f"><div className="k">Mobility</div><div className="v">Open to relocation</div></div>
                <div className="f"><div className="k">Stack</div><div className="v">AI-native, daily</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW I OPERATE */}
      <section className="dark-800 dither" id="approach">
        <div className="wrap">
          <span className="eyebrow">How I Operate</span>
          <h2 className="d">The entire revenue machine, <span className="px">ICP to closed-won.</span></h2>
          <div className="ops">
            {OPS.map((op, i) => (
              <div className="op" key={i}>
                <span className="g">▪</span>
                <div>
                  <h3>{op.title}</h3>
                  <p>{op.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THE ARC */}
      <section className="dark-900 dither" id="timeline">
        <div className="wrap">
          <span className="eyebrow">The Arc</span>
          <h2 className="d">Building, scaling, <span className="px">outcomes.</span></h2>
          <div className="arc">
            {ARC.map((a, i) => (
              <div className="ai" key={i}>
                <div className="when">{a.when}</div>
                <h3>
                  {a.company}
                  {a.tag && <span className="tag">{a.tag}</span>}
                </h3>
                <div className="role">{a.role}</div>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT */}
      <footer className="contact dither">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h2>The next <span className="px">build.</span></h2>
          <p>
            I'm looking for my next operating seat at a venture-backed B2B company. I can build the engine, run the team, or carry the number. If you need revenue, let's talk.
          </p>
          <div className="contact-links">
            <a className="mail" href="mailto:umairadilahmed@gmail.com">umairadilahmed@gmail.com</a>
            <a className="min" href="https://www.linkedin.com/in/umairadilahmed/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="min" href={assetUrl("resume/Umair_Ahmed_General_Resume.pdf")} download>Download Resume</a>
          </div>
          <div className="foot">
            <span>Umair Ahmed · Toronto, ON</span>
            <span>Open to relocation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
