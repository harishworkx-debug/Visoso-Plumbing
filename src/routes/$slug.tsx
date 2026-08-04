import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { PageHero, ServiceCard } from "@/components/blocks";
import { CallBtn, Eyebrow, FAQBlock, FinalCTA, Section } from "@/components/site";
import { LOCATIONS, type Location } from "@/data/locations";
import { SERVICES, type Service } from "@/data/services";

type PageMatch = { service: Service; location: Location; locationOnly: boolean };

function resolvePage(slug: string): PageMatch | undefined {
  for (const location of [...LOCATIONS].sort((a, b) => b.slug.length - a.slug.length)) {
    if (slug === `plumber-${location.slug}-ca` || slug === `plumber-${location.slug}`) {
      const service = SERVICES.find((item) => item.slug === "plumbing-repair") ?? SERVICES[0];
      return service ? { service, location, locationOnly: true } : undefined;
    }
    for (const service of [...SERVICES].sort((a, b) => b.slug.length - a.slug.length)) {
      if (slug === `${service.slug}-${location.slug}-ca` || slug === `${service.slug}-${location.slug}`) {
        return { service, location, locationOnly: false };
      }
    }
  }
  return undefined;
}

export const Route = createFileRoute("/$slug")({
  head: ({ params }) => {
    const match = resolvePage(params.slug);
    const title = match ? `${match.locationOnly ? "Plumber" : match.service.name} ${match.location.name} CA | Visoso` : "Plumbing Page Not Found | Visoso";
    const description = match ? `24/7 ${match.service.name.toLowerCase()} in ${match.location.name}, CA. Upfront pricing, bilingual service and free estimates from Visoso Plumbing.` : "The requested Visoso Plumbing page could not be found.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: SeoLandingPage,
});

function SeoLandingPage() {
  const { slug } = Route.useParams();
  const match = resolvePage(slug);
  if (!match) return <MissingLandingPage />;
  const { service, location, locationOnly } = match;
  const title = locationOnly ? `24 Hour Plumber In ${location.name}, CA` : `${service.name} In ${location.name}, CA`;
  const related = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3);
  const faqs = service.faqs.map((faq) => ({ q: faq.q, a: `${faq.a} We provide this service throughout ${location.name} and nearby Orange County communities.` }));

  return <>
    <PageHero eyebrow={`${location.name} · Open 24 Hours`} title={title} sub={`${service.tagline}. Local, bilingual technicians with upfront pricing, careful work and fast dispatch from our Anaheim base.`} image={locationOnly ? location.image : service.image} imageAlt={locationOnly ? location.imageAlt : service.imageAlt} priority>
      <CallBtn label="Call For Immediate Service" />
    </PageHero>
    <Section className="!py-10"><div className="grid gap-4 md:grid-cols-3">{["Upfront flat-rate pricing", "English & Spanish service", "Licensed local technicians"].map(item => <div key={item} className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card p-5 font-bold shadow-card"><CheckCircle2 className="h-5 w-5 text-accent" />{item}</div>)}</div></Section>
    <Section className="bg-surface"><div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]"><div className="prose-local"><Eyebrow>Local Plumbing Expertise</Eyebrow><h2>{service.name} You Can Trust In {location.name}</h2>{service.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{location.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<h2>What our {service.name.toLowerCase()} service includes</h2><ul>{service.includes.map(item => <li key={item}>{item}</li>)}</ul></div><aside><div className="sticky top-32 rounded-3xl border border-border bg-card p-7 shadow-lift"><MapPin className="h-7 w-7 text-accent"/><h2 className="mt-4 text-2xl font-bold">Serving {location.name}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{location.drive}</p><p className="mt-5 text-xs font-bold uppercase text-muted-foreground">Service ZIP codes</p><p className="mt-1 font-semibold">{location.zips.join(" · ")}</p><div className="mt-6 grid gap-2"><CallBtn label="Call Now" /></div></div></aside></div></Section>
    <Section><div className="mx-auto max-w-3xl text-center"><Eyebrow>When To Call</Eyebrow><h2 className="mt-5 text-3xl font-extrabold md:text-4xl">Signs You Need {service.name}</h2></div><div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">{service.signs.map(sign => <div key={sign} className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-card"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent"/><span className="text-sm font-semibold">{sign}</span></div>)}</div></Section>
    <Section className="surface-ink"><div className="mx-auto max-w-3xl text-center"><Eyebrow>Our Process</Eyebrow><h2 className="mt-5 text-3xl font-extrabold md:text-4xl">A Careful Repair From Start To Finish</h2></div><div className="mt-10 grid gap-4 md:grid-cols-5">{service.process.map((step, index) => <div key={step.title} className="glass-panel rounded-2xl p-5"><span className="text-2xl font-black text-accent">0{index + 1}</span><h3 className="mt-4 font-bold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed opacity-75">{step.desc}</p></div>)}</div></Section>
    <Section><div className="grid gap-12 lg:grid-cols-2"><div><Eyebrow>Local Conditions</Eyebrow><h2 className="mt-5 text-3xl font-extrabold">Plumbing Issues We See In {location.name}</h2><p className="mt-4 text-muted-foreground">Homes here range across {location.housingEra}. These are recurring issues our team is equipped to diagnose:</p><ul className="mt-7 grid gap-4">{location.localIssues.map(issue => <li key={issue} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent"/><span>{issue}</span></li>)}</ul></div><div><Eyebrow>Questions & Answers</Eyebrow><h2 className="mt-5 text-3xl font-extrabold">Frequently Asked Questions</h2><div className="mt-7"><FAQBlock faqs={faqs} /></div></div></div></Section>
    <Section className="bg-surface"><div className="flex items-end justify-between gap-6"><div><Eyebrow>More Services</Eyebrow><h2 className="mt-4 text-3xl font-extrabold">Complete Plumbing Care</h2></div><Link to="/services" className="hidden items-center gap-2 font-bold text-primary sm:flex">All services <ArrowRight className="h-4 w-4"/></Link></div><div className="mt-8 grid gap-6 md:grid-cols-3">{related.map(item => <ServiceCard key={item.slug} service={item} locationSlug={location.slug} />)}</div></Section>
    <FinalCTA title={`Need ${service.name} In ${location.name}?`} body={service.priceNote} />
  </>;
}

function MissingLandingPage() { return <Section><div className="mx-auto max-w-xl py-20 text-center"><h1 className="text-4xl font-extrabold">Page Not Found</h1><p className="mt-4 text-muted-foreground">That service page does not exist, but our Anaheim plumbing team can still help.</p><div className="mt-7 flex justify-center gap-3"><Link to="/services" className="rounded-full border border-border px-6 py-3 font-bold">View Services</Link><CallBtn /></div></div></Section>; }