import { Card, CardContent } from "@/components/ui/card"
import { Target, Shield, Users, Zap, Compass } from "lucide-react"

const items = [
  {
    icon: Target,
    title: "Exact-Match Authority",
    body: "Engineering is the core of the brain-for-robots thesis. The domain mirrors the product.",
  },
  {
    icon: Shield,
    title: ".bot TLD Credibility",
    body: "A signaling TLD reserved for serious robotics and AI operators — not a .com afterthought.",
  },
  {
    icon: Users,
    title: "Developer Magnet",
    body: "A memorable, type-in destination for the engineers building on top of the general brain for robots.",
  },
  {
    icon: Zap,
    title: "Branding Power",
    body: "Short, technical, unforgettable. Works as a product surface, a portal, and a recruiting asset.",
  },
  {
    icon: Compass,
    title: "Category-Defining",
    body: "Stakes a claim in the physical-AI category the same way openai.com did for LLMs.",
  },
]

export function WhyFit() {
  return (
    <section id="fit" className="relative border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            // 01 — Positioning
          </div>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Why <span className="font-mono text-primary">engineering.bot</span> fits physical AI
          </h2>
          <p className="mt-5 text-balance text-muted-foreground md:text-lg">
            Physical AI needs a general brain for robots. This domain is the front door
            for every engineer who needs to plug a robot into it.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card
              key={item.title}
              className="group relative overflow-hidden border-border/60 bg-card/60 backdrop-blur transition hover:border-primary/40"
            >
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100"
                aria-hidden
              />
              <CardContent className="p-7">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary ring-cyan">
                    <item.icon className="size-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/50">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
