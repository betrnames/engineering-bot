import { Cpu } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 ring-cyan">
            <Cpu className="size-4 text-primary" />
          </div>
          <div>
            <div className="font-mono text-sm">
              engineering<span className="text-primary">.bot</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Premium domain — available for acquisition
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
          <a href="mailto:offers@engineering.bot" className="transition hover:text-foreground">
            offers@engineering.bot
          </a>
          <span className="size-1 rounded-full bg-primary/40" />
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
