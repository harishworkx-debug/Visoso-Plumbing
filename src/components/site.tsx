import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone, MessageCircle, Menu, X, Clock, ShieldCheck, Star, MapPin, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { BUSINESS, fullAddress } from "@/data/business";
import { NAV_SERVICES, SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";

export function CallBtn({ label = "Call Now", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={BUSINESS.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-accent transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <Phone className="h-4 w-4" /> {label}
    </a>
  );
}



export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"services" | "areas" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="surface-ink hidden md:block">
        <div className="container-page flex items-center justify-between py-2 text-xs">
          <p className="flex items-center gap-2 opacity-90">
            <Clock className="h-3.5 w-3.5" /> {BUSINESS.hours} · Emergency Plumbing 24/7 · English &amp; Español
          </p>
          <p className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="h-3.5 w-3.5" /> {BUSINESS.city}, {BUSINESS.state}
            </span>
            <a href={BUSINESS.phoneHref} className="font-bold">
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>
      </div>

      <nav className="container-page flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-lg font-black text-accent-foreground shadow-accent">
            V
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold tracking-tight">Visoso Plumbing</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Plomería Económica
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setMenu(null)}>
          <Link to="/" className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary">
            Home
          </Link>
          <div className="relative" onMouseEnter={() => setMenu("services")}>
            <Link
              to="/services"
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary"
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {menu === "services" && (
              <div className="absolute left-0 top-full w-[30rem] rounded-2xl border border-border bg-popover p-3 shadow-lift">
                <div className="grid grid-cols-2 gap-1">
                  {NAV_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to="/$slug"
                      params={{ slug: `${s.slug}-anaheim-ca` }}
                      className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-secondary"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setMenu("areas")}>
            <Link
              to="/service-areas"
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary"
            >
              Service Areas <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {menu === "areas" && (
              <div className="absolute left-0 top-full w-[26rem] rounded-2xl border border-border bg-popover p-3 shadow-lift">
                <div className="grid grid-cols-2 gap-1">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      to="/$slug"
                      params={{ slug: `plumber-${l.slug}-ca` }}
                      className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-secondary"
                    >
                      Plumber in {l.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/blog" className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary">
            Blog
          </Link>
          <Link to="/about" className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary">
            About
          </Link>
          <Link to="/contact" className="rounded-full px-4 py-2 text-sm font-semibold hover:bg-secondary">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <CallBtn label={BUSINESS.phoneDisplay} />
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page grid gap-1 py-4">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "All Services" },
              { to: "/service-areas", label: "Service Areas" },
              { to: "/blog", label: "Blog" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-secondary"
              >
                {i.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-1 gap-2">
              <CallBtn />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function StickyCTA() {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={BUSINESS.phoneHref}
          aria-label="Call Visoso Plumbing"
          className="grid h-14 w-14 place-items-center rounded-full bg-gradient-accent text-accent-foreground shadow-accent transition-transform hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-1 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-xl md:hidden">
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-4 py-3 text-sm font-bold text-accent-foreground"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </>
  );
}

export function TrustBar() {
  const items = [
    { icon: Clock, label: "24/7 Emergency", sub: "Live dispatch, day or night" },
    { icon: ShieldCheck, label: "Licensed & Insured", sub: "Verified independent providers" },
    { icon: MessageCircle, label: "English & Español", sub: "Bilingual providers" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
      {items.map((i, idx) => (
        <Reveal key={i.label} delay={idx * 0.06}>
          <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
              <i.icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold">{i.label}</span>
              <span className="block text-xs text-muted-foreground">{i.sub}</span>
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FinalCTA({
  title = "Need A Plumber In Anaheim Right Now?",
  body = "Call for immediate dispatch with details of the problem to connect with a local provider.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="surface-ink relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <Eyebrow>Connect With A Local Provider</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">{title}</h2>
            <p className="mt-4 text-base opacity-85">{body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CallBtn label={`Call ${BUSINESS.phoneDisplay}`} />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] opacity-70">{fullAddress}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQBlock({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="grid gap-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-display text-base font-bold">{f.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-accent transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="surface-ink mt-10 pb-24 pt-20 md:pb-14">
      <div className="container-page grid gap-12 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl font-extrabold">Visoso Plumbing</span>
          <p className="mt-1 text-sm opacity-70">Visoso Plomería Económica</p>
          <p className="mt-4 text-sm leading-relaxed opacity-80">
            A free service to assist homeowners in connecting with local service providers. Find available residential plumbers in Anaheim and Orange County.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <CallBtn label="Call Now" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] opacity-70">Services</h3>
          <ul className="mt-4 grid gap-2 text-sm">
            {SERVICES.slice(0, 9).map((s) => (
              <li key={s.slug}>
                <Link to="/$slug" params={{ slug: `${s.slug}-anaheim-ca` }} className="opacity-80 hover:opacity-100">
                  {s.name} Anaheim
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] opacity-70">Service Areas</h3>
          <ul className="mt-4 grid gap-2 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link to="/$slug" params={{ slug: `plumber-${l.slug}-ca` }} className="opacity-80 hover:opacity-100">
                  Plumber in {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] opacity-70">Contact</h3>
          <ul className="mt-4 grid gap-3 text-sm opacity-85">
            <li>
              <a href={BUSINESS.phoneHref} className="font-bold">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>{BUSINESS.street}</li>
            <li>
              {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
            </li>
            <li>{BUSINESS.hours}</li>
          </ul>
          <ul className="mt-6 grid gap-2 text-sm">
            <li>
              <Link to="/privacy-policy" className="opacity-70 hover:opacity-100">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="opacity-70 hover:opacity-100">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-12 border-t border-white/10 pt-8 text-xs opacity-60 grid gap-4">
        <p>Disclaimer: Visoso Plumbing is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and Visoso Plumbing does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on Visoso Plumbing.</p>
        <p>Same-day and 24/7 emergency services are subject to provider participation, location, technician availability, and demand. Availability is not guaranteed and may vary by market and appointment capacity.</p>
        <p>© {new Date().getFullYear()} Visoso Plumbing · Visoso Plomería Económica · Anaheim, CA</p>
      </div>
    </footer>
  );
}
