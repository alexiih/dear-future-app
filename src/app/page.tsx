'use client';

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

export default function Home() {
  const { data: insights, loading: isLoading, error } = useInsights();
  const items = insights.length > 0 ? insights : placeholderInsights;

  return (
    <div className="min-h-screen bg-[color:var(--color-surface)] text-[color:var(--color-text)]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold tracking-[0.4em] text-[color:var(--color-accent)]">
            DEAR
          </span>
          <span className="text-2xl font-semibold tracking-[0.4em] text-[color:var(--color-accent-strong)]">
            FUTURE
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a className="transition-colors hover:text-[color:var(--color-accent)]" href="#services">
            Services
          </a>
          <a className="transition-colors hover:text-[color:var(--color-accent)]" href="#process">
            Process
          </a>
          <a className="transition-colors hover:text-[color:var(--color-accent)]" href="#insights">
            Insights
          </a>
        </nav>
        <a
          className="rounded-full bg-[color:var(--color-accent)] px-5 py-2 text-sm font-semibold text-[color:var(--color-text-inverse)] transition-transform hover:-translate-y-0.5"
          href="#contact"
        >
          Book a call
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-20">
        <section className="grid gap-16 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-3 rounded-full bg-[color:var(--color-accent-muted)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--color-accent-strong)]">
              Strategic innovation studio
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-[color:var(--color-accent-strong)] md:text-5xl">
              Build the future your clients dream about.
            </h1>
            <p className="max-w-xl text-lg text-[color:var(--color-text-subtle)]">
              Dear Future helps you turn emerging trends into tangible products, services, and experiences.
              We align stakeholders, surface the right insights, and deliver pathways from imagination to execution.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-text-inverse)] transition-transform hover:-translate-y-0.5"
                href="#contact"
              >
                Start a project
              </a>
              <a
                className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-accent-strong)] transition-colors hover:border-[color:var(--color-accent)]"
                href="#process"
              >
                Our approach
              </a>
            </div>
          </div>
          <div className="relative grid gap-6 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-10 shadow-[0_16px_40px_rgba(33,31,30,0.08)]">
            <div className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--color-text-subtle)]">
              What clients receive
            </div>
            <ul className="space-y-4 text-base text-[color:var(--color-text-subtle)]">
              <li className="rounded-2xl border border-[color:var(--color-border)] px-4 py-3">
                Market-sensing dashboards powered by Supabase.
              </li>
              <li className="rounded-2xl border border-[color:var(--color-border)] px-4 py-3">
                Opportunity roadmaps with scenario modeling.
              </li>
              <li className="rounded-2xl border border-[color:var(--color-border)] px-4 py-3">
                Stakeholder workshops, artifacts, and activation plans.
              </li>
            </ul>
            <span className="text-xs text-[color:var(--color-text-subtle)]">
              Hosted on Vercel, secured by Supabase, delivered with purpose.
            </span>
          </div>
        </section>

        <section id="services" className="space-y-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--color-accent-strong)]">Core engagements</h2>
              <p className="mt-3 max-w-2xl text-[color:var(--color-text-subtle)]">
                From exploratory research to launch, each engagement combines qualitative insight, quantitative validation,
                and experiential storytelling.
              </p>
            </div>
            <a
              href="#contact"
              className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-accent)]"
            >
              View full capabilities →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Foresight Sprints",
                description:
                  "Rapidly align teams on future-state opportunities, with Supabase-backed scenario libraries and signal tracking.",
                accent: "--brand-blue-01",
              },
              {
                title: "Experience Prototyping",
                description:
                  "Prototype the service journey across channels, leveraging real-time collaboration and user testing pipelines.",
                accent: "--brand-yellow-02",
              },
              {
                title: "Launch Orchestration",
                description:
                  "Prepare for roll-out with detailed playbooks, stakeholder training, and measurable activation metrics.",
                accent: "--brand-maroon",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="flex flex-col gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-8 shadow-[0_10px_30px_rgba(33,31,30,0.04)]"
              >
                <span
                  className="h-1 w-12 rounded-full"
                  style={{ backgroundColor: `var(${service.accent})` }}
                />
                <h3 className="text-xl font-semibold text-[color:var(--color-accent-strong)]">
                  {service.title}
                </h3>
                <p className="text-sm text-[color:var(--color-text-subtle)]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="grid gap-10 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-accent-strong)] px-8 py-12 text-[color:var(--color-text-inverse)] md:grid-cols-[0.8fr_1fr]"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[rgba(255,255,255,0.65)]">
              Our process
            </p>
            <h2 className="text-3xl font-semibold leading-tight">
              Grounded in research, amplified by technology, executed with craft.
            </h2>
            <p className="text-sm text-[rgba(255,255,255,0.75)]">
              Supabase anchors our data infrastructure, enabling secure client workspaces, dashboards,
              and automated reporting across the lifecycle of an engagement.
            </p>
          </div>
          <ol className="grid gap-6 text-sm text-[rgba(255,255,255,0.85)]">
            {[
              "Discover: synthesize signals, interviews, and data models.",
              "Design: translate insights into tangible journey maps and prototypes.",
              "Deploy: launch with stakeholder playbooks, measurement frameworks, and continuous optimization.",
            ].map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl bg-[rgba(0,0,0,0.15)] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.12)] text-base font-semibold">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="insights" className="space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--color-text-subtle)]">
              Latest signals
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--color-accent-strong)]">
              Stories shaping tomorrow
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((insight) => (
              <article
                key={insight.id ?? insight.headline}
                className="flex flex-col gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-7"
              >
                <h3 className="text-lg font-semibold text-[color:var(--color-accent-strong)]">
                  {insight.headline}
                </h3>
                <p className="text-sm text-[color:var(--color-text-subtle)]">{insight.summary}</p>
                <button className="w-max text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
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
            <p className="text-xs text-[color:var(--color-accent-strong)]">
              Unable to load live insights yet. Showing editorial examples.
            </p>
          )}
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)]"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--color-accent-strong)]">
              Let&apos;s architect what&apos;s next.
            </h2>
            <p className="max-w-md text-sm text-[color:var(--color-text-subtle)]">
              Share your challenge and we&apos;ll build a Supabase-backed collaboration space for rapid alignment.
            </p>
          </div>
          <form className="grid w-full max-w-md gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-full border border-[color:var(--color-border)] bg-white px-5 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[color:var(--color-accent)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              className="rounded-full border border-[color:var(--color-border)] bg-white px-5 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[color:var(--color-accent)]"
            />
            <button
              type="submit"
              className="rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--color-text-inverse)] transition-transform hover:-translate-y-0.5"
            >
              Submit inquiry
            </button>
          </form>
        </div>
        <div className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)] py-6 text-center text-xs text-[color:var(--color-text-subtle)]">
          © {new Date().getFullYear()} Dear Future. Crafted with curiosity.
        </div>
      </footer>
    </div>
  );
}
