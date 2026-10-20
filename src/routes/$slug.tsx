import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { PageHero, ServiceCard } from "@/components/blocks";
import { CallBtn, Eyebrow, FAQBlock, FinalCTA, Section } from "@/components/site";
import { LOCATIONS, type Location } from "@/data/locations";
import { SERVICES, type Service } from "@/data/services";
import { REVIEWS } from "@/data/reviews";
import { ReviewCard } from "@/components/blocks";
import { getServiceLocalInsights } from "@/data/serviceLocalInsights";
import { BUSINESS } from "@/data/business";

import React from "react";

type PageMatch = { service: Service; location: Location; locationOnly: boolean };

function parseText(text: string, location: Location) {
  let processed = text.replace(/\{\{location\}\}/g, location.name);
  processed = processed.replace(/\{\{locationSlug\}\}/g, location.slug);
  
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = linkRegex.exec(processed)) !== null) {
    if (match.index > lastIndex) {
      parts.push(processed.substring(lastIndex, match.index));
    }
    const label = match[1];
    let url = match[2];
    parts.push(
      <Link key={lastIndex} to={url.startsWith('/') ? "/$slug" : url} params={url.startsWith('/') ? { slug: url.slice(1) } : {}} className="text-primary hover:underline font-semibold">
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  
  if (lastIndex < processed.length) {
    parts.push(processed.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : processed;
}

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

function generateSeoMeta(match: PageMatch | undefined) {
  if (!match) {
    return {
      title: "Plumbing Page Not Found | Visoso Plumbing",
      description: "The requested Visoso Plumbing page could not be found. Contact our Anaheim office for 24/7 plumbing service.",
    };
  }

  const { service, location, locationOnly } = match;

  let title = "";
  if (locationOnly) {
    title = `24-Hour Plumber in ${location.name}, CA | Visoso Plumbing`;
  } else if (service.slug === "emergency-plumbing") {
    title = `Emergency Plumber in ${location.name}, CA | 24/7 Service`;
  } else {
    title = `${service.name} in ${location.name}, CA | Visoso Plumbing`;
  }

  let description = "";
  if (locationOnly) {
    description = `Looking for a licensed plumber in ${location.name}, CA? Visoso Plumbing provides 24/7 emergency repairs, drain cleaning, water heaters and slab leak detection with upfront pricing.`;
  } else {
    switch (service.slug) {
      case "drain-cleaning":
        description = `Drain cleaning in ${location.name}, CA for clogged sinks, slow drains and sewer line blockages. Learn about mechanical cabling, hydro-jetting, pricing and fast scheduling.`;
        break;
      case "emergency-plumbing":
        description = `Emergency plumber in ${location.name}, CA available 24/7 for burst pipes, flooding, sewer backups and active leaks. Fast dispatch and upfront flat-rate pricing.`;
        break;
      case "water-heater-installation":
        description = `Water heater installation in ${location.name}, CA for energy-efficient tank and tankless systems. Code-compliant seismic strapping, expansion tanks and upfront estimates.`;
        break;
      case "water-heater-repair":
        description = `Water heater repair in ${location.name}, CA for no hot water, leaking tanks, noisy burners and pilot failures. Fast diagnosis and same-day service from Visoso Plumbing.`;
        break;
      case "camera-inspection":
        description = `Sewer camera inspection in ${location.name}, CA to diagnose recurring clogs, tree roots and pipe offsets. Recorded video footage and written condition report included.`;
        break;
      case "leak-detection":
        description = `Non-invasive slab leak detection in ${location.name}, CA using acoustic and thermal technology to pinpoint underground pipe leaks before structural foundation damage.`;
        break;
      case "sewer-line-repair":
        description = `Sewer line repair in ${location.name}, CA for cracked, root-damaged or bellied main pipes. Camera-guided spot repairs and full trenchless replacements with warranty.`;
        break;
      case "gas-line-repair":
        description = `Gas line repair and emergency leak isolation in ${location.name}, CA. Licensed technicians for safety shutoffs, appliance gas lines and pressure test certifications.`;
        break;
      case "pipe-repair":
        description = `Pipe repair and repiping in ${location.name}, CA for corroded galvanized lines, pinhole copper leaks and low water pressure. Clean, durable copper and PEX solutions.`;
        break;
      case "sink-installation":
        description = `Kitchen and bathroom sink installation in ${location.name}, CA, including garbage disposals, faucets, angle stops and drain line hookups with upfront pricing.`;
        break;
      case "residential-plumbing":
        description = `Complete residential plumbing services in ${location.name}, CA for single-family homes, townhomes and condos. Upfront flat-rate pricing and bilingual service.`;
        break;
      case "plumbing-repair":
      default:
        description = `Professional plumbing repair in ${location.name}, CA. From leaky faucets to running toilets and broken valves, Visoso Plumbing offers upfront pricing and clean service.`;
        break;
    }
  }

  return { title, description };
}

export const Route = createFileRoute("/$slug")({
  head: ({ params }) => {
    const match = resolvePage(params.slug);
    const { title, description } = generateSeoMeta(match);
    
    const scripts: Array<{ type: string; children: string }> = [];
    if (match) {
      if (match.service.faqs?.length) {
        scripts.push({
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: match.service.faqs.map((faq) => ({
              "@type": "Question",
              name: typeof faq.q === "string" ? faq.q.replace(/\{\{location\}\}/g, match.location.name) : "",
              acceptedAnswer: {
                "@type": "Answer",
                text: `${typeof faq.a === "string" ? faq.a.replace(/\{\{location\}\}/g, match.location.name).replace(/\{\{locationSlug\}\}/g, match.location.slug).replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1") : ""} We provide this service throughout ${match.location.name} and nearby Orange County communities.`,
              },
            })),
          }),
        });
      }
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${match.service.name} in ${match.location.name}, CA`,
          description,
          provider: {
            "@type": "PlumbingContractor",
            name: "Visoso Plumbing",
            telephone: BUSINESS.phoneDisplay,
            address: {
              "@type": "PostalAddress",
              streetAddress: "2322 W Greenacre Ave Apt 2",
              addressLocality: "Anaheim",
              addressRegion: "CA",
              postalCode: "92801",
              addressCountry: "US",
            },
          },
          areaServed: {
            "@type": "City",
            name: match.location.name,
          },
        }),
      });
    }

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: `https://www.visosoplomeriaeconomica.com/${params.slug}/` },
      ],
      scripts,
    };
  },
  component: SeoLandingPage,
});

function SeoLandingPage() {
  const { slug } = Route.useParams();
  const match = resolvePage(slug);
  if (!match) return <MissingLandingPage />;
  const { service, location, locationOnly } = match;
  const title = locationOnly ? `24 Hour Plumber In ${location.name}, CA` : `${service.name} In ${location.name}, CA`;
  const faqs = service.faqs.map((faq) => ({
    q: typeof faq.q === "string" ? faq.q.replace(/\{\{location\}\}/g, location.name) : faq.q,
    a: parseText(
      `${faq.a} We provide this service throughout ${location.name} and nearby Orange County communities.`,
      location
    ),
  }));

  const popularServices = [
    { title: `Emergency Plumbing in ${location.name}`, path: `emergency-plumbing-${location.slug}-ca` },
    { title: `Water Heater Repair in ${location.name}`, path: `water-heater-repair-${location.slug}-ca` },
    { title: `Drain Cleaning in ${location.name}`, path: `drain-cleaning-${location.slug}-ca` },
  ];

  const localInsight = getServiceLocalInsights(service.slug, location);

  return <>
    <PageHero eyebrow={`${location.name} · Open 24 Hours`} title={title} sub={`${service.tagline}. Local, bilingual technicians with upfront pricing, careful work and fast dispatch from our Anaheim base.`} image={locationOnly ? location.image : service.image} imageAlt={locationOnly ? location.imageAlt : service.imageAlt} priority>
      <CallBtn label="Call For Immediate Service" />
    </PageHero>
    <Section className="!py-10"><div className="grid gap-4 md:grid-cols-3">{["Upfront flat-rate pricing", "English & Spanish service", "Licensed local technicians"].map(item => <div key={item} className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card p-5 font-bold shadow-card"><CheckCircle2 className="h-5 w-5 text-accent" />{item}</div>)}</div></Section>
    <Section className="bg-surface"><div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]"><div className="prose-local"><Eyebrow>Local Plumbing Expertise</Eyebrow><h2>{service.name} You Can Trust In {location.name}</h2>{service.intro.map(paragraph => <p key={paragraph}>{parseText(paragraph, location)}</p>)}{location.intro.map(paragraph => <p key={paragraph}>{parseText(paragraph, location)}</p>)}<h2>What our {service.name.toLowerCase()} service includes</h2><ul>{service.includes.map(item => <li key={item}>{parseText(item, location)}</li>)}</ul></div><aside><div className="sticky top-32 rounded-3xl border border-border bg-card p-7 shadow-lift"><div className="flex items-center justify-between"><MapPin className="h-7 w-7 text-accent"/><span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">Mobile Dispatch</span></div><h2 className="mt-4 text-2xl font-bold">Serving {location.name}, CA</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{location.drive}</p><div className="mt-5 rounded-2xl bg-surface p-4 text-xs leading-relaxed border border-border"><span className="block font-bold text-foreground mb-1">Service Area Transparency</span>{location.slug === "anaheim" || location.slug === "west-anaheim" ? <p className="text-muted-foreground">Our primary physical dispatch yard and warehouse is located right here in West Anaheim, providing rapid direct dispatch.</p> : <p className="text-muted-foreground">We provide direct on-site mobile service in {location.name}. Dispatched from our nearby Anaheim shop with fully stocked service trucks—no need to visit an office.</p>}</div><div className="mt-5"><p className="text-xs font-bold uppercase text-muted-foreground">Main Dispatch Hub</p><p className="mt-1 text-sm font-semibold text-foreground">2322 W Greenacre Ave, Anaheim, CA</p></div><div className="mt-4"><p className="text-xs font-bold uppercase text-muted-foreground">Covered {location.name} ZIP Codes</p><p className="mt-1 text-sm font-semibold">{location.zips.join(" · ")}</p></div><div className="mt-6 grid gap-2"><CallBtn label="Call For Local Service" /></div></div></aside></div></Section>
    <Section><div className="mx-auto max-w-3xl text-center"><Eyebrow>When To Call</Eyebrow><h2 className="mt-5 text-3xl font-extrabold md:text-4xl">Signs You Need {service.name}</h2></div><div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">{service.signs.map(sign => <div key={sign} className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-card"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent"/><span className="text-sm font-semibold">{sign}</span></div>)}</div></Section>
    <Section className="surface-ink"><div className="mx-auto max-w-3xl text-center"><Eyebrow>Our Process</Eyebrow><h2 className="mt-5 text-3xl font-extrabold md:text-4xl">A Careful Repair From Start To Finish</h2></div><div className="mt-10 grid gap-4 md:grid-cols-5">{service.process.map((step, index) => <div key={step.title} className="glass-panel rounded-2xl p-5"><span className="text-2xl font-black text-accent">0{index + 1}</span><h3 className="mt-4 font-bold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed opacity-75">{parseText(step.desc, location)}</p></div>)}</div></Section>
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          {locationOnly ? (
            <>
              <Eyebrow>Local Conditions</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold">Plumbing Problems We See In {location.name}</h2>
              <p className="mt-4 text-muted-foreground">Homes here range across {location.housingEra}. These are recurring issues our team is equipped to diagnose:</p>
              <ul className="mt-7 grid gap-4">
                {location.localIssues.map(issue => (
                  <li key={issue} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent"/>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-card">
                <h3 className="text-2xl font-bold">Why Homeowners in {location.name} Call Visoso</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">Our plumbers provide fast, honest residential plumbing service across the area. We always offer upfront pricing before work begins, our team respects your home by protecting floors, and we warranty our workmanship. Whether it's a minor repair or an emergency, we arrive prepared.</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Upfront flat-rate pricing", "Clean, stocked service trucks", "English and Spanish service", "Workmanship warranty"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-accent" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <Eyebrow>{localInsight.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold">{localInsight.heading}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{localInsight.description}</p>
              <ul className="mt-7 grid gap-4">
                {localInsight.points.map(pt => (
                  <li key={pt.title} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent"/>
                    <div>
                      <strong className="text-foreground">{pt.title}: </strong>
                      <span className="text-muted-foreground">{pt.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-card">
                <h3 className="text-2xl font-bold">{localInsight.cardTitle}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{localInsight.cardDescription}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {localInsight.cardHighlights.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-accent" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        <div>
          <Eyebrow>Questions & Answers</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold">{location.name} {locationOnly ? "Plumbing" : service.name} FAQ</h2>
          <div className="mt-7"><FAQBlock faqs={faqs} /></div>
        </div>
      </div>
    </Section>
    {locationOnly && (
      <Section className="surface-ink"><div className="grid gap-8 lg:grid-cols-2"><div><Eyebrow>Areas Served</Eyebrow><h2 className="mt-5 text-3xl font-extrabold">Areas in {location.name} served</h2><p className="mt-4 text-muted-foreground">We proudly dispatch our plumbers to the following neighborhoods and zip codes:</p><div className="mt-6 flex flex-wrap gap-2">{[...location.neighborhoods, ...location.zips].map(area => <span key={area} className="rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent-foreground">{area}</span>)}</div></div>
      <div><Eyebrow>Top Services</Eyebrow><h2 className="mt-5 text-3xl font-extrabold">Popular Services</h2><ul className="mt-6 grid gap-3">{popularServices.map(ps => <li key={ps.title}><Link to="/$slug" params={{ slug: ps.path }} className="flex items-center justify-between rounded-xl border border-white/20 bg-card/10 p-4 font-bold shadow-card transition-transform hover:-translate-y-1"><span>{ps.title}</span><ArrowRight className="h-5 w-5 text-accent" /></Link></li>)}</ul></div>
      </div></Section>
    )}
    {locationOnly && (
      <Section className="bg-surface overflow-hidden">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <Eyebrow>Verified Google Reviews</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">Hear From Our Community</h2>
          <p className="mt-4 text-muted-foreground">Rated {BUSINESS.rating}★ out of 5 based on {BUSINESS.reviewCount} customer reviews on Google.</p>
          <div className="mt-4">
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold text-primary hover:bg-card hover:border-primary transition-colors"
            >
              Read all reviews on Google Maps <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x" style={{ scrollbarWidth: 'none' }}>
          {REVIEWS.slice(0, 8).map((review, idx) => (
            <div key={idx} className="w-[300px] shrink-0 snap-center">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </Section>
    )}
    {!locationOnly && (
      <Section className="bg-surface overflow-hidden">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <Eyebrow>Trusted & Verified</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">Why Choose Visoso Plumbing?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-bold text-lg mb-2">Our Plumbers</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Our technicians are experienced, background-checked, and bilingual (English/Spanish). They arrive in fully stocked trucks ready to complete most repairs in a single visit.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">We operate as a fully licensed and insured residential plumbing service in California, ensuring your property is protected while we work.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-bold text-lg mb-2">Workmanship Warranty</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">We stand behind the quality of our work. All completed {service.name.toLowerCase()} repairs and installations include a clear workmanship warranty for your peace of mind.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-bold text-lg mb-2">Brands & Equipment</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">We service and install all major brands including Rheem, Bradford White, Moen, and Kohler. Our trucks carry commercial-grade drain cabling and high-resolution sewer cameras.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-bold text-lg mb-2">24/7 Local Response</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Based in West Anaheim, our emergency response area covers {location.name} and the surrounding Orange County communities. We actually answer the phone at 2 AM.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-bold text-lg mb-2">Upfront Pricing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">You will never be surprised by a bill. Our plumbers evaluate the issue and provide a transparent, flat-rate price before any work begins.</p>
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <Eyebrow>Verified Google Reviews</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">What Homeowners Say</h2>
            <p className="mt-4 text-muted-foreground">Rated {BUSINESS.rating}★ out of 5 based on {BUSINESS.reviewCount} customer reviews on Google.</p>
            <div className="mt-4">
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold text-primary hover:bg-card hover:border-primary transition-colors"
              >
                Read all reviews on Google Maps <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x" style={{ scrollbarWidth: 'none' }}>
            {REVIEWS.slice(0, 8).map((review, idx) => (
              <div key={idx} className="w-[300px] shrink-0 snap-center">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    )}
    <Section className={locationOnly ? "" : "surface-ink"}><div className="flex items-end justify-between gap-6"><div><Eyebrow>More Services</Eyebrow><h2 className="mt-4 text-3xl font-extrabold">Complete Plumbing Care</h2></div><Link to="/services" className="hidden items-center gap-2 font-bold text-primary sm:flex">All services <ArrowRight className="h-4 w-4"/></Link></div><div className="mt-8 grid gap-6 md:grid-cols-3">{SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3).map(item => <ServiceCard key={item.slug} service={item} locationSlug={location.slug} />)}</div></Section>
    <FinalCTA title={`Need ${service.name} In ${location.name}?`} body={service.priceNote} />
  </>;
}

function MissingLandingPage() { return <Section><div className="mx-auto max-w-xl py-20 text-center"><h1 className="text-4xl font-extrabold">Page Not Found</h1><p className="mt-4 text-muted-foreground">That service page does not exist, but our Anaheim plumbing team can still help.</p><div className="mt-7 flex justify-center gap-3"><Link to="/services" className="rounded-full border border-border px-6 py-3 font-bold">View Services</Link><CallBtn /></div></div></Section>; }