import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "App Router",
    detail: "Server components, nested layouts and route-first architecture.",
    tag: "NEXT.JS 16",
  },
  {
    number: "02",
    title: "Type-safe by default",
    detail: "TypeScript foundations with clear boundaries and predictable props.",
    tag: "TYPESCRIPT",
  },
  {
    number: "03",
    title: "Design system ready",
    detail: "Tailwind CSS 4 tokens and responsive utility-first styling.",
    tag: "TAILWIND 4",
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#080b13] text-[#eef4ff]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[540px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute right-[-12rem] top-[35%] h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(148,163,184,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 sm:px-8">
        <header className="flex items-center justify-between border-b border-white/10 py-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Starter home">
            <span className="grid size-10 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-lg font-black text-cyan-100 shadow-[0_0_35px_rgba(103,232,249,.12)]">N</span>
            <span>
              <span className="block text-xs font-extrabold tracking-[.18em]">NORTHSTAR</span>
              <span className="block text-[9px] tracking-[.2em] text-slate-500">NEXT.JS STARTER KIT</span>
            </span>
          </Link>
          <div className="hidden items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[.06] px-3 py-2 text-[10px] font-semibold tracking-[.12em] text-emerald-200 sm:flex">
            <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]" />
            FOUNDATION READY
          </div>
          <a href="https://github.com/vishwasaithalz/nextjs-boilerplate" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-200/40 hover:text-white">GitHub ↗</a>
        </header>

        <section className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/[.06] px-3 py-1.5 text-[10px] font-semibold tracking-[.16em] text-cyan-100">
              <span className="text-cyan-300">✳</span> A CLEAN START FOR AMBITIOUS BUILDS
            </div>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-.065em] sm:text-6xl xl:text-7xl">
              Start with a <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">stronger</span> foundation.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              A deliberately lean Next.js starter with a polished interface, modern tooling and room for the product to become its own thing.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-cyan-200 to-sky-300 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-[0_12px_35px_rgba(103,232,249,.16)] transition hover:-translate-y-0.5">Explore Next.js docs ↗</a>
              <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer" className="rounded-xl border border-white/12 bg-white/[.035] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/[.07]">Tailwind documentation</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-semibold tracking-[.15em] text-slate-500">
              <span>NEXT.JS 16</span><span>REACT 19</span><span>TYPESCRIPT</span><span>TAILWIND CSS 4</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-cyan-300/10 via-blue-500/5 to-violet-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#0c1422]/90 p-5 shadow-[0_35px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-1.5"><i className="size-2 rounded-full bg-rose-400/80"/><i className="size-2 rounded-full bg-amber-300/80"/><i className="size-2 rounded-full bg-emerald-300/80"/></div>
                <span className="font-mono text-[9px] tracking-[.16em] text-slate-500">PROJECT / BOOT SEQUENCE</span>
                <span className="text-xs text-cyan-200">⌘</span>
              </div>
              <div className="py-8">
                <div className="mb-3 font-mono text-[10px] tracking-[.2em] text-cyan-200/80">SYSTEM INITIALIZED</div>
                <div className="text-3xl font-extrabold tracking-[-.05em]">Everything in its place.</div>
                <p className="mt-3 max-w-sm text-xs leading-6 text-slate-400">A clean app shell, a considered visual language and a predictable place to add your next feature.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[.05] p-4"><div className="text-[9px] tracking-[.15em] text-cyan-100/60">BUILD STATUS</div><div className="mt-2 text-xl font-bold text-cyan-100">READY</div><div className="mt-1 text-[10px] text-slate-500">Production optimized</div></div>
                <div className="rounded-2xl border border-violet-200/15 bg-violet-200/[.05] p-4"><div className="text-[9px] tracking-[.15em] text-violet-100/60">ARCHITECTURE</div><div className="mt-2 text-xl font-bold text-violet-100">MODULAR</div><div className="mt-1 text-[10px] text-slate-500">App Router structure</div></div>
              </div>
              <div className="mt-4 rounded-xl border border-white/8 bg-black/20 p-4 font-mono text-[10px] leading-6 text-slate-400">
                <div><span className="text-emerald-300">✓</span> app router configured</div>
                <div><span className="text-emerald-300">✓</span> typescript ready</div>
                <div><span className="text-emerald-300">✓</span> tailwind pipeline ready</div>
                <div><span className="text-cyan-200">›</span> waiting for your next idea<span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-cyan-200 align-middle"/></div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-3 border-t border-white/10 py-8 md:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.number} className="rounded-2xl border border-white/8 bg-white/[.025] p-5 transition hover:border-cyan-200/20 hover:bg-white/[.045]">
              <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-cyan-200/70">{item.number} / CAPABILITY</span><span className="font-mono text-[9px] text-slate-600">{item.tag}</span></div>
              <h2 className="mt-4 text-base font-bold">{item.title}</h2>
              <p className="mt-2 text-xs leading-6 text-slate-400">{item.detail}</p>
            </article>
          ))}
        </section>
        <footer className="flex flex-wrap justify-between gap-3 border-t border-white/10 py-5 text-[9px] tracking-[.12em] text-slate-600"><span>NORTHSTAR STARTER · BUILT TO BE REPLACED BY YOUR PRODUCT</span><span>NO TRACKERS · NO DEMO DATA · JUST THE FOUNDATION</span></footer>
      </div>
    </main>
  );
}
