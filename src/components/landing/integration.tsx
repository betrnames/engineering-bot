import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Code as Code2, Boxes, Cpu, Terminal, ArrowUpRight } from "lucide-react"

const skills = [
  { name: "bipedal.walk", v: "1.8.2", latency: "12ms", status: "stable" },
  { name: "manipulation.grasp", v: "2.0.0", latency: "18ms", status: "stable" },
  { name: "vision.scene_graph", v: "0.9.4", latency: "42ms", status: "beta" },
  { name: "quadruped.stair_climb", v: "1.2.1", latency: "24ms", status: "stable" },
  { name: "humanoid.handover", v: "0.3.0", latency: "55ms", status: "alpha" },
  { name: "nav.slam_dense", v: "3.1.0", latency: "30ms", status: "stable" },
]

export function Integration() {
  return (
    <section id="integration" className="relative border-t border-border/60 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            // 02 — Mock Integration
          </div>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            What it looks like as the{" "}
            <span className="text-gradient-cyan">developer hub</span>
          </h2>
          <p className="mt-5 text-balance text-muted-foreground md:text-lg">
            A working mock of engineering.bot hosting API docs, SDKs, a skill browser,
            and every tool roboticists need to ship on top of a physical-AI brain.
          </p>
        </div>

        <Card className="mt-14 overflow-hidden border-border/60 bg-card/70 p-0 backdrop-blur ring-cyan">
          <div className="flex items-center justify-between border-b border-border/60 bg-background/50 px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/60" />
                <span className="size-2.5 rounded-full bg-chart-4/70" />
                <span className="size-2.5 rounded-full bg-primary/80" />
              </div>
              <div className="hidden items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground md:flex">
                <span className="text-primary">https://</span>engineering.bot/docs
              </div>
            </div>
            <Badge variant="outline" className="gap-1.5 border-primary/40 bg-primary/10 text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              live preview
            </Badge>
          </div>

          <Tabs defaultValue="skills" className="w-full">
            <div className="border-b border-border/60 bg-background/30 px-5">
              <TabsList className="h-12 w-full justify-start gap-2 bg-transparent p-0">
                <TabsTrigger value="skills" className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                  <Boxes className="size-4" /> Skill Browser
                </TabsTrigger>
                <TabsTrigger value="sdk" className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                  <Code2 className="size-4" /> SDK
                </TabsTrigger>
                <TabsTrigger value="docs" className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                  <Book className="size-4" /> API Docs
                </TabsTrigger>
                <TabsTrigger value="shell" className="gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                  <Terminal className="size-4" /> CLI
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="skills" className="m-0 p-6">
              <div className="grid gap-3 md:grid-cols-2">
                {skills.map((s) => (
                  <div
                    key={s.name}
                    className="group flex items-center justify-between rounded-lg border border-border/60 bg-background/40 px-4 py-3 transition hover:border-primary/40 hover:bg-primary/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                        <Cpu className="size-4" />
                      </div>
                      <div>
                        <div className="font-mono text-sm">{s.name}</div>
                        <div className="text-xs text-muted-foreground">
                          v{s.v} · p50 {s.latency}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={
                          s.status === "stable"
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : s.status === "beta"
                            ? "border-chart-4/40 bg-chart-4/10 text-chart-4"
                            : "border-chart-5/40 bg-chart-5/10 text-chart-5"
                        }
                      >
                        {s.status}
                      </Badge>
                      <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sdk" className="m-0 p-6">
              <div className="overflow-hidden rounded-lg border border-border/60 bg-background/60 font-mono text-sm">
                <div className="flex items-center justify-between border-b border-border/60 bg-background/40 px-4 py-2">
                  <span className="text-xs text-muted-foreground">robot.ts</span>
                  <span className="text-xs text-primary">TypeScript</span>
                </div>
                <pre className="overflow-x-auto p-5 leading-relaxed text-muted-foreground">
{`import { Engineering } from "@engineering.bot/sdk"

const robot = new Engineering({
  apiKey: process.env.ENGINEERING_KEY,
  embodiment: "humanoid.v2",
})

await robot.skills.load([
  "manipulation.grasp",
  "vision.scene_graph",
])

`}<span className="text-foreground">{`await robot.execute({
  prompt: "Pick up the red mug and place it on the shelf",
  safety: "strict",
})`}</span>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="docs" className="m-0 p-6">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { h: "Getting Started", b: "Boot a humanoid in under 5 minutes." },
                  { h: "Embodiment API", b: "Target humanoid, quadruped, or arm fleets." },
                  { h: "Safety Layer", b: "Constraint envelopes and teleop fallbacks." },
                  { h: "Policies", b: "Fine-tune skills on proprietary task data." },
                  { h: "Telemetry", b: "Real-time kinematic + sensor streams." },
                  { h: "Deployment", b: "Edge, on-prem, or hybrid orchestration." },
                ].map((d) => (
                  <div
                    key={d.h}
                    className="rounded-lg border border-border/60 bg-background/40 p-4 transition hover:border-primary/40"
                  >
                    <div className="font-medium">{d.h}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{d.b}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shell" className="m-0 p-6">
              <div className="overflow-hidden rounded-lg border border-border/60 bg-background/60 font-mono text-sm">
                <div className="border-b border-border/60 bg-background/40 px-4 py-2 text-xs text-muted-foreground">
                  ~/robotics-lab
                </div>
                <div className="space-y-2 p-5">
                  <div><span className="text-primary">$</span> eng init humanoid-01</div>
                  <div className="text-muted-foreground">→ provisioning embodiment profile... <span className="text-primary">ok</span></div>
                  <div><span className="text-primary">$</span> eng skills install manipulation.grasp</div>
                  <div className="text-muted-foreground">→ downloading 180MB policy... <span className="text-primary">ok</span></div>
                  <div><span className="text-primary">$</span> eng run "unload the dishwasher"</div>
                  <div className="text-muted-foreground">→ streaming telemetry to engineering.bot/dash</div>
                  <div className="flex items-center">
                    <span className="text-primary">$</span>
                    <span className="ml-2 inline-block h-4 w-2 animate-pulse bg-primary" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  )
}
