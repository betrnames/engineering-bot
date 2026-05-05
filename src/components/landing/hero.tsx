import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cpu, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid radial-fade" aria-hidden />

      <nav className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-md border border-primary/30 bg-primary/10 ring-cyan">
            <Cpu className="size-4 text-primary" />
          </div>
          <span className="font-mono text-sm tracking-tight text-foreground">
            engineering<span className="text-primary">.bot</span>
          </span>
        </div>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#fit" className="transition hover:text-foreground">Why It Fits</a>
          <a href="#integration" className="transition hover:text-foreground">Integration</a>
          <a href="#proof" className="transition hover:text-foreground">Market Proof</a>
          <a href="#claim" className="transition hover:text-foreground">Claim</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary">
            <a href="#claim">Inquire</a>
          </Button>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center md:pt-20">
        <Badge
          variant="outline"
          className="mb-8 gap-2 border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur"
        >
          <Sparkles className="size-3" />
          Premium exact-match .bot domain
          <span className="ml-1 inline-block size-1.5 animate-pulse rounded-full bg-primary" />
        </Badge>

        <h1 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          <span className="block pb-2 text-gradient-cyan">The Engineering Brain</span>
          <span className="mt-2 block text-foreground">for Physical AI</span>
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          <span className="font-mono text-primary">engineering.bot</span> — the exact-match domain for
          the developer portal, documentation, and omni-bodied platform powering physical AI.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group relative h-12 overflow-hidden bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90 glow-cyan"
          >
            <a href="#claim">
              Claim This Domain
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-primary/40 bg-background/40 px-7 text-base backdrop-blur hover:bg-primary/10 hover:text-primary"
          >
            <a href="#integration">See Mock Integration</a>
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          <span>Physical AI</span>
          <span className="size-1 rounded-full bg-primary/40" />
          <span>Robotics Platform</span>
          <span className="size-1 rounded-full bg-primary/40" />
          <span>Developer SDK</span>
          <span className="size-1 rounded-full bg-primary/40" />
          <span>Omni-Bodied</span>
        </div>
      </div>

    </section>
  )
}
