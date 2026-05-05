import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase"
import { Check, Loader as Loader2, Send } from "lucide-react"

export function Claim() {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) {
      toast.error("Email is required")
      return
    }
    setLoading(true)
    const { error } = await supabase.from("domain_leads").insert({
      email,
      company,
      message,
      intent: "claim",
    })
    setLoading(false)
    if (error) {
      toast.error("Something went wrong. Please try again.")
      return
    }
    setDone(true)
    toast.success("Inquiry received. We'll be in touch within 24 hours.")
    setEmail("")
    setCompany("")
    setMessage("")
  }

  return (
    <section id="claim" className="relative border-t border-border/60 py-24 md:py-32">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            // 04 — Acquire
          </div>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Own the engineering brain of{" "}
            <span className="text-gradient-cyan">physical AI</span>
          </h2>
          <p className="mt-5 text-balance text-muted-foreground md:text-lg">
            Submit an offer or request a call. Priority routing for qualified
            robotics operators and physical-AI teams.
          </p>
        </div>

        <Card className="mt-12 border-border/60 bg-card/70 backdrop-blur">
          <CardContent className="p-8 md:p-10">
            {done ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                  <Check className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Inquiry received</h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Thanks. We'll follow up within 24 hours from the broker handling
                  engineering.bot.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                  onClick={() => setDone(false)}
                >
                  Submit another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11 border-border/80 bg-background/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Acme Robotics"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="h-11 border-border/80 bg-background/60"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Offer or message</Label>
                  <Textarea
                    id="message"
                    placeholder="Intended use, budget range, timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="resize-none border-border/80 bg-background/60"
                  />
                </div>
                <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
                  <p className="text-xs text-muted-foreground">
                    Your details are private. We reply to every serious inquiry.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="h-11 gap-2 bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90 glow-cyan"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Submit inquiry
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
