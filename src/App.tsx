import { Toaster } from "@/components/ui/sonner"
import { Hero } from "@/components/landing/hero"
import { WhyFit } from "@/components/landing/why-fit"
import { Integration } from "@/components/landing/integration"
import { MarketProof } from "@/components/landing/market-proof"
import { Claim } from "@/components/landing/claim"
import { Footer } from "@/components/landing/footer"

export function App() {
  return (
    <div className="min-h-svh bg-background text-foreground antialiased">
      <Hero />
      <WhyFit />
      <Integration />
      <MarketProof />
      <Claim />
      <Footer />
      <Toaster theme="dark" position="top-center" />
    </div>
  )
}

export default App
