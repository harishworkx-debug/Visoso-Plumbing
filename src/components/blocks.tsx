import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import type { Service } from "@/data/services";
import { Reveal } from "@/components/site";

export function PageHero({
  eyebrow,
  title,
  sub,
  image,
  imageAlt,
  priority = false,
  children,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="surface-ink relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed opacity-85 md:text-lg">{sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-xs opacity-80">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent text-accent" /> 4.9 star rated locally
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" /> Licensed &amp; insured
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" /> English &amp; Español
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-white/15 shadow-lift">
            <img
              src={image}
              alt={imageAlt}
              width={1400}
              height={900}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, locationSlug = "anaheim" }: { service: Service; locationSlug?: string }) {
  return (
    <Link
      to="/$slug"
      params={{ slug: `${service.slug}-${locationSlug}-ca` }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          width={1400}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
          Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function StatGrid({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.05}>
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <p className="font-display text-3xl font-extrabold text-gradient-accent">{s.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
