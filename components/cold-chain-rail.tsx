"use client"

const STAGES = [
  { label: "Farm", temp: "32°C" },
  { label: "Packhouse", temp: "4°C" },
  { label: "IQF", temp: "−18°C" },
  { label: "Port", temp: "−18°C" },
]

export function ColdChainRail() {
  return (
    <>
      <aside
        aria-label="Cold chain hold temperature"
        className="pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-3 rounded-sm border border-kernel/40 bg-chamber/95 px-2 py-4 text-icefield shadow-xl">
          <span className="font-lot text-[10px] tracking-[0.2em] text-kernel">HOLD</span>
          <span className="font-display text-2xl leading-none text-kernel">−18°</span>
          <div className="h-24 w-px bg-gradient-to-b from-kernel via-steel to-icefield/40" />
          <ol className="space-y-3 text-center">
            {STAGES.map((stage) => (
              <li key={stage.label} className="font-lot text-[9px] uppercase tracking-wider text-icefield/80">
                <span className="block text-kernel">{stage.temp}</span>
                {stage.label}
              </li>
            ))}
          </ol>
        </div>
      </aside>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-kernel/30 bg-chamber px-3 py-1.5 lg:hidden pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between gap-2 font-lot text-[10px] uppercase tracking-wider text-icefield">
          <span className="text-kernel">HOLD −18°C</span>
          <span className="truncate text-icefield/80">Farm → Packhouse → IQF → Port</span>
        </div>
      </div>
    </>
  )
}
