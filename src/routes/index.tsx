import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";
import teamImage from "@/assets/cta-team.jpg";
import { PageHero, ServiceCard, StatGrid } from "@/components/blocks";
import { CallBtn, Eyebrow, FAQBlock, FinalCTA, Reveal, Section, TrustBar } from "@/components/site";
import { BUSINESS } from "@/data/business";
import { FEATURED_SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Visoso Plumbing | 24/7 Plumber Anaheim CA" },
    { name: "description", content: "Licensed 24/7 plumber in Anaheim for drains, leaks, water heaters, sewer and emergency repairs. Call Visoso Plumbing for a free estimate." },
    { property: "og:title", content: "Visoso Plumbing | 24/7 Plumber Anaheim CA" },
    { property: "og:description", content: "Fast, honest plumbing service in Anaheim and Orange County. English and Spanish service, 24 hours a day." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const homeFaqs = [
  { q: "Are you available for plumbing emergencies at night?", a: "Yes. We answer emergency calls 24 hours a day, seven days a week, including weekends and holidays." },
  { q: "Do you provide free plumbing estimates?", a: "Yes. We explain the diagnosis and provide clear, upfront pricing before approved work begins." },
  { q: "Which areas do you serve?", a: "We are based in West Anaheim and serve Anaheim, Orange, Santa Ana, Fullerton, Garden Grove, Buena Park, Placentia, Yorba Linda and nearby communities." },
  { q: "Do your plumbers speak Spanish?", a: "Yes. Our bilingual team provides service in English and Spanish so every recommendation and price is easy to understand." },
];

function HomePage() {
  return <>
    <PageHero eyebrow="Anaheim's 24 Hour Plumbing Team" title="Plumbing Fixed Right. Day Or Night." sub="Fast, honest residential plumbing connection service across Anaheim and Orange County. Verified independent providers, upfront pricing, bilingual service and real 24/7 emergency dispatch." image={heroImage} imageAlt="Provider repairing plumbing in an Anaheim home" priority>
      <CallBtn label={`Call ${BUSINESS.phoneDisplay}`} />
    </PageHero>
    <Section className="!py-10"><TrustBar /></Section>
    <Section className="bg-surface"><div className="mx-auto max-w-3xl text-center"><Eyebrow>Complete Plumbing Care</Eyebrow><h2 className="mt-5 text-3xl font-extrabold md:text-5xl">One Local Team For Every Plumbing Problem</h2><p className="mt-4 text-muted-foreground">From a dripping faucet to a failed sewer line, our stocked trucks and experienced technicians are prepared to diagnose the cause and complete a lasting repair.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{FEATURED_SERVICES.slice(0, 6).map(service => <ServiceCard key={service.slug} service={service} />)}</div><div className="mt-10 text-center"><Link to="/services" className="inline-flex items-center gap-2 font-bold text-primary">View all plumbing services <ArrowRight className="h-4 w-4" /></Link></div></Section>
    <Section><div className="grid items-center gap-12 lg:grid-cols-2"><Reveal><img src={teamImage} alt="Visoso Plumbing team ready for an Anaheim service call" width={1400} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" /></Reveal><Reveal delay={0.08}><Eyebrow>Why Anaheim Calls Visoso</Eyebrow><h2 className="mt-5 text-3xl font-extrabold md:text-5xl">Straight Answers. Careful Work. No Surprise Bill.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Providers arrive within a realistic service window, protect your floors and finishes, show you what failed, and quote the work before touching the system.</p><p className="mt-4 leading-relaxed text-muted-foreground">Providers based in Anaheim understand local housing: aging galvanized pipe, slab leaks, root intrusion and hard-water scale.</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Upfront flat-rate pricing", "24/7 live emergency response", "English and Spanish service", "Clean, stocked service trucks", "Residential plumbing", "Providers warranty workmanship"].map(item => <li key={item} className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 className="h-5 w-5 text-accent" />{item}</li>)}</ul><div className="mt-8"><CallBtn label="Schedule A Plumber" /></div></Reveal></div></Section>
    <Section className="surface-ink"><StatGrid items={[{ value: "24/7", label: "Emergency Availability" }, { value: "4.9★", label: "Local Customer Rating" }, { value: "10+", label: "Orange County Areas" }, { value: "2", label: "Languages Spoken" }]} /></Section>
    <Section><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><Eyebrow>How Service Works</Eyebrow><h2 className="mt-5 text-3xl font-extrabold md:text-4xl">From First Call To Final Test</h2><p className="mt-4 text-muted-foreground">Our process is built around accurate diagnosis, informed approval and verified results.</p></div><div className="grid gap-4 sm:grid-cols-2">{[
      { icon: PhoneCall, title: "Tell us what happened", body: "Call us with the issue. We triage the issue and give you a real arrival window." },
      { icon: Wrench, title: "We diagnose the cause", body: "A licensed technician tests the system instead of guessing from symptoms." },
      { icon: ShieldCheck, title: "Approve a clear price", body: "You see repair options and a flat-rate quote before work begins." },
      { icon: CheckCircle2, title: "Repair, test and clean", body: "We verify the result, clean the workspace and explain the warranty." },
    ].map(step => <div key={step.title} className="rounded-2xl border border-border bg-card p-6 shadow-card"><step.icon className="h-6 w-6 text-accent" /><h3 className="mt-4 font-bold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p></div>)}</div></div></Section>
    <Section className="bg-surface"><div className="mx-auto max-w-3xl text-center"><Eyebrow>Local Service Area</Eyebrow><h2 className="mt-5 text-3xl font-extrabold md:text-5xl">Your Orange County Neighborhood Plumber</h2></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{LOCATIONS.map(location => <Link key={location.slug} to="/$slug" params={{ slug: `plumber-${location.slug}-ca` }} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 font-bold shadow-card transition-transform hover:-translate-y-1"><MapPin className="h-5 w-5 text-accent" /> {location.name}</Link>)}</div></Section>
    <Section><div className="grid gap-12 lg:grid-cols-2"><div><Eyebrow>Common Questions</Eyebrow><h2 className="mt-5 text-3xl font-extrabold md:text-4xl">Plumbing Help, Without The Runaround</h2><p className="mt-4 text-muted-foreground">Call any time. A real person will help you decide what needs immediate attention.</p></div><FAQBlock faqs={homeFaqs} /></div></Section>
    <FinalCTA />
  </>;
}
