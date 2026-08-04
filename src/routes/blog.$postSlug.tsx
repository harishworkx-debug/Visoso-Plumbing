import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Clock } from "lucide-react";
import { CallBtn, Eyebrow, FinalCTA, Section } from "@/components/site";
import { POST_MAP } from "@/data/blog";
import { SERVICE_MAP } from "@/data/services";

export const Route = createFileRoute("/blog/$postSlug")({
  head: ({ params }) => { const post = POST_MAP.get(params.postSlug); const title = post ? `${post.title} | Visoso Plumbing` : "Plumbing Guide Not Found | Visoso"; const description = post?.excerpt ?? "The requested plumbing guide could not be found."; return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] }; },
  component: BlogArticle,
});

function BlogArticle() {
  const { postSlug } = Route.useParams();
  const post = POST_MAP.get(postSlug);
  if (!post) return <Section><div className="py-20 text-center"><h1 className="text-4xl font-extrabold">Guide Not Found</h1><Link to="/blog" className="mt-6 inline-flex font-bold text-primary">Back to all guides</Link></div></Section>;
  const service = SERVICE_MAP.get(post.relatedService);
  return <><Section className="surface-ink"><div className="mx-auto max-w-4xl"><Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold opacity-75"><ArrowLeft className="h-4 w-4"/>All guides</Link><div className="mt-8 flex items-center gap-4 text-xs font-bold uppercase text-accent"><span>{post.category}</span><span className="flex items-center gap-1 opacity-80"><Clock className="h-4 w-4"/>{post.readMinutes} min read</span></div><h1 className="mt-5 text-4xl font-extrabold md:text-6xl">{post.title}</h1><p className="mt-5 max-w-2xl text-lg opacity-80">{post.excerpt}</p></div></Section><Section><article className="mx-auto max-w-3xl prose-local">{post.sections.map(section => <section key={section.h}><h2>{section.h}</h2>{section.p.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}<div className="mt-12 rounded-2xl border border-border bg-surface p-7"><Eyebrow>Key Takeaways</Eyebrow><ul>{post.takeaways.map(item => <li key={item}><CheckCircle2 className="mr-2 inline h-4 w-4 text-accent"/>{item}</li>)}</ul></div>{service && <div className="mt-12 rounded-2xl border border-border bg-card p-7 shadow-card"><h2 className="!mt-0">Need help with {service.name.toLowerCase()}?</h2><p>{service.short} Call Visoso Plumbing for a clear diagnosis and upfront estimate.</p><CallBtn label="Talk To A Plumber" /></div>}</article></Section><FinalCTA /></>;
}