import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const sales = [
  { domain: "bot.ai", price: "$3.2M", note: "Reported secondary sale" },
  { domain: "robotics.com", price: "$1.8M", note: "Category-defining generic" },
  { domain: "voice.ai", price: "$1.5M", note: "AI-category exact match" },
  { domain: "ai.com", price: "$11M+", note: "Redirects to OpenAI" },
]

export function MarketProof() {
  return (
    <section id="proof" className="relative border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              // 03 — Comparables
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Category-defining domains close{" "}
              <span className="text-gradient-cyan">seven figures</span>.
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Physical AI is the next trillion-dollar category. The exact-match domain
              for its most-used surface — engineering — is still available. Once.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="font-mono text-3xl font-semibold text-primary">
                  $11M+
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  ai.com sale
                </div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-mono text-3xl font-semibold text-primary">
                  18×
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  YoY .bot demand
                </div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-mono text-3xl font-semibold text-primary">
                  1 of 1
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  exact-match
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {sales.map((s, i) => (
              <Card
                key={s.domain}
                className="border-border/60 bg-card/60 backdrop-blur transition hover:border-primary/40"
              >
                <CardContent className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground/60">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="font-mono text-base">{s.domain}</div>
                      <div className="text-xs text-muted-foreground">{s.note}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="size-4 text-primary" />
                    <span className="font-mono text-lg font-semibold text-primary">
                      {s.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
