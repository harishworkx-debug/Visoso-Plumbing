import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar, Footer, StickyCTA, CallBtn } from "@/components/site";
import { BUSINESS, fullAddress } from "@/data/business";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-gradient-accent">404</h1>
        <h2 className="mt-4 text-xl font-bold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page doesn't exist. Need a plumber in Anaheim? Call us any time, day or night.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-bold"
          >
            Go home
          </Link>
          <CallBtn />
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or call us directly.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full border border-border px-5 py-3 text-sm font-bold"
          >
            Try again
          </button>
          <CallBtn />
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Visoso Plumbing | 24/7 Plumber in Anaheim, CA" },
      {
        name: "description",
        content:
          "Licensed 24 hour plumber in Anaheim, CA. Drain cleaning, leak detection, water heaters, gas lines and emergency plumbing. Free estimates. Call (714) 750-8607.",
      },
      { name: "author", content: "Visoso Plumbing" },
      { property: "og:site_name", content: "Visoso Plumbing" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#12233a" },
      { property: "og:title", content: "Visoso Plumbing | 24/7 Plumber in Anaheim, CA" },
      { name: "twitter:title", content: "Visoso Plumbing | 24/7 Plumber in Anaheim, CA" },
      { property: "og:description", content: "Licensed 24 hour plumber in Anaheim, CA. Drain cleaning, leak detection, water heaters, gas lines and emergency plumbing. Free estimates. Call (714) 750-8607." },
      { name: "twitter:description", content: "Licensed 24 hour plumber in Anaheim, CA. Drain cleaning, leak detection, water heaters, gas lines and emergency plumbing. Free estimates. Call (714) 750-8607." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/17546fd4-bd88-4e18-85db-1f47c342bb8c/id-preview-4be64d18--6e9db87f-972e-4982-b906-5aa65d246e82.lovable.app-1785752980936.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/17546fd4-bd88-4e18-85db-1f47c342bb8c/id-preview-4be64d18--6e9db87f-972e-4982-b906-5aa65d246e82.lovable.app-1785752980936.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          "@id": "https://www.visosoplomeriaeconomica.com/#business",
          name: BUSINESS.name,
          alternateName: BUSINESS.altName,
          image: "https://www.visosoplomeriaeconomica.com/favicon.ico",
          telephone: BUSINESS.phoneDisplay,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: BUSINESS.city,
            addressRegion: BUSINESS.state,
            postalCode: BUSINESS.zip,
            addressCountry: "US",
          },
          geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          ],
          availableLanguage: ["English", "Spanish"],
          areaServed: [
            "Anaheim CA",
            "Orange CA",
            "Santa Ana CA",
            "Fullerton CA",
            "Garden Grove CA",
            "Buena Park CA",
            "Yorba Linda CA",
            "Placentia CA",
            "Orange County CA",
          ],
          description: `${BUSINESS.name} is a free service to assist homeowners in connecting with local service providers offering 24 hour emergency plumbing across Anaheim and Orange County.`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BUSINESS.rating,
            reviewCount: BUSINESS.reviewCount,
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </QueryClientProvider>
  );
}
