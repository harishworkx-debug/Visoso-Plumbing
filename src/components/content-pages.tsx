import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, HelpCircle, Quote, ShieldCheck, Star, Wrench } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import emergencyImage from "@/assets/emergency-plumbing.jpg";
import anaheimImage from "@/assets/loc-anaheim.jpg";
import { PageHero, ServiceCard } from "@/components/blocks";
import { CallBtn, Eyebrow, FAQBlock, FinalCTA, Section } from "@/components/site";
import { BUSINESS, fullAddress } from "@/data/business";
import { LOCATIONS } from "@/data/locations";
import { POSTS } from "@/data/blog";
import { SERVICES } from "@/data/services";

const serviceFaqs = [
  {
    q: "How does Visoso Plumbing handle pricing and estimates?",
    a: "We believe in complete pricing transparency. Our technician arrives, performs a thorough physical inspection of the issue, and provides a clear, flat-rate quote before any work starts. There are never surprise add-on charges or hidden travel fees.",
  },
  {
    q: "What is your primary service area and operating model?",
    a: "Our dispatch yard and parts warehouse are located at 2322 W Greenacre Ave in Anaheim, CA. From this central base, our fully equipped mobile service vehicles serve residential customers throughout Anaheim, Orange, Santa Ana, Fullerton, Garden Grove, Buena Park, Placentia, and Yorba Linda.",
  },
  {
    q: "Do you provide emergency plumbing services on weekends or late at night?",
    a: "Yes. Plumbing emergencies like burst pipes, main sewer backups, and active gas leaks require immediate attention. We answer calls 24 hours a day, 7 days a week with real human dispatch and fast local routing.",
  },
  {
    q: "What brands and equipment do your technicians work with?",
    a: "We service and install all major residential plumbing brands including Rheem, Bradford White, Moen, Delta, Kohler, InSinkErator, and Rinnai. Our trucks carry commercial-grade drain cabling, hydro-jetting equipment, and high-resolution sewer cameras.",
  },
  {
    q: "What warranties and guarantees are provided on completed repairs?",
    a: "All completed plumbing repairs and new equipment installations include our standard Visoso workmanship warranty in addition to the original manufacturer part warranties. Specific warranty coverage terms are detailed directly on your written invoice.",
  },
];

export function ServicesPage() {
  const emergencyServices = SERVICES.filter(s => ["emergency-plumbing", "leak-detection", "gas-line-repair"].includes(s.slug));
  const drainServices = SERVICES.filter(s => ["drain-cleaning", "camera-inspection", "sewer-line-repair"].includes(s.slug));
  const waterHeaterServices = SERVICES.filter(s => ["water-heater-repair", "water-heater-installation"].includes(s.slug));
  const generalServices = SERVICES.filter(s => ["plumbing-repair", "residential-plumbing", "pipe-repair", "sink-installation"].includes(s.slug));

  return (
    <>
      <PageHero
        eyebrow="Anaheim & Orange County"
        title="Residential Plumbing Services"
        sub="Accurate diagnosis, upfront flat-rate pricing, and lasting repairs for every part of your home's water, drain, and gas systems."
        image={emergencyImage}
        imageAlt="Emergency plumber repairing a pipe in an Anaheim home"
        priority
      >
        <CallBtn label="Call For Immediate Service" />
      </PageHero>

      {/* Trust & Guarantee Highlights */}
      <Section className="!py-8 bg-surface border-b border-border">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { title: "24/7 Rapid Dispatch", desc: "Always available for burst pipes & urgent backups" },
            { title: "Upfront Pricing", desc: "Clear flat-rate quote before any work begins" },
            { title: "Bilingual Technicians", desc: "Clear communication in English & Spanish" },
            { title: "Workmanship Warranty", desc: "Written guarantee on all completed repairs" },
          ].map(item => (
            <div key={item.title} className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="font-bold text-foreground text-sm flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> {item.title}
              </span>
              <span className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Category 1: Emergency & Critical Safety */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Immediate Response</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Emergency & Safety Plumbing</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            When water is flooding your home, a slab leak is undermining your foundation, or you detect gas, speed and diagnostic accuracy are critical. Our emergency technicians arrive with full containment gear.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {emergencyServices.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Category 2: Drains & Sewer Systems */}
      <Section className="bg-surface">
        <div className="max-w-3xl">
          <Eyebrow>Mechanical Clearing & HD Imaging</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Drain & Main Sewer Infrastructure</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            From single clogged sinks to tree-root intruded main sewer lines across Orange County, we use mechanical snakes, hydro-jetters, and digital camera locators to solve problems without guesswork.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {drainServices.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Category 3: Water Heating */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Reliable Hot Water</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Water Heater Repair & Installation</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Same-day repairs for no hot water, leaking tanks, failing thermocouples, and pilot issues. When replacement is needed, we install tank and tankless systems to California seismic and efficiency codes.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {waterHeaterServices.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Category 4: General Residential Repairs & Fixtures */}
      <Section className="bg-surface">
        <div className="max-w-3xl">
          <Eyebrow>Complete Home Plumbing</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Piping, Fixtures & Repiping</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Replacing aged galvanized pipe with durable copper and PEX, installing new sinks and disposals, and resolving low water pressure across Anaheim homes built in the 1950s–1980s.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {generalServices.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Service Scope & Limitations Notice */}
      <Section>
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card">
          <div className="max-w-3xl">
            <Eyebrow>Service Scope & Operating Policy</Eyebrow>
            <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">What We Do & How We Protect You</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We specialize in residential plumbing services for single-family homes, townhouses, condominiums, and residential units throughout Anaheim and nearby Orange County.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" /> Residential Specialists
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Focused exclusively on private residential systems—from the water meter and main shutoff valve into fixtures, water heaters, and private sewer laterals to the property boundary cleanout.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" /> Permits & Code Compliance
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Major replacements (including water heater change-outs, repipes, and sewer lateral replacements) are completed strictly to California Plumbing Code and City building inspection standards.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <Wrench className="h-5 w-5 text-accent" /> Service Limitations
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We do not perform municipal utility line work in public street thoroughfares (which is governed by city water districts). We service the customer-owned side of your water and sewer systems.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services FAQ */}
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Common Questions About Our Services</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Have questions before scheduling? Call our Anaheim team directly at {BUSINESS.phoneDisplay} to discuss your plumbing needs with an experienced technician.
            </p>
            <div className="mt-8">
              <CallBtn label="Speak With A Plumber" />
            </div>
          </div>
          <FAQBlock faqs={serviceFaqs} />
        </div>
      </Section>

      <FinalCTA title="Ready For Fast, Honest Plumbing Service?" />
    </>
  );
}

export function AreasPage() { return <><PageHero eyebrow="Based In West Anaheim" title="Plumbing Across Orange County" sub="Fast local service from technicians who understand the pipe materials, water pressure and housing patterns in your neighborhood." image={anaheimImage} imageAlt="Anaheim California neighborhood served by Visoso Plumbing"><CallBtn /></PageHero><Section className="!py-8 bg-surface border-y border-border"><div className="mx-auto max-w-4xl text-center"><p className="text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Service-Area Business Model: </strong>Visoso Plumbing is headquartered at 2322 W Greenacre Ave in Anaheim, CA. Rather than operating separate walk-in storefronts in each city, our mobile service trucks are dispatched directly to your home across Orange County with rapid response times.</p></div></Section><Section><div className="grid gap-6 md:grid-cols-2">{LOCATIONS.map(location => <Link key={location.slug} to="/$slug" params={{ slug: `plumber-${location.slug}-ca` }} className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-card sm:grid-cols-[12rem_1fr]"><img src={location.image} alt={location.imageAlt} loading="lazy" className="h-full min-h-52 w-full object-cover" /><div className="p-6"><p className="text-xs font-bold uppercase text-accent">ZIP {location.zips.join(", ")}</p><h2 className="mt-2 text-2xl font-bold">Plumber in {location.name}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{location.intro.join(" ")}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">View Plumber in {location.name} <ArrowRight className="h-4 w-4" /></span></div></Link>)}</div></Section><FinalCTA title="Need A Local Plumber Today?" /></>; }

export function AboutPage() { return <><PageHero eyebrow="Visoso Plomería Económica" title="Local Plumbing With Standards" sub="Visoso Plumbing is a local plumbing company serving Anaheim and surrounding Orange County communities." image={aboutImage} imageAlt="Visoso Plumbing service"><CallBtn /></PageHero><Section><div className="mx-auto max-w-4xl prose-local"><h2>Your Trusted Anaheim Plumbers</h2><p>Visoso Plumbing serves homeowners with fast, honest, and reliable residential plumbing services. We understand the plumbing patterns of the neighborhoods we serve and carry the parts those homes actually need.</p><p>Our team works in English and Spanish, answers emergencies around the clock and provides a clear price before approved work begins.</p><h2>What you can expect</h2><ul>{["A realistic arrival window", "Protection for floors and finished surfaces", "Diagnosis before replacement", "Repair options explained in plain language", "Testing after work is complete", "A clean workspace and workmanship warranty"].map(i=><li key={i}>{i}</li>)}</ul><h2>Residential plumbing service</h2><p>Our expert plumbers work on residential homes and properties. Fully stocked vehicles let us finish most routine repairs in one visit.</p></div></Section><FinalCTA /></>; }

export function ContactPage() { return <><Section className="surface-ink"><div className="grid gap-12 lg:grid-cols-2"><div><Eyebrow>Open 24 Hours</Eyebrow><h1 className="mt-5 text-4xl font-extrabold md:text-6xl">Contact Our Plumbers</h1><p className="mt-5 max-w-xl text-lg opacity-80">For fastest service, call now for an estimate and provide your name, service address and details of the problem.</p><div className="mt-8 flex flex-wrap gap-3"><CallBtn label={`Call ${BUSINESS.phoneDisplay}`} /></div></div><div className="glass-panel rounded-3xl p-7"><dl className="grid gap-6"><div><dt className="text-xs font-bold uppercase opacity-60">Phone</dt><dd className="mt-1 text-xl font-bold">{BUSINESS.phoneDisplay}</dd></div><div><dt className="text-xs font-bold uppercase opacity-60">Physical Headquarters & Dispatch Base</dt><dd className="mt-1 font-semibold">{fullAddress}</dd><p className="mt-1 text-xs opacity-75">Mobile on-site service dispatched across Anaheim, Orange, Santa Ana, Fullerton, Garden Grove, and surrounding areas.</p></div><div><dt className="text-xs font-bold uppercase opacity-60">Hours</dt><dd className="mt-1 font-semibold">{BUSINESS.hours}</dd></div><div><dt className="text-xs font-bold uppercase opacity-60">Languages</dt><dd className="mt-1 font-semibold">English & Español</dd></div></dl></div></div></Section><Section><div className="overflow-hidden rounded-3xl border border-border shadow-card"><iframe title="Visoso Plumbing location map" src={BUSINESS.mapEmbed} className="h-[32rem] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></Section><FinalCTA /></>; }

export function BlogPage() { return <><Section className="surface-ink text-center"><Eyebrow>Plumbing Advice</Eyebrow><h1 className="mt-5 text-4xl font-extrabold md:text-6xl">The Visoso Plumbing Guide</h1><p className="mx-auto mt-4 max-w-2xl opacity-80">Practical, local guidance for preventing damage, understanding repairs and making better plumbing decisions.</p></Section><Section><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{POSTS.map(post=><Link key={post.slug} to="/blog/$postSlug" params={{postSlug:post.slug}} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"><div className="flex items-center justify-between text-xs font-bold uppercase text-accent"><span>{post.category}</span><span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-3.5 w-3.5"/>{post.readMinutes} min</span></div><h2 className="mt-4 text-xl font-bold">{post.title}</h2><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Read guide <ArrowRight className="h-4 w-4"/></span></Link>)}</div></Section><FinalCTA /></>; }

export function LegalPage({ title, kind }: { title: string; kind: "privacy" | "terms" }) { return <Section><div className="mx-auto max-w-3xl prose-local"><Eyebrow>Visoso Plumbing</Eyebrow><h1 className="mt-5 text-4xl font-extrabold">{title}</h1><p>Last updated September 27, 2026.</p>{kind === "privacy" ? <><h2>Information we receive</h2><p>When you call, email or message us, we may receive your name, contact details, service address, photos and information about the service requested.</p><h2>How information is used</h2><p>We do not sell personal information. Details may be shared only with team members needed to complete your requested work or comply with law.</p><h2>Your choices</h2><p>You may ask us to correct or delete contact information by calling {BUSINESS.phoneDisplay}.</p></> : <><h2>Service estimates</h2><p>Estimates are based on conditions visible during diagnosis. Approved changes in scope are explained and priced before additional work begins.</p><h2>Appointments and emergencies</h2><p>Arrival windows are estimates affected by traffic and active emergency calls. We communicate material delays promptly.</p><h2>Workmanship</h2><p>Warranty terms depend on the service and materials selected and will be described on the service invoice.</p></>}</div></Section>; }