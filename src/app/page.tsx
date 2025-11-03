'use client';

import Image from "next/image";
import { useInsights } from "@/hooks/useInsights";

const placeholderInsights = [
  {
    id: "placeholder-1",
    headline: "Adaptive retail ecosystems",
    summary:
      "How modular physical environments are reframing loyalty for global lifestyle brands.",
  },
  {
    id: "placeholder-2",
    headline: "Generative cultural playbooks",
    summary:
      "Co-creation with audiences to build resonance — and how to measure the signals that matter.",
  },
  {
    id: "placeholder-3",
    headline: "Responsible AI activation",
    summary:
      "Designing equitable services powered by AI with transparent guardrails and clear governance.",
  },
];

const marqueePhrases = [
  "IIH Nordic is now Dear Future",
  "Strategy, data, and design for growth",
  "AI with accountable impact",
  "Partnering with ambitious brands",
];

const services = [
  {
    title: "AI-driven growth",
    copy: "Product, pricing, and campaign experimentation frameworks that deliver measurable commercial results.",
    image:
      "linear-gradient(135deg, rgba(172, 95, 67, 0.9), rgba(222, 192, 108, 0.75))",
  },
  {
    title: "Customer intelligence",
    copy: "Unified data foundations, predictive segmentation, and activation roadmaps tailored to each audience.",
    image:
      "linear-gradient(135deg, rgba(72, 94, 122, 0.9), rgba(198, 170, 144, 0.65))",
  },
  {
    title: "AI strategy & enablement",
    copy: "Roadmaps that align leadership, policy, and product teams around ethical and efficient AI adoption.",
    image:
      "linear-gradient(135deg, rgba(61, 96, 126, 0.85), rgba(195, 135, 84, 0.7))",
  },
  {
    title: "Experience orchestration",
    copy: "Service design, content systems, and operational playbooks that scale delight across every touchpoint.",
    image:
      "linear-gradient(135deg, rgba(39, 75, 88, 0.85), rgba(192, 117, 104, 0.72))",
  },
] as const;

export default function Home() {
  const { data: insights, loading: isLoading, error } = useInsights();
  const items = insights.length > 0 ? insights : placeholderInsights;

  return (
    <div className="min-h-screen bg-[color:var(--color-surface)] text-[color:var(--color-text)]">
      <header className="sticky top-0 z-20 border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="flex items-center">
            <Image
              src="/logo-dear-future.png"
              alt="Dear Future"
              width={132}
              height={44}
              priority
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.3em] md:flex">
            <a href="#services" className="transition-colors hover:text-[color:var(--color-accent)]">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-[color:var(--color-accent)]">
              About us
            </a>
            <a href="#insights" className="transition-colors hover:text-[color:var(--color-accent)]">
              Signals
            </a>
            <a href="#contact" className="transition-colors hover:text-[color:var(--color-accent)]">
              Contact
            </a>
          </nav>
          <a
            className="rounded-full border border-[color:var(--color-accent)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-accent)] transition-colors hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-text-inverse)]"
            href="#contact"
          >
            Book a call
          </a>
        </div>
        <div className="marquee">
          <div className="marquee__inner">
            {[...marqueePhrases, ...marqueePhrases].map((phrase, index) => (
              <span key={`${phrase}-${index}`} className="tracking-[0.3em]">
                {phrase}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section id="top" className="relative w-full overflow-hidden border-b border-[color:var(--color-border)]">
        <div className="absolute inset-0">
          <Image
            src="/hero-dear-future.jpg"
            alt="Dear Future collaboration"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[color:var(--color-overlay)]" />
        </div>
        <div className="relative mx-auto flex min-h-[520px] w-full max-w-6xl flex-col justify-end gap-8 px-6 pb-16 pt-24 text-[color:var(--color-text-inverse)] md:min-h-[620px] md:px-10 md:pb-24">
          <p className="max-w-md text-sm uppercase tracking-[0.35em] text-[rgba(255,255,255,0.75)]">
            Dear Future, let&apos;s design tomorrow.
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
            We changed our name to match our ambition—and we&apos;re helping brands shape what&apos;s next.
          </h1>
          <p className="max-w-xl text-base text-[rgba(255,255,255,0.85)] md:text-lg">
            Dear Future unites data, creativity, and emerging technology to build resilient growth for ambitious
            organisations. From AI strategy to full experience orchestration, we partner end-to-end.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-text-inverse)]"
            >
              Explore services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-text-inverse)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em]"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:px-10 md:pb-32">
        <section id="about" className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-12 shadow-[0_40px_80px_rgba(45,35,28,0.08)]">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
                What we do
              </p>
              <h2 className="max-w-lg text-4xl font-semibold leading-tight text-[color:var(--color-text)] md:text-5xl">
                Shaping tomorrow with data, design, and accountable AI.
              </h2>
            </div>
            <div className="max-w-xl space-y-4 text-[color:var(--color-text-subtle)]">
              <p>
                Since 2015 we&apos;ve helped ambitious organisations turn change into measurable momentum. We pair
                experimentation with operational rigor, making innovation tangible for marketing, product, and CX teams.
              </p>
              <p>
                Clients like Maersk, Pandora, Velux, and TotalEnergies trust us to translate signals into scalable
                platforms—grounded in governance, powered by Supabase, and delivered on Vercel.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-accent)]"
              >
                Get in touch →
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[color:var(--color-border)] pt-8 text-sm text-[color:var(--color-text-subtle)] sm:grid-cols-3 md:grid-cols-6">
            {["Maersk", "Pandora", "Velux", "TotalEnergies", "Grundfos", "Danske Bank"].map((brand) => (
              <div key={brand} className="uppercase tracking-[0.3em] text-[color:var(--color-text-subtle)]">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">Services</p>
            <h2 className="max-w-2xl text-4xl font-semibold text-[color:var(--color-text)] md:text-[3.2rem]">
              We help companies grow with AI.
            </h2>
            <p className="max-w-2xl text-[color:var(--color-text-subtle)]">
              Each engagement blends research, experimentation, and critical implementation to move from slides to
              real-world impact.
            </p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col gap-6 border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] shadow-[0_35px_60px_rgba(45,35,28,0.1)]"
              >
                <div
                  className="aspect-[3/1] w-full"
                  style={{
                    backgroundImage: service.image,
                  }}
                />
                <div className="flex flex-1 flex-col gap-5 px-8 pb-10">
                  <h3 className="text-2xl font-semibold text-[color:var(--color-text)]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-text-subtle)]">{service.copy}</p>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-text)] hover:text-[color:var(--color-accent)]"
                  >
                    Get in touch →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] p-12 md:p-16"
        >
          <div className="grid gap-12 md:grid-cols-[0.7fr_1fr] md:items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
                Our approach
              </p>
              <h2 className="text-3xl font-semibold text-[color:var(--color-text)] md:text-[2.8rem]">
                Research-led, technology-enabled, crafted for adoption.
              </h2>
              <p className="text-sm text-[color:var(--color-text-subtle)] md:text-base">
                Supabase anchors our client workspaces—from collaborative discovery canvases to live dashboards. We
                orchestrate the journey with measurable checkpoints so momentum never stalls.
              </p>
            </div>
            <ol className="grid gap-6 text-sm text-[color:var(--color-text-subtle)] md:text-base">
              {[
                "Discover: audit data foundations, stakeholder goals, and operational realities.",
                "Design: co-create roadmaps, prototypes, and narratives that align decision-makers.",
                "Deliver: activate programs with governance, measurement, and embedded teams.",
              ].map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] px-6 py-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] text-base font-semibold text-[color:var(--color-text)]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="insights" className="space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
              Latest signals
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--color-text)] md:text-[2.6rem]">
              Stories shaping tomorrow
            </h2>
          </div>
          <div className="card-grid md:grid-cols-3">
            {items.map((insight) => (
              <article
                key={insight.id ?? insight.headline}
                className="flex flex-col gap-5 border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-8 shadow-[0_30px_50px_rgba(45,35,28,0.08)]"
              >
                <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                  {insight.headline}
                </h3>
                <p className="text-sm text-[color:var(--color-text-subtle)]">{insight.summary}</p>
                <button className="mt-auto w-max text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
                  Read insight →
                </button>
              </article>
            ))}
          </div>
          {isLoading && (
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-text-subtle)]">
              Loading insights…
            </p>
          )}
          {error && !isLoading && (
            <p className="text-xs text-[color:var(--color-accent)]">
              Unable to load live insights yet. Showing editorial examples.
            </p>
          )}
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-12 md:p-16"
        >
          <div className="grid gap-12 md:grid-cols-[0.8fr_1fr] md:items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
                Contact
              </p>
              <h2 className="text-4xl font-semibold text-[color:var(--color-text)] md:text-[2.8rem]">
                Let&apos;s talk about your future.
              </h2>
              <p className="text-sm text-[color:var(--color-text-subtle)]">
                Tell us about your organisation, your industry, and the outcomes you&apos;re building toward. We&apos;ll
                curate a Supabase-powered workspace tailored to your brief.
              </p>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
                  First name*
                  <input className="form-field" type="text" name="firstName" placeholder="Jane" />
                </label>
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
                  Last name*
                  <input className="form-field" type="text" name="lastName" placeholder="Doe" />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
                  Email*
                  <input className="form-field" type="email" name="email" placeholder="you@company.com" />
                </label>
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
                  Phone
                  <input className="form-field" type="tel" name="phone" placeholder="+45 00 00 00 00" />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
                Organisation & project notes
                <textarea
                  className="form-field min-h-[160px] resize-none"
                  name="message"
                  placeholder="Share your industry, challenge, and timeline."
                />
              </label>
              <label className="flex items-start gap-3 text-xs text-[color:var(--color-text-subtle)]">
                <input type="checkbox" className="mt-1 h-4 w-4 border border-[color:var(--color-border-strong)]" />
                <span>
                  I agree to be contacted about Dear Future services. We respect your data and follow GDPR obligations.
                </span>
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex w-max items-center justify-center bg-[color:var(--color-accent)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--color-text-inverse)] transition-colors hover:bg-[color:var(--color-accent-strong)]"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-dear-future.png"
              alt="Dear Future"
              width={110}
              height={36}
            />
            <span className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-text-subtle)]">
              © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-[color:var(--color-text-subtle)]">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#insights">Signals</a>
            <a href="#contact">Contact</a>
            <span>DA / EN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
